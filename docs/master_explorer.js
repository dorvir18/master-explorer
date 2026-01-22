/*!
 * MASTER EXPLORER · Core Game Engine (GitHub + Tilda friendly)
 * Expects existing DOM (see index.html in /docs):
 *  - #mx-progress-fill, #mx-progress-x, #mx-progress-total
 *  - #mx-mission-num, #mx-block-num, #mx-mission-title, #mx-mission-desc, #mx-mission-icon (optional)
 *  - #mx-interactive, #mx-prev, #mx-next
 *  - #mx-stars, #mx-sound-toggle
 *  - #mx-toast (optional), #mx-toast-text (optional)
 *
 * Missions data (external file):
 *   window.MISSIONS = [ {id, block, type, icon, title, variants:[...]} , ... ]
 * If window.MISSIONS is absent/empty, engine will create 50 safe placeholder missions.
 */
(function () {
  'use strict';

  const MX = (window.MX = window.MX || {});

  // =========================================================
  // Helpers: escaping (avoid injecting)
  // =========================================================
  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }
  function escapeAttr(str) {
    return String(str).replace(/"/g, '&quot;').replace(/</g, '&lt;');
  }

  // Inner prompt renderer: by default we DO NOT repeat prompt inside interactives
  // because the card already shows variant.prompt in #mx-mission-desc.
  // Set variant.ui.showInnerPrompt = true to show it inside the interactive.
  function innerPrompt(variant) {
    // By default we do NOT repeat the prompt inside the interactive area,
    // because the card already shows it in #mx-mission-desc.
    // If you explicitly want it, set variant.ui.showInnerPrompt = true.
    if (variant && variant.ui && variant.ui.showInnerPrompt) {
      return `<div class="mx-inner-prompt">${escapeHtml(variant.prompt || '')}</div>`;
    }
    return '';
  }
    return '';
  }

  // =========================================================
  // Block 4. JS Core: state + storage
  // =========================================================
  const STORAGE_KEY = 'mx_master_explorer_state';
  const STATE_VERSION = 3;

  MX.state = {
    v: STATE_VERSION,
    currentMissionId: 1,
    completed: [],
    medals: 0,
    soundOn: true
  };

  function clone(obj) {
    return JSON.parse(JSON.stringify(obj));
  }

  function migrateState(raw) {
    const s = Object.assign({}, clone(MX.state), raw || {});
    s.v = Number.isFinite(s.v) ? s.v : 0;
    s.currentMissionId = Number.isFinite(s.currentMissionId) ? s.currentMissionId : 1;
    s.completed = Array.isArray(s.completed) ? s.completed : [];
    s.medals = Number.isFinite(s.medals) ? s.medals : 0;
    s.soundOn = typeof s.soundOn === 'boolean' ? s.soundOn : true;

    if (s.v < 1) {
      if (Array.isArray(s.done) && !s.completed.length) s.completed = s.done;
    }
    if (s.v < 2) {
      s.completed = Array.from(new Set(s.completed.map(n => parseInt(n, 10)).filter(n => Number.isFinite(n))));
    }
    if (s.v < 3) {
      s.medals = Math.max(0, Math.min(999, s.medals));
    }
    s.v = STATE_VERSION;
    return s;
  }

  MX.loadState = function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return clone(MX.state);
      MX.state = migrateState(JSON.parse(raw));
      return clone(MX.state);
    } catch (_) {
      return clone(MX.state);
    }
  };

  MX.saveState = function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(MX.state));
    } catch (_) {}
  };

  MX.resetState = function resetState() {
    MX.state = clone({
      v: STATE_VERSION,
      currentMissionId: 1,
      completed: [],
      medals: 0,
      soundOn: true
    });
    MX.saveState();
  };

  // =========================================================
  // Block 6. Audio Engine (iOS friendly)
  // =========================================================
  MX.audio = (function () {
    let ctx = null;
    let unlocked = false;
    let lastPlayAt = 0;
    const MIN_INTERVAL_MS = 120;

    function ensure() {
      if (ctx) return ctx;
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return null;
      ctx = new AC();
      return ctx;
    }

    function unlock() {
      const c = ensure();
      if (!c || unlocked) return;
      try {
        const osc = c.createOscillator();
        const gain = c.createGain();
        gain.gain.value = 0.0001;
        osc.connect(gain);
        gain.connect(c.destination);
        osc.start(0);
        osc.stop(0.01);
        unlocked = true;
      } catch (_) {}
    }

    function playTone(freq, dur, type) {
      if (!MX.state.soundOn) return;
      const now = Date.now();
      if (now - lastPlayAt < MIN_INTERVAL_MS) return;
      lastPlayAt = now;

      const c = ensure();
      if (!c) return;
      if (c.state === 'suspended') c.resume().catch(() => {});

      try {
        const osc = c.createOscillator();
        const gain = c.createGain();
        osc.type = type || 'sine';
        osc.frequency.value = freq;
        gain.gain.value = 0.08;

        osc.connect(gain);
        gain.connect(c.destination);

        const t0 = c.currentTime;
        gain.gain.setValueAtTime(0.0001, t0);
        gain.gain.exponentialRampToValueAtTime(0.08, t0 + 0.01);
        gain.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);

        osc.start(t0);
        osc.stop(t0 + dur + 0.02);
      } catch (_) {}
    }

    function playSound(kind) {
      switch (kind) {
        case 'success':
          playTone(880, 0.12, 'triangle');
          setTimeout(() => playTone(1175, 0.10, 'triangle'), 80);
          break;
        case 'fail':
          playTone(220, 0.16, 'sawtooth');
          break;
        case 'step':
          playTone(520, 0.07, 'sine');
          break;
        case 'final':
          playTone(660, 0.12, 'triangle');
          setTimeout(() => playTone(880, 0.12, 'triangle'), 120);
          setTimeout(() => playTone(1320, 0.14, 'triangle'), 240);
          break;
        case 'tick':
          playTone(740, 0.03, 'square');
          break;
        default:
          playTone(440, 0.06, 'sine');
      }
    }

    function toggle() {
      MX.state.soundOn = !MX.state.soundOn;
      MX.saveState();
      return MX.state.soundOn;
    }

    return { initAudio: unlock, playSound, toggle };
  })();

  // =========================================================
  // Block 7. Feedback system (toast + pulse)
  // =========================================================
  MX.ui = (function () {
    const $ = (id) => document.getElementById(id);

    function showToast(text, type) {
      const toast = $('mx-toast');
      const toastText = $('mx-toast-text');
      if (!toast || !toastText) return;

      toastText.textContent = text || '';

      // Support both naming styles: mx-toast--show AND is-visible
      toast.classList.remove('mx-toast--success', 'mx-toast--fail', 'mx-toast--warning');
      toast.classList.remove('mx-toast--show', 'is-visible');

      if (type === 'success') toast.classList.add('mx-toast--success');
      if (type === 'fail') toast.classList.add('mx-toast--fail');
      if (type === 'warning') toast.classList.add('mx-toast--warning');

      toast.classList.add('mx-toast--show', 'is-visible');

      window.clearTimeout(showToast._t);
      showToast._t = window.setTimeout(() => {
        toast.classList.remove('mx-toast--show', 'is-visible');
      }, 1300);
    }

    function pulse(kind) {
      const card = $('mx-app');
      if (!card) return;
      const cls = kind === 'success' ? 'mx-pulse--success' : 'mx-pulse--fail';
      card.classList.remove('mx-pulse--success', 'mx-pulse--fail');
      void card.offsetWidth;
      card.classList.add(cls);
      window.setTimeout(() => card.classList.remove(cls), 450);
    }

    function setProgress(doneCount, total) {
      const fill = $('mx-progress-fill');
      const x = $('mx-progress-x');
      const tot = $('mx-progress-total');
      if (x) x.textContent = String(doneCount);
      if (tot) tot.textContent = String(total);
      if (fill) {
        const pct = total ? Math.round((doneCount / total) * 100) : 0;
        fill.style.width = Math.min(100, Math.max(0, pct)) + '%';
      }
    }

    function setMedals(medals) {
      const stars = $('mx-stars');
      if (!stars) return;
      const m = Math.max(0, Math.min(5, Number(medals) || 0));
      let s = '';
      for (let i = 0; i < 5; i++) s += i < m ? '★' : '☆';
      stars.textContent = s;
    }

    function setHeader(mission, totalMissions) {
      const num = $('mx-mission-num');
      const block = $('mx-block-num');
      const title = $('mx-mission-title');
      const desc = $('mx-mission-desc');
      if (num) num.textContent = `Mission #${mission.id}`;
      if (block) block.textContent = `Блок ${mission.block}`;
      if (title) title.textContent = mission.title || `Миссия #${mission.id}`;
      if (desc) desc.textContent = mission.prompt || '';

      const done = new Set(MX.state.completed).size;
      setProgress(done, totalMissions);
      setMedals(MX.state.medals);
    }

    function setSoundButton(on) {
      const btn = $('mx-sound-toggle');
      if (!btn) return;
      btn.textContent = on ? 'Sound' : 'Sound Off';
      btn.setAttribute('aria-pressed', on ? 'true' : 'false');
    }

    return {
      showToast,
      pulseSuccess: () => pulse('success'),
      pulseFail: () => pulse('fail'),
      setProgress,
      setMedals,
      setHeader,
      setSoundButton
    };
  })();

  // =========================================================
  // Missions data (external or fallback)
  // =========================================================
  function makeFallbackMissions() {
    const missions = [];
    for (let i = 1; i <= 50; i++) {
      const block = Math.ceil(i / 5);
      const type = (i === 50) ? 'final' : 'creative';
      missions.push({
        id: i,
        block,
        type,
        icon: 'star',
        title: `Миссия #${i}`,
        variants: [{
          variantId: 1,
          prompt: (i === 50)
            ? 'ФИНАЛ! Пройди все миссии и получи сертификат.'
            : `Заглушка миссии #${i}. (Контент подключим позже.)`,
          choices: {},
          answer: { done: true },
          ui: { enableInput: false }
        }]
      });
    }
    return missions;
  }

  function getMissions() {
    const m = window.MISSIONS;
    if (Array.isArray(m) && m.length) return m;
    return makeFallbackMissions();
  }

  // =========================================================
  // Block 5. Router + mission engine + interactives
  // =========================================================
  MX.router = (function () {
    let missions = [];
    let missionById = new Map();

    function rebuildIndex() {
      missionById = new Map(missions.map(m => [m.id, m]));
    }

    function getMissionById(id) {
      return missionById.get(id) || null;
    }

    function pickVariant(mission) {
      const v = Array.isArray(mission.variants) ? mission.variants : [];
      if (!v.length) return null;
      return v[Math.floor(Math.random() * v.length)];
    }

    function goTo(id) {
      const mission = getMissionById(id);
      if (!mission) return;
      MX.state.currentMissionId = id;
      MX.saveState();
      render();
      MX.audio.playSound('step');
    }

    function goNext() {
      const id = MX.state.currentMissionId;
      const next = Math.min(missions.length, id + 1);
      goTo(next);
    }

    function goPrev() {
      const id = MX.state.currentMissionId;
      const prev = Math.max(1, id - 1);
      goTo(prev);
    }

    function isCompleted(id) {
      return new Set(MX.state.completed).has(id);
    }

    function completeMission(id) {
      const done = new Set(MX.state.completed);
      done.add(id);
      MX.state.completed = Array.from(done).sort((a, b) => a - b);

      // medals: +1 each 5 missions completed (excluding final), cap 5
      const completedCount = MX.state.completed.filter(x => x >= 1 && x <= 49).length;
      const newMedals = Math.min(5, Math.floor(completedCount / 5));
      if (newMedals > MX.state.medals) {
        MX.state.medals = newMedals;
        MX.ui.showToast('Новая медаль!', 'success');
      }

      MX.saveState();
      MX.ui.pulseSuccess();
      MX.audio.playSound('success');

      // Manual-next UX: after completing, guide the player to press "Далее"
      const nextBtn = document.getElementById('mx-next');
      if (nextBtn && !nextBtn.disabled) {
        nextBtn.classList.add('mx-next--ready');
        // (Do not auto-advance. Player must press Next.)
      }

      const current = getMissionById(MX.state.currentMissionId) || { id: id, block: 0 };
      MX.ui.setHeader(current, missions.length);
    }

    function mountInteractive(html) {
      const host = document.getElementById('mx-interactive');
      if (!host) return null;
      host.innerHTML = html || '';
      return host;
    }

    // -------- Tap Select (1 of 3-4) --------
    function renderTap(mission, variant) {
      const choices = Array.isArray(variant?.choices) ? variant.choices : [];
      const correctIndex = variant?.answer?.correctIndex;
      const noWrong = !!variant?.ui?.noWrongAnswer;

      const btns = choices.map((c, i) =>
        `<button class="mx-choice" data-idx="${i}">${escapeHtml(String(c))}</button>`
      ).join('');

      const host = mountInteractive(`
        <div class="mx-interactive">
          ${innerPrompt(variant)}
          <div class="mx-choices mx-choices--grid">${btns}</div>
        </div>
      `);
      if (!host) return;

      host.querySelectorAll('.mx-choice').forEach(btn => {
        btn.addEventListener('click', () => {
          const idx = parseInt(btn.getAttribute('data-idx') || '0', 10);

          // Visual: mark selection and (when correct is known) show correctness.
          const allBtns = Array.from(host.querySelectorAll('.mx-choice'));
          const lockAll = () => allBtns.forEach(b => { b.disabled = true; b.classList.add('mx-choice--locked'); });

          // No-wrong-answer missions (any choice is ok)
          if (noWrong) {
            allBtns.forEach(b => b.classList.remove('mx-choice--selected'));
            btn.classList.add('mx-choice--selected');
            lockAll();
            MX.ui.showToast(`Выбрано: ${btn.textContent}`, 'success');
            completeMission(mission.id);
            return;
          }

          // Missions with a correct answer
          if (idx === correctIndex) {
            btn.classList.add('mx-choice--correct', 'mx-choice--selected');
            lockAll();
            MX.ui.showToast('Верно! Нажми «Далее».', 'success');
            completeMission(mission.id);
          } else {
            btn.classList.add('mx-choice--wrong');
            MX.ui.pulseFail();
            MX.audio.playSound('fail');
            MX.ui.showToast('Почти! Попробуй ещё раз.', 'fail');
            // allow retry
            window.setTimeout(() => btn.classList.remove('mx-choice--wrong'), 550);
          }

        });
      });
    }

    // -------- Multi Select --------
    function renderMulti(mission, variant) {
      const choices = Array.isArray(variant?.choices) ? variant.choices : [];
      const correct = new Set((variant?.answer?.correctIndexes || []).map(n => Number(n)));
      const selected = new Set();

      const items = choices.map((c, i) =>
        `<button class="mx-choice mx-choice--toggle" data-idx="${i}" aria-pressed="false">${escapeHtml(String(c))}</button>`
      ).join('');

      const host = mountInteractive(`
        <div class="mx-interactive">
          ${innerPrompt(variant)}
          <div class="mx-choices mx-choices--grid">${items}</div>
          <button class="mx-action" id="mx-multi-check">Готово</button>
        </div>
      `);
      if (!host) return;

      host.querySelectorAll('.mx-choice--toggle').forEach(btn => {
        btn.addEventListener('click', () => {
          const idx = parseInt(btn.getAttribute('data-idx') || '0', 10);
          if (selected.has(idx)) selected.delete(idx); else selected.add(idx);
          btn.setAttribute('aria-pressed', selected.has(idx) ? 'true' : 'false');
          btn.classList.toggle('mx-choice--selected', selected.has(idx));
        });
      });

      host.querySelector('#mx-multi-check')?.addEventListener('click', () => {
        let ok = true;
        for (const i of correct) if (!selected.has(i)) ok = false;
        for (const i of selected) if (!correct.has(i)) ok = false;

        if (ok) {
          MX.ui.showToast('Верно!', 'success');
          completeMission(mission.id);
          // manual next: no auto-advance
        } else {
          MX.ui.showToast('Почти! Попробуй ещё.', 'fail');
          MX.ui.pulseFail();
          MX.audio.playSound('fail');
        }
      });
    }

    // -------- Timer Challenge --------
    function renderTimer(mission, variant) {
      const seconds = Math.max(3, Math.min(15, Number(variant?.choices?.seconds) || 5));
      const tickSound = !!variant?.ui?.tickSound;

      const host = mountInteractive(`
        <div class="mx-interactive">
          ${innerPrompt(variant)}
          <div class="mx-timer">
            <div class="mx-timerbar"><div class="mx-timerfill" id="mx-timerfill"></div></div>
            <div class="mx-timertext" id="mx-timertext">${seconds}</div>
          </div>
          <div class="mx-timer-actions">
            <button class="mx-action" id="mx-timer-start">Старт</button>
            <button class="mx-action mx-action--ghost" id="mx-timer-stop" disabled>Стоп</button>
          </div>
        </div>
      `);
      if (!host) return;

      const fill = host.querySelector('#mx-timerfill');
      const text = host.querySelector('#mx-timertext');
      const startBtn = host.querySelector('#mx-timer-start');
      const stopBtn = host.querySelector('#mx-timer-stop');

      let t = seconds;
      let interval = null;

      function update() {
        if (text) text.textContent = String(t);
        if (fill) {
          const pct = ((seconds - t) / seconds) * 100;
          fill.style.width = Math.min(100, Math.max(0, pct)) + '%';
        }
      }
      update();

      function stop() {
        if (interval) window.clearInterval(interval);
        interval = null;
        if (startBtn) startBtn.disabled = false;
        if (stopBtn) stopBtn.disabled = true;
      }

      function finish() {
        stop();
        update();
        MX.ui.showToast('Готово!', 'success');
        completeMission(mission.id);
        // manual next: no auto-advance
      }

      startBtn?.addEventListener('click', () => {
        if (interval) return;
        if (startBtn) startBtn.disabled = true;
        if (stopBtn) stopBtn.disabled = false;

        interval = window.setInterval(() => {
          t -= 1;
          if (tickSound && t > 0) MX.audio.playSound('tick');
          update();
          if (t <= 0) finish();
        }, 1000);
      });

      stopBtn?.addEventListener('click', () => {
        stop();
        MX.ui.showToast('Остановлено', 'warning');
      });
    }

    // -------- Action + Confirm --------
    function renderAction(mission, variant) {
      const cta = variant?.ui?.confirmText || 'Я сделал!';
      const host = mountInteractive(`
        <div class="mx-interactive">
          ${innerPrompt(variant)}
          <button class="mx-action" id="mx-action-confirm">${escapeHtml(cta)}</button>
        </div>
      `);
      if (!host) return;
      host.querySelector('#mx-action-confirm')?.addEventListener('click', () => {
        MX.ui.showToast('Отлично!', 'success');
        completeMission(mission.id);
        // manual next: no auto-advance
      });
    }

    // -------- Creative --------
    function renderCreative(mission, variant) {
      const enableInput = !!variant?.ui?.enableInput;
      const host = mountInteractive(`
        <div class="mx-interactive">
          ${innerPrompt(variant)}
          ${enableInput ? `<textarea class="mx-input" id="mx-creative-input" rows="3" placeholder="Хочешь написать?"></textarea>` : ``}
          <button class="mx-action" id="mx-creative-done">Готово!</button>
        </div>
      `);
      if (!host) return;

      host.querySelector('#mx-creative-done')?.addEventListener('click', () => {
        if (enableInput && variant?.ui?.saveResponse) {
          const t = host.querySelector('#mx-creative-input');
          try {
            MX.state._creative = MX.state._creative || {};
            MX.state._creative[mission.id] = String(t?.value || '').slice(0, 500);
            MX.saveState();
          } catch (_) {}
        }
        MX.ui.showToast('Супер!', 'success');
        completeMission(mission.id);
        // manual next: no auto-advance
      });
    }

    // -------- Drag & Drop (pointer events) --------
    function renderDrag(mission, variant) {
      const items = variant?.choices?.items || [];
      const zones = variant?.choices?.zones || [];
      const solutionMap = variant?.answer?.solutionMap || {};
      const checkMode = variant?.ui?.checkMode || 'button'; // 'onDrop'|'button'

      const itemsHtml = items.map(it =>
        `<div class="mx-drag-item" data-id="${escapeAttr(it.id)}">${escapeHtml(it.label || it.id)}</div>`
      ).join('');

      const zonesHtml = zones.map(z =>
        `<div class="mx-drop-zone" data-zone="${escapeAttr(z.id)}">
          <div class="mx-zone-label">${escapeHtml(z.label || z.id)}</div>
          <div class="mx-zone-slot"></div>
        </div>`
      ).join('');

      const host = mountInteractive(`
        <div class="mx-interactive">
          ${innerPrompt(variant)}
          <div class="mx-drag-grid">
            <div class="mx-drag-items" id="mx-drag-items">${itemsHtml}</div>
            <div class="mx-drop-zones" id="mx-drop-zones">${zonesHtml}</div>
          </div>
          <div class="mx-drag-actions">
            ${checkMode === 'button' ? `<button class="mx-action" id="mx-drag-check">Проверить</button>` : ``}
            <button class="mx-action mx-action--ghost" id="mx-drag-reset">Сброс</button>
          </div>
        </div>
      `);
      if (!host) return;

      const itemsWrap = host.querySelector('#mx-drag-items');
      const placement = {}; // itemId -> zoneId

      function reset() {
        Object.keys(placement).forEach(k => delete placement[k]);
        host.querySelectorAll('.mx-drag-item').forEach(el => itemsWrap?.appendChild(el));
        host.querySelectorAll('.mx-zone-slot').forEach(s => (s.innerHTML = ''));
        host.querySelectorAll('.mx-drop-zone').forEach(z => z.classList.remove('mx-zone--ok','mx-zone--bad','mx-zone--hover'));
      }

      function getZoneFromPoint(x, y) {
        const zonesEls = Array.from(host.querySelectorAll('.mx-drop-zone'));
        for (const z of zonesEls) {
          const r = z.getBoundingClientRect();
          if (x >= r.left && x <= r.right && y >= r.top && y <= r.bottom) return z;
        }
        return null;
      }

      function markZones() {
        host.querySelectorAll('.mx-drop-zone').forEach(z => {
          const zid = z.getAttribute('data-zone');
          const correctItems = Object.keys(solutionMap).filter(itemId => solutionMap[itemId] === zid);
          const placedItems = Object.keys(placement).filter(itemId => placement[itemId] === zid);
          const ok = correctItems.length === placedItems.length && correctItems.every(id => placedItems.includes(id));
          z.classList.toggle('mx-zone--ok', ok);
          z.classList.toggle('mx-zone--bad', !ok && placedItems.length > 0);
        });
      }

      function check() {
        let ok = true;
        for (const [itemId, zoneId] of Object.entries(solutionMap)) {
          if (placement[itemId] !== zoneId) ok = false;
        }
        for (const itemId of Object.keys(placement)) {
          if (!solutionMap[itemId]) ok = false;
        }
        markZones();
        if (ok) {
          MX.ui.showToast('Верно!', 'success');
          completeMission(mission.id);
          // manual next: no auto-advance
        } else {
          MX.ui.showToast('Попробуй ещё!', 'fail');
          MX.ui.pulseFail();
          MX.audio.playSound('fail');
        }
      }

      let draggingEl = null;
      let ghost = null;

      function startDrag(el, ev) {
        draggingEl = el;
        const r = el.getBoundingClientRect();
        ghost = el.cloneNode(true);
        ghost.classList.add('mx-drag-ghost');
        ghost.style.position = 'fixed';
        ghost.style.left = r.left + 'px';
        ghost.style.top = r.top + 'px';
        ghost.style.width = r.width + 'px';
        ghost.style.pointerEvents = 'none';
        ghost.style.zIndex = '9999';
        document.body.appendChild(ghost);
        el.classList.add('mx-drag-item--dragging');
        el.setPointerCapture?.(ev.pointerId);
      }

      function moveDrag(ev) {
        if (!ghost) return;
        ghost.style.left = (ev.clientX - ghost.offsetWidth / 2) + 'px';
        ghost.style.top = (ev.clientY - ghost.offsetHeight / 2) + 'px';
        const z = getZoneFromPoint(ev.clientX, ev.clientY);
        host.querySelectorAll('.mx-drop-zone').forEach(x => x.classList.remove('mx-zone--hover'));
        if (z) z.classList.add('mx-zone--hover');
      }

      function endDrag(ev) {
        if (!draggingEl) return;
        const z = getZoneFromPoint(ev.clientX, ev.clientY);
        host.querySelectorAll('.mx-drop-zone').forEach(x => x.classList.remove('mx-zone--hover'));

        ghost?.remove();
        ghost = null;

        draggingEl.classList.remove('mx-drag-item--dragging');

        if (z) {
          const zoneId = z.getAttribute('data-zone');
          const itemId = draggingEl.getAttribute('data-id');
          placement[itemId] = zoneId;
          z.querySelector('.mx-zone-slot')?.appendChild(draggingEl);
          if (checkMode === 'onDrop') check();
        } else {
          itemsWrap?.appendChild(draggingEl);
        }
        draggingEl = null;
      }

      host.querySelectorAll('.mx-drag-item').forEach(el => {
        el.addEventListener('pointerdown', (ev) => startDrag(el, ev));
        el.addEventListener('pointermove', moveDrag);
        el.addEventListener('pointerup', endDrag);
        el.addEventListener('pointercancel', endDrag);
      });

      host.querySelector('#mx-drag-reset')?.addEventListener('click', reset);
      host.querySelector('#mx-drag-check')?.addEventListener('click', check);

      reset();
    }

    // -------- Final mission (delegates) --------
    function renderFinal(mission, variant) {
      const host = document.getElementById('mx-interactive');
      if (!host) return;
      if (window.Final && typeof window.Final.renderFinal === 'function') {
        window.Final.renderFinal(host);
        return;
      }
      host.innerHTML = `
        <div class="mx-interactive">
          ${innerPrompt(variant)}
          <button class="mx-action" id="mx-final-cta">Получить статус!</button>
        </div>
      `;
      host.querySelector('#mx-final-cta')?.addEventListener('click', () => {
        completeMission(mission.id);
        MX.ui.showToast('Ура!', 'success');
      });
    }

    const plugins = {
      tap: renderTap,
      multi: renderMulti,
      timer: renderTimer,
      action: renderAction,
      creative: renderCreative,
      drag: renderDrag,
      final: renderFinal
    };

    function renderMission(mission, variant) {
      MX.ui.setHeader({
        id: mission.id,
        block: mission.block,
        title: mission.title || `Миссия #${mission.id}`,
        prompt: variant?.prompt || ''
      }, missions.length);

      const prevBtn = document.getElementById('mx-prev');
      const nextBtn = document.getElementById('mx-next');
      if (prevBtn) prevBtn.disabled = mission.id <= 1;
      if (nextBtn) nextBtn.disabled = mission.id >= missions.length;

      (plugins[mission.type] || plugins.creative)(mission, variant);
    }

    function render() {
      const id = MX.state.currentMissionId;
      const mission = getMissionById(id) || missions[0];
      if (!mission) return;
      const variant = pickVariant(mission) || (mission.variants ? mission.variants[0] : null);
      renderMission(mission, variant);
    }

    function init() {
      missions = getMissions().slice().sort((a, b) => (a.id || 0) - (b.id || 0));
      rebuildIndex();
      if (!getMissionById(MX.state.currentMissionId)) MX.state.currentMissionId = missions[0]?.id || 1;
      render();
    }

    return { init, getMissionById, pickVariant, renderMission, goNext, goPrev, goTo, completeMission, isCompleted };
  })();

  // =========================================================
  // Block 16. Final Mission + Confetti
  // =========================================================
  window.Final = (function () {
    const FINAL_ID = 50;
    const CONFETTI_MS = 2400;

    let canvas, ctx, raf, particles;

    function allDone() {
      const missions = getMissions().map(m => m.id);
      const required = missions.filter(id => id !== FINAL_ID);
      const done = new Set(MX.state.completed);
      return required.every(id => done.has(id));
    }

    function prefersReducedMotion() {
      try { return window.matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (_) { return false; }
    }

    function ensureCanvas() {
      if (canvas) return;
      canvas = document.createElement('canvas');
      canvas.style.position = 'fixed';
      canvas.style.inset = '0';
      canvas.style.pointerEvents = 'none';
      canvas.style.zIndex = '9999';
      document.body.appendChild(canvas);
      ctx = canvas.getContext('2d');
      resize();
      window.addEventListener('resize', resize);
    }

    function resize() {
      if (!canvas) return;
      const d = Math.max(1, window.devicePixelRatio || 1);
      canvas.width = Math.floor(window.innerWidth * d);
      canvas.height = Math.floor(window.innerHeight * d);
      ctx.setTransform(d, 0, 0, d, 0, 0);
    }

    function rand(min, max) { return Math.random() * (max - min) + min; }

    function spawn(n = 120) {
      particles = new Array(n).fill(0).map(() => ({
        x: rand(0, window.innerWidth),
        y: rand(-80, 0),
        vx: rand(-1.4, 1.4),
        vy: rand(2.8, 6.0),
        r: rand(0, Math.PI * 2),
        vr: rand(-0.14, 0.14),
        s: rand(6, 12),
        a: rand(0.9, 1.2),
        c: ['#4A90D9', '#4CAF50', '#FF9800', '#F44336', '#9C27B0'][Math.floor(rand(0, 5))]
      }));
    }

    function step() {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy; p.r += p.vr; p.a -= 0.012;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.r);
        ctx.globalAlpha = Math.max(0, Math.min(1, p.a));
        ctx.fillStyle = p.c;
        ctx.fillRect(-p.s / 2, -p.s / 2, p.s, p.s * 0.65);
        ctx.restore();
      });
      particles = particles.filter(p => p.a > 0 && p.y < window.innerHeight + 40);
      if (particles.length) raf = requestAnimationFrame(step);
    }

    function startConfetti() {
      if (prefersReducedMotion()) return;
      ensureCanvas();
      spawn();
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(step);
      setTimeout(stopConfetti, CONFETTI_MS);
    }

    function stopConfetti() {
      if (raf) cancelAnimationFrame(raf);
      raf = null;
      if (ctx) ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    }

    function renderFinal(containerEl) {
      const ok = allDone();
      containerEl.innerHTML = `
        <div class="mx-interactive">
          <div class="mx-note">${ok ? 'Ты прошёл(а) все миссии! Нажми кнопку и получи сертификат.' : 'Сначала пройди все миссии, чтобы получить сертификат.'}</div>
          <button class="mx-action" id="mx-final-cta" ${ok ? '' : 'disabled'}>Получить статус!</button>
        </div>
      `;
      containerEl.querySelector('#mx-final-cta')?.addEventListener('click', () => {
        if (!allDone()) {
          MX.ui.showToast('Пройди все миссии!', 'warning');
          MX.audio.playSound('fail');
          return;
        }
        MX.audio.playSound('final');
        MX.ui.showToast('Ура! Ты MASTER EXPLORER!', 'success');
        startConfetti();
        setTimeout(() => window.Certificate?.open?.(), 700);
      });
    }

    return { allDone, renderFinal, startConfetti, stopConfetti };
  })();

  // =========================================================
  // Block 17. Certificate (canvas → PNG)
  // =========================================================
  window.Certificate = (function () {
    const CHILD_NAME = 'Максим';
    const TITLE = 'MASTER EXPLORER';
    const SUBTITLE = 'СЕРТИФИКАТ';
    const FOOTER = 'Ты прошёл(а) миссии и стал(а) настоящим исследователем!';
    const COLORS = {
      primary: '#4A90D9',
      accent: '#9C27B0',
      warning: '#FF9800',
      bg: '#FFF8E1',
      ink: '#1f1f1f'
    };

    let canvas, ctx, pngUrl;

    function fmtDateRU(d) {
      try { return d.toLocaleDateString('ru-RU', { day: '2-digit', month: 'long', year: 'numeric' }); }
      catch (_) { return `${d.getDate()}.${d.getMonth() + 1}.${d.getFullYear()}`; }
    }

    function roundedRect(c, x, y, w, h, r) {
      const rr = Math.min(r, w / 2, h / 2);
      c.beginPath();
      c.moveTo(x + rr, y);
      c.arcTo(x + w, y, x + w, y + h, rr);
      c.arcTo(x + w, y + h, x, y + h, rr);
      c.arcTo(x, y + h, x, y, rr);
      c.arcTo(x, y, x + w, y, rr);
      c.closePath();
    }

    function fitText(c, txt, x, y, maxW, basePx, weight) {
      let px = basePx;
      c.font = `${weight} ${px}px system-ui,-apple-system,Segoe UI,Roboto,Arial`;
      while (maxW && c.measureText(txt).width > maxW && px > 18) {
        px -= 2;
        c.font = `${weight} ${px}px system-ui,-apple-system,Segoe UI,Roboto,Arial`;
      }
      c.fillText(txt, x, y);
    }

    function setupSize(cnv) {
      const maxW = Math.min(window.innerWidth - 28, 780);
      const w = Math.max(320, maxW);
      const h = Math.round(w * 0.72);
      cnv.style.width = w + 'px';
      cnv.style.height = h + 'px';
      const d = Math.max(1, window.devicePixelRatio || 1);
      cnv.width = Math.floor(w * d);
      cnv.height = Math.floor(h * d);
      const c = cnv.getContext('2d');
      c.setTransform(d, 0, 0, d, 0, 0);
      return { w, h, c };
    }

    function draw() {
      if (!canvas || !ctx) return;
      const w = parseFloat(canvas.style.width);
      const h = parseFloat(canvas.style.height);

      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = COLORS.bg;
      ctx.fillRect(0, 0, w, h);

      ctx.fillStyle = '#fff';
      roundedRect(ctx, 14, 14, w - 28, h - 28, 22);
      ctx.fill();

      ctx.strokeStyle = COLORS.primary;
      ctx.lineWidth = 4;
      roundedRect(ctx, 18, 18, w - 36, h - 36, 20);
      ctx.stroke();

      ctx.fillStyle = COLORS.accent;
      roundedRect(ctx, 70, 44, w - 140, 56, 18);
      ctx.fill();

      ctx.fillStyle = '#fff';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.font = '800 22px system-ui,-apple-system,Segoe UI,Roboto,Arial';
      ctx.fillText(SUBTITLE, w / 2, 72);

      ctx.fillStyle = COLORS.ink;
      ctx.textBaseline = 'alphabetic';
      ctx.textAlign = 'center';
      fitText(ctx, TITLE, w / 2, 175, w - 120, 48, 900);

      ctx.fillStyle = 'rgba(74,144,217,0.10)';
      roundedRect(ctx, 120, 210, w - 240, 86, 18);
      ctx.fill();

      ctx.fillStyle = COLORS.ink;
      ctx.font = '600 18px system-ui,-apple-system,Segoe UI,Roboto,Arial';
      ctx.fillText('Награждается', w / 2, 240);

      ctx.font = '900 40px system-ui,-apple-system,Segoe UI,Roboto,Arial';
      fitText(ctx, CHILD_NAME, w / 2, 283, w - 280, 40, 900);

      ctx.fillStyle = COLORS.ink;
      ctx.font = '500 18px system-ui,-apple-system,Segoe UI,Roboto,Arial';
      const done = new Set(MX.state.completed).size;
      ctx.fillText(FOOTER, w / 2, 340);

      ctx.fillStyle = 'rgba(0,0,0,0.65)';
      ctx.font = '600 16px system-ui,-apple-system,Segoe UI,Roboto,Arial';
      ctx.fillText(`Прогресс: ${Math.min(50, done)}/50`, w / 2, 372);

      const medals = Math.max(0, Math.min(5, Number(MX.state.medals) || 0));
      const startX = w / 2 - 80;
      const y = 420;
      for (let i = 0; i < 5; i++) {
        ctx.beginPath();
        ctx.arc(startX + i * 40, y, 14, 0, Math.PI * 2);
        ctx.fillStyle = i < medals ? COLORS.warning : 'rgba(0,0,0,0.10)';
        ctx.fill();
      }

      ctx.textAlign = 'left';
      ctx.fillStyle = 'rgba(0,0,0,0.55)';
      ctx.font = '500 14px system-ui,-apple-system,Segoe UI,Roboto,Arial';
      ctx.fillText(fmtDateRU(new Date()), 60, h - 68);

      ctx.textAlign = 'right';
      ctx.strokeStyle = 'rgba(0,0,0,0.18)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(w - 260, h - 72);
      ctx.lineTo(w - 60, h - 72);
      ctx.stroke();
      ctx.fillStyle = 'rgba(0,0,0,0.55)';
      ctx.fillText('Подпись', w - 60, h - 50);
    }

    function generatePNG() {
      if (!canvas) return null;
      pngUrl = canvas.toDataURL('image/png');
      return pngUrl;
    }

    function download() {
      const url = pngUrl || generatePNG();
      if (!url) return;
      const a = document.createElement('a');
      a.href = url;
      a.download = 'master_explorer_certificate.png';
      document.body.appendChild(a);
      a.click();
      a.remove();
      MX.audio.playSound('success');
      MX.ui.showToast('Сертификат сохранён!', 'success');
    }

    function render(containerEl) {
      containerEl.innerHTML = `
        <div class="mx-interactive">
          <div class="mx-note">Твой сертификат готов!</div>
          <div style="display:flex;flex-direction:column;align-items:center;gap:12px;">
            <canvas id="mx-cert-canvas" style="border-radius:16px;box-shadow:0 10px 28px rgba(0,0,0,0.12);"></canvas>
            <button class="mx-action" id="mx-cert-save">Сохранить</button>
          </div>
        </div>
      `;
      canvas = containerEl.querySelector('#mx-cert-canvas');
      const info = setupSize(canvas);
      ctx = info.c;
      draw();
      generatePNG();

      containerEl.querySelector('#mx-cert-save')?.addEventListener('click', download);

      const onResize = () => {
        if (!canvas) return;
        const info2 = setupSize(canvas);
        ctx = info2.c;
        draw();
        generatePNG();
      };
      window.addEventListener('resize', onResize, { passive: true });
      containerEl._certCleanup = () => window.removeEventListener('resize', onResize);
    }

    function open() {
      const host = document.getElementById('mx-interactive') || document.body;
      render(host);
    }

    return { render, open, generatePNG, download };
  })();

  // =========================================================
  // Boot
  // =========================================================
  function boot() {
    MX.loadState();

    const soundBtn = document.getElementById('mx-sound-toggle');
    if (soundBtn) {
      MX.ui.setSoundButton(MX.state.soundOn);
      soundBtn.addEventListener('click', () => {
        MX.audio.initAudio();
        const on = MX.audio.toggle();
        MX.ui.setSoundButton(on);
        MX.audio.playSound(on ? 'success' : 'fail');
      });
    }

    // Unlock audio on first gesture
    const app = document.getElementById('mx-app') || document.body;
    const unlock = () => {
      MX.audio.initAudio();
      app.removeEventListener('pointerdown', unlock);
      app.removeEventListener('touchstart', unlock);
    };
    app.addEventListener('pointerdown', unlock, { passive: true });
    app.addEventListener('touchstart', unlock, { passive: true });

    // Nav
    document.getElementById('mx-prev')?.addEventListener('click', MX.router.goPrev);
    document.getElementById('mx-next')?.addEventListener('click', MX.router.goNext);

    // Lang placeholders
    document.getElementById('mx-lang-ru')?.addEventListener('click', () => MX.ui.showToast('RU', 'success'));
    document.getElementById('mx-lang-en')?.addEventListener('click', () => MX.ui.showToast('EN позже', 'warning'));

    MX.router.init();
  }

  document.addEventListener('DOMContentLoaded', boot);
})();
