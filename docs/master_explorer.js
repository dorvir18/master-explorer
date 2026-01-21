document.addEventListener("DOMContentLoaded", () => {
  "use strict";

  const APP_ID = "mx-app";
  const TOTAL = 50;

  // ---------- Render shell into #mx-app ----------
  const host = document.getElementById(APP_ID);
  if (!host) return;

  host.innerHTML = `
    <div class="mx-app">
      <div class="mx-header">
        <div class="mx-row">
          <div class="mx-title">MASTER EXPLORER</div>
          <div class="mx-tools">
            <button class="mx-toolbtn" id="mx-sound-toggle" aria-pressed="true">Sound</button>
          </div>
        </div>

        <div class="mx-progress">
          <div class="mx-progressbar" role="progressbar" aria-valuemin="0" aria-valuemax="${TOTAL}" aria-valuenow="0">
            <div class="mx-progressbar__fill" id="mx-progress-fill"></div>
          </div>
          <div class="mx-progressnum"><span id="mx-progress-x">0</span>/<span id="mx-progress-total">${TOTAL}</span></div>
        </div>
      </div>

      <div class="mx-body">
        <div class="mx-card">
          <div class="mx-mission-meta">
            <div id="mx-mission-num">Mission #1</div>
            <div id="mx-block-num">Блок 1</div>
          </div>

          <div class="mx-mission-title" id="mx-mission-title">Миссия #1</div>
          <div class="mx-mission-desc" id="mx-mission-desc">Проверяем, что роутер работает и прогресс сохраняется.</div>

          <div class="mx-interactive" id="mx-interactive">
            Здесь позже появятся интерактивы (tap/multi/timer/action/drag/etc).
          </div>

          <div class="mx-nav">
            <button class="mx-btn" id="mx-prev">← Назад</button>
            <button class="mx-btn mx-btn--primary" id="mx-next">Далее →</button>
          </div>
        </div>
      </div>

      <div class="mx-footer">
        <div class="mx-medals">🏅 Медали: <span id="mx-medals">0</span></div>
        <div style="font-weight:950;color:rgba(0,0,0,.55)">RU</div>
      </div>
    </div>

    <div class="mx-toast" id="mx-toast" aria-hidden="true">
      <div class="mx-toast__bubble" id="mx-toast-bubble">
        <span id="mx-toast-text"></span>
      </div>
    </div>
  `;

  // ---------- State + storage ----------
  const STORAGE_KEY = "mx_master_explorer_state";
  const VERSION = 1;

  const DEFAULT = { v: VERSION, currentMissionId: 1, completed: [], medals: 0, soundOn: true };

  const clamp = (n, a, b, fb) => {
    const x = parseInt(n, 10);
    if (Number.isNaN(x)) return fb;
    return Math.max(a, Math.min(b, x));
  };

  const uniq = (arr) => {
    const s = new Set();
    (Array.isArray(arr) ? arr : []).forEach(x => {
      const v = parseInt(x, 10);
      if (!Number.isNaN(v)) s.add(v);
    });
    return Array.from(s).sort((a,b)=>a-b);
  };

  function migrate(raw) {
    if (!raw || typeof raw !== "object") return { ...DEFAULT };
    let s = { ...DEFAULT, ...raw };
    s.v = VERSION;
    s.currentMissionId = clamp(s.currentMissionId, 1, TOTAL, 1);
    s.completed = uniq(s.completed).filter(x => x >= 1 && x <= TOTAL);
    s.medals = clamp(s.medals, 0, 999, 0);
    s.soundOn = (typeof s.soundOn === "boolean") ? s.soundOn : true;
    return s;
  }

  function load() {
    try {
      const str = localStorage.getItem(STORAGE_KEY);
      if (!str) return { ...DEFAULT };
      return migrate(JSON.parse(str));
    } catch { return { ...DEFAULT }; }
  }

  function save(state) {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(migrate(state))); } catch {}
  }

  // ---------- UI sync ----------
  const elX = document.getElementById("mx-progress-x");
  const elFill = document.getElementById("mx-progress-fill");
  const elNum = document.getElementById("mx-mission-num");
  const elBlock = document.getElementById("mx-block-num");
  const elTitle = document.getElementById("mx-mission-title");
  const elDesc = document.getElementById("mx-mission-desc");
  const elMedals = document.getElementById("mx-medals");
  const btnPrev = document.getElementById("mx-prev");
  const btnNext = document.getElementById("mx-next");
  const btnSound = document.getElementById("mx-sound-toggle");

  function sync(state) {
    const done = state.completed.length;
    if (elX) elX.textContent = String(done);
    if (elFill) elFill.style.width = `${Math.round((done / TOTAL) * 100)}%`;
    if (elMedals) elMedals.textContent = String(state.medals);

    if (btnSound) {
      btnSound.setAttribute("aria-pressed", state.soundOn ? "true" : "false");
      btnSound.style.opacity = state.soundOn ? "1" : "0.55";
    }
  }

  // ---------- Toast ----------
  let toastT = null;
  function toast(text) {
    const t = document.getElementById("mx-toast");
    const tx = document.getElementById("mx-toast-text");
    if (!t || !tx) return;
    tx.textContent = String(text || "");
    t.classList.add("is-visible");
    t.setAttribute("aria-hidden","false");
    if (toastT) clearTimeout(toastT);
    toastT = setTimeout(() => {
      t.classList.remove("is-visible");
      t.setAttribute("aria-hidden","true");
    }, 900);
  }

  // ---------- Missions (stub) ----------
  function blockById(id){ return Math.ceil(id / 5); }
  function renderMission(id) {
    const b = blockById(id);
    if (elNum) elNum.textContent = `Mission #${id}`;
    if (elBlock) elBlock.textContent = `Блок ${b}`;
    if (elTitle) elTitle.textContent = `Миссия #${id}`;
    if (elDesc) elDesc.textContent = `Заглушка миссии #${id}. (Скоро подключим интерактивы.)`;

    if (btnPrev) btnPrev.disabled = (id <= 1);
  }

  function complete(state) {
    const id = state.currentMissionId;
    if (!state.completed.includes(id)) {
      state.completed.push(id);
      state.medals += 1;
      save(state);
      sync(state);
      toast("Миссия выполнена!");
    } else {
      toast("Эта миссия уже выполнена.");
    }
  }

  function goTo(state, id) {
    state.currentMissionId = clamp(id, 1, TOTAL, 1);
    save(state);
    renderMission(state.currentMissionId);
  }
  function next(state) { goTo(state, state.currentMissionId + 1); }
  function prev(state) { goTo(state, state.currentMissionId - 1); }

  // ---------- Init ----------
  const state = load();
  sync(state);
  renderMission(state.currentMissionId);

  // ---------- Bind ----------
  if (btnSound) {
    btnSound.addEventListener("click", () => {
      state.soundOn = !state.soundOn;
      save(state);
      sync(state);
      toast(state.soundOn ? "Звук включён" : "Звук выключен");
    });
  }
  if (btnPrev) btnPrev.addEventListener("click", () => prev(state));
  if (btnNext) btnNext.addEventListener("click", () => {
    complete(state);
    if (state.currentMissionId < TOTAL) next(state);
    else toast("Финиш! (Дальше будет сертификат.)");
  });
});

