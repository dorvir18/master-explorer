<!-- =========================
BLOCK 1 + BLOCK 2
MASTER EXPLORER · Game Frame (HTML) + Mobile-first CSS
Вставь в один HTML-файл или в Zero Block (HTML) целиком.
JS добавим в следующих блоках.
========================= -->

<div id="mx-app" class="mx-app" aria-label="Master Explorer Game">
  <!-- Header -->
  <header class="mx-header">
    <div class="mx-header__row">
      <div class="mx-brand">
        <div class="mx-logo" aria-hidden="true">
          <!-- Inline SVG: Globe -->
          <svg viewBox="0 0 64 64" class="mx-icon mx-icon--lg" role="img" aria-label="Глобус">
            <circle cx="32" cy="32" r="26" fill="currentColor" opacity="0.15"></circle>
            <circle cx="32" cy="32" r="24" fill="none" stroke="currentColor" stroke-width="3"></circle>
            <path d="M8 32h48" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"></path>
            <path d="M32 8c8 8 12 16 12 24s-4 16-12 24c-8-8-12-16-12-24S24 16 32 8z"
                  fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round"></path>
          </svg>
        </div>
        <div class="mx-title-wrap">
          <div class="mx-title">MASTER EXPLORER</div>
          <div class="mx-subtitle">50 MISSIONS FOR MAXIM</div>
        </div>
      </div>

      <div class="mx-controls">
        <button class="mx-chip" type="button" id="mx-lang-ru" aria-pressed="true">
          RU
        </button>
        <button class="mx-chip mx-chip--ghost" type="button" id="mx-lang-en" aria-pressed="false" disabled>
          EN
        </button>

        <button class="mx-iconbtn" type="button" id="mx-sound-toggle" aria-pressed="true" aria-label="Звук: включён">
          <!-- Speaker icon -->
          <svg viewBox="0 0 24 24" class="mx-icon" aria-hidden="true">
            <path d="M4 10v4h3l4 3V7L7 10H4z" fill="currentColor"></path>
            <path d="M14.5 8.5c1.5 1.5 1.5 5.5 0 7" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
            <path d="M16.8 6.2c2.7 2.7 2.7 8.9 0 11.6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
          </svg>
        </button>
      </div>
    </div>

    <div class="mx-progress">
      <div class="mx-progress__top">
        <div class="mx-progress__label">Прогресс</div>
        <div class="mx-progress__count"><span id="mx-progress-x">0</span>/<span id="mx-progress-total">50</span></div>
      </div>
      <div class="mx-progressbar" role="progressbar" aria-valuemin="0" aria-valuemax="50" aria-valuenow="0">
        <div class="mx-progressbar__fill" id="mx-progress-fill" style="width:0%"></div>
      </div>
    </div>
  </header>

  <!-- Main -->
  <main class="mx-main">
    <section class="mx-card" aria-live="polite">
      <div class="mx-card__top">
        <div class="mx-mission-meta">
          <div class="mx-pill" id="mx-mission-num">Mission #1</div>
          <div class="mx-pill mx-pill--soft" id="mx-block-num">Блок 1</div>
        </div>

        <div class="mx-mission-icon" aria-hidden="true" id="mx-mission-icon">
          <!-- Placeholder icon (tower) -->
          <svg viewBox="0 0 64 64" class="mx-icon mx-icon--xl">
            <path d="M24 58h16v-8H24v8z" fill="currentColor" opacity="0.2"></path>
            <path d="M28 50V22h8v28" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"></path>
            <path d="M26 22h12l-2-10h-8l-2 10z" fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round"></path>
            <path d="M24 58h16" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"></path>
          </svg>
        </div>
      </div>

      <h1 class="mx-card__title" id="mx-mission-title">Найди страну по флагу</h1>
      <p class="mx-card__desc" id="mx-mission-desc">Перетащи флаг в правильную страну.</p>

      <!-- Interactive area: dynamic per mission type -->
      <div class="mx-interactive" id="mx-interactive">
        <div class="mx-placeholder">
          <div class="mx-placeholder__icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" class="mx-icon mx-icon--lg">
              <path d="M4 6h16v12H4z" fill="currentColor" opacity="0.15"></path>
              <path d="M6 10h12M6 14h8" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
            </svg>
          </div>
          <div class="mx-placeholder__text">
            <div class="mx-placeholder__title">Здесь будет интерактив</div>
            <div class="mx-placeholder__sub">Drag & Drop, выбор, таймер и другое — подключим в следующих блоках.</div>
          </div>
        </div>
      </div>

      <!-- Footer controls -->
      <div class="mx-actions">
        <button class="mx-btn mx-btn--ghost" type="button" id="mx-prev" disabled>
          <span class="mx-btn__arrow" aria-hidden="true">←</span>
          Назад
        </button>

        <button class="mx-btn mx-btn--primary" type="button" id="mx-next">
          Далее
          <span class="mx-btn__arrow" aria-hidden="true">→</span>
        </button>
      </div>
    </section>

    <!-- Medals -->
    <section class="mx-medals" aria-label="Медали">
      <div class="mx-medals__label">🏅 Медали</div>
      <div class="mx-stars" aria-hidden="true" id="mx-stars">
        <span class="mx-star mx-star--on">★</span>
        <span class="mx-star mx-star--on">★</span>
        <span class="mx-star mx-star--on">★</span>
        <span class="mx-star mx-star--off">☆</span>
        <span class="mx-star mx-star--off">☆</span>
      </div>
    </section>
  </main>

  <!-- Toast (hidden by default) -->
  <div class="mx-toast" id="mx-toast" role="status" aria-live="polite" aria-hidden="true">
    <div class="mx-toast__bubble" id="mx-toast-bubble">
      <div class="mx-toast__icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" class="mx-icon">
          <path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
      </div>
      <div class="mx-toast__text" id="mx-toast-text">Молодец!</div>
    </div>
  </div>
</div>

<style>
  /* =========================
  BLOCK 2: CSS Design System (Mobile-first)
  ========================= */

  :root{
    --primary:#4A90D9;  /* blue */
    --success:#4CAF50;  /* green */
    --warning:#FF9800;  /* orange */
    --danger:#F44336;   /* red */
    --accent:#9C27B0;   /* purple */
    --bg:#FFF8E1;       /* warm light */
    --text:#1F2937;     /* slate-800 */
    --muted:#6B7280;    /* gray-500 */
    --card:#FFFFFF;
    --shadow:0 10px 24px rgba(0,0,0,.10);
    --radius:18px;
    --radius-sm:14px;
    --ring:0 0 0 3px rgba(74,144,217,.20);
  }

  /* Tilda/iframe safe base */
  #mx-app, #mx-app *{
    box-sizing:border-box;
    -webkit-tap-highlight-color: transparent;
  }
  #mx-app{
    font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif;
    color:var(--text);
    background: linear-gradient(180deg, rgba(74,144,217,.10), rgba(255,248,225,1) 60%);
    border-radius: 0;
    padding: 16px 14px 18px;
    max-width: 520px;
    margin: 0 auto;
  }

  .mx-header{
    background: rgba(255,255,255,.70);
    backdrop-filter: blur(8px);
    border: 1px solid rgba(0,0,0,.06);
    border-radius: var(--radius);
    padding: 14px;
    box-shadow: var(--shadow);
  }

  .mx-header__row{
    display:flex;
    align-items:center;
    justify-content:space-between;
    gap: 10px;
    margin-bottom: 12px;
  }

  .mx-brand{
    display:flex;
    align-items:center;
    gap: 10px;
    min-width: 0;
  }
  .mx-logo{
    width: 44px;
    height: 44px;
    border-radius: 14px;
    display:flex;
    align-items:center;
    justify-content:center;
    background: rgba(74,144,217,.14);
    color: var(--primary);
    flex: 0 0 auto;
  }
  .mx-title-wrap{ min-width:0; }
  .mx-title{
    font-weight: 900;
    letter-spacing: .6px;
    font-size: 14px;
    line-height: 1.1;
    white-space: nowrap;
    overflow:hidden;
    text-overflow: ellipsis;
  }
  .mx-subtitle{
    font-size: 12px;
    color: var(--muted);
    font-weight: 700;
    margin-top: 2px;
    white-space: nowrap;
    overflow:hidden;
    text-overflow: ellipsis;
  }

  .mx-controls{
    display:flex;
    align-items:center;
    gap: 8px;
    flex: 0 0 auto;
  }

  .mx-chip{
    border: 1px solid rgba(0,0,0,.10);
    background: #fff;
    color: var(--text);
    padding: 8px 10px;
    border-radius: 999px;
    font-weight: 800;
    font-size: 12px;
    line-height: 1;
    box-shadow: 0 4px 10px rgba(0,0,0,.06);
  }
  .mx-chip--ghost{
    background: rgba(255,255,255,.55);
    color: var(--muted);
    box-shadow:none;
  }
  .mx-chip:disabled{
    opacity:.55;
    cursor:not-allowed;
  }

  .mx-iconbtn{
    width: 38px;
    height: 38px;
    border-radius: 999px;
    border: 1px solid rgba(0,0,0,.10);
    background: #fff;
    display:flex;
    align-items:center;
    justify-content:center;
    box-shadow: 0 4px 10px rgba(0,0,0,.06);
    color: var(--primary);
  }
  .mx-iconbtn:active{ transform: translateY(1px); }

  .mx-progress__top{
    display:flex;
    justify-content:space-between;
    align-items:baseline;
    gap: 10px;
    margin-bottom: 8px;
  }
  .mx-progress__label{
    font-size: 12px;
    color: var(--muted);
    font-weight: 800;
  }
  .mx-progress__count{
    font-size: 12px;
    font-weight: 900;
    color: var(--text);
  }

  .mx-progressbar{
    width: 100%;
    height: 12px;
    border-radius: 999px;
    background: rgba(0,0,0,.06);
    overflow:hidden;
    border: 1px solid rgba(0,0,0,.06);
  }
  .mx-progressbar__fill{
    height: 100%;
    width: 0%;
    border-radius: 999px;
    background: linear-gradient(90deg, var(--primary), var(--accent));
    transition: width .25s ease;
  }

  .mx-main{
    margin-top: 12px;
    display:flex;
    flex-direction:column;
    gap: 12px;
  }

  .mx-card{
    background: var(--card);
    border-radius: var(--radius);
    padding: 14px;
    border: 1px solid rgba(0,0,0,.06);
    box-shadow: var(--shadow);
  }

  .mx-card__top{
    display:flex;
    align-items:flex-start;
    justify-content:space-between;
    gap: 12px;
    margin-bottom: 10px;
  }

  .mx-mission-meta{
    display:flex;
    gap: 8px;
    flex-wrap:wrap;
  }
  .mx-pill{
    padding: 7px 10px;
    border-radius: 999px;
    font-size: 12px;
    font-weight: 900;
    background: rgba(74,144,217,.12);
    color: var(--primary);
    border: 1px solid rgba(74,144,217,.22);
  }
  .mx-pill--soft{
    background: rgba(156,39,176,.10);
    color: var(--accent);
    border-color: rgba(156,39,176,.20);
  }

  .mx-mission-icon{
    width: 54px;
    height: 54px;
    border-radius: 16px;
    background: rgba(255,152,0,.14);
    color: var(--warning);
    display:flex;
    align-items:center;
    justify-content:center;
    flex: 0 0 auto;
  }

  .mx-card__title{
    font-size: 18px;
    line-height: 1.15;
    margin: 6px 0 6px;
    font-weight: 950;
    letter-spacing: .2px;
  }
  .mx-card__desc{
    margin: 0 0 12px;
    color: var(--muted);
    font-size: 14px;
    line-height: 1.35;
    font-weight: 700;
  }

  .mx-interactive{
    border-radius: var(--radius-sm);
    border: 2px dashed rgba(0,0,0,.12);
    background: rgba(255,248,225,.55);
    padding: 12px;
    min-height: 160px;
  }

  .mx-placeholder{
    display:flex;
    gap: 10px;
    align-items:flex-start;
  }
  .mx-placeholder__icon{
    width: 44px;
    height: 44px;
    border-radius: 14px;
    background: rgba(156,39,176,.12);
    color: var(--accent);
    display:flex;
    align-items:center;
    justify-content:center;
    flex: 0 0 auto;
  }
  .mx-placeholder__title{
    font-weight: 950;
    margin-bottom: 4px;
  }
  .mx-placeholder__sub{
    color: var(--muted);
    font-size: 13px;
    font-weight: 700;
    line-height: 1.3;
  }

  .mx-actions{
    display:flex;
    gap: 10px;
    margin-top: 12px;
  }

  .mx-btn{
    width: 50%;
    border-radius: 16px;
    padding: 12px 12px;
    border: 1px solid rgba(0,0,0,.10);
    font-weight: 950;
    font-size: 14px;
    display:flex;
    align-items:center;
    justify-content:center;
    gap: 8px;
    cursor:pointer;
    user-select:none;
  }
  .mx-btn:active{ transform: translateY(1px); }
  .mx-btn:focus{ outline: none; box-shadow: var(--ring); }

  .mx-btn--primary{
    background: linear-gradient(180deg, rgba(74,144,217,1), rgba(74,144,217,.85));
    color: #fff;
    border-color: rgba(74,144,217,.35);
  }
  .mx-btn--ghost{
    background: rgba(255,255,255,.75);
    color: var(--text);
  }
  .mx-btn:disabled{
    opacity: .55;
    cursor:not-allowed;
  }
  .mx-btn__arrow{
    font-weight: 1000;
  }

  .mx-medals{
    background: rgba(255,255,255,.65);
    border-radius: var(--radius);
    border: 1px solid rgba(0,0,0,.06);
    box-shadow: var(--shadow);
    padding: 12px 14px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    gap: 10px;
  }
  .mx-medals__label{
    font-weight: 950;
    color: var(--text);
  }
  .mx-stars{
    display:flex;
    gap: 4px;
    font-size: 18px;
    line-height: 1;
  }
  .mx-star--on{ color: var(--warning); }
  .mx-star--off{ color: rgba(0,0,0,.20); }

  /* Icons */
  .mx-icon{
    width: 22px;
    height: 22px;
    display:block;
  }
  .mx-icon--lg{ width: 26px; height: 26px; }
  .mx-icon--xl{ width: 34px; height: 34px; }
  .mx-icon--lg, .mx-icon--xl { }
  .mx-icon{ color: currentColor; }

  /* Toast */
  .mx-toast{
    position: fixed;
    left: 0;
    right: 0;
    bottom: 18px;
    display:flex;
    justify-content:center;
    pointer-events:none;
    z-index: 9999;
    opacity: 0;
    transform: translateY(10px);
    transition: opacity .18s ease, transform .18s ease;
  }
  .mx-toast.is-visible{
    opacity: 1;
    transform: translateY(0);
  }
  .mx-toast__bubble{
    pointer-events:none;
    display:flex;
    align-items:center;
    gap: 10px;
    padding: 12px 14px;
    background: rgba(31,41,55,.92);
    color: #fff;
    border-radius: 999px;
    box-shadow: 0 10px 26px rgba(0,0,0,.20);
    border: 1px solid rgba(255,255,255,.12);
    max-width: min(520px, calc(100vw - 24px));
  }
  .mx-toast__text{
    font-weight: 900;
    font-size: 14px;
    letter-spacing: .2px;
  }

  /* Desktop polish */
  @media (min-width: 640px){
    #mx-app{ padding: 18px 18px 20px; }
    .mx-card__title{ font-size: 20px; }
    .mx-card{ padding: 16px; }
  }

  /* Reduce motion support */
  @media (prefers-reduced-motion: reduce){
    *{ transition: none !important; animation: none !important; }
  }
</style>
<!-- =========================
BLOCK 3: Inline SVG Icon Library + renderIcon()
Добавь этот блок ПОСЛЕ блоков 1–2 (обычно внизу страницы перед </body>).
Пока без роутера/состояния — только библиотека и безопасный рендер.
========================= -->

<script>
document.addEventListener('DOMContentLoaded', () => {
  "use strict";

  // =========================
  // MX Icons Library
  // =========================
  const MX_ICONS = {
    globe: `
      <svg viewBox="0 0 64 64" class="mx-icon mx-icon--xl" role="img" aria-label="Глобус">
        <circle cx="32" cy="32" r="26" fill="currentColor" opacity="0.15"></circle>
        <circle cx="32" cy="32" r="24" fill="none" stroke="currentColor" stroke-width="3"></circle>
        <path d="M8 32h48" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"></path>
        <path d="M32 8c8 8 12 16 12 24s-4 16-12 24c-8-8-12-16-12-24S24 16 32 8z"
              fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round"></path>
      </svg>
    `,

    plane: `
      <svg viewBox="0 0 64 64" class="mx-icon mx-icon--xl" role="img" aria-label="Самолёт">
        <path d="M6 34l52-14-18 18 6 16-10-6-10 8 2-12-10-10z"
              fill="currentColor" opacity="0.18"></path>
        <path d="M6 34l52-14-18 18 6 16-10-6-10 8 2-12-10-10z"
              fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round"></path>
        <path d="M40 38L24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"></path>
      </svg>
    `,

    flag: `
      <svg viewBox="0 0 64 64" class="mx-icon mx-icon--xl" role="img" aria-label="Флаг">
        <path d="M16 56V10" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"></path>
        <path d="M18 12c10-6 18 6 28 0v22c-10 6-18-6-28 0V12z"
              fill="currentColor" opacity="0.18"></path>
        <path d="M18 12c10-6 18 6 28 0v22c-10 6-18-6-28 0V12z"
              fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round"></path>
      </svg>
    `,

    star: `
      <svg viewBox="0 0 64 64" class="mx-icon mx-icon--xl" role="img" aria-label="Звезда">
        <path d="M32 8l7 16 17 2-13 12 4 17-15-8-15 8 4-17L8 26l17-2 7-16z"
              fill="currentColor" opacity="0.20"></path>
        <path d="M32 8l7 16 17 2-13 12 4 17-15-8-15 8 4-17L8 26l17-2 7-16z"
              fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round"></path>
      </svg>
    `,

    heart: `
      <svg viewBox="0 0 64 64" class="mx-icon mx-icon--xl" role="img" aria-label="Сердце">
        <path d="M32 54S10 40 10 24c0-6 4-12 12-12 5 0 8 3 10 6 2-3 5-6 10-6 8 0 12 6 12 12 0 16-22 30-22 30z"
              fill="currentColor" opacity="0.18"></path>
        <path d="M32 54S10 40 10 24c0-6 4-12 12-12 5 0 8 3 10 6 2-3 5-6 10-6 8 0 12 6 12 12 0 16-22 30-22 30z"
              fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round"></path>
      </svg>
    `,

    medal: `
      <svg viewBox="0 0 64 64" class="mx-icon mx-icon--xl" role="img" aria-label="Медаль">
        <path d="M22 8h8l2 10-6 6-8-10 4-6z" fill="currentColor" opacity="0.18"></path>
        <path d="M34 8h8l4 6-8 10-6-6 2-10z" fill="currentColor" opacity="0.18"></path>
        <circle cx="32" cy="40" r="14" fill="currentColor" opacity="0.16"></circle>
        <circle cx="32" cy="40" r="12" fill="none" stroke="currentColor" stroke-width="3"></circle>
        <path d="M32 32l2 5 6 .5-4.5 3.5 1.5 6-5-3-5 3 1.5-6L24 37.5l6-.5 2-5z"
              fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round"></path>
        <path d="M22 8h8l2 10-6 6-8-10 4-6zM34 8h8l4 6-8 10-6-6 2-10z"
              fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round"></path>
      </svg>
    `,

    tower: `
      <svg viewBox="0 0 64 64" class="mx-icon mx-icon--xl" role="img" aria-label="Достопримечательность">
        <path d="M24 58h16v-8H24v8z" fill="currentColor" opacity="0.2"></path>
        <path d="M28 50V22h8v28" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"></path>
        <path d="M26 22h12l-2-10h-8l-2 10z" fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round"></path>
        <path d="M24 58h16" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"></path>
      </svg>
    `,

    suitcase: `
      <svg viewBox="0 0 64 64" class="mx-icon mx-icon--xl" role="img" aria-label="Чемодан">
        <rect x="16" y="18" width="32" height="38" rx="8" fill="currentColor" opacity="0.16"></rect>
        <rect x="18" y="20" width="28" height="34" rx="7" fill="none" stroke="currentColor" stroke-width="3"></rect>
        <path d="M26 18v-4c0-3 2-6 6-6s6 3 6 6v4"
              fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"></path>
        <path d="M32 20v34" fill="none" stroke="currentColor" stroke-width="3" opacity="0.5"></path>
      </svg>
    `,

    book: `
      <svg viewBox="0 0 64 64" class="mx-icon mx-icon--xl" role="img" aria-label="Книга">
        <path d="M14 14h22c5 0 8 3 8 8v32H22c-5 0-8-3-8-8V14z" fill="currentColor" opacity="0.16"></path>
        <path d="M50 14H36c-5 0-8 3-8 8v32h22V22c0-5-3-8-8-8z"
              fill="currentColor" opacity="0.10"></path>
        <path d="M14 14h22c5 0 8 3 8 8v32H22c-5 0-8-3-8-8V14z"
              fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round"></path>
        <path d="M50 14H36c-5 0-8 3-8 8v32h22V22c0-5-3-8-8-8z"
              fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round"></path>
      </svg>
    `,

    school: `
      <svg viewBox="0 0 64 64" class="mx-icon mx-icon--xl" role="img" aria-label="Школа">
        <path d="M12 28l20-12 20 12v24H12V28z" fill="currentColor" opacity="0.16"></path>
        <path d="M12 28l20-12 20 12v24H12V28z" fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round"></path>
        <path d="M26 52V36h12v16" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"></path>
        <path d="M32 16v-8" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"></path>
        <circle cx="32" cy="8" r="2.5" fill="currentColor"></circle>
      </svg>
    `,

    shop: `
      <svg viewBox="0 0 64 64" class="mx-icon mx-icon--xl" role="img" aria-label="Магазин">
        <path d="M12 26l6-14h28l6 14H12z" fill="currentColor" opacity="0.16"></path>
        <path d="M16 26v28h32V26" fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round"></path>
        <path d="M12 26l6-14h28l6 14H12z" fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round"></path>
        <path d="M26 54V40h12v14" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"></path>
      </svg>
    `,

    smile: `
      <svg viewBox="0 0 64 64" class="mx-icon mx-icon--xl" role="img" aria-label="Эмоции">
        <circle cx="32" cy="32" r="22" fill="currentColor" opacity="0.14"></circle>
        <circle cx="32" cy="32" r="20" fill="none" stroke="currentColor" stroke-width="3"></circle>
        <circle cx="24" cy="28" r="2.5" fill="currentColor"></circle>
        <circle cx="40" cy="28" r="2.5" fill="currentColor"></circle>
        <path d="M22 38c3 4 7 6 10 6s7-2 10-6" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"></path>
      </svg>
    `,

    animal: `
      <svg viewBox="0 0 64 64" class="mx-icon mx-icon--xl" role="img" aria-label="Животное">
        <path d="M20 30c-6-2-8-10-3-14 4-3 9 1 10 6" fill="currentColor" opacity="0.16"></path>
        <path d="M44 30c6-2 8-10 3-14-4-3-9 1-10 6" fill="currentColor" opacity="0.16"></path>
        <path d="M20 30c-6-2-8-10-3-14 4-3 9 1 10 6M44 30c6-2 8-10 3-14-4-3-9 1-10 6"
              fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round"></path>
        <path d="M18 40c0-10 6-18 14-18s14 8 14 18c0 10-6 16-14 16s-14-6-14-16z"
              fill="currentColor" opacity="0.12"></path>
        <path d="M18 40c0-10 6-18 14-18s14 8 14 18c0 10-6 16-14 16s-14-6-14-16z"
              fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round"></path>
        <path d="M28 40c2 2 6 2 8 0" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round"></path>
      </svg>
    `,

    puzzle: `
      <svg viewBox="0 0 64 64" class="mx-icon mx-icon--xl" role="img" aria-label="Головоломка">
        <path d="M22 16h12c0 4 6 4 6 0h10v14c-4 0-4 6 0 6v12H36c0-4-6-4-6 0H22V36c4 0 4-6 0-6V16z"
              fill="currentColor" opacity="0.14"></path>
        <path d="M22 16h12c0 4 6 4 6 0h10v14c-4 0-4 6 0 6v12H36c0-4-6-4-6 0H22V36c4 0 4-6 0-6V16z"
              fill="none" stroke="currentColor" stroke-width="3" stroke-linejoin="round"></path>
      </svg>
    `
  };

  // =========================
  // Safe render helper
  // =========================
  function renderIcon(iconId, opts = {}) {
    const {
      size = "xl",      // "lg" | "xl"
      label = null      // override aria-label if needed
    } = opts;

    const raw = MX_ICONS[iconId] || MX_ICONS.tower;

    // Ensure size class is applied (override if caller wants)
    const sizeClass = size === "lg" ? "mx-icon--lg" : "mx-icon--xl";
    const withSize = raw
      .replace(/class="mx-icon[^"]*"/, (m) => {
        // remove any previous size class and apply new
        const cleaned = m.replace(/\bmx-icon--(lg|xl)\b/g, "").replace(/"\s*$/, "");
        return `${cleaned} ${sizeClass}"`;
      });

    if (!label) return withSize;

    // Replace aria-label when label provided (only if exists)
    return withSize.replace(/aria-label="[^"]*"/, `aria-label="${escapeHtml(label)}"`);
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  // =========================
  // Demo hook (temporary)
  // =========================
  const iconHost = document.getElementById('mx-mission-icon');
  if (iconHost) {
    iconHost.innerHTML = renderIcon("tower", { size: "xl", label: "Иконка миссии" });
  }

  // Expose minimal API globally for next blocks
  window.MX = window.MX || {};
  window.MX.icons = { renderIcon, list: () => Object.keys(MX_ICONS) };
});
</script>
<!-- =========================
BLOCK 4: JS Core — state + storage + version migration
Добавь этот блок СРАЗУ ПОСЛЕ блока 3 (перед будущим роутером).
Он НЕ меняет миссии (это будет блок 5), но:
- создаёт state
- грузит/сохраняет localStorage
- обновляет UI прогресса (0/50 по умолчанию)
- даёт reset для отладки
========================= -->

<script>
document.addEventListener('DOMContentLoaded', () => {
  "use strict";

  // Ensure global namespace
  window.MX = window.MX || {};

  // =========================
  // Storage config
  // =========================
  const STORAGE_KEY = "mx_master_explorer_state";
  const STATE_VERSION = 1;

  // Default state (baseline)
  const DEFAULT_STATE = {
    v: STATE_VERSION,          // version
    currentMissionId: 1,
    completed: [],             // array of missionIds
    medals: 0,                 // simple counter; UI stars later
    soundOn: true
  };

  // =========================
  // Helpers
  // =========================
  function clampInt(n, min, max, fallback) {
    const x = Number.parseInt(n, 10);
    if (Number.isNaN(x)) return fallback;
    return Math.max(min, Math.min(max, x));
  }

  function uniqIntArray(arr) {
    const out = [];
    const seen = new Set();
    for (const v of Array.isArray(arr) ? arr : []) {
      const x = Number.parseInt(v, 10);
      if (!Number.isNaN(x) && !seen.has(x)) {
        seen.add(x);
        out.push(x);
      }
    }
    out.sort((a, b) => a - b);
    return out;
  }

  // =========================
  // Migration
  // =========================
  function migrateState(raw) {
    // If not an object, use defaults
    if (!raw || typeof raw !== "object") return { ...DEFAULT_STATE };

    // Normalize version
    const fromV = Number.isFinite(raw.v) ? raw.v : 0;

    // Start from defaults, overlay raw (safe fields only)
    let s = {
      ...DEFAULT_STATE,
      v: fromV,
      currentMissionId: raw.currentMissionId,
      completed: raw.completed,
      medals: raw.medals,
      soundOn: raw.soundOn
    };

    // ----- Migration steps -----
    // v0 -> v1 (first stable schema)
    if (fromV < 1) {
      // In older drafts we might have used "mission" instead of "currentMissionId"
      if (typeof raw.mission === "number" && !raw.currentMissionId) {
        s.currentMissionId = raw.mission;
      }
      s.v = 1;
    }

    // Future migrations go here:
    // if (fromV < 2) { ...; s.v = 2; }

    // Validate and sanitize
    s.currentMissionId = clampInt(s.currentMissionId, 1, 50, 1);
    s.completed = uniqIntArray(s.completed).filter(id => id >= 1 && id <= 50);
    s.medals = clampInt(s.medals, 0, 999, 0);
    s.soundOn = (typeof s.soundOn === "boolean") ? s.soundOn : true;

    // Ensure currentMissionId isn't "behind" completed in a broken way (optional)
    // We do not auto-advance here; router will handle navigation logic.
    s.v = STATE_VERSION;

    return s;
  }

  // =========================
  // Load / Save
  // =========================
  function loadState() {
    try {
      const rawStr = localStorage.getItem(STORAGE_KEY);
      if (!rawStr) return { ...DEFAULT_STATE };
      const parsed = JSON.parse(rawStr);
      return migrateState(parsed);
    } catch (e) {
      // Corrupted storage -> reset to defaults
      return { ...DEFAULT_STATE };
    }
  }

  function saveState(nextState) {
    try {
      const safe = migrateState(nextState); // sanitize + ensure version
      localStorage.setItem(STORAGE_KEY, JSON.stringify(safe));
      return true;
    } catch (e) {
      return false;
    }
  }

  function resetState() {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {}
    MX.state = { ...DEFAULT_STATE };
    syncUIFromState(MX.state);
    return MX.state;
  }

  // =========================
  // UI sync (progress + sound button)
  // =========================
  function syncUIFromState(state) {
    // Progress numbers
    const total = 50;
    const completedCount = Array.isArray(state.completed) ? state.completed.length : 0;

    const elX = document.getElementById("mx-progress-x");
    const elTotal = document.getElementById("mx-progress-total");
    const elFill = document.getElementById("mx-progress-fill");
    const elBar = document.querySelector(".mx-progressbar");

    if (elX) elX.textContent = String(completedCount);
    if (elTotal) elTotal.textContent = String(total);

    const pct = total > 0 ? Math.round((completedCount / total) * 100) : 0;
    if (elFill) elFill.style.width = `${pct}%`;
    if (elBar) elBar.setAttribute("aria-valuenow", String(completedCount));

    // Sound toggle UI (visual only; audio engine позже)
    const soundBtn = document.getElementById("mx-sound-toggle");
    if (soundBtn) {
      soundBtn.setAttribute("aria-pressed", state.soundOn ? "true" : "false");
      soundBtn.setAttribute("aria-label", state.soundOn ? "Звук: включён" : "Звук: выключен");
      // Subtle dim when off
      soundBtn.style.opacity = state.soundOn ? "1" : "0.55";
    }

    // Mission meta placeholders (router will set real content)
    const mNum = document.getElementById("mx-mission-num");
    if (mNum) mNum.textContent = `Mission #${state.currentMissionId}`;
  }

  // =========================
  // Wire minimal interactions
  // =========================
  function bindCoreUI() {
    // Toggle sound flag (no audio yet, but state persists)
    const soundBtn = document.getElementById("mx-sound-toggle");
    if (soundBtn) {
      soundBtn.addEventListener("click", () => {
        MX.state.soundOn = !MX.state.soundOn;
        saveState(MX.state);
        syncUIFromState(MX.state);
      });
    }

    // Optional debug reset: long press on title (mobile-friendly)
    const title = document.querySelector(".mx-title");
    if (title) {
      let pressTimer = null;

      const start = () => {
        pressTimer = window.setTimeout(() => {
          // Reset only if user confirms
          const ok = window.confirm("Сбросить прогресс игры?");
          if (ok) resetState();
        }, 800);
      };

      const cancel = () => {
        if (pressTimer) window.clearTimeout(pressTimer);
        pressTimer = null;
      };

      title.addEventListener("pointerdown", start);
      title.addEventListener("pointerup", cancel);
      title.addEventListener("pointercancel", cancel);
      title.addEventListener("pointerleave", cancel);
    }
  }

  // =========================
  // Init
  // =========================
  MX.state = loadState();
  syncUIFromState(MX.state);
  bindCoreUI();

  // Expose API for next blocks
  MX.storage = {
    key: STORAGE_KEY,
    version: STATE_VERSION,
    loadState,
    saveState,
    resetState,
    migrateState,
    syncUIFromState
  };
});
</script>
<!-- =========================
BLOCK 5: JS Router миссий (движок переходов)
Требования: блоки 1–4 уже подключены.
Этот блок:
- создаёт минимальный массив миссий-заглушек (50 шт.) — позже заменим реальными данными
- реализует навигацию Prev/Next/GoTo
- выбирает случайный вариант (1 из 5) на старт миссии
- рендерит миссию в UI (title/desc/icon/номер/блок)
- completeMission(): отмечает выполненной, даёт медаль, обновляет прогресс, сохраняет state
Внимание: интерактивов пока нет — считаем миссию пройденной кнопкой "Далее".
Позже "Далее" будет работать как: проверить → complete → перейти дальше.
========================= -->

<script>
document.addEventListener('DOMContentLoaded', () => {
  "use strict";

  // Ensure MX from previous blocks
  window.MX = window.MX || {};
  if (!MX.storage || !MX.state) return;

  // =========================
  // 5.1 Minimal Missions Dataset (stub)
  // Позже заменим на полноценный MISSIONS[] с вариантами, choices, answers и т.п.
  // =========================
  const TOTAL_MISSIONS = 50;

  // Block mapping by id
  function getBlockByMissionId(id) {
    // 1-5 => block 1, 6-10 => block 2, ... , 46-50 => block 10
    return Math.ceil(id / 5);
  }

  // Icon mapping by block (простая логика для визуального разнообразия)
  function getIconByBlock(block) {
    const map = {
      1: "flag",
      2: "puzzle",
      3: "plane",
      4: "star",
      5: "globe",
      6: "heart",
      7: "school",
      8: "shop",
      9: "smile",
      10: "medal"
    };
    return map[block] || "tower";
  }

  // Заглушки названий (потом заменим на реальные из твоего списка)
  function getTitleByMissionId(id) {
    return `Миссия #${id}`;
  }

  function getDescByMissionId(id) {
    return `Выполни задание миссии #${id}. (Пока заглушка — тексты добавим позже.)`;
  }

  // Build stub missions with 5 text variants each
  const MISSIONS = Array.from({ length: TOTAL_MISSIONS }, (_, idx) => {
    const id = idx + 1;
    const block = getBlockByMissionId(id);
    return {
      id,
      block,
      type: "stub",                // later: drag | tap | multi | timer | action | creative | final
      icon: getIconByBlock(block),
      // For router purposes: 5 variants
      variants: Array.from({ length: 5 }, (__, vIdx) => ({
        v: vIdx + 1,
        title: getTitleByMissionId(id),
        desc: getDescByMissionId(id)
      }))
    };
  });

  // Cache variant choices in-memory per mission session
  // (so going back within the same session keeps the same random variant)
  const sessionVariantByMission = new Map();

  // =========================
  // 5.2 Core router functions
  // =========================
  function getMissionById(id) {
    const x = Number.parseInt(id, 10);
    if (Number.isNaN(x)) return null;
    if (x < 1 || x > TOTAL_MISSIONS) return null;
    return MISSIONS[x - 1] || null;
  }

  function pickVariant(mission) {
    if (!mission || !Array.isArray(mission.variants) || mission.variants.length === 0) {
      return null;
    }

    // If session has cached variant for this mission, reuse
    if (sessionVariantByMission.has(mission.id)) {
      const idx = sessionVariantByMission.get(mission.id);
      return mission.variants[idx] || mission.variants[0];
    }

    // Random 0..(len-1)
    const idx = Math.floor(Math.random() * mission.variants.length);
    sessionVariantByMission.set(mission.id, idx);
    return mission.variants[idx];
  }

  function renderMission(mission, variant) {
    // Defensive: if not found, fallback to mission 1
    if (!mission) {
      mission = getMissionById(1);
      variant = pickVariant(mission);
    }
    if (!variant) variant = pickVariant(mission);

    // Update mission meta
    const mNum = document.getElementById("mx-mission-num");
    const bNum = document.getElementById("mx-block-num");
    const title = document.getElementById("mx-mission-title");
    const desc = document.getElementById("mx-mission-desc");

    if (mNum) mNum.textContent = `Mission #${mission.id}`;
    if (bNum) bNum.textContent = `Блок ${mission.block}`;
    if (title) title.textContent = variant?.title || `Миссия #${mission.id}`;
    if (desc) desc.textContent = variant?.desc || "";

    // Render icon
    const iconHost = document.getElementById("mx-mission-icon");
    if (iconHost && MX.icons && typeof MX.icons.renderIcon === "function") {
      iconHost.innerHTML = MX.icons.renderIcon(mission.icon || "tower", { size: "xl", label: "Иконка миссии" });
    }

    // Update interactive placeholder for now
    const interactive = document.getElementById("mx-interactive");
    if (interactive) {
      // Keep placeholder but show mission type
      const typeLabel = mission.type || "stub";
      interactive.setAttribute("data-mission-type", typeLabel);
    }

    // Update buttons enabled/disabled
    const prevBtn = document.getElementById("mx-prev");
    const nextBtn = document.getElementById("mx-next");
    if (prevBtn) prevBtn.disabled = (mission.id <= 1);

    // For now, Next is always enabled; later it may depend on validation
    if (nextBtn) nextBtn.disabled = false;

    // Persist current mission in state (but don't mark complete)
    MX.state.currentMissionId = mission.id;
    MX.storage.saveState(MX.state);
    MX.storage.syncUIFromState(MX.state);
  }

  function goTo(id) {
    const mission = getMissionById(id);
    const variant = pickVariant(mission);
    renderMission(mission, variant);
  }

  function goNext() {
    const currentId = Number.parseInt(MX.state.currentMissionId, 10) || 1;
    const nextId = Math.min(TOTAL_MISSIONS, currentId + 1);
    goTo(nextId);
  }

  function goPrev() {
    const currentId = Number.parseInt(MX.state.currentMissionId, 10) || 1;
    const prevId = Math.max(1, currentId - 1);
    goTo(prevId);
  }

  // =========================
  // 5.3 Completion logic
  // =========================
  function completeMission(missionId = MX.state.currentMissionId) {
    const id = Number.parseInt(missionId, 10);
    if (Number.isNaN(id) || id < 1 || id > TOTAL_MISSIONS) return false;

    // If already completed, no-op
    if (!Array.isArray(MX.state.completed)) MX.state.completed = [];
    if (!MX.state.completed.includes(id)) {
      MX.state.completed.push(id);
      // medals: simple counter (later we can map to stars/badges)
      MX.state.medals = (Number.parseInt(MX.state.medals, 10) || 0) + 1;
    }

    // Sanitize + save
    MX.storage.saveState(MX.state);
    MX.storage.syncUIFromState(MX.state);

    // Optional toast feedback (we'll improve in Block 7)
    showQuickToast("Молодец! Миссия выполнена.");

    return true;
  }

  // Minimal toast (no dependency on Block 7)
  let toastTimer = null;
  function showQuickToast(text) {
    const toast = document.getElementById("mx-toast");
    const tText = document.getElementById("mx-toast-text");
    if (!toast || !tText) return;

    tText.textContent = String(text || "");
    toast.classList.add("is-visible");
    toast.setAttribute("aria-hidden", "false");

    if (toastTimer) window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => {
      toast.classList.remove("is-visible");
      toast.setAttribute("aria-hidden", "true");
    }, 900);
  }

  // =========================
  // 5.4 Bind navigation buttons
  // =========================
  function bindRouterUI() {
    const prevBtn = document.getElementById("mx-prev");
    const nextBtn = document.getElementById("mx-next");

    if (prevBtn) {
      prevBtn.addEventListener("click", () => {
        goPrev();
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        // Current behavior: "Далее" = отметить миссию выполненной и перейти дальше
        const ok = completeMission(MX.state.currentMissionId);
        if (!ok) return;

        // If last mission, stay (later финал/сертификат)
        if ((Number.parseInt(MX.state.currentMissionId, 10) || 1) >= TOTAL_MISSIONS) {
          showQuickToast("Финиш! Дальше будет финальная награда.");
          return;
        }
        goNext();
      });
    }
  }

  // =========================
  // 5.5 Init router
  // =========================
  function initRouter() {
    bindRouterUI();

    // Start from saved state
    const startId = Number.parseInt(MX.state.currentMissionId, 10) || 1;
    goTo(startId);
  }

  initRouter();

  // Expose API for next blocks
  MX.router = {
    TOTAL_MISSIONS,
    MISSIONS,
    getMissionById,
    pickVariant,
    renderMission,
    goNext,
    goPrev,
    goTo,
    completeMission
  };
});
</script>
<!-- =========================
BLOCK 6: Audio Engine (iOS-safe)
Требования: блок 4 (state+storage) уже есть. Блок 5 желателен, но не обязателен.
Этот блок:
- initAudio() запускается после первого пользовательского жеста
- playSound('success'|'fail'|'step'|'final')
- учитывает MX.state.soundOn (и кнопку mx-sound-toggle)
- rate limiting, чтобы не спамило
Звуки: синтезируем через WebAudio (без base64) — надёжнее и легче.
Позже, если захочешь именно base64, заменим генератор на decodeAudioData.
========================= -->

<script>
document.addEventListener('DOMContentLoaded', () => {
  "use strict";

  window.MX = window.MX || {};
  if (!MX.state || !MX.storage) return;

  // =========================
  // Internal audio state
  // =========================
  let audioCtx = null;
  let masterGain = null;
  let isReady = false;
  let isInitAttempted = false;

  // Rate limiting to avoid endless beeps
  const lastPlayedAt = {
    success: 0,
    fail: 0,
    step: 0,
    final: 0
  };

  const MIN_INTERVAL_MS = {
    success: 120,
    fail: 180,
    step: 120,
    final: 600
  };

  // Gentle overall limit (any sound)
  let lastAnyAt = 0;
  const MIN_ANY_INTERVAL_MS = 80;

  // =========================
  // iOS-safe init
  // =========================
  function initAudio() {
    if (isReady) return true;
    if (isInitAttempted && !audioCtx) return false; // hard fail already
    isInitAttempted = true;

    try {
      const Ctx = window.AudioContext || window.webkitAudioContext;
      if (!Ctx) return false;

      audioCtx = new Ctx();
      masterGain = audioCtx.createGain();
      masterGain.gain.value = MX.state.soundOn ? 0.75 : 0.0;
      masterGain.connect(audioCtx.destination);

      // Some browsers create in "suspended" state until user gesture
      if (audioCtx.state === "suspended") {
        // resume must be called within user interaction; we'll call again from gesture handler
      }

      isReady = true;
      return true;
    } catch (e) {
      audioCtx = null;
      masterGain = null;
      isReady = false;
      return false;
    }
  }

  async function resumeIfNeeded() {
    if (!audioCtx) return;
    try {
      if (audioCtx.state === "suspended") {
        await audioCtx.resume();
      }
    } catch (e) {}
  }

  // One-time gesture hook to unlock audio on iOS
  function bindFirstGestureUnlock() {
    const unlock = async () => {
      // Create on first gesture
      if (!isReady) initAudio();
      await resumeIfNeeded();

      // Play a near-silent tick to ensure audio path opens
      if (isReady && MX.state.soundOn) {
        try {
          synthBeep({ freq: 220, duration: 0.015, type: "sine", gain: 0.001 });
        } catch (e) {}
      }

      // Remove listeners
      document.removeEventListener("pointerdown", unlock, true);
      document.removeEventListener("touchstart", unlock, true);
      document.removeEventListener("mousedown", unlock, true);
      document.removeEventListener("keydown", unlock, true);
    };

    // Use capture to catch early
    document.addEventListener("pointerdown", unlock, true);
    document.addEventListener("touchstart", unlock, true);
    document.addEventListener("mousedown", unlock, true);
    document.addEventListener("keydown", unlock, true);
  }

  // =========================
  // Sound synthesis helpers
  // =========================
  function nowMs() {
    return Date.now();
  }

  function canPlay(kind) {
    if (!MX.state.soundOn) return false;
    if (!isReady) return false;

    const t = nowMs();
    if (t - lastAnyAt < MIN_ANY_INTERVAL_MS) return false;

    const last = lastPlayedAt[kind] || 0;
    const min = MIN_INTERVAL_MS[kind] || 150;
    if (t - last < min) return false;

    lastAnyAt = t;
    lastPlayedAt[kind] = t;
    return true;
  }

  function setMasterOn(on) {
    if (!masterGain) return;
    // Smooth ramp to avoid clicks
    const t = audioCtx.currentTime;
    const target = on ? 0.75 : 0.0;
    try {
      masterGain.gain.cancelScheduledValues(t);
      masterGain.gain.setValueAtTime(masterGain.gain.value, t);
      masterGain.gain.linearRampToValueAtTime(target, t + 0.04);
    } catch (e) {
      masterGain.gain.value = target;
    }
  }

  function synthBeep({ freq = 440, duration = 0.10, type = "sine", gain = 0.18, freqEnd = null }) {
    if (!audioCtx || !masterGain) return;

    const t0 = audioCtx.currentTime;
    const osc = audioCtx.createOscillator();
    const g = audioCtx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, t0);
    if (typeof freqEnd === "number") {
      osc.frequency.linearRampToValueAtTime(freqEnd, t0 + duration);
    }

    // ADSR-ish envelope
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.linearRampToValueAtTime(gain, t0 + 0.01);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + duration);

    osc.connect(g);
    g.connect(masterGain);

    osc.start(t0);
    osc.stop(t0 + duration + 0.02);
  }

  function synthChord({ freqs = [523, 659, 784], duration = 0.22, type = "sine", gain = 0.09 }) {
    if (!audioCtx || !masterGain) return;

    // Play 2–3 oscillators with slight offsets
    const t0 = audioCtx.currentTime;
    freqs.forEach((f, i) => {
      const delay = i * 0.01;
      const osc = audioCtx.createOscillator();
      const g = audioCtx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(f, t0 + delay);

      g.gain.setValueAtTime(0.0001, t0 + delay);
      g.gain.linearRampToValueAtTime(gain, t0 + delay + 0.01);
      g.gain.exponentialRampToValueAtTime(0.0001, t0 + delay + duration);

      osc.connect(g);
      g.connect(masterGain);

      osc.start(t0 + delay);
      osc.stop(t0 + delay + duration + 0.03);
    });
  }

  // =========================
  // Public playSound API
  // =========================
  async function playSound(kind) {
    // Ensure context exists (but resume only works on gesture, if not unlocked -> still ok)
    if (!isReady) initAudio();
    await resumeIfNeeded();

    if (!canPlay(kind)) return false;

    try {
      switch (kind) {
        case "success":
          // short bright "ding"
          synthBeep({ freq: 660, freqEnd: 990, duration: 0.12, type: "triangle", gain: 0.16 });
          synthBeep({ freq: 1320, duration: 0.07, type: "sine", gain: 0.08 });
          break;

        case "fail":
          // мягкий "буп" вниз
          synthBeep({ freq: 260, freqEnd: 180, duration: 0.14, type: "sine", gain: 0.18 });
          break;

        case "step":
          // короткий "свист" вверх (переход миссии)
          synthBeep({ freq: 420, freqEnd: 720, duration: 0.10, type: "sine", gain: 0.10 });
          break;

        case "final":
          // мини-фанфары (аккорд + подъём)
          synthChord({ freqs: [523, 659, 784], duration: 0.24, type: "triangle", gain: 0.08 });
          synthBeep({ freq: 784, freqEnd: 1046, duration: 0.18, type: "sine", gain: 0.10 });
          synthBeep({ freq: 1046, freqEnd: 1318, duration: 0.16, type: "sine", gain: 0.08 });
          break;

        default:
          // unknown -> do nothing
          return false;
      }
      return true;
    } catch (e) {
      return false;
    }
  }

  // =========================
  // Hook into sound toggle button
  // (button already toggles MX.state.soundOn in Block 4)
  // Here we only reflect it in WebAudio gain.
  // =========================
  function bindSoundToggleSync() {
    const btn = document.getElementById("mx-sound-toggle");
    if (!btn) return;

    // On load: reflect current state
    if (!isReady) initAudio();
    if (isReady) setMasterOn(MX.state.soundOn);

    btn.addEventListener("click", () => {
      if (!isReady) initAudio();
      if (isReady) setMasterOn(MX.state.soundOn);
    });
  }

  // =========================
  // Optional integration with router events (minimal)
  // - On mission completion: success
  // - On next step: step (we'll use it when we add proper flow)
  // =========================
  function bindRouterAudioHints() {
    // If router exists, we can gently patch its completeMission to play success.
    // No breaking changes: call original, then play sound.
    if (!MX.router || typeof MX.router.completeMission !== "function") return;

    const originalComplete = MX.router.completeMission;
    MX.router.completeMission = function patchedCompleteMission(...args) {
      const ok = originalComplete.apply(this, args);
      if (ok) playSound("success");
      return ok;
    };
  }

  // =========================
  // Init block
  // =========================
  bindFirstGestureUnlock();
  bindSoundToggleSync();
  bindRouterAudioHints();

  MX.audio = {
    initAudio,
    playSound,
    isReady: () => isReady && !!audioCtx,
    _debug: {
      get ctx() { return audioCtx; },
      get gain() { return masterGain; }
    }
  };
});
</script>
<!-- =========================
BLOCK 6: Audio Engine (iOS-safe)
Требования: блок 4 (state+storage) уже есть. Блок 5 желателен, но не обязателен.
Этот блок:
- initAudio() запускается после первого пользовательского жеста
- playSound('success'|'fail'|'step'|'final')
- учитывает MX.state.soundOn (и кнопку mx-sound-toggle)
- rate limiting, чтобы не спамило
Звуки: синтезируем через WebAudio (без base64) — надёжнее и легче.
Позже, если захочешь именно base64, заменим генератор на decodeAudioData.
========================= -->

<script>
document.addEventListener('DOMContentLoaded', () => {
  "use strict";

  window.MX = window.MX || {};
  if (!MX.state || !MX.storage) return;

  // =========================
  // Internal audio state
  // =========================
  let audioCtx = null;
  let masterGain = null;
  let isReady = false;
  let isInitAttempted = false;

  // Rate limiting to avoid endless beeps
  const lastPlayedAt = {
    success: 0,
    fail: 0,
    step: 0,
    final: 0
  };

  const MIN_INTERVAL_MS = {
    success: 120,
    fail: 180,
    step: 120,
    final: 600
  };

  // Gentle overall limit (any sound)
  let lastAnyAt = 0;
  const MIN_ANY_INTERVAL_MS = 80;

  // =========================
  // iOS-safe init
  // =========================
  function initAudio() {
    if (isReady) return true;
    if (isInitAttempted && !audioCtx) return false; // hard fail already
    isInitAttempted = true;

    try {
      const Ctx = window.AudioContext || window.webkitAudioContext;
      if (!Ctx) return false;

      audioCtx = new Ctx();
      masterGain = audioCtx.createGain();
      masterGain.gain.value = MX.state.soundOn ? 0.75 : 0.0;
      masterGain.connect(audioCtx.destination);

      // Some browsers create in "suspended" state until user gesture
      if (audioCtx.state === "suspended") {
        // resume must be called within user interaction; we'll call again from gesture handler
      }

      isReady = true;
      return true;
    } catch (e) {
      audioCtx = null;
      masterGain = null;
      isReady = false;
      return false;
    }
  }

  async function resumeIfNeeded() {
    if (!audioCtx) return;
    try {
      if (audioCtx.state === "suspended") {
        await audioCtx.resume();
      }
    } catch (e) {}
  }

  // One-time gesture hook to unlock audio on iOS
  function bindFirstGestureUnlock() {
    const unlock = async () => {
      // Create on first gesture
      if (!isReady) initAudio();
      await resumeIfNeeded();

      // Play a near-silent tick to ensure audio path opens
      if (isReady && MX.state.soundOn) {
        try {
          synthBeep({ freq: 220, duration: 0.015, type: "sine", gain: 0.001 });
        } catch (e) {}
      }

      // Remove listeners
      document.removeEventListener("pointerdown", unlock, true);
      document.removeEventListener("touchstart", unlock, true);
      document.removeEventListener("mousedown", unlock, true);
      document.removeEventListener("keydown", unlock, true);
    };

    // Use capture to catch early
    document.addEventListener("pointerdown", unlock, true);
    document.addEventListener("touchstart", unlock, true);
    document.addEventListener("mousedown", unlock, true);
    document.addEventListener("keydown", unlock, true);
  }

  // =========================
  // Sound synthesis helpers
  // =========================
  function nowMs() {
    return Date.now();
  }

  function canPlay(kind) {
    if (!MX.state.soundOn) return false;
    if (!isReady) return false;

    const t = nowMs();
    if (t - lastAnyAt < MIN_ANY_INTERVAL_MS) return false;

    const last = lastPlayedAt[kind] || 0;
    const min = MIN_INTERVAL_MS[kind] || 150;
    if (t - last < min) return false;

    lastAnyAt = t;
    lastPlayedAt[kind] = t;
    return true;
  }

  function setMasterOn(on) {
    if (!masterGain) return;
    // Smooth ramp to avoid clicks
    const t = audioCtx.currentTime;
    const target = on ? 0.75 : 0.0;
    try {
      masterGain.gain.cancelScheduledValues(t);
      masterGain.gain.setValueAtTime(masterGain.gain.value, t);
      masterGain.gain.linearRampToValueAtTime(target, t + 0.04);
    } catch (e) {
      masterGain.gain.value = target;
    }
  }

  function synthBeep({ freq = 440, duration = 0.10, type = "sine", gain = 0.18, freqEnd = null }) {
    if (!audioCtx || !masterGain) return;

    const t0 = audioCtx.currentTime;
    const osc = audioCtx.createOscillator();
    const g = audioCtx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, t0);
    if (typeof freqEnd === "number") {
      osc.frequency.linearRampToValueAtTime(freqEnd, t0 + duration);
    }

    // ADSR-ish envelope
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.linearRampToValueAtTime(gain, t0 + 0.01);
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + duration);

    osc.connect(g);
    g.connect(masterGain);

    osc.start(t0);
    osc.stop(t0 + duration + 0.02);
  }

  function synthChord({ freqs = [523, 659, 784], duration = 0.22, type = "sine", gain = 0.09 }) {
    if (!audioCtx || !masterGain) return;

    // Play 2–3 oscillators with slight offsets
    const t0 = audioCtx.currentTime;
    freqs.forEach((f, i) => {
      const delay = i * 0.01;
      const osc = audioCtx.createOscillator();
      const g = audioCtx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(f, t0 + delay);

      g.gain.setValueAtTime(0.0001, t0 + delay);
      g.gain.linearRampToValueAtTime(gain, t0 + delay + 0.01);
      g.gain.exponentialRampToValueAtTime(0.0001, t0 + delay + duration);

      osc.connect(g);
      g.connect(masterGain);

      osc.start(t0 + delay);
      osc.stop(t0 + delay + duration + 0.03);
    });
  }

  // =========================
  // Public playSound API
  // =========================
  async function playSound(kind) {
    // Ensure context exists (but resume only works on gesture, if not unlocked -> still ok)
    if (!isReady) initAudio();
    await resumeIfNeeded();

    if (!canPlay(kind)) return false;

    try {
      switch (kind) {
        case "success":
          // short bright "ding"
          synthBeep({ freq: 660, freqEnd: 990, duration: 0.12, type: "triangle", gain: 0.16 });
          synthBeep({ freq: 1320, duration: 0.07, type: "sine", gain: 0.08 });
          break;

        case "fail":
          // мягкий "буп" вниз
          synthBeep({ freq: 260, freqEnd: 180, duration: 0.14, type: "sine", gain: 0.18 });
          break;

        case "step":
          // короткий "свист" вверх (переход миссии)
          synthBeep({ freq: 420, freqEnd: 720, duration: 0.10, type: "sine", gain: 0.10 });
          break;

        case "final":
          // мини-фанфары (аккорд + подъём)
          synthChord({ freqs: [523, 659, 784], duration: 0.24, type: "triangle", gain: 0.08 });
          synthBeep({ freq: 784, freqEnd: 1046, duration: 0.18, type: "sine", gain: 0.10 });
          synthBeep({ freq: 1046, freqEnd: 1318, duration: 0.16, type: "sine", gain: 0.08 });
          break;

        default:
          // unknown -> do nothing
          return false;
      }
      return true;
    } catch (e) {
      return false;
    }
  }

  // =========================
  // Hook into sound toggle button
  // (button already toggles MX.state.soundOn in Block 4)
  // Here we only reflect it in WebAudio gain.
  // =========================
  function bindSoundToggleSync() {
    const btn = document.getElementById("mx-sound-toggle");
    if (!btn) return;

    // On load: reflect current state
    if (!isReady) initAudio();
    if (isReady) setMasterOn(MX.state.soundOn);

    btn.addEventListener("click", () => {
      if (!isReady) initAudio();
      if (isReady) setMasterOn(MX.state.soundOn);
    });
  }

  // =========================
  // Optional integration with router events (minimal)
  // - On mission completion: success
  // - On next step: step (we'll use it when we add proper flow)
  // =========================
  function bindRouterAudioHints() {
    // If router exists, we can gently patch its completeMission to play success.
    // No breaking changes: call original, then play sound.
    if (!MX.router || typeof MX.router.completeMission !== "function") return;

    const originalComplete = MX.router.completeMission;
    MX.router.completeMission = function patchedCompleteMission(...args) {
      const ok = originalComplete.apply(this, args);
      if (ok) playSound("success");
      return ok;
    };
  }

  // =========================
  // Init block
  // =========================
  bindFirstGestureUnlock();
  bindSoundToggleSync();
  bindRouterAudioHints();

  MX.audio = {
    initAudio,
    playSound,
    isReady: () => isReady && !!audioCtx,
    _debug: {
      get ctx() { return audioCtx; },
      get gain() { return masterGain; }
    }
  };
});
</script>
<!-- =========================
BLOCK 7: Feedback System (toast + pulses + highlights + mini-reward)
Требования: блоки 1–5 подключены. Блок 6 (audio) опционально.
Этот блок:
- MX.feedback.showToast(text, type)
- MX.feedback.pulseSuccess() / pulseFail()
- подсветка кнопок/зон через data-атрибуты и CSS-классы
- мини-награда каждые 5 выполненных миссий
Интеграция:
- патчит MX.router.completeMission: после успешного completion → toast + pulse + mini-reward + (optional) audio
========================= -->

<style>
  /* =========================
  BLOCK 7: Feedback CSS
  ========================= */

  /* Toast variants */
  .mx-toast__bubble.is-success{
    background: rgba(76,175,80,.92);
    border-color: rgba(255,255,255,.18);
  }
  .mx-toast__bubble.is-fail{
    background: rgba(244,67,54,.92);
    border-color: rgba(255,255,255,.18);
  }
  .mx-toast__bubble.is-step{
    background: rgba(74,144,217,.92);
    border-color: rgba(255,255,255,.18);
  }
  .mx-toast__bubble.is-final{
    background: rgba(156,39,176,.92);
    border-color: rgba(255,255,255,.18);
  }

  /* Pulse animation */
  @keyframes mxPulseSuccess {
    0%   { box-shadow: 0 0 0 0 rgba(76,175,80,.45); transform: translateY(0); }
    60%  { box-shadow: 0 0 0 10px rgba(76,175,80,0); transform: translateY(-1px); }
    100% { box-shadow: 0 0 0 0 rgba(76,175,80,0); transform: translateY(0); }
  }
  @keyframes mxPulseFail {
    0%   { box-shadow: 0 0 0 0 rgba(244,67,54,.45); transform: translateY(0); }
    60%  { box-shadow: 0 0 0 10px rgba(244,67,54,0); transform: translateY(1px); }
    100% { box-shadow: 0 0 0 0 rgba(244,67,54,0); transform: translateY(0); }
  }

  .mx-card.is-pulse-success{ animation: mxPulseSuccess .55s ease-out; }
  .mx-card.is-pulse-fail{ animation: mxPulseFail .55s ease-out; }

  /* Button highlight */
  .mx-btn.is-highlight-success{
    box-shadow: 0 0 0 3px rgba(76,175,80,.25), 0 10px 24px rgba(0,0,0,.12);
    border-color: rgba(76,175,80,.40);
  }
  .mx-btn.is-highlight-fail{
    box-shadow: 0 0 0 3px rgba(244,67,54,.22), 0 10px 24px rgba(0,0,0,.12);
    border-color: rgba(244,67,54,.40);
  }

  /* Zone highlight (interactive container) */
  .mx-interactive.is-zone-success{
    border-color: rgba(76,175,80,.50);
    background: rgba(76,175,80,.08);
  }
  .mx-interactive.is-zone-fail{
    border-color: rgba(244,67,54,.45);
    background: rgba(244,67,54,.06);
  }

  /* Mini reward badge */
  .mx-mini-reward{
    margin-top: 10px;
    padding: 10px 12px;
    border-radius: 16px;
    border: 1px solid rgba(0,0,0,.08);
    background: linear-gradient(180deg, rgba(255,248,225,.95), rgba(255,255,255,.95));
    display:flex;
    align-items:center;
    gap: 10px;
  }
  .mx-mini-reward__icon{
    width: 44px;
    height: 44px;
    border-radius: 14px;
    display:flex;
    align-items:center;
    justify-content:center;
    background: rgba(255,152,0,.14);
    color: var(--warning);
    flex: 0 0 auto;
  }
  .mx-mini-reward__title{
    font-weight: 950;
    margin-bottom: 2px;
  }
  .mx-mini-reward__sub{
    font-size: 13px;
    font-weight: 800;
    color: var(--muted);
    line-height: 1.25;
  }

  @media (prefers-reduced-motion: reduce){
    .mx-card.is-pulse-success, .mx-card.is-pulse-fail{ animation: none !important; }
  }
</style>

<script>
document.addEventListener('DOMContentLoaded', () => {
  "use strict";

  window.MX = window.MX || {};
  if (!MX.state || !MX.storage) return;

  // =========================
  // Elements
  // =========================
  const elCard = document.querySelector(".mx-card");
  const elInteractive = document.getElementById("mx-interactive");
  const elToast = document.getElementById("mx-toast");
  const elToastBubble = document.getElementById("mx-toast-bubble");
  const elToastText = document.getElementById("mx-toast-text");
  const elNext = document.getElementById("mx-next");
  const elPrev = document.getElementById("mx-prev");

  // =========================
  // Toast
  // =========================
  let toastTimer = null;

  function showToast(text, type = "step", ms = 950) {
    if (!elToast || !elToastBubble || !elToastText) return;

    // Clear previous variant classes
    elToastBubble.classList.remove("is-success","is-fail","is-step","is-final");
    elToastBubble.classList.add(typeClass(type));

    elToastText.textContent = String(text || "");
    elToast.classList.add("is-visible");
    elToast.setAttribute("aria-hidden", "false");

    if (toastTimer) window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => {
      elToast.classList.remove("is-visible");
      elToast.setAttribute("aria-hidden", "true");
    }, ms);
  }

  function typeClass(type) {
    switch (type) {
      case "success": return "is-success";
      case "fail": return "is-fail";
      case "final": return "is-final";
      case "step":
      default: return "is-step";
    }
  }

  // =========================
  // Pulses
  // =========================
  let pulseTimer = null;

  function pulseSuccess() {
    if (!elCard) return;
    clearPulseClasses();
    elCard.classList.add("is-pulse-success");
    pulseTimer = window.setTimeout(() => clearPulseClasses(), 650);
  }

  function pulseFail() {
    if (!elCard) return;
    clearPulseClasses();
    elCard.classList.add("is-pulse-fail");
    pulseTimer = window.setTimeout(() => clearPulseClasses(), 650);
  }

  function clearPulseClasses() {
    if (pulseTimer) window.clearTimeout(pulseTimer);
    pulseTimer = null;
    if (elCard) {
      elCard.classList.remove("is-pulse-success","is-pulse-fail");
    }
  }

  // =========================
  // Highlights (buttons + zone)
  // =========================
  let hlTimer = null;

  function highlightNextSuccess() {
    highlightButton(elNext, "success");
    highlightZone("success");
  }

  function highlightNextFail() {
    highlightButton(elNext, "fail");
    highlightZone("fail");
  }

  function highlightButton(btn, kind) {
    if (!btn) return;
    btn.classList.remove("is-highlight-success","is-highlight-fail");
    btn.classList.add(kind === "success" ? "is-highlight-success" : "is-highlight-fail");
    scheduleClearHighlights();
  }

  function highlightZone(kind) {
    if (!elInteractive) return;
    elInteractive.classList.remove("is-zone-success","is-zone-fail");
    elInteractive.classList.add(kind === "success" ? "is-zone-success" : "is-zone-fail");
    scheduleClearHighlights();
  }

  function scheduleClearHighlights() {
    if (hlTimer) window.clearTimeout(hlTimer);
    hlTimer = window.setTimeout(() => {
      if (elNext) elNext.classList.remove("is-highlight-success","is-highlight-fail");
      if (elPrev) elPrev.classList.remove("is-highlight-success","is-highlight-fail");
      if (elInteractive) elInteractive.classList.remove("is-zone-success","is-zone-fail");
    }, 800);
  }

  // =========================
  // Mini reward every 5 completions
  // =========================
  function maybeMiniReward() {
    const completedCount = Array.isArray(MX.state.completed) ? MX.state.completed.length : 0;
    if (completedCount === 0) return;

    // Only on multiples of 5
    if (completedCount % 5 !== 0) return;

    // Avoid repeating reward on reload: remember last shown milestone
    const milestoneKey = "mx_master_explorer_last_milestone";
    const lastShown = Number.parseInt(localStorage.getItem(milestoneKey) || "0", 10) || 0;
    if (lastShown === completedCount) return;

    try { localStorage.setItem(milestoneKey, String(completedCount)); } catch (e) {}

    showToast(`Ура! Уже ${completedCount}/50!`, "final", 1100);
    pulseSuccess();

    // Render small badge under interactive area
    renderMiniRewardBadge(completedCount);

    // Optional sound
    if (MX.audio && typeof MX.audio.playSound === "function") {
      MX.audio.playSound("final");
    }
  }

  function renderMiniRewardBadge(count) {
    if (!elInteractive) return;

    // Remove previous badge if any
    const old = elInteractive.querySelector(".mx-mini-reward");
    if (old) old.remove();

    const badge = document.createElement("div");
    badge.className = "mx-mini-reward";
    badge.setAttribute("role", "note");
    badge.setAttribute("aria-label", "Мини-награда");

    const icon = document.createElement("div");
    icon.className = "mx-mini-reward__icon";
    if (MX.icons && typeof MX.icons.renderIcon === "function") {
      icon.innerHTML = MX.icons.renderIcon("medal", { size: "lg", label: "Медаль" });
    } else {
      icon.textContent = "★";
    }

    const txt = document.createElement("div");
    const title = document.createElement("div");
    title.className = "mx-mini-reward__title";
    title.textContent = "Мини-награда!";

    const sub = document.createElement("div");
    sub.className = "mx-mini-reward__sub";
    sub.textContent = `Ты прошёл(ла) ${count} миссий. Так держать!`;

    txt.appendChild(title);
    txt.appendChild(sub);

    badge.appendChild(icon);
    badge.appendChild(txt);

    elInteractive.appendChild(badge);
  }

  // =========================
  // Integration: patch router completion
  // =========================
  function bindRouterFeedback() {
    if (!MX.router || typeof MX.router.completeMission !== "function") return;

    // Avoid double patching
    if (MX.router._feedbackPatched) return;
    MX.router._feedbackPatched = true;

    const originalComplete = MX.router.completeMission;

    MX.router.completeMission = function patchedCompleteMission(...args) {
      const before = Array.isArray(MX.state.completed) ? MX.state.completed.length : 0;
      const ok = originalComplete.apply(this, args);
      const after = Array.isArray(MX.state.completed) ? MX.state.completed.length : 0;

      if (ok) {
        // Only show success feedback if actually added new completion
        const isNew = after > before;

        if (isNew) {
          showToast("Молодец! Миссия выполнена.", "success", 900);
          pulseSuccess();
          highlightNextSuccess();

          // Step sound is optional; success sound handled in Audio patch (block 6),
          // but if audio isn't patched, we can play here too (safe).
          if (MX.audio && typeof MX.audio.playSound === "function") {
            MX.audio.playSound("success");
          }

          maybeMiniReward();
        } else {
          // Already completed - show subtle info
          showToast("Эта миссия уже выполнена.", "step", 800);
        }
      } else {
        showToast("Не получилось. Попробуй ещё!", "fail", 900);
        pulseFail();
        highlightNextFail();
        if (MX.audio && typeof MX.audio.playSound === "function") {
          MX.audio.playSound("fail");
        }
      }

      return ok;
    };
  }

  // =========================
  // Expose API
  // =========================
  MX.feedback = {
    showToast,
    pulseSuccess,
    pulseFail,
    highlightNextSuccess,
    highlightNextFail,
    highlightZone,
    maybeMiniReward
  };

  bindRouterFeedback();
});
</script>
<!-- =========================
BLOCK 8: Интерактив-плагин Tap Select (1 из 3–4)
Что даёт:
- Рендерит варианты ответа (кнопки)
- Обрабатывает tap/click
- Проверяет правильность
- Либо авто-переход, либо кнопка “Далее” (режим настраивается)
Интеграция:
- Подключает плагин в MX.plugins
- Патчит MX.router.renderMission() так, чтобы он вызывал плагин по mission.type === "tap"
- Патчит поведение кнопки "Далее": если миссия tap и не решена — не даём пройти
Важно:
- Формат данных variant для tap:
  {
    title, desc,
    tap: {
      choices: ["...", "...", "..."],   // 3–4 варианта
      correctIndex: 1,                  // индекс правильного ответа
      autoAdvance: true|false,          // авто-переход (по умолчанию true)
      lockNextUntilCorrect: true|false  // блокировать Next до верного (по умолчанию true)
    }
  }
========================= -->

<style>
  /* =========================
  BLOCK 8: Tap Select UI
  ========================= */

  .mx-tap{
    display:flex;
    flex-direction:column;
    gap: 10px;
  }

  .mx-tap__grid{
    display:grid;
    grid-template-columns: 1fr;
    gap: 10px;
  }

  .mx-option{
    width:100%;
    text-align:left;
    border-radius: 16px;
    padding: 12px 12px;
    border: 1px solid rgba(0,0,0,.10);
    background: rgba(255,255,255,.85);
    font-weight: 950;
    font-size: 14px;
    line-height: 1.2;
    cursor:pointer;
    user-select:none;
    position:relative;
    box-shadow: 0 6px 14px rgba(0,0,0,.06);
    transition: transform .12s ease, box-shadow .12s ease;
  }
  .mx-option:active{ transform: translateY(1px); }

  .mx-option:focus{
    outline:none;
    box-shadow: var(--ring), 0 10px 20px rgba(0,0,0,.10);
  }

  .mx-option__badge{
    display:inline-flex;
    align-items:center;
    justify-content:center;
    width: 26px;
    height: 26px;
    border-radius: 10px;
    margin-right: 10px;
    background: rgba(74,144,217,.14);
    color: var(--primary);
    font-weight: 1000;
    flex: 0 0 auto;
  }

  .mx-option.is-correct{
    border-color: rgba(76,175,80,.55);
    background: rgba(76,175,80,.10);
    box-shadow: 0 0 0 3px rgba(76,175,80,.15), 0 10px 20px rgba(0,0,0,.10);
  }
  .mx-option.is-wrong{
    border-color: rgba(244,67,54,.50);
    background: rgba(244,67,54,.08);
    box-shadow: 0 0 0 3px rgba(244,67,54,.12), 0 10px 20px rgba(0,0,0,.10);
  }

  .mx-tap__hint{
    font-size: 13px;
    font-weight: 800;
    color: var(--muted);
    line-height: 1.25;
  }

  .mx-tap__hint strong{ color: var(--text); }

  @media (min-width: 520px){
    .mx-tap__grid{ grid-template-columns: 1fr 1fr; }
  }

  @media (prefers-reduced-motion: reduce){
    .mx-option{ transition:none !important; }
  }
</style>

<script>
document.addEventListener('DOMContentLoaded', () => {
  "use strict";

  window.MX = window.MX || {};
  if (!MX.router || !MX.storage || !MX.state) return;

  // =========================
  // 8.1 Plugin registry
  // =========================
  MX.plugins = MX.plugins || {};

  // =========================
  // 8.2 Tap Select plugin
  // =========================
  function tapSelectRender(container, mission, variant, api) {
    if (!container) return;

    // Reset container
    container.innerHTML = "";

    const tapCfg = (variant && variant.tap) ? variant.tap : null;

    // Defensive defaults
    const choices = (tapCfg && Array.isArray(tapCfg.choices)) ? tapCfg.choices.slice(0, 4) : [];
    const correctIndex = (tapCfg && Number.isInteger(tapCfg.correctIndex)) ? tapCfg.correctIndex : -1;
    const autoAdvance = (tapCfg && typeof tapCfg.autoAdvance === "boolean") ? tapCfg.autoAdvance : true;
    const lockNextUntilCorrect = (tapCfg && typeof tapCfg.lockNextUntilCorrect === "boolean") ? tapCfg.lockNextUntilCorrect : true;

    // If no config, show placeholder (developer signal)
    if (!choices.length || correctIndex < 0) {
      const warn = document.createElement("div");
      warn.className = "mx-placeholder";
      warn.innerHTML = `
        <div class="mx-placeholder__icon" aria-hidden="true">
          ${MX.icons?.renderIcon ? MX.icons.renderIcon("puzzle", { size: "lg", label: "Пазл" }) : ""}
        </div>
        <div class="mx-placeholder__text">
          <div class="mx-placeholder__title">Tap Select не настроен</div>
          <div class="mx-placeholder__sub">Нужно добавить variant.tap.choices и variant.tap.correctIndex.</div>
        </div>
      `;
      container.appendChild(warn);
      if (api && api.setCanProceed) api.setCanProceed(true); // не блокируем тестовый поток
      return;
    }

    // UI wrapper
    const wrap = document.createElement("div");
    wrap.className = "mx-tap";

    const grid = document.createElement("div");
    grid.className = "mx-tap__grid";
    grid.setAttribute("role", "group");
    grid.setAttribute("aria-label", "Выбери один ответ");

    const hint = document.createElement("div");
    hint.className = "mx-tap__hint";
    hint.innerHTML = lockNextUntilCorrect
      ? `Нажми на правильный ответ. <strong>Далее</strong> станет доступно после верного выбора.`
      : `Нажми на ответ. Можно перейти <strong>Далее</strong> после выбора.`;

    wrap.appendChild(grid);
    wrap.appendChild(hint);

    // Internal state for this render
    let solved = false;

    // Tell router whether Next is allowed
    if (api && api.setCanProceed) {
      api.setCanProceed(!lockNextUntilCorrect); // если lock — то пока нельзя
    }

    const letters = ["A", "B", "C", "D"];

    choices.forEach((label, idx) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "mx-option";
      btn.setAttribute("data-choice-index", String(idx));

      const badge = document.createElement("span");
      badge.className = "mx-option__badge";
      badge.textContent = letters[idx] || String(idx + 1);

      const text = document.createElement("span");
      text.textContent = String(label);

      btn.appendChild(badge);
      btn.appendChild(text);

      btn.addEventListener("click", () => {
        if (solved) return;

        // Clean previous marks
        Array.from(grid.querySelectorAll(".mx-option")).forEach(x => {
          x.classList.remove("is-correct", "is-wrong");
        });

        const isCorrect = (idx === correctIndex);

        if (isCorrect) {
          btn.classList.add("is-correct");
          solved = true;

          // Allow Next
          if (api && api.setCanProceed) api.setCanProceed(true);

          // Feedback
          if (MX.feedback?.showToast) MX.feedback.showToast("Верно!", "success", 750);
          if (MX.feedback?.pulseSuccess) MX.feedback.pulseSuccess();
          if (MX.feedback?.highlightZone) MX.feedback.highlightZone("success");
          if (MX.audio?.playSound) MX.audio.playSound("success");

          // Persist "solved" flag for this mission in session cache (optional)
          if (api && api.setSessionFlag) api.setSessionFlag("tapSolved", true);

          // Auto-advance if configured
          if (autoAdvance && api && typeof api.onSolved === "function") {
            window.setTimeout(() => api.onSolved(), 450);
          }
        } else {
          btn.classList.add("is-wrong");

          // Feedback
          if (MX.feedback?.showToast) MX.feedback.showToast("Не совсем. Попробуй ещё!", "fail", 900);
          if (MX.feedback?.pulseFail) MX.feedback.pulseFail();
          if (MX.feedback?.highlightZone) MX.feedback.highlightZone("fail");
          if (MX.audio?.playSound) MX.audio.playSound("fail");
        }
      });

      grid.appendChild(btn);
    });

    container.appendChild(wrap);

    // Restore session solved if present
    if (api && api.getSessionFlag && api.getSessionFlag("tapSolved") === true) {
      solved = true;
      if (api.setCanProceed) api.setCanProceed(true);
    }
  }

  MX.plugins.tap = { render: tapSelectRender };

  // =========================
  // 8.3 Router integration (patch renderMission + next gating)
  // =========================

  // Session data per mission for plugin state (not persisted to localStorage)
  const sessionDataByMission = new Map();

  function getSessionData(missionId) {
    if (!sessionDataByMission.has(missionId)) {
      sessionDataByMission.set(missionId, {});
    }
    return sessionDataByMission.get(missionId);
  }

  // Patch renderMission to call plugin renderer if type matches
  const originalRenderMission = MX.router.renderMission;
  MX.router.renderMission = function patchedRenderMission(mission, variant) {
    // Call original to update header/title/icon/etc.
    originalRenderMission.call(this, mission, variant);

    // After original render, decide plugin
    const currentId = MX.state.currentMissionId;
    const currentMission = MX.router.getMissionById(currentId);
    if (!currentMission) return;

    const container = document.getElementById("mx-interactive");
    if (!container) return;

    // Default: allow next (router block 5 behavior)
    let canProceed = true;

    function setCanProceed(val) {
      canProceed = !!val;
      const nextBtn = document.getElementById("mx-next");
      if (nextBtn) nextBtn.disabled = !canProceed;
    }

    const session = getSessionData(currentMission.id);

    const api = {
      setCanProceed,
      onSolved: () => {
        // On solved: complete + goNext (uses router logic)
        MX.router.completeMission(currentMission.id);
        // If last mission -> router handles staying
        if (currentMission.id < MX.router.TOTAL_MISSIONS) {
          MX.router.goNext();
          if (MX.audio?.playSound) MX.audio.playSound("step");
        }
      },
      setSessionFlag: (k, v) => { session[k] = v; },
      getSessionFlag: (k) => session[k]
    };

    // If mission is tap, render plugin
    if (currentMission.type === "tap" && MX.plugins.tap && typeof MX.plugins.tap.render === "function") {
      MX.plugins.tap.render(container, currentMission, variant, api);
      // Note: plugin may disable Next until solved
      return;
    }

    // Not a tap mission -> ensure Next enabled
    setCanProceed(true);
  };

  // Patch Next click: if mission is tap and Next is disabled, do nothing (already disabled).
  // If mission is tap and Next is enabled, treat as solved-confirmation flow:
  // completeMission + goNext (unless autoAdvance already did it).
  const nextBtn = document.getElementById("mx-next");
  if (nextBtn && !nextBtn._mxTapPatched) {
    nextBtn._mxTapPatched = true;

    nextBtn.addEventListener("click", () => {
      const currentId = MX.state.currentMissionId;
      const m = MX.router.getMissionById(currentId);
      if (!m) return;

      // If tap mission: ensure it's solvable state
      if (m.type === "tap") {
        const session = getSessionData(m.id);
        // If not solved, button should be disabled; extra guard:
        if (!session.tapSolved) return;

        // If solved but user presses Next (when autoAdvance=false):
        if (!MX.state.completed.includes(m.id)) {
          MX.router.completeMission(m.id);
        }
        if (m.id < MX.router.TOTAL_MISSIONS) {
          MX.router.goNext();
          if (MX.audio?.playSound) MX.audio.playSound("step");
        }
      }
    }, true); // capture to run early
  }

  // =========================
  // 8.4 Demo: make mission #2 a Tap Select example
  // Можно удалить позже — это только чтобы сразу протестировать.
  // =========================
  try {
    const m2 = MX.router.MISSIONS[1]; // id=2
    if (m2) {
      m2.type = "tap";
      // Replace its variants with proper tap config
      m2.variants = [
        {
          v: 1,
          title: "Hot or Cold? (demo RU)",
          desc: "Выбери: где жарко?",
          tap: { choices: ["Антарктида", "Сахара", "Арктика", "Гренландия"], correctIndex: 1, autoAdvance: true, lockNextUntilCorrect: true }
        },
        {
          v: 2,
          title: "Быстрый выбор (demo)",
          desc: "Где бывает снег круглый год?",
          tap: { choices: ["Пустыня", "Горы", "Пляж"], correctIndex: 1, autoAdvance: true, lockNextUntilCorrect: true }
        },
        {
          v: 3,
          title: "Вопрос (demo)",
          desc: "Что летает в небе?",
          tap: { choices: ["Самолёт", "Кастрюля", "Карандаш", "Подушка"], correctIndex: 0, autoAdvance: true, lockNextUntilCorrect: true }
        },
        {
          v: 4,
          title: "Вопрос (demo)",
          desc: "Что надевают на голову?",
          tap: { choices: ["Шапка", "Книга", "Вилка"], correctIndex: 0, autoAdvance: true, lockNextUntilCorrect: true }
        },
        {
          v: 5,
          title: "Вопрос (demo)",
          desc: "Где покупают продукты?",
          tap: { choices: ["В магазине", "На Луне", "В море"], correctIndex: 0, autoAdvance: true, lockNextUntilCorrect: true }
        }
      ];
    }
  } catch (e) {}

  // Re-render current mission to apply plugin if needed
  const startId = MX.state.currentMissionId || 1;
  MX.router.goTo(startId);
});
</script>
<!-- =========================
BLOCK 9: Интерактив-плагин Multi-Select (несколько правильных)
Что даёт:
- Toggle выбора вариантов
- Кнопка “Готово”
- Проверка: выбраны все правильные и нет лишних
- Частичный фидбек (опционально)
Интеграция:
- MX.plugins.multi.render(...)
- Патчит MX.router.renderMission() (дополняет патч из блока 8) для mission.type === "multi"
- Гейтинг Next: для multi мы по умолчанию блокируем Next до успешной проверки
Формат данных variant для multi:
{
  title, desc,
  multi: {
    choices: ["...", "...", "...", "..."],  // 3–6 вариантов (рекомендую 3–5)
    correctIndexes: [0,2],                  // массив правильных индексов
    allowPartialFeedback: true|false,       // показывать подсказку "ещё X" (по умолчанию true)
    lockNextUntilCorrect: true|false,       // по умолчанию true
    autoAdvance: true|false                 // по умолчанию false (обычно лучше после "Готово" показать успех и ждать Next)
  }
}
========================= -->

<style>
  /* =========================
  BLOCK 9: Multi-select UI
  ========================= */

  .mx-multi{
    display:flex;
    flex-direction:column;
    gap: 10px;
  }

  .mx-multi__grid{
    display:grid;
    grid-template-columns: 1fr;
    gap: 10px;
  }

  .mx-check{
    width:100%;
    text-align:left;
    border-radius: 16px;
    padding: 12px 12px;
    border: 1px solid rgba(0,0,0,.10);
    background: rgba(255,255,255,.85);
    font-weight: 950;
    font-size: 14px;
    line-height: 1.2;
    cursor:pointer;
    user-select:none;
    display:flex;
    align-items:flex-start;
    gap: 10px;
    box-shadow: 0 6px 14px rgba(0,0,0,.06);
    transition: transform .12s ease, box-shadow .12s ease;
  }
  .mx-check:active{ transform: translateY(1px); }

  .mx-check__box{
    width: 26px;
    height: 26px;
    border-radius: 10px;
    border: 2px solid rgba(0,0,0,.16);
    background: rgba(255,255,255,.75);
    display:flex;
    align-items:center;
    justify-content:center;
    flex: 0 0 auto;
    margin-top: 1px;
    color: transparent;
    font-weight: 1000;
    transition: background .12s ease, border-color .12s ease, color .12s ease;
  }

  .mx-check.is-selected .mx-check__box{
    border-color: rgba(74,144,217,.55);
    background: rgba(74,144,217,.14);
    color: var(--primary);
  }

  .mx-check.is-correct{
    border-color: rgba(76,175,80,.55);
    background: rgba(76,175,80,.10);
  }
  .mx-check.is-wrong{
    border-color: rgba(244,67,54,.50);
    background: rgba(244,67,54,.08);
  }

  .mx-multi__actions{
    display:flex;
    gap: 10px;
    align-items:center;
    justify-content:space-between;
  }

  .mx-multi__status{
    font-size: 13px;
    font-weight: 850;
    color: var(--muted);
    line-height: 1.25;
  }

  .mx-btn--small{
    width: auto;
    padding: 10px 12px;
    border-radius: 14px;
    font-size: 13px;
  }

  @media (min-width: 520px){
    .mx-multi__grid{ grid-template-columns: 1fr 1fr; }
  }

  @media (prefers-reduced-motion: reduce){
    .mx-check{ transition:none !important; }
    .mx-check__box{ transition:none !important; }
  }
</style>

<script>
document.addEventListener('DOMContentLoaded', () => {
  "use strict";

  window.MX = window.MX || {};
  if (!MX.router || !MX.storage || !MX.state) return;

  MX.plugins = MX.plugins || {};

  // If Block 8 created session store + patched renderMission, we reuse it.
  // If not, we create our own minimal session store & patch now.
  const _sessionDataByMission = MX._sessionDataByMission || new Map();
  MX._sessionDataByMission = _sessionDataByMission;

  function getSessionData(missionId) {
    if (!_sessionDataByMission.has(missionId)) _sessionDataByMission.set(missionId, {});
    return _sessionDataByMission.get(missionId);
  }

  // =========================
  // 9.1 Plugin renderer
  // =========================
  function multiRender(container, mission, variant, api) {
    if (!container) return;
    container.innerHTML = "";

    const cfg = (variant && variant.multi) ? variant.multi : null;

    const choices = (cfg && Array.isArray(cfg.choices)) ? cfg.choices.slice(0, 6) : [];
    const correct = (cfg && Array.isArray(cfg.correctIndexes)) ? cfg.correctIndexes.map(x => Number.parseInt(x, 10)) : [];
    const allowPartialFeedback = (cfg && typeof cfg.allowPartialFeedback === "boolean") ? cfg.allowPartialFeedback : true;
    const lockNextUntilCorrect = (cfg && typeof cfg.lockNextUntilCorrect === "boolean") ? cfg.lockNextUntilCorrect : true;
    const autoAdvance = (cfg && typeof cfg.autoAdvance === "boolean") ? cfg.autoAdvance : false;

    if (!choices.length || !correct.length) {
      const warn = document.createElement("div");
      warn.className = "mx-placeholder";
      warn.innerHTML = `
        <div class="mx-placeholder__icon" aria-hidden="true">
          ${MX.icons?.renderIcon ? MX.icons.renderIcon("puzzle", { size: "lg", label: "Пазл" }) : ""}
        </div>
        <div class="mx-placeholder__text">
          <div class="mx-placeholder__title">Multi-Select не настроен</div>
          <div class="mx-placeholder__sub">Нужно добавить variant.multi.choices и variant.multi.correctIndexes.</div>
        </div>
      `;
      container.appendChild(warn);
      if (api?.setCanProceed) api.setCanProceed(true);
      return;
    }

    // Normalize correct set
    const correctSet = new Set(correct.filter(i => Number.isInteger(i) && i >= 0 && i < choices.length));

    const wrap = document.createElement("div");
    wrap.className = "mx-multi";

    const grid = document.createElement("div");
    grid.className = "mx-multi__grid";
    grid.setAttribute("role", "group");
    grid.setAttribute("aria-label", "Выбери несколько вариантов");

    const actions = document.createElement("div");
    actions.className = "mx-multi__actions";

    const status = document.createElement("div");
    status.className = "mx-multi__status";
    status.textContent = "Выбери все подходящие варианты и нажми «Готово».";

    const btnDone = document.createElement("button");
    btnDone.type = "button";
    btnDone.className = "mx-btn mx-btn--primary mx-btn--small";
    btnDone.textContent = "Готово";

    actions.appendChild(status);
    actions.appendChild(btnDone);

    wrap.appendChild(grid);
    wrap.appendChild(actions);
    container.appendChild(wrap);

    // Internal state
    const session = api?.getSessionFlag ? null : null; // just to keep structure similar
    let selected = new Set();

    // Restore session state if exists
    if (api?.getSessionFlag) {
      const savedSel = api.getSessionFlag("multiSelected");
      const savedSolved = api.getSessionFlag("multiSolved");
      if (Array.isArray(savedSel)) {
        selected = new Set(savedSel.map(x => Number.parseInt(x, 10)).filter(x => Number.isInteger(x)));
      }
      if (savedSolved === true) {
        // already solved -> allow proceed
        if (api.setCanProceed) api.setCanProceed(true);
      }
    }

    // Gating next
    if (api?.setCanProceed) {
      api.setCanProceed(!lockNextUntilCorrect); // lock -> false until solved
    }

    function renderChoices() {
      grid.innerHTML = "";
      choices.forEach((label, idx) => {
        const item = document.createElement("button");
        item.type = "button";
        item.className = "mx-check";
        item.setAttribute("data-choice-index", String(idx));

        if (selected.has(idx)) item.classList.add("is-selected");

        const box = document.createElement("span");
        box.className = "mx-check__box";
        box.textContent = "✓";

        const text = document.createElement("span");
        text.textContent = String(label);

        item.appendChild(box);
        item.appendChild(text);

        item.addEventListener("click", () => {
          // If already solved, ignore toggles
          if (api?.getSessionFlag && api.getSessionFlag("multiSolved") === true) return;

          if (selected.has(idx)) selected.delete(idx);
          else selected.add(idx);

          if (api?.setSessionFlag) {
            api.setSessionFlag("multiSelected", Array.from(selected));
          }

          renderChoices();

          const count = selected.size;
          status.textContent = count === 0
            ? "Выбери все подходящие варианты и нажми «Готово»."
            : `Выбрано: ${count}. Нажми «Готово».`;
        });

        grid.appendChild(item);
      });
    }

    function markResults(isAllCorrect, wrongIndexes = [], correctIndexes = []) {
      const all = Array.from(grid.querySelectorAll(".mx-check"));
      all.forEach(btn => {
        btn.classList.remove("is-correct","is-wrong");
        const idx = Number.parseInt(btn.getAttribute("data-choice-index") || "-1", 10);
        if (wrongIndexes.includes(idx)) btn.classList.add("is-wrong");
        if (correctIndexes.includes(idx)) btn.classList.add("is-correct");
      });

      if (isAllCorrect) {
        btnDone.disabled = true;
        btnDone.textContent = "Отлично!";
      }
    }

    function evaluateSelection() {
      const sel = new Set(selected);

      // Condition: sel == correctSet
      let ok = true;

      // Must not contain extras
      for (const x of sel) {
        if (!correctSet.has(x)) { ok = false; break; }
      }
      // Must contain all correct
      if (ok) {
        for (const x of correctSet) {
          if (!sel.has(x)) { ok = false; break; }
        }
      }

      return ok;
    }

    function partialFeedbackText() {
      // How many missing correct answers?
      let missing = 0;
      for (const x of correctSet) {
        if (!selected.has(x)) missing++;
      }
      // Extras count
      let extras = 0;
      for (const x of selected) {
        if (!correctSet.has(x)) extras++;
      }

      if (missing === 0 && extras === 0) return "Верно!";
      if (missing > 0 && extras === 0) return `Почти! Не хватает ещё: ${missing}.`;
      if (missing === 0 && extras > 0) return `Почти! Убери лишние: ${extras}.`;
      return `Почти! Убери лишние и добавь нужные.`;
    }

    btnDone.addEventListener("click", () => {
      // If solved already, do nothing
      if (api?.getSessionFlag && api.getSessionFlag("multiSolved") === true) return;

      const ok = evaluateSelection();

      if (ok) {
        // Mark solved
        if (api?.setSessionFlag) api.setSessionFlag("multiSolved", true);
        if (api?.setCanProceed) api.setCanProceed(true);

        // Highlight correct selections
        markResults(true, [], Array.from(selected));

        // Feedback
        if (MX.feedback?.showToast) MX.feedback.showToast("Верно! Отличный выбор!", "success", 900);
        if (MX.feedback?.pulseSuccess) MX.feedback.pulseSuccess();
        if (MX.feedback?.highlightZone) MX.feedback.highlightZone("success");
        if (MX.audio?.playSound) MX.audio.playSound("success");

        status.textContent = "Супер! Можно нажимать «Далее».";

        if (autoAdvance && api?.onSolved) {
          window.setTimeout(() => api.onSolved(), 550);
        }
      } else {
        // Compute wrong & correct (optional marking)
        const wrong = [];
        const correctChosen = [];
        selected.forEach(i => {
          if (!correctSet.has(i)) wrong.push(i);
          else correctChosen.push(i);
        });

        // Mark wrong picks (and optionally mark correct picks)
        markResults(false, wrong, correctChosen);

        // Feedback
        if (MX.feedback?.showToast) MX.feedback.showToast("Не совсем. Попробуй ещё!", "fail", 950);
        if (MX.feedback?.pulseFail) MX.feedback.pulseFail();
        if (MX.feedback?.highlightZone) MX.feedback.highlightZone("fail");
        if (MX.audio?.playSound) MX.audio.playSound("fail");

        status.textContent = allowPartialFeedback ? partialFeedbackText() : "Попробуй ещё раз: выбери все правильные варианты.";
      }
    });

    // Initial render
    renderChoices();

    // If already solved: lock UI appearance
    if (api?.getSessionFlag && api.getSessionFlag("multiSolved") === true) {
      if (api.setCanProceed) api.setCanProceed(true);
      btnDone.disabled = true;
      btnDone.textContent = "Отлично!";
      status.textContent = "Уже выполнено. Можно нажимать «Далее».";
      // Mark chosen as correct
      const all = Array.from(selected);
      window.setTimeout(() => markResults(true, [], all), 0);
    }
  }

  MX.plugins.multi = { render: multiRender };

  // =========================
  // 9.2 Extend router integration
  // We rely on the fact that Block 8 already patched MX.router.renderMission with plugin logic.
  // Here we patch it again, but safely: keep previous patched function as base.
  // =========================
  const baseRenderMission = MX.router.renderMission;

  MX.router.renderMission = function patchedRenderMission_Multi(mission, variant) {
    // call existing patched render (from block 8) which also handles "tap"
    baseRenderMission.call(this, mission, variant);

    const currentId = MX.state.currentMissionId;
    const currentMission = MX.router.getMissionById(currentId);
    if (!currentMission) return;

    // Only act for multi
    if (currentMission.type !== "multi") return;

    const container = document.getElementById("mx-interactive");
    if (!container) return;

    // API consistent with Block 8
    let canProceed = true;
    function setCanProceed(val) {
      canProceed = !!val;
      const nextBtn = document.getElementById("mx-next");
      if (nextBtn) nextBtn.disabled = !canProceed;
    }
    const session = getSessionData(currentMission.id);

    const api = {
      setCanProceed,
      onSolved: () => {
        MX.router.completeMission(currentMission.id);
        if (currentMission.id < MX.router.TOTAL_MISSIONS) {
          MX.router.goNext();
          if (MX.audio?.playSound) MX.audio.playSound("step");
        }
      },
      setSessionFlag: (k, v) => { session[k] = v; },
      getSessionFlag: (k) => session[k]
    };

    // Render multi plugin
    if (MX.plugins.multi && typeof MX.plugins.multi.render === "function") {
      MX.plugins.multi.render(container, currentMission, variant, api);
      return;
    }

    setCanProceed(true);
  };

  // Patch Next click similarly to tap: allow next only if solved when locked
  const nextBtn = document.getElementById("mx-next");
  if (nextBtn && !nextBtn._mxMultiPatched) {
    nextBtn._mxMultiPatched = true;

    nextBtn.addEventListener("click", () => {
      const id = MX.state.currentMissionId;
      const m = MX.router.getMissionById(id);
      if (!m) return;
      if (m.type !== "multi") return;

      const session = getSessionData(m.id);
      // If not solved, button should be disabled; extra guard:
      if (!session.multiSolved) return;

      // If solved and not marked completed yet, mark it
      if (!MX.state.completed.includes(m.id)) {
        MX.router.completeMission(m.id);
      }

      // If autoAdvance=false, user presses Next:
      if (m.id < MX.router.TOTAL_MISSIONS) {
        MX.router.goNext();
        if (MX.audio?.playSound) MX.audio.playSound("step");
      }
    }, true);
  }

  // =========================
  // 9.3 Demo: make mission #5 a Multi-Select example
  // Можно удалить позже — только чтобы протестировать.
  // =========================
  try {
    const m5 = MX.router.MISSIONS[4]; // id=5
    if (m5) {
      m5.type = "multi";
      m5.icon = "suitcase";
      m5.variants = [
        {
          v: 1,
          title: "Что берут в поездку? (demo)",
          desc: "Выбери всё, что пригодится в путешествии.",
          multi: {
            choices: ["Паспорт", "Зубная щётка", "Кирпич", "Телефон"],
            correctIndexes: [0,1,3],
            allowPartialFeedback: true,
            lockNextUntilCorrect: true,
            autoAdvance: false
          }
        },
        {
          v: 2,
          title: "Собери рюкзак (demo)",
          desc: "Выбери полезные вещи для школы.",
          multi: {
            choices: ["Тетрадь", "Карандаш", "Игрушечный динозавр", "Учебник"],
            correctIndexes: [0,1,3],
            allowPartialFeedback: true,
            lockNextUntilCorrect: true,
            autoAdvance: false
          }
        },
        {
          v: 3,
          title: "Выбери вежливые слова (demo)",
          desc: "Какие слова вежливые?",
          multi: {
            choices: ["Пожалуйста", "Спасибо", "Дай быстро!", "Извините"],
            correctIndexes: [0,1,3],
            allowPartialFeedback: true,
            lockNextUntilCorrect: true,
            autoAdvance: false
          }
        },
        {
          v: 4,
          title: "Что полезно для здоровья? (demo)",
          desc: "Выбери полезные привычки.",
          multi: {
            choices: ["Спать вовремя", "Есть одни конфеты", "Пить воду", "Мыть руки"],
            correctIndexes: [0,2,3],
            allowPartialFeedback: true,
            lockNextUntilCorrect: true,
            autoAdvance: false
          }
        },
        {
          v: 5,
          title: "Что можно взять на прогулку? (demo)",
          desc: "Выбери подходящие вещи.",
          multi: {
            choices: ["Шапка", "Лёгкая куртка", "Кастрюля", "Вода"],
            correctIndexes: [0,1,3],
            allowPartialFeedback: true,
            lockNextUntilCorrect: true,
            autoAdvance: false
          }
        }
      ];
    }
  } catch (e) {}

  // Re-render current mission
  MX.router.goTo(MX.state.currentMissionId || 1);
});
</script>
<!-- =========================
BLOCK 10: Интерактив-плагин Timer Challenge
Что даёт:
- Таймер 5–10 сек
- Прогресс-бар
- Tick звук (опционально)
- Кнопки “Старт/Стоп” и “Готово” (или автозавершение)
Интеграция:
- MX.plugins.timer.render(...)
- Расширяет патч MX.router.renderMission() для mission.type === "timer"
- Гейтинг Next: по умолчанию блокируем Next до успешного завершения
Формат данных variant для timer:
{
  title, desc,
  timer: {
    seconds: 5,                    // 5..10 (можно больше, но лучше 5-10)
    mode: "countdown" | "stopwatch",// countdown (по умолчанию)
    autoComplete: true|false,      // автозавершение при 0 (по умолчанию true)
    showDoneButton: true|false,    // показывать "Готово" (по умолчанию false если autoComplete=true)
    allowStop: true|false,         // кнопка Стоп (по умолчанию true)
    tickSound: true|false,         // тикать (по умолчанию false)
    lockNextUntilComplete: true|false, // по умолчанию true
    autoAdvance: true|false        // по умолчанию false
  }
}
========================= -->

<style>
  /* =========================
  BLOCK 10: Timer UI
  ========================= */

  .mx-timer{
    display:flex;
    flex-direction:column;
    gap: 12px;
  }

  .mx-timer__top{
    display:flex;
    align-items:center;
    justify-content:space-between;
    gap: 10px;
  }

  .mx-timer__clock{
    display:flex;
    align-items:baseline;
    gap: 6px;
  }

  .mx-timer__time{
    font-size: 28px;
    font-weight: 1000;
    letter-spacing: .5px;
  }

  .mx-timer__unit{
    font-size: 13px;
    font-weight: 900;
    color: var(--muted);
  }

  .mx-timer__badge{
    padding: 7px 10px;
    border-radius: 999px;
    font-size: 12px;
    font-weight: 1000;
    background: rgba(255,152,0,.14);
    color: var(--warning);
    border: 1px solid rgba(255,152,0,.25);
    white-space: nowrap;
  }

  .mx-timerbar{
    width: 100%;
    height: 14px;
    border-radius: 999px;
    background: rgba(0,0,0,.06);
    overflow:hidden;
    border: 1px solid rgba(0,0,0,.06);
  }
  .mx-timerbar__fill{
    height: 100%;
    width: 0%;
    border-radius: 999px;
    background: linear-gradient(90deg, var(--warning), var(--accent));
    transition: width .10s linear;
  }

  .mx-timer__actions{
    display:flex;
    gap: 10px;
  }

  .mx-btn--warning{
    background: linear-gradient(180deg, rgba(255,152,0,1), rgba(255,152,0,.88));
    color: #fff;
    border-color: rgba(255,152,0,.35);
  }

  .mx-btn--danger{
    background: linear-gradient(180deg, rgba(244,67,54,1), rgba(244,67,54,.88));
    color: #fff;
    border-color: rgba(244,67,54,.35);
  }

  .mx-timer__hint{
    font-size: 13px;
    font-weight: 850;
    color: var(--muted);
    line-height: 1.25;
  }
</style>

<script>
document.addEventListener('DOMContentLoaded', () => {
  "use strict";

  window.MX = window.MX || {};
  if (!MX.router || !MX.storage || !MX.state) return;

  MX.plugins = MX.plugins || {};
  const _sessionDataByMission = MX._sessionDataByMission || new Map();
  MX._sessionDataByMission = _sessionDataByMission;

  function getSessionData(missionId) {
    if (!_sessionDataByMission.has(missionId)) _sessionDataByMission.set(missionId, {});
    return _sessionDataByMission.get(missionId);
  }

  // =========================
  // 10.1 Plugin renderer
  // =========================
  function timerRender(container, mission, variant, api) {
    if (!container) return;
    container.innerHTML = "";

    const cfg = (variant && variant.timer) ? variant.timer : null;

    const seconds = Math.max(1, Math.min(60, Number.parseInt(cfg?.seconds ?? 5, 10) || 5));
    const mode = (cfg?.mode === "stopwatch") ? "stopwatch" : "countdown";
    const autoComplete = (typeof cfg?.autoComplete === "boolean") ? cfg.autoComplete : true;
    const showDoneButton = (typeof cfg?.showDoneButton === "boolean") ? cfg.showDoneButton : !autoComplete;
    const allowStop = (typeof cfg?.allowStop === "boolean") ? cfg.allowStop : true;
    const tickSound = (typeof cfg?.tickSound === "boolean") ? cfg.tickSound : false;
    const lockNextUntilComplete = (typeof cfg?.lockNextUntilComplete === "boolean") ? cfg.lockNextUntilComplete : true;
    const autoAdvance = (typeof cfg?.autoAdvance === "boolean") ? cfg.autoAdvance : false;

    const session = api?.getSessionFlag ? null : null;

    // State per mission render
    let running = false;
    let done = false;
    let remainingMs = seconds * 1000;
    let elapsedMs = 0;
    let timerId = null;
    let lastTickAt = 0;

    // Restore session if existed
    if (api?.getSessionFlag) {
      const savedDone = api.getSessionFlag("timerDone");
      if (savedDone === true) done = true;
    }

    // Gating next
    if (api?.setCanProceed) {
      api.setCanProceed(!lockNextUntilComplete || done);
    }

    // Build UI
    const wrap = document.createElement("div");
    wrap.className = "mx-timer";

    const top = document.createElement("div");
    top.className = "mx-timer__top";

    const clock = document.createElement("div");
    clock.className = "mx-timer__clock";

    const time = document.createElement("div");
    time.className = "mx-timer__time";
    time.textContent = formatTime(mode === "countdown" ? remainingMs : elapsedMs);

    const unit = document.createElement("div");
    unit.className = "mx-timer__unit";
    unit.textContent = "сек";

    clock.appendChild(time);
    clock.appendChild(unit);

    const badge = document.createElement("div");
    badge.className = "mx-timer__badge";
    badge.textContent = mode === "countdown" ? `Отсчёт: ${seconds}s` : `Секундомер`;

    top.appendChild(clock);
    top.appendChild(badge);

    const bar = document.createElement("div");
    bar.className = "mx-timerbar";
    bar.setAttribute("role", "progressbar");
    bar.setAttribute("aria-valuemin", "0");
    bar.setAttribute("aria-valuemax", String(seconds * 1000));
    bar.setAttribute("aria-valuenow", "0");

    const fill = document.createElement("div");
    fill.className = "mx-timerbar__fill";
    fill.style.width = "0%";
    bar.appendChild(fill);

    const actions = document.createElement("div");
    actions.className = "mx-timer__actions";

    const btnStartStop = document.createElement("button");
    btnStartStop.type = "button";
    btnStartStop.className = "mx-btn mx-btn--warning";
    btnStartStop.textContent = done ? "Готово" : "Старт";

    const btnDone = document.createElement("button");
    btnDone.type = "button";
    btnDone.className = "mx-btn mx-btn--primary";
    btnDone.textContent = "Я сделал!";
    btnDone.style.display = showDoneButton ? "flex" : "none";

    if (!allowStop) {
      // If stop not allowed, we treat same button as Start only
      // and disable changes while running
    }

    actions.appendChild(btnStartStop);
    actions.appendChild(btnDone);

    const hint = document.createElement("div");
    hint.className = "mx-timer__hint";
    hint.textContent = mode === "countdown"
      ? "Нажми «Старт» и дождись окончания."
      : "Нажми «Старт», а потом «Стоп» или «Я сделал!».";

    wrap.appendChild(top);
    wrap.appendChild(bar);
    wrap.appendChild(actions);
    wrap.appendChild(hint);
    container.appendChild(wrap);

    function updateUI() {
      const curMs = (mode === "countdown") ? remainingMs : elapsedMs;
      time.textContent = formatTime(curMs);

      const pct = (mode === "countdown")
        ? Math.round(((seconds * 1000 - remainingMs) / (seconds * 1000)) * 100)
        : Math.round((elapsedMs / (seconds * 1000)) * 100);

      const safePct = Math.max(0, Math.min(100, pct));
      fill.style.width = `${safePct}%`;

      bar.setAttribute("aria-valuenow", String(curMs));

      if (done) {
        btnStartStop.textContent = "Готово";
        btnStartStop.disabled = true;
        btnStartStop.classList.remove("mx-btn--warning");
        btnStartStop.classList.add("mx-btn--primary");
        if (btnDone) btnDone.disabled = true;
        hint.textContent = "Отлично! Можно нажимать «Далее».";
      } else {
        if (!running) {
          btnStartStop.textContent = (mode === "stopwatch" && elapsedMs > 0) ? (allowStop ? "Стоп" : "Старт") : "Старт";
        } else {
          btnStartStop.textContent = allowStop ? "Стоп" : "Идёт...";
        }
      }
    }

    function tick(now) {
      if (!running || done) return;

      // Update time
      if (mode === "countdown") {
        remainingMs -= 100;
        if (remainingMs <= 0) {
          remainingMs = 0;
          if (autoComplete) {
            completeTimer();
            return;
          } else {
            running = false;
          }
        }
      } else {
        elapsedMs += 100;
        if (elapsedMs >= seconds * 1000) {
          elapsedMs = seconds * 1000;
          if (autoComplete) {
            completeTimer();
            return;
          } else {
            running = false;
          }
        }
      }

      // Optional tick sound (not every 100ms)
      if (tickSound && MX.audio?.playSound) {
        const t = Date.now();
        if (t - lastTickAt >= 950) { // once per ~1s
          lastTickAt = t;
          MX.audio.playSound("step"); // reuse gentle "step"
        }
      }

      updateUI();
      timerId = window.setTimeout(tick, 100);
    }

    function startTimer() {
      if (done) return;
      if (running) return;

      // In stopwatch mode, if elapsed already at max, reset
      if (mode === "stopwatch" && elapsedMs >= seconds * 1000) {
        elapsedMs = 0;
      }
      if (mode === "countdown" && remainingMs <= 0) {
        remainingMs = seconds * 1000;
      }

      running = true;
      updateUI();
      timerId = window.setTimeout(tick, 100);
      if (MX.feedback?.showToast) MX.feedback.showToast("Поехали!", "step", 650);
      if (MX.audio?.playSound) MX.audio.playSound("step");
    }

    function stopTimer() {
      if (!running) return;
      running = false;
      if (timerId) window.clearTimeout(timerId);
      timerId = null;
      updateUI();
      if (MX.audio?.playSound) MX.audio.playSound("step");
    }

    function completeTimer() {
      if (done) return;
      done = true;
      running = false;
      if (timerId) window.clearTimeout(timerId);
      timerId = null;

      // Save session flag
      if (api?.setSessionFlag) api.setSessionFlag("timerDone", true);

      // Allow next
      if (api?.setCanProceed) api.setCanProceed(true);

      // Feedback
      if (MX.feedback?.showToast) MX.feedback.showToast("Супер! Таймер выполнен!", "success", 900);
      if (MX.feedback?.pulseSuccess) MX.feedback.pulseSuccess();
      if (MX.feedback?.highlightZone) MX.feedback.highlightZone("success");
      if (MX.audio?.playSound) MX.audio.playSound("success");

      updateUI();

      if (autoAdvance && api?.onSolved) {
        window.setTimeout(() => api.onSolved(), 600);
      }
    }

    btnStartStop.addEventListener("click", () => {
      if (done) return;

      if (!running) {
        startTimer();
        return;
      }

      // Running:
      if (!allowStop) return;

      // Stop pressed
      stopTimer();

      // If stopwatch mode and autoComplete=false, stopping can be treated as completion
      if (mode === "stopwatch" && !autoComplete) {
        completeTimer();
      }
    });

    if (btnDone) {
      btnDone.addEventListener("click", () => {
        if (done) return;
        // If countdown and timer not finished, we still allow manual completion (for "action+timer" style)
        completeTimer();
      });
    }

    // If previously done
    if (done) {
      // show full bar
      if (mode === "countdown") {
        remainingMs = 0;
      } else {
        elapsedMs = seconds * 1000;
      }
      updateUI();
    } else {
      updateUI();
    }

    // Cleanup when mission changes: not required now, but safe to stop timer if rerendered
    api?.setSessionFlag && api.setSessionFlag("_timerStopper", () => {
      try {
        if (timerId) window.clearTimeout(timerId);
      } catch (e) {}
    });
  }

  function formatTime(ms) {
    const s = Math.max(0, Math.round(ms / 1000));
    return String(s);
  }

  MX.plugins.timer = { render: timerRender };

  // =========================
  // 10.2 Extend router integration (similar to blocks 8-9)
  // =========================
  const baseRenderMission = MX.router.renderMission;

  MX.router.renderMission = function patchedRenderMission_Timer(mission, variant) {
    baseRenderMission.call(this, mission, variant);

    const currentId = MX.state.currentMissionId;
    const currentMission = MX.router.getMissionById(currentId);
    if (!currentMission) return;
    if (currentMission.type !== "timer") return;

    const container = document.getElementById("mx-interactive");
    if (!container) return;

    let canProceed = true;
    function setCanProceed(val) {
      canProceed = !!val;
      const nextBtn = document.getElementById("mx-next");
      if (nextBtn) nextBtn.disabled = !canProceed;
    }

    const session = getSessionData(currentMission.id);

    const api = {
      setCanProceed,
      onSolved: () => {
        MX.router.completeMission(currentMission.id);
        if (currentMission.id < MX.router.TOTAL_MISSIONS) {
          MX.router.goNext();
          if (MX.audio?.playSound) MX.audio.playSound("step");
        }
      },
      setSessionFlag: (k, v) => { session[k] = v; },
      getSessionFlag: (k) => session[k]
    };

    // Stop any prior timer if exists (when re-rendering same mission)
    if (typeof session._timerStopper === "function") {
      try { session._timerStopper(); } catch (e) {}
      session._timerStopper = null;
    }

    MX.plugins.timer.render(container, currentMission, variant, api);
  };

  // Patch Next click: if timer not done, button should be disabled; guard anyway
  const nextBtn = document.getElementById("mx-next");
  if (nextBtn && !nextBtn._mxTimerPatched) {
    nextBtn._mxTimerPatched = true;

    nextBtn.addEventListener("click", () => {
      const id = MX.state.currentMissionId;
      const m = MX.router.getMissionById(id);
      if (!m || m.type !== "timer") return;

      const session = getSessionData(m.id);
      if (!session.timerDone) return;

      if (!MX.state.completed.includes(m.id)) {
        MX.router.completeMission(m.id);
      }
      if (m.id < MX.router.TOTAL_MISSIONS) {
        MX.router.goNext();
        if (MX.audio?.playSound) MX.audio.playSound("step");
      }
    }, true);
  }

  // =========================
  // 10.3 Demo: make mission #10 a Timer example (5 сек)
  // Можно удалить позже.
  // =========================
  try {
    const m10 = MX.router.MISSIONS[9]; // id=10
    if (m10) {
      m10.type = "timer";
      m10.icon = "star";
      m10.variants = [
        {
          v: 1,
          title: "Быстро выбери! (demo)",
          desc: "У тебя 5 секунд. Готов?",
          timer: {
            seconds: 5,
            mode: "countdown",
            autoComplete: true,
            showDoneButton: false,
            allowStop: true,
            tickSound: false,
            lockNextUntilComplete: true,
            autoAdvance: false
          }
        },
        {
          v: 2,
          title: "Мини-таймер (demo)",
          desc: "Держись 7 секунд!",
          timer: {
            seconds: 7,
            mode: "countdown",
            autoComplete: true,
            showDoneButton: false,
            allowStop: true,
            tickSound: false,
            lockNextUntilComplete: true,
            autoAdvance: false
          }
        },
        {
          v: 3,
          title: "Секундомер (demo)",
          desc: "Нажми старт, потом стоп.",
          timer: {
            seconds: 6,
            mode: "stopwatch",
            autoComplete: false,
            showDoneButton: true,
            allowStop: true,
            tickSound: false,
            lockNextUntilComplete: true,
            autoAdvance: false
          }
        },
        {
          v: 4,
          title: "Таймер (demo)",
          desc: "Считаем 8 секунд!",
          timer: {
            seconds: 8,
            mode: "countdown",
            autoComplete: true,
            showDoneButton: false,
            allowStop: false,
            tickSound: false,
            lockNextUntilComplete: true,
            autoAdvance: false
          }
        },
        {
          v: 5,
          title: "Таймер (demo)",
          desc: "Дотяни до конца!",
          timer: {
            seconds: 5,
            mode: "countdown",
            autoComplete: true,
            showDoneButton: false,
            allowStop: true,
            tickSound: true,
            lockNextUntilComplete: true,
            autoAdvance: false
          }
        }
      ];
    }
  } catch (e) {}

  // Re-render current mission
  MX.router.goTo(MX.state.currentMissionId || 1);
});
</script>
<!-- =========================
BLOCK 11: Интерактив-плагин Action + Confirm
Что даёт:
- Показывает текст задания (variant.desc уже есть) + опциональный "actionHint"
- Кнопка “Я сделал!”
- Без проверки: нажал → считается выполненным, фидбек + (опционально) авто-переход
Интеграция:
- MX.plugins.action.render(...)
- Расширяет патч MX.router.renderMission() для mission.type === "action"
- Гейтинг Next: можно либо блокировать до нажатия, либо разрешать сразу (по умолчанию блокируем)
Формат данных variant для action:
{
  title, desc,
  action: {
    confirmText: "Я сделал!",          // текст кнопки
    subHint: "Можно попросить взрослого помочь.", // доп. подсказка (опционально)
    lockNextUntilConfirm: true|false,  // по умолчанию true
    autoAdvance: true|false            // по умолчанию false
  }
}
========================= -->

<style>
  /* =========================
  BLOCK 11: Action UI
  ========================= */

  .mx-action{
    display:flex;
    flex-direction:column;
    gap: 12px;
  }

  .mx-action__panel{
    border-radius: 16px;
    border: 1px solid rgba(0,0,0,.08);
    background: rgba(255,255,255,.80);
    padding: 12px;
  }

  .mx-action__title{
    font-weight: 1000;
    font-size: 15px;
    margin-bottom: 6px;
  }

  .mx-action__hint{
    font-size: 13px;
    font-weight: 850;
    color: var(--muted);
    line-height: 1.3;
  }

  .mx-action__confetti{
    display:none;
    margin-top: 10px;
    border-radius: 14px;
    padding: 10px 12px;
    background: linear-gradient(180deg, rgba(156,39,176,.10), rgba(74,144,217,.08));
    border: 1px solid rgba(156,39,176,.18);
    color: var(--text);
    font-weight: 950;
  }

  .mx-action__confetti.is-visible{
    display:block;
  }

  /* Tiny “sparkles” animation using gradients (lightweight) */
  @keyframes mxSparkle {
    0%   { transform: translateY(0) scale(1); opacity: 1; }
    100% { transform: translateY(-6px) scale(1.02); opacity: .98; }
  }
  .mx-action__confetti.is-visible{
    animation: mxSparkle .55s ease-out;
  }

  @media (prefers-reduced-motion: reduce){
    .mx-action__confetti.is-visible{ animation: none !important; }
  }
</style>

<script>
document.addEventListener('DOMContentLoaded', () => {
  "use strict";

  window.MX = window.MX || {};
  if (!MX.router || !MX.storage || !MX.state) return;

  MX.plugins = MX.plugins || {};
  const _sessionDataByMission = MX._sessionDataByMission || new Map();
  MX._sessionDataByMission = _sessionDataByMission;

  function getSessionData(missionId) {
    if (!_sessionDataByMission.has(missionId)) _sessionDataByMission.set(missionId, {});
    return _sessionDataByMission.get(missionId);
  }

  // =========================
  // 11.1 Plugin renderer
  // =========================
  function actionRender(container, mission, variant, api) {
    if (!container) return;
    container.innerHTML = "";

    const cfg = (variant && variant.action) ? variant.action : {};

    const confirmText = (typeof cfg.confirmText === "string" && cfg.confirmText.trim())
      ? cfg.confirmText.trim()
      : "Я сделал!";

    const subHint = (typeof cfg.subHint === "string" && cfg.subHint.trim())
      ? cfg.subHint.trim()
      : "";

    const lockNextUntilConfirm = (typeof cfg.lockNextUntilConfirm === "boolean")
      ? cfg.lockNextUntilConfirm
      : true;

    const autoAdvance = (typeof cfg.autoAdvance === "boolean")
      ? cfg.autoAdvance
      : false;

    // Session flags
    const already = api?.getSessionFlag ? (api.getSessionFlag("actionConfirmed") === true) : false;

    // Gating next
    if (api?.setCanProceed) {
      api.setCanProceed(!lockNextUntilConfirm || already);
    }

    // UI
    const wrap = document.createElement("div");
    wrap.className = "mx-action";

    const panel = document.createElement("div");
    panel.className = "mx-action__panel";

    const title = document.createElement("div");
    title.className = "mx-action__title";
    title.textContent = "Сделай действие:";

    const hint = document.createElement("div");
    hint.className = "mx-action__hint";
    hint.textContent = subHint || "Когда сделаешь — нажми кнопку ниже.";

    panel.appendChild(title);
    panel.appendChild(hint);

    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "mx-btn mx-btn--primary";
    btn.style.width = "100%";
    btn.textContent = confirmText;

    const conf = document.createElement("div");
    conf.className = "mx-action__confetti";
    conf.innerHTML = `
      <div style="font-weight:1000; margin-bottom:2px;">Ура! Отлично получилось!</div>
      <div style="font-weight:850; color: var(--muted); font-size:13px; line-height:1.25;">
        Миссия засчитана. Можно нажимать «Далее».
      </div>
    `;

    wrap.appendChild(panel);
    wrap.appendChild(btn);
    wrap.appendChild(conf);
    container.appendChild(wrap);

    function setConfirmedUI() {
      btn.disabled = true;
      btn.textContent = "Сделано!";
      conf.classList.add("is-visible");
      if (api?.setCanProceed) api.setCanProceed(true);
    }

    if (already) {
      setConfirmedUI();
      return;
    }

    btn.addEventListener("click", () => {
      // Mark confirmed
      if (api?.setSessionFlag) api.setSessionFlag("actionConfirmed", true);

      // Feedback
      if (MX.feedback?.showToast) MX.feedback.showToast("Супер! Засчитано.", "success", 900);
      if (MX.feedback?.pulseSuccess) MX.feedback.pulseSuccess();
      if (MX.feedback?.highlightZone) MX.feedback.highlightZone("success");
      if (MX.audio?.playSound) MX.audio.playSound("success");

      setConfirmedUI();

      // Optional: auto-complete & advance
      if (autoAdvance && api?.onSolved) {
        window.setTimeout(() => api.onSolved(), 650);
      }
    });
  }

  MX.plugins.action = { render: actionRender };

  // =========================
  // 11.2 Extend router integration for mission.type === "action"
  // =========================
  const baseRenderMission = MX.router.renderMission;

  MX.router.renderMission = function patchedRenderMission_Action(mission, variant) {
    baseRenderMission.call(this, mission, variant);

    const currentId = MX.state.currentMissionId;
    const currentMission = MX.router.getMissionById(currentId);
    if (!currentMission) return;
    if (currentMission.type !== "action") return;

    const container = document.getElementById("mx-interactive");
    if (!container) return;

    let canProceed = true;
    function setCanProceed(val) {
      canProceed = !!val;
      const nextBtn = document.getElementById("mx-next");
      if (nextBtn) nextBtn.disabled = !canProceed;
    }

    const session = getSessionData(currentMission.id);

    const api = {
      setCanProceed,
      onSolved: () => {
        MX.router.completeMission(currentMission.id);
        if (currentMission.id < MX.router.TOTAL_MISSIONS) {
          MX.router.goNext();
          if (MX.audio?.playSound) MX.audio.playSound("step");
        }
      },
      setSessionFlag: (k, v) => { session[k] = v; },
      getSessionFlag: (k) => session[k]
    };

    MX.plugins.action.render(container, currentMission, variant, api);
  };

  // Patch Next click guard for action (optional but consistent)
  const nextBtn = document.getElementById("mx-next");
  if (nextBtn && !nextBtn._mxActionPatched) {
    nextBtn._mxActionPatched = true;

    nextBtn.addEventListener("click", () => {
      const id = MX.state.currentMissionId;
      const m = MX.router.getMissionById(id);
      if (!m || m.type !== "action") return;

      const session = getSessionData(m.id);
      // If not confirmed, button should be disabled; extra guard:
      if (!session.actionConfirmed) return;

      if (!MX.state.completed.includes(m.id)) {
        MX.router.completeMission(m.id);
      }
      if (m.id < MX.router.TOTAL_MISSIONS) {
        MX.router.goNext();
        if (MX.audio?.playSound) MX.audio.playSound("step");
      }
    }, true);
  }

  // =========================
  // 11.3 Demo: make mission #12 an Action example
  // Можно удалить позже.
  // =========================
  try {
    const m12 = MX.router.MISSIONS[11]; // id=12
    if (m12) {
      m12.type = "action";
      m12.icon = "plane";
      m12.variants = [
        {
          v: 1,
          title: "Прыгни 5 раз! (demo)",
          desc: "Прыгни 5 раз на месте.",
          action: { confirmText: "Я прыгнул(а)!", subHint: "Можно считать вслух: 1…2…3…4…5.", lockNextUntilConfirm: true, autoAdvance: false }
        },
        {
          v: 2,
          title: "Потянись! (demo)",
          desc: "Потянись вверх 10 секунд.",
          action: { confirmText: "Я сделал(а)!", subHint: "Руки вверх, как супергерой.", lockNextUntilConfirm: true, autoAdvance: false }
        },
        {
          v: 3,
          title: "Найди предмет (demo)",
          desc: "Найди в комнате что-то круглое.",
          action: { confirmText: "Нашёл(ла)!", subHint: "Это может быть мяч, тарелка или часы.", lockNextUntilConfirm: true, autoAdvance: false }
        },
        {
          v: 4,
          title: "Замри! (demo)",
          desc: "Замри как статуя на 10 секунд.",
          action: { confirmText: "Я замёрз(ла)!", subHint: "Не двигайся — ты секретный агент.", lockNextUntilConfirm: true, autoAdvance: false }
        },
        {
          v: 5,
          title: "Дыхание агента (demo)",
          desc: "Сделай 3 медленных вдоха и выдоха.",
          action: { confirmText: "Готово!", subHint: "Вдох носом… выдох ртом…", lockNextUntilConfirm: true, autoAdvance: false }
        }
      ];
    }
  } catch (e) {}

  // Re-render current mission
  MX.router.goTo(MX.state.currentMissionId || 1);
});
</script>
<!-- =========================
BLOCK 12: Интерактив-плагин Creative
Состав:
• задание (variant.desc уже выводится карточкой)
• поле “Хочешь написать?” (опционально)
• “Готово!” → засчитать и продолжить
Контент НЕ хардкодим: всё приходит из missions_ru.json (позже).
Формат данных variant для creative:
{
  title, desc,
  creative: {
    enableInput: true|false,        // показать поле (по умолчанию true)
    placeholder: "Напиши тут...",   // placeholder (опционально)
    saveResponse: true|false,       // сохранять ответ ребёнка в localStorage (по умолчанию true)
    lockNextUntilDone: true|false,  // по умолчанию true
    autoAdvance: true|false,        // по умолчанию false
    doneText: "Готово!"             // текст кнопки (опционально)
  }
}
========================= -->

<style>
  /* =========================
  BLOCK 12: Creative UI
  ========================= */
  .mx-creative{
    display:flex;
    flex-direction:column;
    gap: 12px;
  }

  .mx-creative__panel{
    border-radius: 16px;
    border: 1px solid rgba(0,0,0,.08);
    background: rgba(255,255,255,.80);
    padding: 12px;
  }

  .mx-creative__label{
    font-weight: 1000;
    margin-bottom: 6px;
  }

  .mx-creative__hint{
    font-size: 13px;
    font-weight: 850;
    color: var(--muted);
    line-height: 1.3;
  }

  .mx-creative__input{
    width: 100%;
    border-radius: 14px;
    border: 1px solid rgba(0,0,0,.12);
    background: rgba(255,255,255,.92);
    padding: 10px 12px;
    font-weight: 900;
    font-size: 14px;
    line-height: 1.2;
    outline: none;
    box-shadow: 0 6px 14px rgba(0,0,0,.06);
  }

  .mx-creative__input:focus{
    box-shadow: var(--ring), 0 10px 20px rgba(0,0,0,.10);
    border-color: rgba(74,144,217,.35);
  }

  .mx-creative__doneNote{
    display:none;
    border-radius: 14px;
    padding: 10px 12px;
    background: linear-gradient(180deg, rgba(76,175,80,.10), rgba(255,255,255,.78));
    border: 1px solid rgba(76,175,80,.22);
    font-weight: 950;
  }
  .mx-creative__doneNote.is-visible{ display:block; }
</style>

<script>
document.addEventListener('DOMContentLoaded', () => {
  "use strict";

  window.MX = window.MX || {};
  if (!MX.router || !MX.storage || !MX.state) return;

  MX.plugins = MX.plugins || {};
  const _sessionDataByMission = MX._sessionDataByMission || new Map();
  MX._sessionDataByMission = _sessionDataByMission;

  function getSessionData(missionId) {
    if (!_sessionDataByMission.has(missionId)) _sessionDataByMission.set(missionId, {});
    return _sessionDataByMission.get(missionId);
  }

  // Key for storing creative responses (persisted)
  const CREATIVE_KEY = "mx_master_explorer_creative_answers";

  function loadCreativeAnswers() {
    try {
      const raw = localStorage.getItem(CREATIVE_KEY);
      if (!raw) return {};
      const obj = JSON.parse(raw);
      return (obj && typeof obj === "object") ? obj : {};
    } catch (e) {
      return {};
    }
  }

  function saveCreativeAnswers(obj) {
    try {
      localStorage.setItem(CREATIVE_KEY, JSON.stringify(obj || {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  // =========================
  // 12.1 Plugin renderer
  // =========================
  function creativeRender(container, mission, variant, api) {
    if (!container) return;
    container.innerHTML = "";

    const cfg = (variant && variant.creative) ? variant.creative : {};

    const enableInput = (typeof cfg.enableInput === "boolean") ? cfg.enableInput : true;
    const placeholder = (typeof cfg.placeholder === "string" && cfg.placeholder.trim())
      ? cfg.placeholder.trim()
      : "Хочешь написать? Можно одним словом или целым предложением.";
    const saveResponse = (typeof cfg.saveResponse === "boolean") ? cfg.saveResponse : true;
    const lockNextUntilDone = (typeof cfg.lockNextUntilDone === "boolean") ? cfg.lockNextUntilDone : true;
    const autoAdvance = (typeof cfg.autoAdvance === "boolean") ? cfg.autoAdvance : false;
    const doneText = (typeof cfg.doneText === "string" && cfg.doneText.trim()) ? cfg.doneText.trim() : "Готово!";

    // Session flag
    const alreadyDone = api?.getSessionFlag ? (api.getSessionFlag("creativeDone") === true) : false;

    // Gate Next
    if (api?.setCanProceed) api.setCanProceed(!lockNextUntilDone || alreadyDone);

    const wrap = document.createElement("div");
    wrap.className = "mx-creative";

    const panel = document.createElement("div");
    panel.className = "mx-creative__panel";

    const label = document.createElement("div");
    label.className = "mx-creative__label";
    label.textContent = "Творческое задание";

    const hint = document.createElement("div");
    hint.className = "mx-creative__hint";
    hint.textContent = enableInput
      ? "Можно просто придумать в голове, а можно написать ответ ниже."
      : "Придумай ответ в голове и нажми «Готово!».";

    panel.appendChild(label);
    panel.appendChild(hint);

    let input = null;
    if (enableInput) {
      input = document.createElement("textarea");
      input.className = "mx-creative__input";
      input.rows = 3;
      input.placeholder = placeholder;
      input.setAttribute("aria-label", "Ответ (необязательно)");
      panel.appendChild(document.createElement("div")).style.height = "10px";
      panel.appendChild(input);
    }

    const btnDone = document.createElement("button");
    btnDone.type = "button";
    btnDone.className = "mx-btn mx-btn--primary";
    btnDone.style.width = "100%";
    btnDone.textContent = doneText;

    const note = document.createElement("div");
    note.className = "mx-creative__doneNote";
    note.textContent = "Отлично! Засчитано. Можно нажимать «Далее».";

    wrap.appendChild(panel);
    wrap.appendChild(btnDone);
    wrap.appendChild(note);
    container.appendChild(wrap);

    // Restore saved response if any
    if (enableInput && input) {
      const answers = loadCreativeAnswers();
      const key = String(mission.id);
      if (typeof answers[key] === "string") {
        input.value = answers[key];
      }
    }

    function setDoneUI() {
      btnDone.disabled = true;
      btnDone.textContent = "Сделано!";
      note.classList.add("is-visible");
      if (api?.setCanProceed) api.setCanProceed(true);
    }

    if (alreadyDone) {
      setDoneUI();
      return;
    }

    btnDone.addEventListener("click", () => {
      // Save response if enabled
      if (saveResponse && enableInput && input) {
        const answers = loadCreativeAnswers();
        answers[String(mission.id)] = String(input.value || "").trim();
        saveCreativeAnswers(answers);
      }

      // Mark done in session
      if (api?.setSessionFlag) api.setSessionFlag("creativeDone", true);

      // Feedback
      if (MX.feedback?.showToast) MX.feedback.showToast("Круто! Засчитано.", "success", 900);
      if (MX.feedback?.pulseSuccess) MX.feedback.pulseSuccess();
      if (MX.feedback?.highlightZone) MX.feedback.highlightZone("success");
      if (MX.audio?.playSound) MX.audio.playSound("success");

      setDoneUI();

      if (autoAdvance && api?.onSolved) {
        window.setTimeout(() => api.onSolved(), 650);
      }
    });
  }

  MX.plugins.creative = { render: creativeRender };

  // =========================
  // 12.2 Extend router integration for mission.type === "creative"
  // =========================
  const baseRenderMission = MX.router.renderMission;

  MX.router.renderMission = function patchedRenderMission_Creative(mission, variant) {
    baseRenderMission.call(this, mission, variant);

    const currentId = MX.state.currentMissionId;
    const currentMission = MX.router.getMissionById(currentId);
    if (!currentMission) return;
    if (currentMission.type !== "creative") return;

    const container = document.getElementById("mx-interactive");
    if (!container) return;

    function setCanProceed(val) {
      const nextBtn = document.getElementById("mx-next");
      if (nextBtn) nextBtn.disabled = !val;
    }

    const session = getSessionData(currentMission.id);

    const api = {
      setCanProceed,
      onSolved: () => {
        MX.router.completeMission(currentMission.id);
        if (currentMission.id < MX.router.TOTAL_MISSIONS) {
          MX.router.goNext();
          if (MX.audio?.playSound) MX.audio.playSound("step");
        }
      },
      setSessionFlag: (k, v) => { session[k] = v; },
      getSessionFlag: (k) => session[k]
    };

    MX.plugins.creative.render(container, currentMission, variant, api);
  };

  // Patch Next guard for creative (consistent safety)
  const nextBtn = document.getElementById("mx-next");
  if (nextBtn && !nextBtn._mxCreativePatched) {
    nextBtn._mxCreativePatched = true;

    nextBtn.addEventListener("click", () => {
      const id = MX.state.currentMissionId;
      const m = MX.router.getMissionById(id);
      if (!m || m.type !== "creative") return;

      const session = getSessionData(m.id);
      if (!session.creativeDone) return;

      if (!MX.state.completed.includes(m.id)) {
        MX.router.completeMission(m.id);
      }
      if (m.id < MX.router.TOTAL_MISSIONS) {
        MX.router.goNext();
        if (MX.audio?.playSound) MX.audio.playSound("step");
      }
    }, true);
  }

  // =========================
  // 12.3 Demo: make mission #16 a Creative example (можно удалить)
  // =========================
  try {
    const m16 = MX.router.MISSIONS[15]; // id=16
    if (m16) {
      m16.type = "creative";
      m16.icon = "globe";
      m16.variants = [
        { v: 1, title: "Придумай страну (demo)", desc: "Придумай страну и её название!", creative: { enableInput:true, placeholder:"Например: Солнечная Лягушляндия", saveResponse:true, lockNextUntilDone:true, autoAdvance:false, doneText:"Готово!" } },
        { v: 2, title: "Страна мечты (demo)", desc: "Какая страна была бы твоей мечтой?", creative: { enableInput:true } },
        { v: 3, title: "Флаг в голове (demo)", desc: "Представь флаг своей страны.", creative: { enableInput:false } },
        { v: 4, title: "Животное (demo)", desc: "Какое животное живёт в твоей стране?", creative: { enableInput:true } },
        { v: 5, title: "Столица (demo)", desc: "Придумай столицу для своей страны.", creative: { enableInput:true } }
      ];
    }
  } catch (e) {}

  // Re-render current mission
  MX.router.goTo(MX.state.currentMissionId || 1);
});
</script>
<!-- =========================
BLOCK 13: Интерактив-плагин Drag & Drop (Pointer Events, mobile-first)
Самый сложный: делаем устойчиво для iOS/Android.
Состав:
• Pointer Events (pointerdown/move/up/cancel)
• draggable элементы
• drop зоны
• hit test (по boundingClientRect)
• snap-in + подсветка
• проверка после drop (или по кнопке)
Интеграция:
- MX.plugins.drag.render(...)
- Расширяет патч MX.router.renderMission() для mission.type === "drag"
Формат данных variant для drag:
{
  title, desc,
  drag: {
    items: [
      { id:"a", label:"Флаг", icon:"flag" },         // icon optional
      { id:"b", label:"Глобус", icon:"globe" }
    ],
    zones: [
      { id:"z1", label:"Страна 1" },
      { id:"z2", label:"Страна 2" }
    ],
    solution: { "a":"z2", "b":"z1" },               // itemId -> zoneId
    checkMode: "onDrop" | "button",                  // default "onDrop"
    lockNextUntilCorrect: true|false,                // default true
    autoAdvance: true|false,                         // default false
    showCheckButton: true|false,                     // default (checkMode==="button")
    showResetButton: true|false,                     // default true
    allowPartialFeedback: true|false                 // default true
  }
}
Результат: drag&drop работает на touch, корректно “липнет”, даёт фидбек.
========================= -->

<style>
  /* =========================
  BLOCK 13: Drag & Drop UI
  ========================= */

  .mx-dnd{
    display:flex;
    flex-direction:column;
    gap: 12px;
  }

  .mx-dnd__zones{
    display:grid;
    grid-template-columns: 1fr;
    gap: 10px;
  }

  .mx-dropzone{
    border-radius: 16px;
    border: 2px dashed rgba(0,0,0,.14);
    background: rgba(255,255,255,.65);
    padding: 12px;
    min-height: 62px;
    position: relative;
    overflow:hidden;
  }

  .mx-dropzone__label{
    font-weight: 1000;
    margin-bottom: 6px;
    color: rgba(0,0,0,.70);
    font-size: 14px;
  }

  .mx-dropzone.is-hot{
    border-color: rgba(74,144,217,.55);
    background: rgba(74,144,217,.08);
  }

  .mx-dropzone.is-correct{
    border-color: rgba(76,175,80,.60);
    background: rgba(76,175,80,.10);
  }

  .mx-dropzone.is-wrong{
    border-color: rgba(244,67,54,.55);
    background: rgba(244,67,54,.08);
  }

  .mx-dnd__tray{
    border-radius: 16px;
    border: 1px solid rgba(0,0,0,.10);
    background: rgba(255,255,255,.78);
    padding: 10px;
  }

  .mx-dnd__trayTitle{
    font-weight: 1000;
    margin-bottom: 8px;
    color: rgba(0,0,0,.65);
    font-size: 13px;
  }

  .mx-dnd__items{
    display:flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  .mx-draggable{
    border-radius: 16px;
    border: 1px solid rgba(0,0,0,.12);
    background: rgba(255,255,255,.92);
    padding: 10px 12px;
    font-weight: 1000;
    cursor: grab;
    user-select:none;
    touch-action: none; /* CRITICAL for pointer events on mobile */
    display:flex;
    align-items:center;
    gap: 8px;
    box-shadow: 0 10px 20px rgba(0,0,0,.10);
    position: relative;
    min-width: 120px;
  }

  .mx-draggable:active{ cursor: grabbing; }

  .mx-draggable__icon{
    width: 24px;
    height: 24px;
    border-radius: 10px;
    display:flex;
    align-items:center;
    justify-content:center;
    background: rgba(255,152,0,.14);
    color: var(--warning);
    flex: 0 0 auto;
  }

  .mx-draggable.is-dragging{
    opacity: .95;
    z-index: 50;
    box-shadow: 0 18px 38px rgba(0,0,0,.18);
  }

  .mx-dnd__actions{
    display:flex;
    gap: 10px;
  }

  .mx-dnd__status{
    font-size: 13px;
    font-weight: 900;
    color: var(--muted);
    line-height: 1.25;
  }

  .mx-btn--ghost{
    background: rgba(255,255,255,.75);
  }

  @media (min-width: 520px){
    .mx-dnd__zones{
      grid-template-columns: 1fr 1fr;
    }
  }
</style>

<script>
document.addEventListener('DOMContentLoaded', () => {
  "use strict";

  window.MX = window.MX || {};
  if (!MX.router || !MX.storage || !MX.state) return;

  MX.plugins = MX.plugins || {};
  const _sessionDataByMission = MX._sessionDataByMission || new Map();
  MX._sessionDataByMission = _sessionDataByMission;

  function getSessionData(missionId) {
    if (!_sessionDataByMission.has(missionId)) _sessionDataByMission.set(missionId, {});
    return _sessionDataByMission.get(missionId);
  }

  // =========================
  // 13.1 DnD plugin renderer
  // =========================
  function dragRender(container, mission, variant, api) {
    if (!container) return;
    container.innerHTML = "";

    const cfg = (variant && variant.drag) ? variant.drag : null;

    const items = Array.isArray(cfg?.items) ? cfg.items.slice(0, 8) : [];
    const zones = Array.isArray(cfg?.zones) ? cfg.zones.slice(0, 8) : [];
    const solution = (cfg?.solution && typeof cfg.solution === "object") ? cfg.solution : {};
    const checkMode = (cfg?.checkMode === "button") ? "button" : "onDrop";
    const lockNextUntilCorrect = (typeof cfg?.lockNextUntilCorrect === "boolean") ? cfg.lockNextUntilCorrect : true;
    const autoAdvance = (typeof cfg?.autoAdvance === "boolean") ? cfg.autoAdvance : false;
    const showResetButton = (typeof cfg?.showResetButton === "boolean") ? cfg.showResetButton : true;
    const showCheckButton = (typeof cfg?.showCheckButton === "boolean") ? cfg.showCheckButton : (checkMode === "button");
    const allowPartialFeedback = (typeof cfg?.allowPartialFeedback === "boolean") ? cfg.allowPartialFeedback : true;

    if (!items.length || !zones.length) {
      container.innerHTML = `
        <div class="mx-placeholder">
          <div class="mx-placeholder__text">
            <div class="mx-placeholder__title">Drag & Drop не настроен</div>
            <div class="mx-placeholder__sub">Нужны drag.items и drag.zones.</div>
          </div>
        </div>
      `;
      api?.setCanProceed && api.setCanProceed(true);
      return;
    }

    // Session: placements and solved flag
    const placement = (api?.getSessionFlag && api.getSessionFlag("dndPlacement")) || {};
    const solved = (api?.getSessionFlag && api.getSessionFlag("dndSolved")) === true;

    // Next gating
    if (api?.setCanProceed) api.setCanProceed(!lockNextUntilCorrect || solved);

    // Build UI
    const wrap = document.createElement("div");
    wrap.className = "mx-dnd";

    const zonesWrap = document.createElement("div");
    zonesWrap.className = "mx-dnd__zones";

    const tray = document.createElement("div");
    tray.className = "mx-dnd__tray";

    const trayTitle = document.createElement("div");
    trayTitle.className = "mx-dnd__trayTitle";
    trayTitle.textContent = "Перетащи карточки в правильные зоны:";

    const itemsWrap = document.createElement("div");
    itemsWrap.className = "mx-dnd__items";

    tray.appendChild(trayTitle);
    tray.appendChild(itemsWrap);

    const actions = document.createElement("div");
    actions.className = "mx-dnd__actions";

    const status = document.createElement("div");
    status.className = "mx-dnd__status";
    status.textContent = (checkMode === "button")
      ? "Разложи, потом нажми «Проверить»."
      : "Разложи карточки по зонам.";

    const btnCheck = document.createElement("button");
    btnCheck.type = "button";
    btnCheck.className = "mx-btn mx-btn--primary";
    btnCheck.style.display = showCheckButton ? "flex" : "none";
    btnCheck.textContent = "Проверить";

    const btnReset = document.createElement("button");
    btnReset.type = "button";
    btnReset.className = "mx-btn mx-btn--ghost";
    btnReset.style.display = showResetButton ? "flex" : "none";
    btnReset.textContent = "Сброс";

    actions.appendChild(status);
    if (showCheckButton) actions.appendChild(btnCheck);
    if (showResetButton) actions.appendChild(btnReset);

    wrap.appendChild(zonesWrap);
    wrap.appendChild(tray);
    wrap.appendChild(actions);
    container.appendChild(wrap);

    // Create zones DOM
    const zoneEls = new Map();
    zones.forEach(z => {
      const zEl = document.createElement("div");
      zEl.className = "mx-dropzone";
      zEl.setAttribute("data-zone-id", String(z.id));

      const lbl = document.createElement("div");
      lbl.className = "mx-dropzone__label";
      lbl.textContent = String(z.label || z.id);

      zEl.appendChild(lbl);
      zonesWrap.appendChild(zEl);
      zoneEls.set(String(z.id), zEl);
    });

    // Create items DOM
    const itemEls = new Map();
    items.forEach(it => {
      const itEl = document.createElement("div");
      itEl.className = "mx-draggable";
      itEl.setAttribute("role", "button");
      itEl.setAttribute("tabindex", "0");
      itEl.setAttribute("data-item-id", String(it.id));

      const icon = document.createElement("div");
      icon.className = "mx-draggable__icon";
      if (it.icon && MX.icons?.renderIcon) {
        icon.innerHTML = MX.icons.renderIcon(it.icon, { size: "md", label: "Иконка" });
      } else {
        icon.textContent = "★";
      }

      const txt = document.createElement("div");
      txt.textContent = String(it.label || it.id);

      itEl.appendChild(icon);
      itEl.appendChild(txt);

      itemsWrap.appendChild(itEl);
      itemEls.set(String(it.id), itEl);
    });

    // Helper: persist placement to session
    function savePlacement() {
      api?.setSessionFlag && api.setSessionFlag("dndPlacement", placement);
    }

    function clearZoneMarks() {
      zoneEls.forEach(zEl => zEl.classList.remove("is-correct", "is-wrong", "is-hot"));
    }

    function clearItemDraggingState() {
      itemEls.forEach(el => el.classList.remove("is-dragging"));
    }

    // Restore placements (snap items into zones)
    function restorePlacements() {
      Object.keys(placement).forEach(itemId => {
        const zoneId = placement[itemId];
        const itEl = itemEls.get(String(itemId));
        const zEl = zoneEls.get(String(zoneId));
        if (!itEl || !zEl) return;
        snapIntoZone(itEl, zEl);
      });
    }

    // Snap: append item into zone and reset transform
    function snapIntoZone(itemEl, zoneEl) {
      itemEl.style.transform = "";
      itemEl.style.left = "";
      itemEl.style.top = "";
      itemEl.style.position = "relative";
      itemEl.style.marginTop = "8px";
      itemEl.style.width = "auto";
      zoneEl.appendChild(itemEl);
    }

    // Move back to tray
    function moveToTray(itemEl) {
      itemEl.style.transform = "";
      itemEl.style.left = "";
      itemEl.style.top = "";
      itemEl.style.position = "relative";
      itemEl.style.marginTop = "";
      itemsWrap.appendChild(itemEl);
    }

    // Hit test: find zone under pointer (center point)
    function hitTestZone(clientX, clientY) {
      let best = null;
      zoneEls.forEach(zEl => {
        const r = zEl.getBoundingClientRect();
        if (clientX >= r.left && clientX <= r.right && clientY >= r.top && clientY <= r.bottom) {
          best = zEl;
        }
      });
      return best;
    }

    // Evaluate correctness
    function evaluate() {
      let placedCount = 0;
      let correctCount = 0;

      items.forEach(it => {
        const itemId = String(it.id);
        const zoneId = placement[itemId];
        if (zoneId) placedCount += 1;
        if (zoneId && String(solution[itemId]) === String(zoneId)) correctCount += 1;
      });

      const allPlaced = (placedCount === items.length);
      const allCorrect = allPlaced && (correctCount === items.length);

      return { placedCount, correctCount, allPlaced, allCorrect };
    }

    // Visual feedback after check
    function applyZoneFeedback() {
      clearZoneMarks();
      // For each zone: mark correct/wrong based on items inside it
      zones.forEach(z => {
        const zoneId = String(z.id);
        const zEl = zoneEls.get(zoneId);
        if (!zEl) return;

        // Find items assigned to this zone
        const assigned = items
          .map(it => String(it.id))
          .filter(itemId => String(placement[itemId] || "") === zoneId);

        if (!assigned.length) return;

        // Zone correct if all assigned items truly belong here AND there is no missing item that should be here
        // (Simpler: if every assigned item matches solution; otherwise wrong)
        const ok = assigned.every(itemId => String(solution[itemId]) === zoneId);

        zEl.classList.add(ok ? "is-correct" : "is-wrong");
      });
    }

    function setSolved() {
      api?.setSessionFlag && api.setSessionFlag("dndSolved", true);
      api?.setCanProceed && api.setCanProceed(true);

      if (MX.feedback?.showToast) MX.feedback.showToast("Верно! Отличная работа!", "success", 950);
      if (MX.feedback?.pulseSuccess) MX.feedback.pulseSuccess();
      if (MX.feedback?.highlightZone) MX.feedback.highlightZone("success");
      if (MX.audio?.playSound) MX.audio.playSound("success");

      status.textContent = "Супер! Можно нажимать «Далее».";
      if (showCheckButton) btnCheck.disabled = true;

      if (autoAdvance && api?.onSolved) {
        window.setTimeout(() => api.onSolved(), 650);
      }
    }

    function setNotSolved(partialText) {
      if (MX.feedback?.showToast) MX.feedback.showToast("Не совсем. Попробуй ещё!", "fail", 950);
      if (MX.feedback?.pulseFail) MX.feedback.pulseFail();
      if (MX.feedback?.highlightZone) MX.feedback.highlightZone("fail");
      if (MX.audio?.playSound) MX.audio.playSound("fail");

      status.textContent = partialText || "Попробуй ещё раз.";
    }

    function runCheck() {
      const r = evaluate();
      applyZoneFeedback();

      if (r.allCorrect) {
        setSolved();
        return true;
      }

      if (allowPartialFeedback) {
        if (!r.allPlaced) {
          setNotSolved(`Разложено ${r.placedCount}/${items.length}. Нужно разложить все.`);
        } else {
          setNotSolved(`Правильно ${r.correctCount}/${items.length}. Исправь ошибки.`);
        }
      } else {
        setNotSolved("Попробуй ещё раз.");
      }
      return false;
    }

    function resetAll() {
      clearZoneMarks();
      // Move all items back to tray
      items.forEach(it => {
        const itEl = itemEls.get(String(it.id));
        if (itEl) moveToTray(itEl);
      });
      // Clear placement
      Object.keys(placement).forEach(k => delete placement[k]);
      savePlacement();

      api?.setSessionFlag && api.setSessionFlag("dndSolved", false);
      api?.setCanProceed && api.setCanProceed(!lockNextUntilCorrect);

      if (showCheckButton) btnCheck.disabled = false;
      status.textContent = (checkMode === "button")
        ? "Разложи, потом нажми «Проверить»."
        : "Разложи карточки по зонам.";
    }

    // Pointer drag engine
    let active = null; // { itemEl, itemId, pointerId, startX, startY, baseX, baseY }
    function onPointerDown(e) {
      const target = e.target.closest(".mx-draggable");
      if (!target) return;
      // If already solved - ignore
      if (api?.getSessionFlag && api.getSessionFlag("dndSolved") === true) return;

      e.preventDefault();
      e.stopPropagation();

      const itemEl = target;
      const itemId = String(itemEl.getAttribute("data-item-id") || "");
      if (!itemId) return;

      active = {
        itemEl,
        itemId,
        pointerId: e.pointerId,
        startX: e.clientX,
        startY: e.clientY,
        dx: 0,
        dy: 0
      };

      clearZoneMarks();
      clearItemDraggingState();
      itemEl.classList.add("is-dragging");

      // Switch to absolute-ish movement via translate while keeping DOM location
      itemEl.setPointerCapture?.(e.pointerId);

      // Ensure touch-action none is set (already in CSS)
    }

    function onPointerMove(e) {
      if (!active) return;
      if (e.pointerId !== active.pointerId) return;

      e.preventDefault();

      active.dx = e.clientX - active.startX;
      active.dy = e.clientY - active.startY;
      active.itemEl.style.transform = `translate(${active.dx}px, ${active.dy}px)`;

      // highlight zone under pointer
      const zEl = hitTestZone(e.clientX, e.clientY);
      zoneEls.forEach(el => el.classList.remove("is-hot"));
      if (zEl) zEl.classList.add("is-hot");
    }

    function onPointerUp(e) {
      if (!active) return;
      if (e.pointerId !== active.pointerId) return;

      e.preventDefault();

      const itemEl = active.itemEl;
      const itemId = active.itemId;

      // drop
      const zEl = hitTestZone(e.clientX, e.clientY);
      zoneEls.forEach(el => el.classList.remove("is-hot"));

      if (zEl) {
        const zoneId = String(zEl.getAttribute("data-zone-id") || "");
        placement[itemId] = zoneId;
        savePlacement();
        snapIntoZone(itemEl, zEl);

        if (MX.audio?.playSound) MX.audio.playSound("step");

        if (checkMode === "onDrop") {
          runCheck();
        }
      } else {
        // if dropped outside: move back to tray and clear assignment
        delete placement[itemId];
        savePlacement();
        moveToTray(itemEl);
      }

      itemEl.classList.remove("is-dragging");
      itemEl.style.transform = "";

      active = null;
    }

    function onPointerCancel(e) {
      if (!active) return;
      if (e.pointerId !== active.pointerId) return;
      try {
        active.itemEl.classList.remove("is-dragging");
        active.itemEl.style.transform = "";
      } catch (err) {}
      active = null;
    }

    // Bind pointer events on container (event delegation)
    container.addEventListener("pointerdown", onPointerDown, { passive: false });
    container.addEventListener("pointermove", onPointerMove, { passive: false });
    container.addEventListener("pointerup", onPointerUp, { passive: false });
    container.addEventListener("pointercancel", onPointerCancel, { passive: false });

    // Buttons
    if (showCheckButton) {
      btnCheck.addEventListener("click", () => {
        if (api?.getSessionFlag && api.getSessionFlag("dndSolved") === true) return;
        runCheck();
      });
    }
    if (showResetButton) {
      btnReset.addEventListener("click", resetAll);
    }

    // Restore previous placement
    restorePlacements();

    // If already solved: show state
    if (solved) {
      applyZoneFeedback();
      status.textContent = "Уже выполнено. Можно нажимать «Далее».";
      if (showCheckButton) btnCheck.disabled = true;
    }
  }

  MX.plugins.drag = { render: dragRender };

  // =========================
  // 13.2 Extend router integration for mission.type === "drag"
  // =========================
  const baseRenderMission = MX.router.renderMission;

  MX.router.renderMission = function patchedRenderMission_Drag(mission, variant) {
    baseRenderMission.call(this, mission, variant);

    const currentId = MX.state.currentMissionId;
    const currentMission = MX.router.getMissionById(currentId);
    if (!currentMission) return;
    if (currentMission.type !== "drag") return;

    const container = document.getElementById("mx-interactive");
    if (!container) return;

    function setCanProceed(val) {
      const nextBtn = document.getElementById("mx-next");
      if (nextBtn) nextBtn.disabled = !val;
    }

    const session = getSessionData(currentMission.id);

    const api = {
      setCanProceed,
      onSolved: () => {
        MX.router.completeMission(currentMission.id);
        if (currentMission.id < MX.router.TOTAL_MISSIONS) {
          MX.router.goNext();
          if (MX.audio?.playSound) MX.audio.playSound("step");
        }
      },
      setSessionFlag: (k, v) => { session[k] = v; },
      getSessionFlag: (k) => session[k]
    };

    MX.plugins.drag.render(container, currentMission, variant, api);
  };

  // Patch Next guard for drag (consistent safety)
  const nextBtn = document.getElementById("mx-next");
  if (nextBtn && !nextBtn._mxDragPatched) {
    nextBtn._mxDragPatched = true;

    nextBtn.addEventListener("click", () => {
      const id = MX.state.currentMissionId;
      const m = MX.router.getMissionById(id);
      if (!m || m.type !== "drag") return;

      const session = getSessionData(m.id);
      if (!session.dndSolved) return;

      if (!MX.state.completed.includes(m.id)) {
        MX.router.completeMission(m.id);
      }
      if (m.id < MX.router.TOTAL_MISSIONS) {
        MX.router.goNext();
        if (MX.audio?.playSound) MX.audio.playSound("step");
      }
    }, true);
  }

  // =========================
  // 13.3 Demo (optional): make mission #1 drag example (можно удалить)
  // Контент потом будет в missions_ru.json, здесь только чтобы быстро протестировать.
  // =========================
  try {
    const m1 = MX.router.MISSIONS?.[0];
    if (m1) {
      m1.type = "drag";
      m1.icon = "flag";
      m1.variants = [
        {
          v: 1,
          title: "Найди страну по флагу (demo)",
          desc: "Перетащи флаги в правильные страны.",
          drag: {
            items: [
              { id:"fr", label:"Флаг 1", icon:"flag" },
              { id:"it", label:"Флаг 2", icon:"flag" }
            ],
            zones: [
              { id:"zA", label:"Страна A" },
              { id:"zB", label:"Страна B" }
            ],
            solution: { "fr":"zA", "it":"zB" },
            checkMode: "button",
            showCheckButton: true,
            showResetButton: true,
            lockNextUntilCorrect: true,
            autoAdvance: false,
            allowPartialFeedback: true
          }
        },
        { v: 2, title: "Drag demo 2", desc:"", drag: { items:[{id:"a",label:"Карточка A"}], zones:[{id:"z1",label:"Зона 1"}], solution:{a:"z1"}, checkMode:"onDrop" } },
        { v: 3, title: "Drag demo 3", desc:"", drag: { items:[{id:"a",label:"A"},{id:"b",label:"B"}], zones:[{id:"z1",label:"1"},{id:"z2",label:"2"}], solution:{a:"z2",b:"z1"}, checkMode:"onDrop" } },
        { v: 4, title: "Drag demo 4", desc:"", drag: { items:[{id:"a",label:"A"}], zones:[{id:"z1",label:"1"}], solution:{a:"z1"}, checkMode:"button" } },
        { v: 5, title: "Drag demo 5", desc:"", drag: { items:[{id:"a",label:"A"}], zones:[{id:"z1",label:"1"}], solution:{a:"z1"}, checkMode:"onDrop" } }
      ];
    }
  } catch (e) {}

  // Re-render current mission
  MX.router.goTo(MX.state.currentMissionId || 1);
});
</script>
{
  "meta": {
    "game": "MASTER EXPLORER",
    "lang": "RU",
    "version": 1,
    "totalMissions": 50,
    "variantsPerMission": 5
  },
  "missions": [
    {
      "id": 1,
      "block": 1,
      "type": "drag",
      "icon": "flag",
      "titleKey": "m1_title",
      "variants": [
        {
          "variantId": 1,
          "promptKey": "m1_v1_prompt",
          "choices": {
            "items": [],
            "zones": []
          },
          "answer": {
            "solutionMap": {}
          },
          "ui": {
            "checkMode": "button",
            "lockNextUntilCorrect": true,
            "autoAdvance": false
          }
        },
        { "variantId": 2, "promptKey": "m1_v2_prompt", "choices": { "items": [], "zones": [] }, "answer": { "solutionMap": {} }, "ui": { "checkMode": "button", "lockNextUntilCorrect": true, "autoAdvance": false } },
        { "variantId": 3, "promptKey": "m1_v3_prompt", "choices": { "items": [], "zones": [] }, "answer": { "solutionMap": {} }, "ui": { "checkMode": "button", "lockNextUntilCorrect": true, "autoAdvance": false } },
        { "variantId": 4, "promptKey": "m1_v4_prompt", "choices": { "items": [], "zones": [] }, "answer": { "solutionMap": {} }, "ui": { "checkMode": "button", "lockNextUntilCorrect": true, "autoAdvance": false } },
        { "variantId": 5, "promptKey": "m1_v5_prompt", "choices": { "items": [], "zones": [] }, "answer": { "solutionMap": {} }, "ui": { "checkMode": "button", "lockNextUntilCorrect": true, "autoAdvance": false } }
      ]
    },

    { "id": 2, "block": 1, "type": "tap", "icon": "globe", "titleKey": "m2_title",
      "variants": [
        { "variantId": 1, "promptKey": "m2_v1_prompt", "choices": ["", "", ""], "answer": { "correctIndex": 0 }, "ui": { "lockNextUntilCorrect": true, "autoAdvance": true } },
        { "variantId": 2, "promptKey": "m2_v2_prompt", "choices": ["", "", ""], "answer": { "correctIndex": 0 }, "ui": { "lockNextUntilCorrect": true, "autoAdvance": true } },
        { "variantId": 3, "promptKey": "m2_v3_prompt", "choices": ["", "", ""], "answer": { "correctIndex": 0 }, "ui": { "lockNextUntilCorrect": true, "autoAdvance": true } },
        { "variantId": 4, "promptKey": "m2_v4_prompt", "choices": ["", "", ""], "answer": { "correctIndex": 0 }, "ui": { "lockNextUntilCorrect": true, "autoAdvance": true } },
        { "variantId": 5, "promptKey": "m2_v5_prompt", "choices": ["", "", ""], "answer": { "correctIndex": 0 }, "ui": { "lockNextUntilCorrect": true, "autoAdvance": true } }
      ]
    },

    { "id": 3, "block": 1, "type": "tap", "icon": "plane", "titleKey": "m3_title",
      "variants": [
        { "variantId": 1, "promptKey": "m3_v1_prompt", "choices": ["", "", ""], "answer": { "correctIndex": 0 }, "ui": { "lockNextUntilCorrect": true, "autoAdvance": true } },
        { "variantId": 2, "promptKey": "m3_v2_prompt", "choices": ["", "", ""], "answer": { "correctIndex": 0 }, "ui": { "lockNextUntilCorrect": true, "autoAdvance": true } },
        { "variantId": 3, "promptKey": "m3_v3_prompt", "choices": ["", "", ""], "answer": { "correctIndex": 0 }, "ui": { "lockNextUntilCorrect": true, "autoAdvance": true } },
        { "variantId": 4, "promptKey": "m3_v4_prompt", "choices": ["", "", ""], "answer": { "correctIndex": 0 }, "ui": { "lockNextUntilCorrect": true, "autoAdvance": true } },
        { "variantId": 5, "promptKey": "m3_v5_prompt", "choices": ["", "", ""], "answer": { "correctIndex": 0 }, "ui": { "lockNextUntilCorrect": true, "autoAdvance": true } }
      ]
    },

    { "id": 4, "block": 1, "type": "drag", "icon": "landmark", "titleKey": "m4_title",
      "variants": [
        { "variantId": 1, "promptKey": "m4_v1_prompt", "choices": { "items": [], "zones": [] }, "answer": { "solutionMap": {} }, "ui": { "checkMode": "onDrop", "lockNextUntilCorrect": true, "autoAdvance": false } },
        { "variantId": 2, "promptKey": "m4_v2_prompt", "choices": { "items": [], "zones": [] }, "answer": { "solutionMap": {} }, "ui": { "checkMode": "onDrop", "lockNextUntilCorrect": true, "autoAdvance": false } },
        { "variantId": 3, "promptKey": "m4_v3_prompt", "choices": { "items": [], "zones": [] }, "answer": { "solutionMap": {} }, "ui": { "checkMode": "onDrop", "lockNextUntilCorrect": true, "autoAdvance": false } },
        { "variantId": 4, "promptKey": "m4_v4_prompt", "choices": { "items": [], "zones": [] }, "answer": { "solutionMap": {} }, "ui": { "checkMode": "onDrop", "lockNextUntilCorrect": true, "autoAdvance": false } },
        { "variantId": 5, "promptKey": "m4_v5_prompt", "choices": { "items": [], "zones": [] }, "answer": { "solutionMap": {} }, "ui": { "checkMode": "onDrop", "lockNextUntilCorrect": true, "autoAdvance": false } }
      ]
    },

    { "id": 5, "block": 1, "type": "multi", "icon": "suitcase", "titleKey": "m5_title",
      "variants": [
        { "variantId": 1, "promptKey": "m5_v1_prompt", "choices": ["", "", "", ""], "answer": { "correctIndexes": [0] }, "ui": { "lockNextUntilCorrect": true, "allowPartialFeedback": true, "autoAdvance": false } },
        { "variantId": 2, "promptKey": "m5_v2_prompt", "choices": ["", "", "", ""], "answer": { "correctIndexes": [0] }, "ui": { "lockNextUntilCorrect": true, "allowPartialFeedback": true, "autoAdvance": false } },
        { "variantId": 3, "promptKey": "m5_v3_prompt", "choices": ["", "", "", ""], "answer": { "correctIndexes": [0] }, "ui": { "lockNextUntilCorrect": true, "allowPartialFeedback": true, "autoAdvance": false } },
        { "variantId": 4, "promptKey": "m5_v4_prompt", "choices": ["", "", "", ""], "answer": { "correctIndexes": [0] }, "ui": { "lockNextUntilCorrect": true, "allowPartialFeedback": true, "autoAdvance": false } },
        { "variantId": 5, "promptKey": "m5_v5_prompt", "choices": ["", "", "", ""], "answer": { "correctIndexes": [0] }, "ui": { "lockNextUntilCorrect": true, "allowPartialFeedback": true, "autoAdvance": false } }
      ]
    },

    { "id": 6, "block": 2, "type": "tap", "icon": "star", "titleKey": "m6_title", "variants": [
      { "variantId": 1, "promptKey": "m6_v1_prompt", "choices": ["", "", "", ""], "answer": { "correctIndex": 0 }, "ui": { "lockNextUntilCorrect": true, "autoAdvance": true } },
      { "variantId": 2, "promptKey": "m6_v2_prompt", "choices": ["", "", "", ""], "answer": { "correctIndex": 0 }, "ui": { "lockNextUntilCorrect": true, "autoAdvance": true } },
      { "variantId": 3, "promptKey": "m6_v3_prompt", "choices": ["", "", "", ""], "answer": { "correctIndex": 0 }, "ui": { "lockNextUntilCorrect": true, "autoAdvance": true } },
      { "variantId": 4, "promptKey": "m6_v4_prompt", "choices": ["", "", "", ""], "answer": { "correctIndex": 0 }, "ui": { "lockNextUntilCorrect": true, "autoAdvance": true } },
      { "variantId": 5, "promptKey": "m6_v5_prompt", "choices": ["", "", "", ""], "answer": { "correctIndex": 0 }, "ui": { "lockNextUntilCorrect": true, "autoAdvance": true } }
    ]},

    { "id": 7, "block": 2, "type": "tap", "icon": "pattern", "titleKey": "m7_title", "variants": [
      { "variantId": 1, "promptKey": "m7_v1_prompt", "choices": ["", "", ""], "answer": { "correctIndex": 0 }, "ui": { "lockNextUntilCorrect": true, "autoAdvance": true } },
      { "variantId": 2, "promptKey": "m7_v2_prompt", "choices": ["", "", ""], "answer": { "correctIndex": 0 }, "ui": { "lockNextUntilCorrect": true, "autoAdvance": true } },
      { "variantId": 3, "promptKey": "m7_v3_prompt", "choices": ["", "", ""], "answer": { "correctIndex": 0 }, "ui": { "lockNextUntilCorrect": true, "autoAdvance": true } },
      { "variantId": 4, "promptKey": "m7_v4_prompt", "choices": ["", "", ""], "answer": { "correctIndex": 0 }, "ui": { "lockNextUntilCorrect": true, "autoAdvance": true } },
      { "variantId": 5, "promptKey": "m7_v5_prompt", "choices": ["", "", ""], "answer": { "correctIndex": 0 }, "ui": { "lockNextUntilCorrect": true, "autoAdvance": true } }
    ]},

    { "id": 8, "block": 2, "type": "drag", "icon": "pair", "titleKey": "m8_title", "variants": [
      { "variantId": 1, "promptKey": "m8_v1_prompt", "choices": { "items": [], "zones": [] }, "answer": { "solutionMap": {} }, "ui": { "checkMode": "onDrop", "lockNextUntilCorrect": true, "autoAdvance": false } },
      { "variantId": 2, "promptKey": "m8_v2_prompt", "choices": { "items": [], "zones": [] }, "answer": { "solutionMap": {} }, "ui": { "checkMode": "onDrop", "lockNextUntilCorrect": true, "autoAdvance": false } },
      { "variantId": 3, "promptKey": "m8_v3_prompt", "choices": { "items": [], "zones": [] }, "answer": { "solutionMap": {} }, "ui": { "checkMode": "onDrop", "lockNextUntilCorrect": true, "autoAdvance": false } },
      { "variantId": 4, "promptKey": "m8_v4_prompt", "choices": { "items": [], "zones": [] }, "answer": { "solutionMap": {} }, "ui": { "checkMode": "onDrop", "lockNextUntilCorrect": true, "autoAdvance": false } },
      { "variantId": 5, "promptKey": "m8_v5_prompt", "choices": { "items": [], "zones": [] }, "answer": { "solutionMap": {} }, "ui": { "checkMode": "onDrop", "lockNextUntilCorrect": true, "autoAdvance": false } }
    ]},

    { "id": 9, "block": 2, "type": "tap", "icon": "size", "titleKey": "m9_title", "variants": [
      { "variantId": 1, "promptKey": "m9_v1_prompt", "choices": ["", "", ""], "answer": { "correctIndex": 0 }, "ui": { "lockNextUntilCorrect": true, "autoAdvance": true } },
      { "variantId": 2, "promptKey": "m9_v2_prompt", "choices": ["", "", ""], "answer": { "correctIndex": 0 }, "ui": { "lockNextUntilCorrect": true, "autoAdvance": true } },
      { "variantId": 3, "promptKey": "m9_v3_prompt", "choices": ["", "", ""], "answer": { "correctIndex": 0 }, "ui": { "lockNextUntilCorrect": true, "autoAdvance": true } },
      { "variantId": 4, "promptKey": "m9_v4_prompt", "choices": ["", "", ""], "answer": { "correctIndex": 0 }, "ui": { "lockNextUntilCorrect": true, "autoAdvance": true } },
      { "variantId": 5, "promptKey": "m9_v5_prompt", "choices": ["", "", ""], "answer": { "correctIndex": 0 }, "ui": { "lockNextUntilCorrect": true, "autoAdvance": true } }
    ]},

    { "id": 10, "block": 2, "type": "timer", "icon": "timer", "titleKey": "m10_title", "variants": [
      { "variantId": 1, "promptKey": "m10_v1_prompt", "choices": { "seconds": 5 }, "answer": { "complete": true }, "ui": { "tickSound": false, "autoComplete": true, "lockNextUntilComplete": true, "autoAdvance": false } },
      { "variantId": 2, "promptKey": "m10_v2_prompt", "choices": { "seconds": 6 }, "answer": { "complete": true }, "ui": { "tickSound": false, "autoComplete": true, "lockNextUntilComplete": true, "autoAdvance": false } },
      { "variantId": 3, "promptKey": "m10_v3_prompt", "choices": { "seconds": 7 }, "answer": { "complete": true }, "ui": { "tickSound": false, "autoComplete": true, "lockNextUntilComplete": true, "autoAdvance": false } },
      { "variantId": 4, "promptKey": "m10_v4_prompt", "choices": { "seconds": 8 }, "answer": { "complete": true }, "ui": { "tickSound": false, "autoComplete": true, "lockNextUntilComplete": true, "autoAdvance": false } },
      { "variantId": 5, "promptKey": "m10_v5_prompt", "choices": { "seconds": 10 }, "answer": { "complete": true }, "ui": { "tickSound": true, "autoComplete": true, "lockNextUntilComplete": true, "autoAdvance": false } }
    ]},

    { "id": 11, "block": 3, "type": "timer", "icon": "stop", "titleKey": "m11_title",
      "variants": [
        { "variantId": 1, "promptKey": "m11_v1_prompt", "choices": { "seconds": 10 }, "answer": { "complete": true }, "ui": { "autoComplete": true, "lockNextUntilComplete": true } },
        { "variantId": 2, "promptKey": "m11_v2_prompt", "choices": { "seconds": 10 }, "answer": { "complete": true }, "ui": { "autoComplete": true, "lockNextUntilComplete": true } },
        { "variantId": 3, "promptKey": "m11_v3_prompt", "choices": { "seconds": 10 }, "answer": { "complete": true }, "ui": { "autoComplete": true, "lockNextUntilComplete": true } },
        { "variantId": 4, "promptKey": "m11_v4_prompt", "choices": { "seconds": 10 }, "answer": { "complete": true }, "ui": { "autoComplete": true, "lockNextUntilComplete": true } },
        { "variantId": 5, "promptKey": "m11_v5_prompt", "choices": { "seconds": 10 }, "answer": { "complete": true }, "ui": { "autoComplete": true, "lockNextUntilComplete": true } }
      ]
    },

    { "id": 12, "block": 3, "type": "action", "icon": "jump", "titleKey": "m12_title",
      "variants": [
        { "variantId": 1, "promptKey": "m12_v1_prompt", "choices": {}, "answer": { "confirm": true }, "ui": { "confirmText": "Я сделал!", "lockNextUntilConfirm": true, "autoAdvance": false } },
        { "variantId": 2, "promptKey": "m12_v2_prompt", "choices": {}, "answer": { "confirm": true }, "ui": { "confirmText": "Я сделал!", "lockNextUntilConfirm": true, "autoAdvance": false } },
        { "variantId": 3, "promptKey": "m12_v3_prompt", "choices": {}, "answer": { "confirm": true }, "ui": { "confirmText": "Я сделал!", "lockNextUntilConfirm": true, "autoAdvance": false } },
        { "variantId": 4, "promptKey": "m12_v4_prompt", "choices": {}, "answer": { "confirm": true }, "ui": { "confirmText": "Я сделал!", "lockNextUntilConfirm": true, "autoAdvance": false } },
        { "variantId": 5, "promptKey": "m12_v5_prompt", "choices": {}, "answer": { "confirm": true }, "ui": { "confirmText": "Я сделал!", "lockNextUntilConfirm": true, "autoAdvance": false } }
      ]
    },

    { "id": 13, "block": 3, "type": "creative", "icon": "body", "titleKey": "m13_title",
      "variants": [
        { "variantId": 1, "promptKey": "m13_v1_prompt", "choices": {}, "answer": { "done": true }, "ui": { "enableInput": false, "lockNextUntilDone": true, "autoAdvance": false } },
        { "variantId": 2, "promptKey": "m13_v2_prompt", "choices": {}, "answer": { "done": true }, "ui": { "enableInput": false, "lockNextUntilDone": true, "autoAdvance": false } },
        { "variantId": 3, "promptKey": "m13_v3_prompt", "choices": {}, "answer": { "done": true }, "ui": { "enableInput": false, "lockNextUntilDone": true, "autoAdvance": false } },
        { "variantId": 4, "promptKey": "m13_v4_prompt", "choices": {}, "answer": { "done": true }, "ui": { "enableInput": false, "lockNextUntilDone": true, "autoAdvance": false } },
        { "variantId": 5, "promptKey": "m13_v5_prompt", "choices": {}, "answer": { "done": true }, "ui": { "enableInput": false, "lockNextUntilDone": true, "autoAdvance": false } }
      ]
    },

    { "id": 14, "block": 3, "type": "action", "icon": "room", "titleKey": "m14_title", "variants": [
      { "variantId": 1, "promptKey": "m14_v1_prompt", "choices": {}, "answer": { "confirm": true }, "ui": { "confirmText": "Нашёл!", "lockNextUntilConfirm": true } },
      { "variantId": 2, "promptKey": "m14_v2_prompt", "choices": {}, "answer": { "confirm": true }, "ui": { "confirmText": "Нашёл!", "lockNextUntilConfirm": true } },
      { "variantId": 3, "promptKey": "m14_v3_prompt", "choices": {}, "answer": { "confirm": true }, "ui": { "confirmText": "Нашёл!", "lockNextUntilConfirm": true } },
      { "variantId": 4, "promptKey": "m14_v4_prompt", "choices": {}, "answer": { "confirm": true }, "ui": { "confirmText": "Нашёл!", "lockNextUntilConfirm": true } },
      { "variantId": 5, "promptKey": "m14_v5_prompt", "choices": {}, "answer": { "confirm": true }, "ui": { "confirmText": "Нашёл!", "lockNextUntilConfirm": true } }
    ]},

    { "id": 15, "block": 3, "type": "action", "icon": "speed", "titleKey": "m15_title", "variants": [
      { "variantId": 1, "promptKey": "m15_v1_prompt", "choices": {}, "answer": { "confirm": true }, "ui": { "confirmText": "Готово!", "lockNextUntilConfirm": true } },
      { "variantId": 2, "promptKey": "m15_v2_prompt", "choices": {}, "answer": { "confirm": true }, "ui": { "confirmText": "Готово!", "lockNextUntilConfirm": true } },
      { "variantId": 3, "promptKey": "m15_v3_prompt", "choices": {}, "answer": { "confirm": true }, "ui": { "confirmText": "Готово!", "lockNextUntilConfirm": true } },
      { "variantId": 4, "promptKey": "m15_v4_prompt", "choices": {}, "answer": { "confirm": true }, "ui": { "confirmText": "Готово!", "lockNextUntilConfirm": true } },
      { "variantId": 5, "promptKey": "m15_v5_prompt", "choices": {}, "answer": { "confirm": true }, "ui": { "confirmText": "Готово!", "lockNextUntilConfirm": true } }
    ]},

    { "id": 16, "block": 4, "type": "creative", "icon": "globe", "titleKey": "m16_title", "variants": [
      { "variantId": 1, "promptKey": "m16_v1_prompt", "choices": {}, "answer": { "done": true }, "ui": { "enableInput": true, "saveResponse": true, "lockNextUntilDone": true } },
      { "variantId": 2, "promptKey": "m16_v2_prompt", "choices": {}, "answer": { "done": true }, "ui": { "enableInput": true, "saveResponse": true, "lockNextUntilDone": true } },
      { "variantId": 3, "promptKey": "m16_v3_prompt", "choices": {}, "answer": { "done": true }, "ui": { "enableInput": true, "saveResponse": true, "lockNextUntilDone": true } },
      { "variantId": 4, "promptKey": "m16_v4_prompt", "choices": {}, "answer": { "done": true }, "ui": { "enableInput": true, "saveResponse": true, "lockNextUntilDone": true } },
      { "variantId": 5, "promptKey": "m16_v5_prompt", "choices": {}, "answer": { "done": true }, "ui": { "enableInput": true, "saveResponse": true, "lockNextUntilDone": true } }
    ]},

    { "id": 17, "block": 4, "type": "creative", "icon": "flag", "titleKey": "m17_title", "variants": [
      { "variantId": 1, "promptKey": "m17_v1_prompt", "choices": {}, "answer": { "done": true }, "ui": { "enableInput": true, "saveResponse": true, "lockNextUntilDone": true } },
      { "variantId": 2, "promptKey": "m17_v2_prompt", "choices": {}, "answer": { "done": true }, "ui": { "enableInput": true, "saveResponse": true, "lockNextUntilDone": true } },
      { "variantId": 3, "promptKey": "m17_v3_prompt", "choices": {}, "answer": { "done": true }, "ui": { "enableInput": true, "saveResponse": true, "lockNextUntilDone": true } },
      { "variantId": 4, "promptKey": "m17_v4_prompt", "choices": {}, "answer": { "done": true }, "ui": { "enableInput": true, "saveResponse": true, "lockNextUntilDone": true } },
      { "variantId": 5, "promptKey": "m17_v5_prompt", "choices": {}, "answer": { "done": true }, "ui": { "enableInput": true, "saveResponse": true, "lockNextUntilDone": true } }
    ]},

    { "id": 18, "block": 4, "type": "tap", "icon": "mask", "titleKey": "m18_title", "variants": [
      { "variantId": 1, "promptKey": "m18_v1_prompt", "choices": ["", "", ""], "answer": { "correctIndex": 0 }, "ui": { "lockNextUntilCorrect": true, "autoAdvance": true } },
      { "variantId": 2, "promptKey": "m18_v2_prompt", "choices": ["", "", ""], "answer": { "correctIndex": 0 }, "ui": { "lockNextUntilCorrect": true, "autoAdvance": true } },
      { "variantId": 3, "promptKey": "m18_v3_prompt", "choices": ["", "", ""], "answer": { "correctIndex": 0 }, "ui": { "lockNextUntilCorrect": true, "autoAdvance": true } },
      { "variantId": 4, "promptKey": "m18_v4_prompt", "choices": ["", "", ""], "answer": { "correctIndex": 0 }, "ui": { "lockNextUntilCorrect": true, "autoAdvance": true } },
      { "variantId": 5, "promptKey": "m18_v5_prompt", "choices": ["", "", ""], "answer": { "correctIndex": 0 }, "ui": { "lockNextUntilCorrect": true, "autoAdvance": true } }
    ]},

    { "id": 19, "block": 4, "type": "creative", "icon": "home", "titleKey": "m19_title", "variants": [
      { "variantId": 1, "promptKey": "m19_v1_prompt", "choices": {}, "answer": { "done": true }, "ui": { "enableInput": true, "saveResponse": true, "lockNextUntilDone": true } },
      { "variantId": 2, "promptKey": "m19_v2_prompt", "choices": {}, "answer": { "done": true }, "ui": { "enableInput": true, "saveResponse": true, "lockNextUntilDone": true } },
      { "variantId": 3, "promptKey": "m19_v3_prompt", "choices": {}, "answer": { "done": true }, "ui": { "enableInput": true, "saveResponse": true, "lockNextUntilDone": true } },
      { "variantId": 4, "promptKey": "m19_v4_prompt", "choices": {}, "answer": { "done": true }, "ui": { "enableInput": true, "saveResponse": true, "lockNextUntilDone": true } },
      { "variantId": 5, "promptKey": "m19_v5_prompt", "choices": {}, "answer": { "done": true }, "ui": { "enableInput": true, "saveResponse": true, "lockNextUntilDone": true } }
    ]},

    { "id": 20, "block": 4, "type": "creative", "icon": "animal", "titleKey": "m20_title", "variants": [
      { "variantId": 1, "promptKey": "m20_v1_prompt", "choices": {}, "answer": { "done": true }, "ui": { "enableInput": true, "saveResponse": true, "lockNextUntilDone": true } },
      { "variantId": 2, "promptKey": "m20_v2_prompt", "choices": {}, "answer": { "done": true }, "ui": { "enableInput": true, "saveResponse": true, "lockNextUntilDone": true } },
      { "variantId": 3, "promptKey": "m20_v3_prompt", "choices": {}, "answer": { "done": true }, "ui": { "enableInput": true, "saveResponse": true, "lockNextUntilDone": true } },
      { "variantId": 4, "promptKey": "m20_v4_prompt", "choices": {}, "answer": { "done": true }, "ui": { "enableInput": true, "saveResponse": true, "lockNextUntilDone": true } },
      { "variantId": 5, "promptKey": "m20_v5_prompt", "choices": {}, "answer": { "done": true }, "ui": { "enableInput": true, "saveResponse": true, "lockNextUntilDone": true } }
    ]},

    { "id": 21, "block": 5, "type": "action", "icon": "hello", "titleKey": "m21_title",
      "variants": [
        { "variantId": 1, "promptKey": "m21_v1_prompt", "choices": {}, "answer": { "confirm": true }, "ui": { "confirmText": "Я сказал(а)!", "lockNextUntilConfirm": true } },
        { "variantId": 2, "promptKey": "m21_v2_prompt", "choices": {}, "answer": { "confirm": true }, "ui": { "confirmText": "Я сказал(а)!", "lockNextUntilConfirm": true } },
        { "variantId": 3, "promptKey": "m21_v3_prompt", "choices": {}, "answer": { "confirm": true }, "ui": { "confirmText": "Я сказал(а)!", "lockNextUntilConfirm": true } },
        { "variantId": 4, "promptKey": "m21_v4_prompt", "choices": {}, "answer": { "confirm": true }, "ui": { "confirmText": "Я сказал(а)!", "lockNextUntilConfirm": true } },
        { "variantId": 5, "promptKey": "m21_v5_prompt", "choices": {}, "answer": { "confirm": true }, "ui": { "confirmText": "Я сказал(а)!", "lockNextUntilConfirm": true } }
      ]
    },

    { "id": 22, "block": 5, "type": "tap", "icon": "animal", "titleKey": "m22_title", "variants": [
      { "variantId": 1, "promptKey": "m22_v1_prompt", "choices": ["", "", "", ""], "answer": { "correctIndex": 0 }, "ui": { "lockNextUntilCorrect": true, "autoAdvance": true } },
      { "variantId": 2, "promptKey": "m22_v2_prompt", "choices": ["", "", "", ""], "answer": { "correctIndex": 0 }, "ui": { "lockNextUntilCorrect": true, "autoAdvance": true } },
      { "variantId": 3, "promptKey": "m22_v3_prompt", "choices": ["", "", "", ""], "answer": { "correctIndex": 0 }, "ui": { "lockNextUntilCorrect": true, "autoAdvance": true } },
      { "variantId": 4, "promptKey": "m22_v4_prompt", "choices": ["", "", "", ""], "answer": { "correctIndex": 0 }, "ui": { "lockNextUntilCorrect": true, "autoAdvance": true } },
      { "variantId": 5, "promptKey": "m22_v5_prompt", "choices": ["", "", "", ""], "answer": { "correctIndex": 0 }, "ui": { "lockNextUntilCorrect": true, "autoAdvance": true } }
    ]},

    { "id": 23, "block": 5, "type": "tap", "icon": "audio", "titleKey": "m23_title",
      "variants": [
        { "variantId": 1, "promptKey": "m23_v1_prompt", "choices": ["", "", ""], "answer": { "correctIndex": 0 }, "ui": { "audioKey": "m23_v1_audio", "lockNextUntilCorrect": true, "autoAdvance": true } },
        { "variantId": 2, "promptKey": "m23_v2_prompt", "choices": ["", "", ""], "answer": { "correctIndex": 0 }, "ui": { "audioKey": "m23_v2_audio", "lockNextUntilCorrect": true, "autoAdvance": true } },
        { "variantId": 3, "promptKey": "m23_v3_prompt", "choices": ["", "", ""], "answer": { "correctIndex": 0 }, "ui": { "audioKey": "m23_v3_audio", "lockNextUntilCorrect": true, "autoAdvance": true } },
        { "variantId": 4, "promptKey": "m23_v4_prompt", "choices": ["", "", ""], "answer": { "correctIndex": 0 }, "ui": { "audioKey": "m23_v4_audio", "lockNextUntilCorrect": true, "autoAdvance": true } },
        { "variantId": 5, "promptKey": "m23_v5_prompt", "choices": ["", "", ""], "answer": { "correctIndex": 0 }, "ui": { "audioKey": "m23_v5_audio", "lockNextUntilCorrect": true, "autoAdvance": true } }
      ]
    },

    { "id": 24, "block": 5, "type": "action", "icon": "repeat", "titleKey": "m24_title", "variants": [
      { "variantId": 1, "promptKey": "m24_v1_prompt", "choices": {}, "answer": { "confirm": true }, "ui": { "confirmText": "Повторил(а)!", "lockNextUntilConfirm": true } },
      { "variantId": 2, "promptKey": "m24_v2_prompt", "choices": {}, "answer": { "confirm": true }, "ui": { "confirmText": "Повторил(а)!", "lockNextUntilConfirm": true } },
      { "variantId": 3, "promptKey": "m24_v3_prompt", "choices": {}, "answer": { "confirm": true }, "ui": { "confirmText": "Повторил(а)!", "lockNextUntilConfirm": true } },
      { "variantId": 4, "promptKey": "m24_v4_prompt", "choices": {}, "answer": { "confirm": true }, "ui": { "confirmText": "Повторил(а)!", "lockNextUntilConfirm": true } },
      { "variantId": 5, "promptKey": "m24_v5_prompt", "choices": {}, "answer": { "confirm": true }, "ui": { "confirmText": "Повторил(а)!", "lockNextUntilConfirm": true } }
    ]},

    { "id": 25, "block": 5, "type": "tap", "icon": "lang", "titleKey": "m25_title", "variants": [
      { "variantId": 1, "promptKey": "m25_v1_prompt", "choices": ["", "", "", ""], "answer": { "correctIndex": 0 }, "ui": { "lockNextUntilCorrect": true, "autoAdvance": true } },
      { "variantId": 2, "promptKey": "m25_v2_prompt", "choices": ["", "", "", ""], "answer": { "correctIndex": 0 }, "ui": { "lockNextUntilCorrect": true, "autoAdvance": true } },
      { "variantId": 3, "promptKey": "m25_v3_prompt", "choices": ["", "", "", ""], "answer": { "correctIndex": 0 }, "ui": { "lockNextUntilCorrect": true, "autoAdvance": true } },
      { "variantId": 4, "promptKey": "m25_v4_prompt", "choices": ["", "", "", ""], "answer": { "correctIndex": 0 }, "ui": { "lockNextUntilCorrect": true, "autoAdvance": true } },
      { "variantId": 5, "promptKey": "m25_v5_prompt", "choices": ["", "", "", ""], "answer": { "correctIndex": 0 }, "ui": { "lockNextUntilCorrect": true, "autoAdvance": true } }
    ]},

    { "id": 26, "block": 6, "type": "drag", "icon": "family", "titleKey": "m26_title", "variants": [
      { "variantId": 1, "promptKey": "m26_v1_prompt", "choices": { "items": [], "zones": [] }, "answer": { "solutionMap": {} }, "ui": { "checkMode": "button", "lockNextUntilCorrect": true } },
      { "variantId": 2, "promptKey": "m26_v2_prompt", "choices": { "items": [], "zones": [] }, "answer": { "solutionMap": {} }, "ui": { "checkMode": "button", "lockNextUntilCorrect": true } },
      { "variantId": 3, "promptKey": "m26_v3_prompt", "choices": { "items": [], "zones": [] }, "answer": { "solutionMap": {} }, "ui": { "checkMode": "button", "lockNextUntilCorrect": true } },
      { "variantId": 4, "promptKey": "m26_v4_prompt", "choices": { "items": [], "zones": [] }, "answer": { "solutionMap": {} }, "ui": { "checkMode": "button", "lockNextUntilCorrect": true } },
      { "variantId": 5, "promptKey": "m26_v5_prompt", "choices": { "items": [], "zones": [] }, "answer": { "solutionMap": {} }, "ui": { "checkMode": "button", "lockNextUntilCorrect": true } }
    ]},

    { "id": 27, "block": 6, "type": "tap", "icon": "heart", "titleKey": "m27_title", "variants": [
      { "variantId": 1, "promptKey": "m27_v1_prompt", "choices": ["", "", ""], "answer": { "correctIndex": 0 }, "ui": { "lockNextUntilCorrect": true, "autoAdvance": true } },
      { "variantId": 2, "promptKey": "m27_v2_prompt", "choices": ["", "", ""], "answer": { "correctIndex": 0 }, "ui": { "lockNextUntilCorrect": true, "autoAdvance": true } },
      { "variantId": 3, "promptKey": "m27_v3_prompt", "choices": ["", "", ""], "answer": { "correctIndex": 0 }, "ui": { "lockNextUntilCorrect": true, "autoAdvance": true } },
      { "variantId": 4, "promptKey": "m27_v4_prompt", "choices": ["", "", ""], "answer": { "correctIndex": 0 }, "ui": { "lockNextUntilCorrect": true, "autoAdvance": true } },
      { "variantId": 5, "promptKey": "m27_v5_prompt", "choices": ["", "", ""], "answer": { "correctIndex": 0 }, "ui": { "lockNextUntilCorrect": true, "autoAdvance": true } }
    ]},

    { "id": 28, "block": 6, "type": "multi", "icon": "heart", "titleKey": "m28_title", "variants": [
      { "variantId": 1, "promptKey": "m28_v1_prompt", "choices": ["", "", "", ""], "answer": { "correctIndexes": [0] }, "ui": { "lockNextUntilCorrect": true, "allowPartialFeedback": true } },
      { "variantId": 2, "promptKey": "m28_v2_prompt", "choices": ["", "", "", ""], "answer": { "correctIndexes": [0] }, "ui": { "lockNextUntilCorrect": true, "allowPartialFeedback": true } },
      { "variantId": 3, "promptKey": "m28_v3_prompt", "choices": ["", "", "", ""], "answer": { "correctIndexes": [0] }, "ui": { "lockNextUntilCorrect": true, "allowPartialFeedback": true } },
      { "variantId": 4, "promptKey": "m28_v4_prompt", "choices": ["", "", "", ""], "answer": { "correctIndexes": [0] }, "ui": { "lockNextUntilCorrect": true, "allowPartialFeedback": true } },
      { "variantId": 5, "promptKey": "m28_v5_prompt", "choices": ["", "", "", ""], "answer": { "correctIndexes": [0] }, "ui": { "lockNextUntilCorrect": true, "allowPartialFeedback": true } }
    ]},

    { "id": 29, "block": 6, "type": "tap", "icon": "listen", "titleKey": "m29_title", "variants": [
      { "variantId": 1, "promptKey": "m29_v1_prompt", "choices": ["", "", ""], "answer": { "correctIndex": 0 }, "ui": { "lockNextUntilCorrect": true, "autoAdvance": true } },
      { "variantId": 2, "promptKey": "m29_v2_prompt", "choices": ["", "", ""], "answer": { "correctIndex": 0 }, "ui": { "lockNextUntilCorrect": true, "autoAdvance": true } },
      { "variantId": 3, "promptKey": "m29_v3_prompt", "choices": ["", "", ""], "answer": { "correctIndex": 0 }, "ui": { "lockNextUntilCorrect": true, "autoAdvance": true } },
      { "variantId": 4, "promptKey": "m29_v4_prompt", "choices": ["", "", ""], "answer": { "correctIndex": 0 }, "ui": { "lockNextUntilCorrect": true, "autoAdvance": true } },
      { "variantId": 5, "promptKey": "m29_v5_prompt", "choices": ["", "", ""], "answer": { "correctIndex": 0 }, "ui": { "lockNextUntilCorrect": true, "autoAdvance": true } }
    ]},

    { "id": 30, "block": 6, "type": "creative", "icon": "thanks", "titleKey": "m30_title", "variants": [
      { "variantId": 1, "promptKey": "m30_v1_prompt", "choices": {}, "answer": { "done": true }, "ui": { "enableInput": true, "saveResponse": true, "lockNextUntilDone": true } },
      { "variantId": 2, "promptKey": "m30_v2_prompt", "choices": {}, "answer": { "done": true }, "ui": { "enableInput": true, "saveResponse": true, "lockNextUntilDone": true } },
      { "variantId": 3, "promptKey": "m30_v3_prompt", "choices": {}, "answer": { "done": true }, "ui": { "enableInput": true, "saveResponse": true, "lockNextUntilDone": true } },
      { "variantId": 4, "promptKey": "m30_v4_prompt", "choices": {}, "answer": { "done": true }, "ui": { "enableInput": true, "saveResponse": true, "lockNextUntilDone": true } },
      { "variantId": 5, "promptKey": "m30_v5_prompt", "choices": {}, "answer": { "done": true }, "ui": { "enableInput": true, "saveResponse": true, "lockNextUntilDone": true } }
    ]},

    { "id": 31, "block": 7, "type": "drag", "icon": "school", "titleKey": "m31_title", "variants": [
      { "variantId": 1, "promptKey": "m31_v1_prompt", "choices": { "items": [], "zones": [] }, "answer": { "solutionMap": {} }, "ui": { "checkMode": "button", "lockNextUntilCorrect": true } },
      { "variantId": 2, "promptKey": "m31_v2_prompt", "choices": { "items": [], "zones": [] }, "answer": { "solutionMap": {} }, "ui": { "checkMode": "button", "lockNextUntilCorrect": true } },
      { "variantId": 3, "promptKey": "m31_v3_prompt", "choices": { "items": [], "zones": [] }, "answer": { "solutionMap": {} }, "ui": { "checkMode": "button", "lockNextUntilCorrect": true } },
      { "variantId": 4, "promptKey": "m31_v4_prompt", "choices": { "items": [], "zones": [] }, "answer": { "solutionMap": {} }, "ui": { "checkMode": "button", "lockNextUntilCorrect": true } },
      { "variantId": 5, "promptKey": "m31_v5_prompt", "choices": { "items": [], "zones": [] }, "answer": { "solutionMap": {} }, "ui": { "checkMode": "button", "lockNextUntilCorrect": true } }
    ]},

    { "id": 32, "block": 7, "type": "action", "icon": "hand", "titleKey": "m32_title", "variants": [
      { "variantId": 1, "promptKey": "m32_v1_prompt", "choices": {}, "answer": { "confirm": true }, "ui": { "confirmText": "Поднял(а)!", "lockNextUntilConfirm": true } },
      { "variantId": 2, "promptKey": "m32_v2_prompt", "choices": {}, "answer": { "confirm": true }, "ui": { "confirmText": "Поднял(а)!", "lockNextUntilConfirm": true } },
      { "variantId": 3, "promptKey": "m32_v3_prompt", "choices": {}, "answer": { "confirm": true }, "ui": { "confirmText": "Поднял(а)!", "lockNextUntilConfirm": true } },
      { "variantId": 4, "promptKey": "m32_v4_prompt", "choices": {}, "answer": { "confirm": true }, "ui": { "confirmText": "Поднял(а)!", "lockNextUntilConfirm": true } },
      { "variantId": 5, "promptKey": "m32_v5_prompt", "choices": {}, "answer": { "confirm": true }, "ui": { "confirmText": "Поднял(а)!", "lockNextUntilConfirm": true } }
    ]},

    { "id": 33, "block": 7, "type": "tap", "icon": "lesson", "titleKey": "m33_title", "variants": [
      { "variantId": 1, "promptKey": "m33_v1_prompt", "choices": ["", "", ""], "answer": { "correctIndex": 0 }, "ui": { "lockNextUntilCorrect": true, "autoAdvance": true } },
      { "variantId": 2, "promptKey": "m33_v2_prompt", "choices": ["", "", ""], "answer": { "correctIndex": 0 }, "ui": { "lockNextUntilCorrect": true, "autoAdvance": true } },
      { "variantId": 3, "promptKey": "m33_v3_prompt", "choices": ["", "", ""], "answer": { "correctIndex": 0 }, "ui": { "lockNextUntilCorrect": true, "autoAdvance": true } },
      { "variantId": 4, "promptKey": "m33_v4_prompt", "choices": ["", "", ""], "answer": { "correctIndex": 0 }, "ui": { "lockNextUntilCorrect": true, "autoAdvance": true } },
      { "variantId": 5, "promptKey": "m33_v5_prompt", "choices": ["", "", ""], "answer": { "correctIndex": 0 }, "ui": { "lockNextUntilCorrect": true, "autoAdvance": true } }
    ]},

    { "id": 34, "block": 7, "type": "tap", "icon": "stop", "titleKey": "m34_title", "variants": [
      { "variantId": 1, "promptKey": "m34_v1_prompt", "choices": ["", "", ""], "answer": { "correctIndex": 0 }, "ui": { "lockNextUntilCorrect": true, "autoAdvance": true } },
      { "variantId": 2, "promptKey": "m34_v2_prompt", "choices": ["", "", ""], "answer": { "correctIndex": 0 }, "ui": { "lockNextUntilCorrect": true, "autoAdvance": true } },
      { "variantId": 3, "promptKey": "m34_v3_prompt", "choices": ["", "", ""], "answer": { "correctIndex": 0 }, "ui": { "lockNextUntilCorrect": true, "autoAdvance": true } },
      { "variantId": 4, "promptKey": "m34_v4_prompt", "choices": ["", "", ""], "answer": { "correctIndex": 0 }, "ui": { "lockNextUntilCorrect": true, "autoAdvance": true } },
      { "variantId": 5, "promptKey": "m34_v5_prompt", "choices": ["", "", ""], "answer": { "correctIndex": 0 }, "ui": { "lockNextUntilCorrect": true, "autoAdvance": true } }
    ]},

    { "id": 35, "block": 7, "type": "multi", "icon": "good", "titleKey": "m35_title", "variants": [
      { "variantId": 1, "promptKey": "m35_v1_prompt", "choices": ["", "", "", ""], "answer": { "correctIndexes": [0] }, "ui": { "lockNextUntilCorrect": true, "allowPartialFeedback": true } },
      { "variantId": 2, "promptKey": "m35_v2_prompt", "choices": ["", "", "", ""], "answer": { "correctIndexes": [0] }, "ui": { "lockNextUntilCorrect": true, "allowPartialFeedback": true } },
      { "variantId": 3, "promptKey": "m35_v3_prompt", "choices": ["", "", "", ""], "answer": { "correctIndexes": [0] }, "ui": { "lockNextUntilCorrect": true, "allowPartialFeedback": true } },
      { "variantId": 4, "promptKey": "m35_v4_prompt", "choices": ["", "", "", ""], "answer": { "correctIndexes": [0] }, "ui": { "lockNextUntilCorrect": true, "allowPartialFeedback": true } },
      { "variantId": 5, "promptKey": "m35_v5_prompt", "choices": ["", "", "", ""], "answer": { "correctIndexes": [0] }, "ui": { "lockNextUntilCorrect": true, "allowPartialFeedback": true } }
    ]},

    { "id": 36, "block": 8, "type": "drag", "icon": "shop", "titleKey": "m36_title", "variants": [
      { "variantId": 1, "promptKey": "m36_v1_prompt", "choices": { "items": [], "zones": [] }, "answer": { "solutionMap": {} }, "ui": { "checkMode": "button", "lockNextUntilCorrect": true } },
      { "variantId": 2, "promptKey": "m36_v2_prompt", "choices": { "items": [], "zones": [] }, "answer": { "solutionMap": {} }, "ui": { "checkMode": "button", "lockNextUntilCorrect": true } },
      { "variantId": 3, "promptKey": "m36_v3_prompt", "choices": { "items": [], "zones": [] }, "answer": { "solutionMap": {} }, "ui": { "checkMode": "button", "lockNextUntilCorrect": true } },
      { "variantId": 4, "promptKey": "m36_v4_prompt", "choices": { "items": [], "zones": [] }, "answer": { "solutionMap": {} }, "ui": { "checkMode": "button", "lockNextUntilCorrect": true } },
      { "variantId": 5, "promptKey": "m36_v5_prompt", "choices": { "items": [], "zones": [] }, "answer": { "solutionMap": {} }, "ui": { "checkMode": "button", "lockNextUntilCorrect": true } }
    ]},

    { "id": 37, "block": 8, "type": "tap", "icon": "please", "titleKey": "m37_title", "variants": [
      { "variantId": 1, "promptKey": "m37_v1_prompt", "choices": ["", "", ""], "answer": { "correctIndex": 0 }, "ui": { "lockNextUntilCorrect": true, "autoAdvance": true } },
      { "variantId": 2, "promptKey": "m37_v2_prompt", "choices": ["", "", ""], "answer": { "correctIndex": 0 }, "ui": { "lockNextUntilCorrect": true, "autoAdvance": true } },
      { "variantId": 3, "promptKey": "m37_v3_prompt", "choices": ["", "", ""], "answer": { "correctIndex": 0 }, "ui": { "lockNextUntilCorrect": true, "autoAdvance": true } },
      { "variantId": 4, "promptKey": "m37_v4_prompt", "choices": ["", "", ""], "answer": { "correctIndex": 0 }, "ui": { "lockNextUntilCorrect": true, "autoAdvance": true } },
      { "variantId": 5, "promptKey": "m37_v5_prompt", "choices": ["", "", ""], "answer": { "correctIndex": 0 }, "ui": { "lockNextUntilCorrect": true, "autoAdvance": true } }
    ]},

    { "id": 38, "block": 8, "type": "timer", "icon": "queue", "titleKey": "m38_title", "variants": [
      { "variantId": 1, "promptKey": "m38_v1_prompt", "choices": { "seconds": 5 }, "answer": { "complete": true }, "ui": { "autoComplete": true, "lockNextUntilComplete": true } },
      { "variantId": 2, "promptKey": "m38_v2_prompt", "choices": { "seconds": 6 }, "answer": { "complete": true }, "ui": { "autoComplete": true, "lockNextUntilComplete": true } },
      { "variantId": 3, "promptKey": "m38_v3_prompt", "choices": { "seconds": 7 }, "answer": { "complete": true }, "ui": { "autoComplete": true, "lockNextUntilComplete": true } },
      { "variantId": 4, "promptKey": "m38_v4_prompt", "choices": { "seconds": 8 }, "answer": { "complete": true }, "ui": { "autoComplete": true, "lockNextUntilComplete": true } },
      { "variantId": 5, "promptKey": "m38_v5_prompt", "choices": { "seconds": 10 }, "answer": { "complete": true }, "ui": { "autoComplete": true, "lockNextUntilComplete": true } }
    ]},

    { "id": 39, "block": 8, "type": "tap", "icon": "buy", "titleKey": "m39_title", "variants": [
      { "variantId": 1, "promptKey": "m39_v1_prompt", "choices": ["", "", ""], "answer": { "correctIndex": 0 }, "ui": { "lockNextUntilCorrect": true, "autoAdvance": true } },
      { "variantId": 2, "promptKey": "m39_v2_prompt", "choices": ["", "", ""], "answer": { "correctIndex": 0 }, "ui": { "lockNextUntilCorrect": true, "autoAdvance": true } },
      { "variantId": 3, "promptKey": "m39_v3_prompt", "choices": ["", "", ""], "answer": { "correctIndex": 0 }, "ui": { "lockNextUntilCorrect": true, "autoAdvance": true } },
      { "variantId": 4, "promptKey": "m39_v4_prompt", "choices": ["", "", ""], "answer": { "correctIndex": 0 }, "ui": { "lockNextUntilCorrect": true, "autoAdvance": true } },
      { "variantId": 5, "promptKey": "m39_v5_prompt", "choices": ["", "", ""], "answer": { "correctIndex": 0 }, "ui": { "lockNextUntilCorrect": true, "autoAdvance": true } }
    ]},

    { "id": 40, "block": 8, "type": "multi", "icon": "words", "titleKey": "m40_title", "variants": [
      { "variantId": 1, "promptKey": "m40_v1_prompt", "choices": ["", "", "", ""], "answer": { "correctIndexes": [0] }, "ui": { "lockNextUntilCorrect": true, "allowPartialFeedback": true } },
      { "variantId": 2, "promptKey": "m40_v2_prompt", "choices": ["", "", "", ""], "answer": { "correctIndexes": [0] }, "ui": { "lockNextUntilCorrect": true, "allowPartialFeedback": true } },
      { "variantId": 3, "promptKey": "m40_v3_prompt", "choices": ["", "", "", ""], "answer": { "correctIndexes": [0] }, "ui": { "lockNextUntilCorrect": true, "allowPartialFeedback": true } },
      { "variantId": 4, "promptKey": "m40_v4_prompt", "choices": ["", "", "", ""], "answer": { "correctIndexes": [0] }, "ui": { "lockNextUntilCorrect": true, "allowPartialFeedback": true } },
      { "variantId": 5, "promptKey": "m40_v5_prompt", "choices": ["", "", "", ""], "answer": { "correctIndexes": [0] }, "ui": { "lockNextUntilCorrect": true, "allowPartialFeedback": true } }
    ]},

    { "id": 41, "block": 9, "type": "tap", "icon": "anger", "titleKey": "m41_title", "variants": [
      { "variantId": 1, "promptKey": "m41_v1_prompt", "choices": ["", "", ""], "answer": { "correctIndex": 0 }, "ui": { "lockNextUntilCorrect": true, "autoAdvance": true } },
      { "variantId": 2, "promptKey": "m41_v2_prompt", "choices": ["", "", ""], "answer": { "correctIndex": 0 }, "ui": { "lockNextUntilCorrect": true, "autoAdvance": true } },
      { "variantId": 3, "promptKey": "m41_v3_prompt", "choices": ["", "", ""], "answer": { "correctIndex": 0 }, "ui": { "lockNextUntilCorrect": true, "autoAdvance": true } },
      { "variantId": 4, "promptKey": "m41_v4_prompt", "choices": ["", "", ""], "answer": { "correctIndex": 0 }, "ui": { "lockNextUntilCorrect": true, "autoAdvance": true } },
      { "variantId": 5, "promptKey": "m41_v5_prompt", "choices": ["", "", ""], "answer": { "correctIndex": 0 }, "ui": { "lockNextUntilCorrect": true, "autoAdvance": true } }
    ]},

    { "id": 42, "block": 9, "type": "tap", "icon": "sad", "titleKey": "m42_title", "variants": [
      { "variantId": 1, "promptKey": "m42_v1_prompt", "choices": ["", "", ""], "answer": { "correctIndex": 0 }, "ui": { "lockNextUntilCorrect": true, "autoAdvance": true } },
      { "variantId": 2, "promptKey": "m42_v2_prompt", "choices": ["", "", ""], "answer": { "correctIndex": 0 }, "ui": { "lockNextUntilCorrect": true, "autoAdvance": true } },
      { "variantId": 3, "promptKey": "m42_v3_prompt", "choices": ["", "", ""], "answer": { "correctIndex": 0 }, "ui": { "lockNextUntilCorrect": true, "autoAdvance": true } },
      { "variantId": 4, "promptKey": "m42_v4_prompt", "choices": ["", "", ""], "answer": { "correctIndex": 0 }, "ui": { "lockNextUntilCorrect": true, "autoAdvance": true } },
      { "variantId": 5, "promptKey": "m42_v5_prompt", "choices": ["", "", ""], "answer": { "correctIndex": 0 }, "ui": { "lockNextUntilCorrect": true, "autoAdvance": true } }
    ]},

    { "id": 43, "block": 9, "type": "tap", "icon": "tired", "titleKey": "m43_title", "variants": [
      { "variantId": 1, "promptKey": "m43_v1_prompt", "choices": ["", "", ""], "answer": { "correctIndex": 0 }, "ui": { "lockNextUntilCorrect": true, "autoAdvance": true } },
      { "variantId": 2, "promptKey": "m43_v2_prompt", "choices": ["", "", ""], "answer": { "correctIndex": 0 }, "ui": { "lockNextUntilCorrect": true, "autoAdvance": true } },
      { "variantId": 3, "promptKey": "m43_v3_prompt", "choices": ["", "", ""], "answer": { "correctIndex": 0 }, "ui": { "lockNextUntilCorrect": true, "autoAdvance": true } },
      { "variantId": 4, "promptKey": "m43_v4_prompt", "choices": ["", "", ""], "answer": { "correctIndex": 0 }, "ui": { "lockNextUntilCorrect": true, "autoAdvance": true } },
      { "variantId": 5, "promptKey": "m43_v5_prompt", "choices": ["", "", ""], "answer": { "correctIndex": 0 }, "ui": { "lockNextUntilCorrect": true, "autoAdvance": true } }
    ]},

    { "id": 44, "block": 9, "type": "tap", "icon": "solve", "titleKey": "m44_title", "variants": [
      { "variantId": 1, "promptKey": "m44_v1_prompt", "choices": ["", "", ""], "answer": { "correctIndex": 0 }, "ui": { "lockNextUntilCorrect": true, "autoAdvance": true } },
      { "variantId": 2, "promptKey": "m44_v2_prompt", "choices": ["", "", ""], "answer": { "correctIndex": 0 }, "ui": { "lockNextUntilCorrect": true, "autoAdvance": true } },
      { "variantId": 3, "promptKey": "m44_v3_prompt", "choices": ["", "", ""], "answer": { "correctIndex": 0 }, "ui": { "lockNextUntilCorrect": true, "autoAdvance": true } },
      { "variantId": 4, "promptKey": "m44_v4_prompt", "choices": ["", "", ""], "answer": { "correctIndex": 0 }, "ui": { "lockNextUntilCorrect": true, "autoAdvance": true } },
      { "variantId": 5, "promptKey": "m44_v5_prompt", "choices": ["", "", ""], "answer": { "correctIndex": 0 }, "ui": { "lockNextUntilCorrect": true, "autoAdvance": true } }
    ]},

    { "id": 45, "block": 9, "type": "timer", "icon": "breath", "titleKey": "m45_title", "variants": [
      { "variantId": 1, "promptKey": "m45_v1_prompt", "choices": { "seconds": 10 }, "answer": { "complete": true }, "ui": { "autoComplete": true, "tickSound": false, "lockNextUntilComplete": true } },
      { "variantId": 2, "promptKey": "m45_v2_prompt", "choices": { "seconds": 10 }, "answer": { "complete": true }, "ui": { "autoComplete": true, "tickSound": false, "lockNextUntilComplete": true } },
      { "variantId": 3, "promptKey": "m45_v3_prompt", "choices": { "seconds": 10 }, "answer": { "complete": true }, "ui": { "autoComplete": true, "tickSound": false, "lockNextUntilComplete": true } },
      { "variantId": 4, "promptKey": "m45_v4_prompt", "choices": { "seconds": 10 }, "answer": { "complete": true }, "ui": { "autoComplete": true, "tickSound": false, "lockNextUntilComplete": true } },
      { "variantId": 5, "promptKey": "m45_v5_prompt", "choices": { "seconds": 10 }, "answer": { "complete": true }, "ui": { "autoComplete": true, "tickSound": true, "lockNextUntilComplete": true } }
    ]},

    { "id": 46, "block": 10, "type": "multi", "icon": "map", "titleKey": "m46_title", "variants": [
      { "variantId": 1, "promptKey": "m46_v1_prompt", "choices": ["", "", "", ""], "answer": { "correctIndexes": [0] }, "ui": { "lockNextUntilCorrect": true, "allowPartialFeedback": true } },
      { "variantId": 2, "promptKey": "m46_v2_prompt", "choices": ["", "", "", ""], "answer": { "correctIndexes": [0] }, "ui": { "lockNextUntilCorrect": true, "allowPartialFeedback": true } },
      { "variantId": 3, "promptKey": "m46_v3_prompt", "choices": ["", "", "", ""], "answer": { "correctIndexes": [0] }, "ui": { "lockNextUntilCorrect": true, "allowPartialFeedback": true } },
      { "variantId": 4, "promptKey": "m46_v4_prompt", "choices": ["", "", "", ""], "answer": { "correctIndexes": [0] }, "ui": { "lockNextUntilCorrect": true, "allowPartialFeedback": true } },
      { "variantId": 5, "promptKey": "m46_v5_prompt", "choices": ["", "", "", ""], "answer": { "correctIndexes": [0] }, "ui": { "lockNextUntilCorrect": true, "allowPartialFeedback": true } }
    ]},

    { "id": 47, "block": 10, "type": "tap", "icon": "power", "titleKey": "m47_title", "variants": [
      { "variantId": 1, "promptKey": "m47_v1_prompt", "choices": ["", "", ""], "answer": { "correctIndex": 0 }, "ui": { "lockNextUntilCorrect": true, "autoAdvance": true } },
      { "variantId": 2, "promptKey": "m47_v2_prompt", "choices": ["", "", ""], "answer": { "correctIndex": 0 }, "ui": { "lockNextUntilCorrect": true, "autoAdvance": true } },
      { "variantId": 3, "promptKey": "m47_v3_prompt", "choices": ["", "", ""], "answer": { "correctIndex": 0 }, "ui": { "lockNextUntilCorrect": true, "autoAdvance": true } },
      { "variantId": 4, "promptKey": "m47_v4_prompt", "choices": ["", "", ""], "answer": { "correctIndex": 0 }, "ui": { "lockNextUntilCorrect": true, "autoAdvance": true } },
      { "variantId": 5, "promptKey": "m47_v5_prompt", "choices": ["", "", ""], "answer": { "correctIndex": 0 }, "ui": { "lockNextUntilCorrect": true, "autoAdvance": true } }
    ]},

    { "id": 48, "block": 10, "type": "tap", "icon": "flag", "titleKey": "m48_title", "variants": [
      { "variantId": 1, "promptKey": "m48_v1_prompt", "choices": ["", "", ""], "answer": { "correctIndex": 0 }, "ui": { "lockNextUntilCorrect": true, "autoAdvance": true } },
      { "variantId": 2, "promptKey": "m48_v2_prompt", "choices": ["", "", ""], "answer": { "correctIndex": 0 }, "ui": { "lockNextUntilCorrect": true, "autoAdvance": true } },
      { "variantId": 3, "promptKey": "m48_v3_prompt", "choices": ["", "", ""], "answer": { "correctIndex": 0 }, "ui": { "lockNextUntilCorrect": true, "autoAdvance": true } },
      { "variantId": 4, "promptKey": "m48_v4_prompt", "choices": ["", "", ""], "answer": { "correctIndex": 0 }, "ui": { "lockNextUntilCorrect": true, "autoAdvance": true } },
      { "variantId": 5, "promptKey": "m48_v5_prompt", "choices": ["", "", ""], "answer": { "correctIndex": 0 }, "ui": { "lockNextUntilCorrect": true, "autoAdvance": true } }
    ]},

    { "id": 49, "block": 10, "type": "tap", "icon": "medal", "titleKey": "m49_title", "variants": [
      { "variantId": 1, "promptKey": "m49_v1_prompt", "choices": ["", "", ""], "answer": { "correctIndex": 0 }, "ui": { "lockNextUntilCorrect": true, "autoAdvance": true } },
      { "variantId": 2, "promptKey": "m49_v2_prompt", "choices": ["", "", ""], "answer": { "correctIndex": 0 }, "ui": { "lockNextUntilCorrect": true, "autoAdvance": true } },
      { "variantId": 3, "promptKey": "m49_v3_prompt", "choices": ["", "", ""], "answer": { "correctIndex": 0 }, "ui": { "lockNextUntilCorrect": true, "autoAdvance": true } },
      { "variantId": 4, "promptKey": "m49_v4_prompt", "choices": ["", "", ""], "answer": { "correctIndex": 0 }, "ui": { "lockNextUntilCorrect": true, "autoAdvance": true } },
      { "variantId": 5, "promptKey": "m49_v5_prompt", "choices": ["", "", ""], "answer": { "correctIndex": 0 }, "ui": { "lockNextUntilCorrect": true, "autoAdvance": true } }
    ]},

    { "id": 50, "block": 10, "type": "final", "icon": "trophy", "titleKey": "m50_title",
      "variants": [
        { "variantId": 1, "promptKey": "m50_v1_prompt", "choices": {}, "answer": { "final": true }, "ui": { "confetti": true, "certificate": true } },
        { "variantId": 2, "promptKey": "m50_v2_prompt", "choices": {}, "answer": { "final": true }, "ui": { "confetti": true, "certificate": true } },
        { "variantId": 3, "promptKey": "m50_v3_prompt", "choices": {}, "answer": { "final": true }, "ui": { "confetti": true, "certificate": true } },
        { "variantId": 4, "promptKey": "m50_v4_prompt", "choices": {}, "answer": { "final": true }, "ui": { "confetti": true, "certificate": true } },
        { "variantId": 5, "promptKey": "m50_v5_prompt", "choices": {}, "answer": { "final": true }, "ui": { "confetti": true, "certificate": true } }
      ]
    }
  ]
}
[
  {
    "id": 1,
    "block": 1,
    "type": "drag",
    "icon": "flag",
    "titleKey": "m1_title",
    "variants": [
      {
        "variantId": 1,
        "promptKey": "m1_v1_prompt",
        "prompt": "Перетащи описание флага в правильную страну.",
        "choices": {
          "items": [
            { "id": "fr", "label": "Синий-белый-красный (полосы)", "icon": "flag" },
            { "id": "it", "label": "Зелёный-белый-красный (полосы)", "icon": "flag" }
          ],
          "zones": [
            { "id": "FR", "label": "Франция" },
            { "id": "IT", "label": "Италия" }
          ]
        },
        "answer": { "solutionMap": { "fr": "FR", "it": "IT" } },
        "ui": { "checkMode": "button", "lockNextUntilCorrect": true, "autoAdvance": false, "showCheckButton": true, "showResetButton": true }
      },
      {
        "variantId": 2,
        "promptKey": "m1_v2_prompt",
        "prompt": "Разложи флаги по странам.",
        "choices": {
          "items": [
            { "id": "de", "label": "Чёрный-красный-жёлтый (полосы)", "icon": "flag" },
            { "id": "ru", "label": "Белый-синий-красный (полосы)", "icon": "flag" }
          ],
          "zones": [
            { "id": "DE", "label": "Германия" },
            { "id": "RU", "label": "Россия" }
          ]
        },
        "answer": { "solutionMap": { "de": "DE", "ru": "RU" } },
        "ui": { "checkMode": "button", "lockNextUntilCorrect": true, "autoAdvance": false, "showCheckButton": true, "showResetButton": true }
      },
      {
        "variantId": 3,
        "promptKey": "m1_v3_prompt",
        "prompt": "Найди страну по описанию флага.",
        "choices": {
          "items": [
            { "id": "jp", "label": "Белый фон и красный кружок", "icon": "flag" },
            { "id": "gr", "label": "Синий-белый, много полос и крест", "icon": "flag" }
          ],
          "zones": [
            { "id": "JP", "label": "Япония" },
            { "id": "GR", "label": "Греция" }
          ]
        },
        "answer": { "solutionMap": { "jp": "JP", "gr": "GR" } },
        "ui": { "checkMode": "onDrop", "lockNextUntilCorrect": true, "autoAdvance": false, "showResetButton": true }
      },
      {
        "variantId": 4,
        "promptKey": "m1_v4_prompt",
        "prompt": "Сопоставь флаг и страну.",
        "choices": {
          "items": [
            { "id": "gb", "label": "Кресты на синем и красном фоне", "icon": "flag" },
            { "id": "us", "label": "Полосы и звёзды", "icon": "flag" }
          ],
          "zones": [
            { "id": "GB", "label": "Великобритания" },
            { "id": "US", "label": "США" }
          ]
        },
        "answer": { "solutionMap": { "gb": "GB", "us": "US" } },
        "ui": { "checkMode": "onDrop", "lockNextUntilCorrect": true, "autoAdvance": false, "showResetButton": true }
      },
      {
        "variantId": 5,
        "promptKey": "m1_v5_prompt",
        "prompt": "Перетащи флаги в правильные страны.",
        "choices": {
          "items": [
            { "id": "es", "label": "Красный-жёлтый-красный (полосы)", "icon": "flag" },
            { "id": "nl", "label": "Красный-белый-синий (полосы)", "icon": "flag" }
          ],
          "zones": [
            { "id": "ES", "label": "Испания" },
            { "id": "NL", "label": "Нидерланды" }
          ]
        },
        "answer": { "solutionMap": { "es": "ES", "nl": "NL" } },
        "ui": { "checkMode": "button", "lockNextUntilCorrect": true, "autoAdvance": false, "showCheckButton": true, "showResetButton": true }
      }
    ]
  },

  {
    "id": 2,
    "block": 1,
    "type": "tap",
    "icon": "globe",
    "titleKey": "m2_title",
    "variants": [
      {
        "variantId": 1,
        "promptKey": "m2_v1_prompt",
        "prompt": "Где горячее: у экватора или у полюса?",
        "choices": ["У экватора", "У полюса", "Везде одинаково"],
        "answer": { "correctIndex": 0 },
        "ui": { "lockNextUntilCorrect": true, "autoAdvance": true }
      },
      {
        "variantId": 2,
        "promptKey": "m2_v2_prompt",
        "prompt": "Что холоднее: Арктика или пустыня Сахара?",
        "choices": ["Арктика", "Сахара", "Одинаково"],
        "answer": { "correctIndex": 0 },
        "ui": { "lockNextUntilCorrect": true, "autoAdvance": true }
      },
      {
        "variantId": 3,
        "promptKey": "m2_v3_prompt",
        "prompt": "Где обычно холоднее: в горах или у моря?",
        "choices": ["В горах", "У моря", "Одинаково"],
        "answer": { "correctIndex": 0 },
        "ui": { "lockNextUntilCorrect": true, "autoAdvance": true }
      },
      {
        "variantId": 4,
        "promptKey": "m2_v4_prompt",
        "prompt": "Что бывает горячее: чай или мороженое?",
        "choices": ["Чай", "Мороженое", "Одинаково"],
        "answer": { "correctIndex": 0 },
        "ui": { "lockNextUntilCorrect": true, "autoAdvance": true }
      },
      {
        "variantId": 5,
        "promptKey": "m2_v5_prompt",
        "prompt": "Где холоднее: в тени или на солнце?",
        "choices": ["В тени", "На солнце", "Одинаково"],
        "answer": { "correctIndex": 0 },
        "ui": { "lockNextUntilCorrect": true, "autoAdvance": true }
      }
    ]
  },

  {
    "id": 3,
    "block": 1,
    "type": "tap",
    "icon": "plane",
    "titleKey": "m3_title",
    "variants": [
      {
        "variantId": 1,
        "promptKey": "m3_v1_prompt",
        "prompt": "Чем обычно летят в другую страну (например, в Катар)?",
        "choices": ["Самолётом", "Подводной лодкой", "На роликах"],
        "answer": { "correctIndex": 0 },
        "ui": { "lockNextUntilCorrect": true, "autoAdvance": true }
      },
      {
        "variantId": 2,
        "promptKey": "m3_v2_prompt",
        "prompt": "Какой транспорт чаще всего используют для дальнего перелёта?",
        "choices": ["Самолёт", "Велосипед", "Самокат"],
        "answer": { "correctIndex": 0 },
        "ui": { "lockNextUntilCorrect": true, "autoAdvance": true }
      },
      {
        "variantId": 3,
        "promptKey": "m3_v3_prompt",
        "prompt": "Что нужно, чтобы лететь на самолёте?",
        "choices": ["Билет", "Лопата", "Сковорода"],
        "answer": { "correctIndex": 0 },
        "ui": { "lockNextUntilCorrect": true, "autoAdvance": true }
      },
      {
        "variantId": 4,
        "promptKey": "m3_v4_prompt",
        "prompt": "Где сидят пассажиры в самолёте?",
        "choices": ["В креслах", "В ваннах", "В шкафу"],
        "answer": { "correctIndex": 0 },
        "ui": { "lockNextUntilCorrect": true, "autoAdvance": true }
      },
      {
        "variantId": 5,
        "promptKey": "m3_v5_prompt",
        "prompt": "Что делает самолёт перед полётом?",
        "choices": ["Взлетает", "Плывёт", "Растёт как дерево"],
        "answer": { "correctIndex": 0 },
        "ui": { "lockNextUntilCorrect": true, "autoAdvance": true }
      }
    ]
  },

  {
    "id": 4,
    "block": 1,
    "type": "drag",
    "icon": "landmark",
    "titleKey": "m4_title",
    "variants": [
      {
        "variantId": 1,
        "promptKey": "m4_v1_prompt",
        "prompt": "Перетащи достопримечательность в правильную страну.",
        "choices": {
          "items": [
            { "id": "eiffel", "label": "Эйфелева башня", "icon": "landmark" },
            { "id": "colosseum", "label": "Колизей", "icon": "landmark" }
          ],
          "zones": [
            { "id": "FR", "label": "Франция" },
            { "id": "IT", "label": "Италия" }
          ]
        },
        "answer": { "solutionMap": { "eiffel": "FR", "colosseum": "IT" } },
        "ui": { "checkMode": "onDrop", "lockNextUntilCorrect": true, "autoAdvance": false, "showResetButton": true }
      },
      {
        "variantId": 2,
        "promptKey": "m4_v2_prompt",
        "prompt": "Сопоставь место и страну.",
        "choices": {
          "items": [
            { "id": "bigben", "label": "Биг-Бен", "icon": "landmark" },
            { "id": "liberty", "label": "Статуя Свободы", "icon": "landmark" }
          ],
          "zones": [
            { "id": "GB", "label": "Великобритания" },
            { "id": "US", "label": "США" }
          ]
        },
        "answer": { "solutionMap": { "bigben": "GB", "liberty": "US" } },
        "ui": { "checkMode": "button", "lockNextUntilCorrect": true, "autoAdvance": false, "showCheckButton": true, "showResetButton": true }
      },
      {
        "variantId": 3,
        "promptKey": "m4_v3_prompt",
        "prompt": "Куда “поставить” достопримечательности?",
        "choices": {
          "items": [
            { "id": "pyramids", "label": "Пирамиды Гизы", "icon": "landmark" },
            { "id": "opera", "label": "Оперный театр (Сидней)", "icon": "landmark" }
          ],
          "zones": [
            { "id": "EG", "label": "Египет" },
            { "id": "AU", "label": "Австралия" }
          ]
        },
        "answer": { "solutionMap": { "pyramids": "EG", "opera": "AU" } },
        "ui": { "checkMode": "onDrop", "lockNextUntilCorrect": true, "autoAdvance": false, "showResetButton": true }
      },
      {
        "variantId": 4,
        "promptKey": "m4_v4_prompt",
        "prompt": "Перетащи достопримечательности по странам.",
        "choices": {
          "items": [
            { "id": "kremlin", "label": "Кремль (Москва)", "icon": "landmark" },
            { "id": "fuji", "label": "Гора Фудзи", "icon": "landmark" }
          ],
          "zones": [
            { "id": "RU", "label": "Россия" },
            { "id": "JP", "label": "Япония" }
          ]
        },
        "answer": { "solutionMap": { "kremlin": "RU", "fuji": "JP" } },
        "ui": { "checkMode": "button", "lockNextUntilCorrect": true, "autoAdvance": false, "showCheckButton": true, "showResetButton": true }
      },
      {
        "variantId": 5,
        "promptKey": "m4_v5_prompt",
        "prompt": "Сопоставь достопримечательность и страну.",
        "choices": {
          "items": [
            { "id": "sagrada", "label": "Саграда Фамилия", "icon": "landmark" },
            { "id": "acropolis", "label": "Акрополь", "icon": "landmark" }
          ],
          "zones": [
            { "id": "ES", "label": "Испания" },
            { "id": "GR", "label": "Греция" }
          ]
        },
        "answer": { "solutionMap": { "sagrada": "ES", "acropolis": "GR" } },
        "ui": { "checkMode": "onDrop", "lockNextUntilCorrect": true, "autoAdvance": false, "showResetButton": true }
      }
    ]
  },

  {
    "id": 5,
    "block": 1,
    "type": "multi",
    "icon": "suitcase",
    "titleKey": "m5_title",
    "variants": [
      {
        "variantId": 1,
        "promptKey": "m5_v1_prompt",
        "prompt": "Что обычно берут в поездку? Выбери ВСЕ правильные варианты.",
        "choices": ["Паспорт", "Зубная щётка", "Игрушка", "Кирпич"],
        "answer": { "correctIndexes": [0, 1, 2] },
        "ui": { "lockNextUntilCorrect": true, "allowPartialFeedback": true, "autoAdvance": false }
      },
      {
        "variantId": 2,
        "promptKey": "m5_v2_prompt",
        "prompt": "Собери чемодан: что пригодится в путешествии?",
        "choices": ["Одежда", "Билет", "Телефон", "Кастрюля на 20 литров"],
        "answer": { "correctIndexes": [0, 1, 2] },
        "ui": { "lockNextUntilCorrect": true, "allowPartialFeedback": true, "autoAdvance": false }
      },
      {
        "variantId": 3,
        "promptKey": "m5_v3_prompt",
        "prompt": "Что берут в поездку, чтобы не потеряться и быть на связи?",
        "choices": ["Карта/навигатор", "Зарядка", "Документы", "Снеговик"],
        "answer": { "correctIndexes": [0, 1, 2] },
        "ui": { "lockNextUntilCorrect": true, "allowPartialFeedback": true, "autoAdvance": false }
      },
      {
        "variantId": 4,
        "promptKey": "m5_v4_prompt",
        "prompt": "Выбери вещи, которые точно пригодятся в путешествии.",
        "choices": ["Вода", "Аптечка (пластырь)", "Шапка/кепка", "Дверная ручка"],
        "answer": { "correctIndexes": [0, 1, 2] },
        "ui": { "lockNextUntilCorrect": true, "allowPartialFeedback": true, "autoAdvance": false }
      },
      {
        "variantId": 5,
        "promptKey": "m5_v5_prompt",
        "prompt": "Что берут в дорогу? (Можно выбрать несколько)",
        "choices": ["Перекус", "Книга", "Наушники", "Табуретка"],
        "answer": { "correctIndexes": [0, 1, 2] },
        "ui": { "lockNextUntilCorrect": true, "allowPartialFeedback": true, "autoAdvance": false }
      }
    ]
  }
]
[
  {
    "id": 6,
    "block": 2,
    "type": "tap",
    "icon": "star",
    "titleKey": "m6_title",
    "variants": [
      {
        "variantId": 1,
        "promptKey": "m6_v1_prompt",
        "prompt": "Что лишнее?",
        "choices": ["Яблоко", "Банан", "Морковь", "Мяч"],
        "answer": { "correctIndex": 3 },
        "ui": { "lockNextUntilCorrect": true, "autoAdvance": true }
      },
      {
        "variantId": 2,
        "promptKey": "m6_v2_prompt",
        "prompt": "Что лишнее?",
        "choices": ["Кошка", "Собака", "Лошадь", "Стул"],
        "answer": { "correctIndex": 3 },
        "ui": { "lockNextUntilCorrect": true, "autoAdvance": true }
      },
      {
        "variantId": 3,
        "promptKey": "m6_v3_prompt",
        "prompt": "Что лишнее?",
        "choices": ["Зима", "Весна", "Лето", "Ложка"],
        "answer": { "correctIndex": 3 },
        "ui": { "lockNextUntilCorrect": true, "autoAdvance": true }
      },
      {
        "variantId": 4,
        "promptKey": "m6_v4_prompt",
        "prompt": "Что лишнее?",
        "choices": ["Красный", "Синий", "Зелёный", "Котлета"],
        "answer": { "correctIndex": 3 },
        "ui": { "lockNextUntilCorrect": true, "autoAdvance": true }
      },
      {
        "variantId": 5,
        "promptKey": "m6_v5_prompt",
        "prompt": "Что лишнее?",
        "choices": ["Шапка", "Куртка", "Шарф", "Подушка"],
        "answer": { "correctIndex": 3 },
        "ui": { "lockNextUntilCorrect": true, "autoAdvance": true }
      }
    ]
  },

  {
    "id": 7,
    "block": 2,
    "type": "tap",
    "icon": "pattern",
    "titleKey": "m7_title",
    "variants": [
      {
        "variantId": 1,
        "promptKey": "m7_v1_prompt",
        "prompt": "Продолжи ряд: 1, 2, 3, ...",
        "choices": ["4", "6", "10"],
        "answer": { "correctIndex": 0 },
        "ui": { "lockNextUntilCorrect": true, "autoAdvance": true }
      },
      {
        "variantId": 2,
        "promptKey": "m7_v2_prompt",
        "prompt": "Продолжи ряд: круг, квадрат, круг, квадрат, ...",
        "choices": ["круг", "треугольник", "прямоугольник"],
        "answer": { "correctIndex": 0 },
        "ui": { "lockNextUntilCorrect": true, "autoAdvance": true }
      },
      {
        "variantId": 3,
        "promptKey": "m7_v3_prompt",
        "prompt": "Продолжи ряд: большой, маленький, большой, маленький, ...",
        "choices": ["большой", "средний", "маленький"],
        "answer": { "correctIndex": 0 },
        "ui": { "lockNextUntilCorrect": true, "autoAdvance": true }
      },
      {
        "variantId": 4,
        "promptKey": "m7_v4_prompt",
        "prompt": "Продолжи ряд: понедельник, вторник, среда, ...",
        "choices": ["четверг", "суббота", "январь"],
        "answer": { "correctIndex": 0 },
        "ui": { "lockNextUntilCorrect": true, "autoAdvance": true }
      },
      {
        "variantId": 5,
        "promptKey": "m7_v5_prompt",
        "prompt": "Продолжи ряд: 2, 4, 6, ...",
        "choices": ["8", "9", "12"],
        "answer": { "correctIndex": 0 },
        "ui": { "lockNextUntilCorrect": true, "autoAdvance": true }
      }
    ]
  },

  {
    "id": 8,
    "block": 2,
    "type": "drag",
    "icon": "pair",
    "titleKey": "m8_title",
    "variants": [
      {
        "variantId": 1,
        "promptKey": "m8_v1_prompt",
        "prompt": "Найди пару: кто где живёт? Перетащи животных в домики.",
        "choices": {
          "items": [
            { "id": "fish", "label": "Рыба", "icon": "animal" },
            { "id": "bird", "label": "Птица", "icon": "animal" }
          ],
          "zones": [
            { "id": "water", "label": "Вода" },
            { "id": "sky", "label": "Небо" }
          ]
        },
        "answer": { "solutionMap": { "fish": "water", "bird": "sky" } },
        "ui": { "checkMode": "onDrop", "lockNextUntilCorrect": true, "autoAdvance": false, "showResetButton": true }
      },
      {
        "variantId": 2,
        "promptKey": "m8_v2_prompt",
        "prompt": "Найди пару: что к чему подходит? Перетащи предметы.",
        "choices": {
          "items": [
            { "id": "key", "label": "Ключ", "icon": "star" },
            { "id": "toothbrush", "label": "Зубная щётка", "icon": "star" }
          ],
          "zones": [
            { "id": "door", "label": "Дверь" },
            { "id": "teeth", "label": "Зубы" }
          ]
        },
        "answer": { "solutionMap": { "key": "door", "toothbrush": "teeth" } },
        "ui": { "checkMode": "button", "lockNextUntilCorrect": true, "autoAdvance": false, "showCheckButton": true, "showResetButton": true }
      },
      {
        "variantId": 3,
        "promptKey": "m8_v3_prompt",
        "prompt": "Найди пару: что где бывает? Перетащи явления.",
        "choices": {
          "items": [
            { "id": "snow", "label": "Снег", "icon": "star" },
            { "id": "sun", "label": "Солнце", "icon": "star" }
          ],
          "zones": [
            { "id": "winter", "label": "Зима" },
            { "id": "summer", "label": "Лето" }
          ]
        },
        "answer": { "solutionMap": { "snow": "winter", "sun": "summer" } },
        "ui": { "checkMode": "onDrop", "lockNextUntilCorrect": true, "autoAdvance": false, "showResetButton": true }
      },
      {
        "variantId": 4,
        "promptKey": "m8_v4_prompt",
        "prompt": "Найди пару: инструмент и дело. Перетащи правильно.",
        "choices": {
          "items": [
            { "id": "pencil", "label": "Карандаш", "icon": "star" },
            { "id": "spoon", "label": "Ложка", "icon": "star" }
          ],
          "zones": [
            { "id": "draw", "label": "Рисовать" },
            { "id": "eat", "label": "Есть" }
          ]
        },
        "answer": { "solutionMap": { "pencil": "draw", "spoon": "eat" } },
        "ui": { "checkMode": "button", "lockNextUntilCorrect": true, "autoAdvance": false, "showCheckButton": true, "showResetButton": true }
      },
      {
        "variantId": 5,
        "promptKey": "m8_v5_prompt",
        "prompt": "Найди пару: животное и место. Перетащи зверей.",
        "choices": {
          "items": [
            { "id": "cat", "label": "Кошка", "icon": "animal" },
            { "id": "cow", "label": "Корова", "icon": "animal" }
          ],
          "zones": [
            { "id": "home", "label": "Дом" },
            { "id": "farm", "label": "Ферма" }
          ]
        },
        "answer": { "solutionMap": { "cat": "home", "cow": "farm" } },
        "ui": { "checkMode": "onDrop", "lockNextUntilCorrect": true, "autoAdvance": false, "showResetButton": true }
      }
    ]
  },

  {
    "id": 9,
    "block": 2,
    "type": "tap",
    "icon": "size",
    "titleKey": "m9_title",
    "variants": [
      {
        "variantId": 1,
        "promptKey": "m9_v1_prompt",
        "prompt": "Что больше?",
        "choices": ["Слон", "Мышка", "Комар"],
        "answer": { "correctIndex": 0 },
        "ui": { "lockNextUntilCorrect": true, "autoAdvance": true }
      },
      {
        "variantId": 2,
        "promptKey": "m9_v2_prompt",
        "prompt": "Что меньше?",
        "choices": ["Дом", "Автобус", "Пуговица"],
        "answer": { "correctIndex": 2 },
        "ui": { "lockNextUntilCorrect": true, "autoAdvance": true }
      },
      {
        "variantId": 3,
        "promptKey": "m9_v3_prompt",
        "prompt": "Что больше?",
        "choices": ["Гора", "Холм", "Камешек"],
        "answer": { "correctIndex": 0 },
        "ui": { "lockNextUntilCorrect": true, "autoAdvance": true }
      },
      {
        "variantId": 4,
        "promptKey": "m9_v4_prompt",
        "prompt": "Что меньше?",
        "choices": ["Книга", "Тетрадь", "Планета"],
        "answer": { "correctIndex": 1 },
        "ui": { "lockNextUntilCorrect": true, "autoAdvance": true }
      },
      {
        "variantId": 5,
        "promptKey": "m9_v5_prompt",
        "prompt": "Что больше?",
        "choices": ["Океан", "Лужа", "Стакан воды"],
        "answer": { "correctIndex": 0 },
        "ui": { "lockNextUntilCorrect": true, "autoAdvance": true }
      }
    ]
  },

  {
    "id": 10,
    "block": 2,
    "type": "timer",
    "icon": "timer",
    "titleKey": "m10_title",
    "variants": [
      {
        "variantId": 1,
        "promptKey": "m10_v1_prompt",
        "prompt": "Быстро! У тебя 5 секунд. Замри и не двигайся до нуля.",
        "choices": { "seconds": 5 },
        "answer": { "complete": true },
        "ui": { "tickSound": true, "autoComplete": true, "lockNextUntilComplete": true, "autoAdvance": false }
      },
      {
        "variantId": 2,
        "promptKey": "m10_v2_prompt",
        "prompt": "Супер-агент! У тебя 6 секунд. Дыши тихо и спокойно до нуля.",
        "choices": { "seconds": 6 },
        "answer": { "complete": true },
        "ui": { "tickSound": true, "autoComplete": true, "lockNextUntilComplete": true, "autoAdvance": false }
      },
      {
        "variantId": 3,
        "promptKey": "m10_v3_prompt",
        "prompt": "Быстро! У тебя 7 секунд. Считай в голове: 1…2…3… до нуля.",
        "choices": { "seconds": 7 },
        "answer": { "complete": true },
        "ui": { "tickSound": false, "autoComplete": true, "lockNextUntilComplete": true, "autoAdvance": false }
      },
      {
        "variantId": 4,
        "promptKey": "m10_v4_prompt",
        "prompt": "Испытание: 8 секунд. Улыбайся и держи улыбку до нуля.",
        "choices": { "seconds": 8 },
        "answer": { "complete": true },
        "ui": { "tickSound": false, "autoComplete": true, "lockNextUntilComplete": true, "autoAdvance": false }
      },
      {
        "variantId": 5,
        "promptKey": "m10_v5_prompt",
        "prompt": "Финиш-рывок: 10 секунд. Не моргай до нуля (если получается).",
        "choices": { "seconds": 10 },
        "answer": { "complete": true },
        "ui": { "tickSound": true, "autoComplete": true, "lockNextUntilComplete": true, "autoAdvance": false }
      }
    ]
  }
]
[
  {
    "id": 11,
    "block": 3,
    "type": "timer",
    "icon": "stop",
    "titleKey": "m11_title",
    "variants": [
      {
        "variantId": 1,
        "prompt": "Замри как статуя на 10 секунд.",
        "choices": { "seconds": 10 },
        "answer": { "complete": true },
        "ui": { "autoComplete": true, "lockNextUntilComplete": true }
      },
      {
        "variantId": 2,
        "prompt": "Представь, что ты робот. Замри на 10 секунд.",
        "choices": { "seconds": 10 },
        "answer": { "complete": true },
        "ui": { "autoComplete": true, "lockNextUntilComplete": true }
      },
      {
        "variantId": 3,
        "prompt": "Замри как супергерой перед прыжком на 10 секунд.",
        "choices": { "seconds": 10 },
        "answer": { "complete": true },
        "ui": { "autoComplete": true, "lockNextUntilComplete": true }
      },
      {
        "variantId": 4,
        "prompt": "Замри и не двигайся, пока не закончится таймер.",
        "choices": { "seconds": 10 },
        "answer": { "complete": true },
        "ui": { "autoComplete": true, "lockNextUntilComplete": true }
      },
      {
        "variantId": 5,
        "prompt": "Статуя агента: полная неподвижность 10 секунд.",
        "choices": { "seconds": 10 },
        "answer": { "complete": true },
        "ui": { "autoComplete": true, "lockNextUntilComplete": true }
      }
    ]
  },

  {
    "id": 12,
    "block": 3,
    "type": "action",
    "icon": "jump",
    "titleKey": "m12_title",
    "variants": [
      {
        "variantId": 1,
        "prompt": "Прыгни 5 раз на месте.",
        "choices": {},
        "answer": { "confirm": true },
        "ui": { "confirmText": "Я прыгнул(а)!", "lockNextUntilConfirm": true }
      },
      {
        "variantId": 2,
        "prompt": "Сделай 3 прыжка вперёд.",
        "choices": {},
        "answer": { "confirm": true },
        "ui": { "confirmText": "Готово!", "lockNextUntilConfirm": true }
      },
      {
        "variantId": 3,
        "prompt": "Прыгни как лягушка 4 раза.",
        "choices": {},
        "answer": { "confirm": true },
        "ui": { "confirmText": "Сделал(а)!", "lockNextUntilConfirm": true }
      },
      {
        "variantId": 4,
        "prompt": "Сделай 6 маленьких прыжков.",
        "choices": {},
        "answer": { "confirm": true },
        "ui": { "confirmText": "Готово!", "lockNextUntilConfirm": true }
      },
      {
        "variantId": 5,
        "prompt": "Прыгни высоко 3 раза.",
        "choices": {},
        "answer": { "confirm": true },
        "ui": { "confirmText": "Я сделал(а)!", "lockNextUntilConfirm": true }
      }
    ]
  },

  {
    "id": 13,
    "block": 3,
    "type": "creative",
    "icon": "body",
    "titleKey": "m13_title",
    "variants": [
      {
        "variantId": 1,
        "prompt": "Покажи страну своим телом. Какой она формы?",
        "choices": {},
        "answer": { "done": true },
        "ui": { "enableInput": false, "lockNextUntilDone": true }
      },
      {
        "variantId": 2,
        "prompt": "Покажи горы, море или пустыню своим телом.",
        "choices": {},
        "answer": { "done": true },
        "ui": { "enableInput": false, "lockNextUntilDone": true }
      },
      {
        "variantId": 3,
        "prompt": "Представь, что ты карта страны. Покажи её форму.",
        "choices": {},
        "answer": { "done": true },
        "ui": { "enableInput": false, "lockNextUntilDone": true }
      },
      {
        "variantId": 4,
        "prompt": "Изобрази страну, где холодно.",
        "choices": {},
        "answer": { "done": true },
        "ui": { "enableInput": false, "lockNextUntilDone": true }
      },
      {
        "variantId": 5,
        "prompt": "Покажи страну, где всегда тепло.",
        "choices": {},
        "answer": { "done": true },
        "ui": { "enableInput": false, "lockNextUntilDone": true }
      }
    ]
  },

  {
    "id": 14,
    "block": 3,
    "type": "action",
    "icon": "room",
    "titleKey": "m14_title",
    "variants": [
      {
        "variantId": 1,
        "prompt": "Найди в комнате что-то круглое.",
        "choices": {},
        "answer": { "confirm": true },
        "ui": { "confirmText": "Нашёл(а)!", "lockNextUntilConfirm": true }
      },
      {
        "variantId": 2,
        "prompt": "Найди в комнате что-то синее.",
        "choices": {},
        "answer": { "confirm": true },
        "ui": { "confirmText": "Есть!", "lockNextUntilConfirm": true }
      },
      {
        "variantId": 3,
        "prompt": "Найди предмет, который можно взять в путешествие.",
        "choices": {},
        "answer": { "confirm": true },
        "ui": { "confirmText": "Нашёл(а)!", "lockNextUntilConfirm": true }
      },
      {
        "variantId": 4,
        "prompt": "Найди в комнате что-то мягкое.",
        "choices": {},
        "answer": { "confirm": true },
        "ui": { "confirmText": "Готово!", "lockNextUntilConfirm": true }
      },
      {
        "variantId": 5,
        "prompt": "Найди предмет, который ты любишь.",
        "choices": {},
        "answer": { "confirm": true },
        "ui": { "confirmText": "Нашёл(а)!", "lockNextUntilConfirm": true }
      }
    ]
  },

  {
    "id": 15,
    "block": 3,
    "type": "action",
    "icon": "speed",
    "titleKey": "m15_title",
    "variants": [
      {
        "variantId": 1,
        "prompt": "Пройди по комнате очень медленно.",
        "choices": {},
        "answer": { "confirm": true },
        "ui": { "confirmText": "Готово!", "lockNextUntilConfirm": true }
      },
      {
        "variantId": 2,
        "prompt": "Сделай 5 быстрых шагов.",
        "choices": {},
        "answer": { "confirm": true },
        "ui": { "confirmText": "Сделал(а)!", "lockNextUntilConfirm": true }
      },
      {
        "variantId": 3,
        "prompt": "Походи как черепаха 10 секунд.",
        "choices": {},
        "answer": { "confirm": true },
        "ui": { "confirmText": "Готово!", "lockNextUntilConfirm": true }
      },
      {
        "variantId": 4,
        "prompt": "Пробегись на месте 5 секунд.",
        "choices": {},
        "answer": { "confirm": true },
        "ui": { "confirmText": "Я сделал(а)!", "lockNextUntilConfirm": true }
      },
      {
        "variantId": 5,
        "prompt": "Иди медленно, потом быстро — как агент.",
        "choices": {},
        "answer": { "confirm": true },
        "ui": { "confirmText": "Готово!", "lockNextUntilConfirm": true }
      }
    ]
  }
]
[
  {
    "id": 16,
    "block": 4,
    "type": "creative",
    "icon": "globe",
    "titleKey": "m16_title",
    "variants": [
      {
        "variantId": 1,
        "prompt": "Придумай страну и дай ей название.",
        "choices": {},
        "answer": { "done": true },
        "ui": { "enableInput": true, "saveResponse": true, "lockNextUntilDone": true }
      },
      {
        "variantId": 2,
        "prompt": "Как бы называлась страна, где живут только дети?",
        "choices": {},
        "answer": { "done": true },
        "ui": { "enableInput": true, "saveResponse": true, "lockNextUntilDone": true }
      },
      {
        "variantId": 3,
        "prompt": "Придумай страну мечты.",
        "choices": {},
        "answer": { "done": true },
        "ui": { "enableInput": true, "saveResponse": true, "lockNextUntilDone": true }
      },
      {
        "variantId": 4,
        "prompt": "Как бы ты назвал страну, где всегда лето?",
        "choices": {},
        "answer": { "done": true },
        "ui": { "enableInput": true, "saveResponse": true, "lockNextUntilDone": true }
      },
      {
        "variantId": 5,
        "prompt": "Придумай смешное название страны.",
        "choices": {},
        "answer": { "done": true },
        "ui": { "enableInput": true, "saveResponse": true, "lockNextUntilDone": true }
      }
    ]
  },

  {
    "id": 17,
    "block": 4,
    "type": "creative",
    "icon": "flag",
    "titleKey": "m17_title",
    "variants": [
      {
        "variantId": 1,
        "prompt": "Придумай флаг своей страны.",
        "choices": {},
        "answer": { "done": true },
        "ui": { "enableInput": false, "lockNextUntilDone": true }
      },
      {
        "variantId": 2,
        "prompt": "Какие цвета будут на флаге твоей страны?",
        "choices": {},
        "answer": { "done": true },
        "ui": { "enableInput": true, "saveResponse": true, "lockNextUntilDone": true }
      },
      {
        "variantId": 3,
        "prompt": "Нарисуй флаг в голове и опиши его.",
        "choices": {},
        "answer": { "done": true },
        "ui": { "enableInput": true, "saveResponse": true, "lockNextUntilDone": true }
      },
      {
        "variantId": 4,
        "prompt": "Будут ли на флаге звёзды или полосы?",
        "choices": {},
        "answer": { "done": true },
        "ui": { "enableInput": true, "saveResponse": true, "lockNextUntilDone": true }
      },
      {
        "variantId": 5,
        "prompt": "Придумай символ для флага.",
        "choices": {},
        "answer": { "done": true },
        "ui": { "enableInput": true, "saveResponse": true, "lockNextUntilDone": true }
      }
    ]
  },

  {
    "id": 18,
    "block": 4,
    "type": "tap",
    "icon": "mask",
    "titleKey": "m18_title",
    "variants": [
      {
        "variantId": 1,
        "prompt": "Кто ты сегодня?",
        "choices": ["Исследователь", "Супергерой", "Путешественник"],
        "answer": { "correctIndex": 0 },
        "ui": { "lockNextUntilCorrect": false, "autoAdvance": true }
      },
      {
        "variantId": 2,
        "prompt": "Кто ты сегодня?",
        "choices": ["Агент", "Капитан", "Изобретатель"],
        "answer": { "correctIndex": 0 },
        "ui": { "lockNextUntilCorrect": false, "autoAdvance": true }
      },
      {
        "variantId": 3,
        "prompt": "Кто ты сегодня?",
        "choices": ["Учёный", "Писатель", "Художник"],
        "answer": { "correctIndex": 0 },
        "ui": { "lockNextUntilCorrect": false, "autoAdvance": true }
      },
      {
        "variantId": 4,
        "prompt": "Кто ты сегодня?",
        "choices": ["Путешественник", "Мечтатель", "Игрок"],
        "answer": { "correctIndex": 0 },
        "ui": { "lockNextUntilCorrect": false, "autoAdvance": true }
      },
      {
        "variantId": 5,
        "prompt": "Кто ты сегодня?",
        "choices": ["Исследователь", "Командир", "Наблюдатель"],
        "answer": { "correctIndex": 0 },
        "ui": { "lockNextUntilCorrect": false, "autoAdvance": true }
      }
    ]
  },

  {
    "id": 19,
    "block": 4,
    "type": "creative",
    "icon": "home",
    "titleKey": "m19_title",
    "variants": [
      {
        "variantId": 1,
        "prompt": "Где ты живёшь? Опиши своё место.",
        "choices": {},
        "answer": { "done": true },
        "ui": { "enableInput": true, "saveResponse": true, "lockNextUntilDone": true }
      },
      {
        "variantId": 2,
        "prompt": "Опиши дом своей мечты.",
        "choices": {},
        "answer": { "done": true },
        "ui": { "enableInput": true, "saveResponse": true, "lockNextUntilDone": true }
      },
      {
        "variantId": 3,
        "prompt": "Где бы ты хотел жить?",
        "choices": {},
        "answer": { "done": true },
        "ui": { "enableInput": true, "saveResponse": true, "lockNextUntilDone": true }
      },
      {
        "variantId": 4,
        "prompt": "Опиши место, где тебе хорошо.",
        "choices": {},
        "answer": { "done": true },
        "ui": { "enableInput": true, "saveResponse": true, "lockNextUntilDone": true }
      },
      {
        "variantId": 5,
        "prompt": "Где живёт настоящий агент?",
        "choices": {},
        "answer": { "done": true },
        "ui": { "enableInput": true, "saveResponse": true, "lockNextUntilDone": true }
      }
    ]
  },

  {
    "id": 20,
    "block": 4,
    "type": "creative",
    "icon": "animal",
    "titleKey": "m20_title",
    "variants": [
      {
        "variantId": 1,
        "prompt": "Какое животное живёт в твоей стране?",
        "choices": {},
        "answer": { "done": true },
        "ui": { "enableInput": true, "saveResponse": true, "lockNextUntilDone": true }
      },
      {
        "variantId": 2,
        "prompt": "Придумай необычное животное для своей страны.",
        "choices": {},
        "answer": { "done": true },
        "ui": { "enableInput": true, "saveResponse": true, "lockNextUntilDone": true }
      },
      {
        "variantId": 3,
        "prompt": "Какое животное было бы символом твоей страны?",
        "choices": {},
        "answer": { "done": true },
        "ui": { "enableInput": true, "saveResponse": true, "lockNextUntilDone": true }
      },
      {
        "variantId": 4,
        "prompt": "Опиши животное, которое живёт только там.",
        "choices": {},
        "answer": { "done": true },
        "ui": { "enableInput": true, "saveResponse": true, "lockNextUntilDone": true }
      },
      {
        "variantId": 5,
        "prompt": "Какое животное ты бы выбрал для своей страны?",
        "choices": {},
        "answer": { "done": true },
        "ui": { "enableInput": true, "saveResponse": true, "lockNextUntilDone": true }
      }
    ]
  }
]
[
  {
    "id": 21,
    "block": 5,
    "type": "action",
    "icon": "speech",
    "titleKey": "m21_title",
    "variants": [
      {
        "variantId": 1,
        "prompt": "Скажи «привет» на трёх языках: русском, английском и любом другом.",
        "choices": {},
        "answer": { "confirm": true },
        "ui": { "confirmText": "Я сказал(а)!", "lockNextUntilConfirm": true }
      },
      {
        "variantId": 2,
        "prompt": "Скажи «hello» громко и чётко.",
        "choices": {},
        "answer": { "confirm": true },
        "ui": { "confirmText": "Готово!", "lockNextUntilConfirm": true }
      },
      {
        "variantId": 3,
        "prompt": "Скажи «bonjour» (бонжур).",
        "choices": {},
        "answer": { "confirm": true },
        "ui": { "confirmText": "Сказал(а)!", "lockNextUntilConfirm": true }
      },
      {
        "variantId": 4,
        "prompt": "Скажи «hola» (ола).",
        "choices": {},
        "answer": { "confirm": true },
        "ui": { "confirmText": "Готово!", "lockNextUntilConfirm": true }
      },
      {
        "variantId": 5,
        "prompt": "Скажи «ciao» (чао).",
        "choices": {},
        "answer": { "confirm": true },
        "ui": { "confirmText": "Я сказал(а)!", "lockNextUntilConfirm": true }
      }
    ]
  },

  {
    "id": 22,
    "block": 5,
    "type": "tap",
    "icon": "animal",
    "titleKey": "m22_title",
    "variants": [
      {
        "variantId": 1,
        "prompt": "Как говорит кошка?",
        "choices": ["Meow", "Woof", "Moo"],
        "answer": { "correctIndex": 0 },
        "ui": { "lockNextUntilCorrect": true, "autoAdvance": true }
      },
      {
        "variantId": 2,
        "prompt": "Как говорит собака?",
        "choices": ["Meow", "Woof", "Quack"],
        "answer": { "correctIndex": 1 },
        "ui": { "lockNextUntilCorrect": true, "autoAdvance": true }
      },
      {
        "variantId": 3,
        "prompt": "Как говорит корова?",
        "choices": ["Moo", "Meow", "Woof"],
        "answer": { "correctIndex": 0 },
        "ui": { "lockNextUntilCorrect": true, "autoAdvance": true }
      },
      {
        "variantId": 4,
        "prompt": "Как говорит утка?",
        "choices": ["Quack", "Woof", "Moo"],
        "answer": { "correctIndex": 0 },
        "ui": { "lockNextUntilCorrect": true, "autoAdvance": true }
      },
      {
        "variantId": 5,
        "prompt": "Как говорит овца?",
        "choices": ["Baa", "Meow", "Moo"],
        "answer": { "correctIndex": 0 },
        "ui": { "lockNextUntilCorrect": true, "autoAdvance": true }
      }
    ]
  },

  {
    "id": 23,
    "block": 5,
    "type": "tap",
    "icon": "audio",
    "titleKey": "m23_title",
    "variants": [
      {
        "variantId": 1,
        "prompt": "Какой это язык? (hello)",
        "choices": ["English", "French", "Spanish"],
        "answer": { "correctIndex": 0 },
        "ui": { "lockNextUntilCorrect": true, "autoAdvance": true }
      },
      {
        "variantId": 2,
        "prompt": "Какой это язык? (bonjour)",
        "choices": ["English", "French", "German"],
        "answer": { "correctIndex": 1 },
        "ui": { "lockNextUntilCorrect": true, "autoAdvance": true }
      },
      {
        "variantId": 3,
        "prompt": "Какой это язык? (hola)",
        "choices": ["Italian", "Spanish", "Portuguese"],
        "answer": { "correctIndex": 1 },
        "ui": { "lockNextUntilCorrect": true, "autoAdvance": true }
      },
      {
        "variantId": 4,
        "prompt": "Какой это язык? (ciao)",
        "choices": ["Italian", "French", "English"],
        "answer": { "correctIndex": 0 },
        "ui": { "lockNextUntilCorrect": true, "autoAdvance": true }
      },
      {
        "variantId": 5,
        "prompt": "Какой это язык? (hallo)",
        "choices": ["German", "English", "Spanish"],
        "answer": { "correctIndex": 0 },
        "ui": { "lockNextUntilCorrect": true, "autoAdvance": true }
      }
    ]
  },

  {
    "id": 24,
    "block": 5,
    "type": "action",
    "icon": "repeat",
    "titleKey": "m24_title",
    "variants": [
      {
        "variantId": 1,
        "prompt": "Повтори слово: hello",
        "choices": {},
        "answer": { "confirm": true },
        "ui": { "confirmText": "Повторил(а)!", "lockNextUntilConfirm": true }
      },
      {
        "variantId": 2,
        "prompt": "Повтори слово: world",
        "choices": {},
        "answer": { "confirm": true },
        "ui": { "confirmText": "Готово!", "lockNextUntilConfirm": true }
      },
      {
        "variantId": 3,
        "prompt": "Повтори слово: travel",
        "choices": {},
        "answer": { "confirm": true },
        "ui": { "confirmText": "Сделано!", "lockNextUntilConfirm": true }
      },
      {
        "variantId": 4,
        "prompt": "Повтори слово: friend",
        "choices": {},
        "answer": { "confirm": true },
        "ui": { "confirmText": "Повторил(а)!", "lockNextUntilConfirm": true }
      },
      {
        "variantId": 5,
        "prompt": "Повтори слово: explorer",
        "choices": {},
        "answer": { "confirm": true },
        "ui": { "confirmText": "Я сказал(а)!", "lockNextUntilConfirm": true }
      }
    ]
  },

  {
    "id": 25,
    "block": 5,
    "type": "tap",
    "icon": "language",
    "titleKey": "m25_title",
    "variants": [
      {
        "variantId": 1,
        "prompt": "Какой это язык?",
        "choices": ["Русский", "Английский", "Испанский"],
        "answer": { "correctIndex": 1 },
        "ui": { "lockNextUntilCorrect": true, "autoAdvance": true }
      },
      {
        "variantId": 2,
        "prompt": "На каком языке говорят «hello»?",
        "choices": ["English", "Russian", "French"],
        "answer": { "correctIndex": 0 },
        "ui": { "lockNextUntilCorrect": true, "autoAdvance": true }
      },
      {
        "variantId": 3,
        "prompt": "На каком языке говорят «hola»?",
        "choices": ["Spanish", "German", "English"],
        "answer": { "correctIndex": 0 },
        "ui": { "lockNextUntilCorrect": true, "autoAdvance": true }
      },
      {
        "variantId": 4,
        "prompt": "На каком языке говорят «bonjour»?",
        "choices": ["French", "Italian", "English"],
        "answer": { "correctIndex": 0 },
        "ui": { "lockNextUntilCorrect": true, "autoAdvance": true }
      },
      {
        "variantId": 5,
        "prompt": "На каком языке говорят «ciao»?",
        "choices": ["Italian", "Spanish", "French"],
        "answer": { "correctIndex": 0 },
        "ui": { "lockNextUntilCorrect": true, "autoAdvance": true }
      }
    ]
  }
]
[
  {
    "id": 26,
    "block": 6,
    "type": "drag",
    "icon": "family",
    "titleKey": "m26_title",
    "variants": [
      {
        "variantId": 1,
        "prompt": "Перетащи членов семьи к слову «Моя семья».",
        "choices": {
          "items": [
            { "id": "mom", "label": "Мама" },
            { "id": "dad", "label": "Папа" },
            { "id": "brother", "label": "Брат" }
          ],
          "zones": [{ "id": "family", "label": "Моя семья" }]
        },
        "answer": { "solutionMap": { "mom": "family", "dad": "family", "brother": "family" } },
        "ui": { "checkMode": "button", "lockNextUntilCorrect": true, "showCheckButton": true }
      },
      {
        "variantId": 2,
        "prompt": "Кто входит в семью? Перетащи правильные слова.",
        "choices": {
          "items": [
            { "id": "mom", "label": "Мама" },
            { "id": "cat", "label": "Кот" },
            { "id": "grandma", "label": "Бабушка" }
          ],
          "zones": [{ "id": "family", "label": "Семья" }]
        },
        "answer": { "solutionMap": { "mom": "family", "grandma": "family" } },
        "ui": { "checkMode": "button", "lockNextUntilCorrect": true, "showCheckButton": true }
      },
      {
        "variantId": 3,
        "prompt": "Перетащи тех, кто заботится о тебе.",
        "choices": {
          "items": [
            { "id": "dad", "label": "Папа" },
            { "id": "teacher", "label": "Учитель" },
            { "id": "monster", "label": "Монстр" }
          ],
          "zones": [{ "id": "care", "label": "Забота" }]
        },
        "answer": { "solutionMap": { "dad": "care", "teacher": "care" } },
        "ui": { "checkMode": "button", "lockNextUntilCorrect": true, "showCheckButton": true }
      },
      {
        "variantId": 4,
        "prompt": "Перетащи членов семьи.",
        "choices": {
          "items": [
            { "id": "mom", "label": "Мама" },
            { "id": "dog", "label": "Собака" },
            { "id": "sister", "label": "Сестра" }
          ],
          "zones": [{ "id": "family", "label": "Семья" }]
        },
        "answer": { "solutionMap": { "mom": "family", "sister": "family" } },
        "ui": { "checkMode": "button", "lockNextUntilCorrect": true }
      },
      {
        "variantId": 5,
        "prompt": "Кто твоя семья? Перетащи правильные слова.",
        "choices": {
          "items": [
            { "id": "dad", "label": "Папа" },
            { "id": "robot", "label": "Робот" },
            { "id": "grandpa", "label": "Дедушка" }
          ],
          "zones": [{ "id": "family", "label": "Моя семья" }]
        },
        "answer": { "solutionMap": { "dad": "family", "grandpa": "family" } },
        "ui": { "checkMode": "button", "lockNextUntilCorrect": true }
      }
    ]
  },

  {
    "id": 27,
    "block": 6,
    "type": "tap",
    "icon": "heart",
    "titleKey": "m27_title",
    "variants": [
      {
        "variantId": 1,
        "prompt": "Что делает маму счастливой?",
        "choices": ["Когда я помогаю", "Когда я кричу", "Когда я не слушаю"],
        "answer": { "correctIndex": 0 },
        "ui": { "autoAdvance": true }
      },
      {
        "variantId": 2,
        "prompt": "Что радует родителей?",
        "choices": ["Когда я стараюсь", "Когда я ломаю вещи", "Когда я дерусь"],
        "answer": { "correctIndex": 0 },
        "ui": { "autoAdvance": true }
      },
      {
        "variantId": 3,
        "prompt": "Что приятно маме и папе?",
        "choices": ["Когда я говорю спасибо", "Когда я грублю", "Когда я убегаю"],
        "answer": { "correctIndex": 0 },
        "ui": { "autoAdvance": true }
      },
      {
        "variantId": 4,
        "prompt": "Что делает семью счастливой?",
        "choices": ["Забота", "Ссоры", "Крики"],
        "answer": { "correctIndex": 0 },
        "ui": { "autoAdvance": true }
      },
      {
        "variantId": 5,
        "prompt": "Что лучше всего?",
        "choices": ["Добрые слова", "Обиды", "Грубость"],
        "answer": { "correctIndex": 0 },
        "ui": { "autoAdvance": true }
      }
    ]
  },

  {
    "id": 28,
    "block": 6,
    "type": "multi",
    "icon": "hug",
    "titleKey": "m28_title",
    "variants": [
      {
        "variantId": 1,
        "prompt": "Как можно показать любовь? (выбери несколько)",
        "choices": ["Обнять", "Сказать «спасибо»", "Помочь", "Кричать"],
        "answer": { "correctIndexes": [0, 1, 2] },
        "ui": { "lockNextUntilCorrect": true }
      },
      {
        "variantId": 2,
        "prompt": "Что показывает заботу?",
        "choices": ["Помощь", "Улыбка", "Игнорировать", "Добрые слова"],
        "answer": { "correctIndexes": [0, 1, 3] },
        "ui": { "lockNextUntilCorrect": true }
      },
      {
        "variantId": 3,
        "prompt": "Как можно порадовать родителей?",
        "choices": ["Помочь по дому", "Сказать «люблю»", "Кричать", "Обнять"],
        "answer": { "correctIndexes": [0, 1, 3] },
        "ui": { "lockNextUntilCorrect": true }
      },
      {
        "variantId": 4,
        "prompt": "Что делает дом тёплым?",
        "choices": ["Забота", "Улыбки", "Ссоры", "Поддержка"],
        "answer": { "correctIndexes": [0, 1, 3] },
        "ui": { "lockNextUntilCorrect": true }
      },
      {
        "variantId": 5,
        "prompt": "Что значит любить?",
        "choices": ["Заботиться", "Помогать", "Игнорировать", "Говорить добрые слова"],
        "answer": { "correctIndexes": [0, 1, 3] },
        "ui": { "lockNextUntilCorrect": true }
      }
    ]
  },

  {
    "id": 29,
    "block": 6,
    "type": "tap",
    "icon": "ear",
    "titleKey": "m29_title",
    "variants": [
      {
        "variantId": 1,
        "prompt": "Когда нужно слушать родителей?",
        "choices": ["Всегда", "Никогда", "Только иногда"],
        "answer": { "correctIndex": 0 },
        "ui": { "autoAdvance": true }
      },
      {
        "variantId": 2,
        "prompt": "Когда родители помогают советом?",
        "choices": ["Когда мне трудно", "Когда я злюсь", "Когда я не хочу"],
        "answer": { "correctIndex": 0 },
        "ui": { "autoAdvance": true }
      },
      {
        "variantId": 3,
        "prompt": "Когда важно слушать взрослых?",
        "choices": ["Когда они заботятся", "Когда я играю", "Когда я сплю"],
        "answer": { "correctIndex": 0 },
        "ui": { "autoAdvance": true }
      },
      {
        "variantId": 4,
        "prompt": "Почему родители говорят правила?",
        "choices": ["Чтобы защитить", "Чтобы ругать", "Просто так"],
        "answer": { "correctIndex": 0 },
        "ui": { "autoAdvance": true }
      },
      {
        "variantId": 5,
        "prompt": "Когда стоит прислушаться?",
        "choices": ["Когда совет полезный", "Когда кричат", "Никогда"],
        "answer": { "correctIndex": 0 },
        "ui": { "autoAdvance": true }
      }
    ]
  },

  {
    "id": 30,
    "block": 6,
    "type": "drag",
    "icon": "thanks",
    "titleKey": "m30_title",
    "variants": [
      {
        "variantId": 1,
        "prompt": "Перетащи слова благодарности.",
        "choices": {
          "items": [
            { "id": "thanks", "label": "Спасибо" },
            { "id": "love", "label": "Люблю" }
          ],
          "zones": [{ "id": "gratitude", "label": "Я благодарен" }]
        },
        "answer": { "solutionMap": { "thanks": "gratitude", "love": "gratitude" } },
        "ui": { "checkMode": "button", "lockNextUntilCorrect": true }
      },
      {
        "variantId": 2,
        "prompt": "Перетащи добрые слова.",
        "choices": {
          "items": [
            { "id": "help", "label": "Спасибо за помощь" },
            { "id": "shout", "label": "Отстань" }
          ],
          "zones": [{ "id": "gratitude", "label": "Благодарность" }]
        },
        "answer": { "solutionMap": { "help": "gratitude" } },
        "ui": { "checkMode": "button", "lockNextUntilCorrect": true }
      },
      {
        "variantId": 3,
        "prompt": "Выбери слова благодарности.",
        "choices": {
          "items": [
            { "id": "thanks", "label": "Спасибо" },
            { "id": "please", "label": "Пожалуйста" },
            { "id": "nope", "label": "Не хочу" }
          ],
          "zones": [{ "id": "gratitude", "label": "Благодарю" }]
        },
        "answer": { "solutionMap": { "thanks": "gratitude", "please": "gratitude" } },
        "ui": { "checkMode": "button", "lockNextUntilCorrect": true }
      },
      {
        "variantId": 4,
        "prompt": "Перетащи добрые слова в коробку.",
        "choices": {
          "items": [
            { "id": "love", "label": "Люблю тебя" },
            { "id": "angry", "label": "Отстань" }
          ],
          "zones": [{ "id": "gratitude", "label": "Добрые слова" }]
        },
        "answer": { "solutionMap": { "love": "gratitude" } },
        "ui": { "checkMode": "button", "lockNextUntilCorrect": true }
      },
      {
        "variantId": 5,
        "prompt": "Выбери слова, за которые благодарят.",
        "choices": {
          "items": [
            { "id": "thanks", "label": "Спасибо" },
            { "id": "help", "label": "Помог" },
            { "id": "push", "label": "Толкнул" }
          ],
          "zones": [{ "id": "gratitude", "label": "Благодарность" }]
        },
        "answer": { "solutionMap": { "thanks": "gratitude", "help": "gratitude" } },
        "ui": { "checkMode": "button", "lockNextUntilCorrect": true }
      }
    ]
  }
]
[
  {
    "id": 31,
    "block": 7,
    "type": "drag",
    "icon": "school",
    "titleKey": "m31_title",
    "variants": [
      {
        "variantId": 1,
        "prompt": "Перетащи правильные действия к «Слушаю на уроке».",
        "choices": {
          "items": [
            { "id": "listen", "label": "Слушаю учителя" },
            { "id": "talk", "label": "Разговариваю с другом" },
            { "id": "look", "label": "Смотрю на доску" }
          ],
          "zones": [
            { "id": "good", "label": "Слушаю" }
          ]
        },
        "answer": { "solutionMap": { "listen": "good", "look": "good" } },
        "ui": { "checkMode": "button", "lockNextUntilCorrect": true }
      },
      {
        "variantId": 2,
        "prompt": "Что помогает слушать на уроке?",
        "choices": {
          "items": [
            { "id": "eyes", "label": "Смотреть на учителя" },
            { "id": "noise", "label": "Шуметь" },
            { "id": "sit", "label": "Сидеть спокойно" }
          ],
          "zones": [
            { "id": "good", "label": "Помогает" }
          ]
        },
        "answer": { "solutionMap": { "eyes": "good", "sit": "good" } },
        "ui": { "checkMode": "button", "lockNextUntilCorrect": true }
      },
      {
        "variantId": 3,
        "prompt": "Перетащи правильные действия.",
        "choices": {
          "items": [
            { "id": "raise", "label": "Поднять руку" },
            { "id": "shout", "label": "Кричать" },
            { "id": "wait", "label": "Ждать очередь" }
          ],
          "zones": [
            { "id": "good", "label": "Хорошо на уроке" }
          ]
        },
        "answer": { "solutionMap": { "raise": "good", "wait": "good" } },
        "ui": { "checkMode": "button", "lockNextUntilCorrect": true }
      },
      {
        "variantId": 4,
        "prompt": "Что значит быть внимательным?",
        "choices": {
          "items": [
            { "id": "listen", "label": "Слушать" },
            { "id": "play", "label": "Играть" },
            { "id": "watch", "label": "Смотреть на доску" }
          ],
          "zones": [
            { "id": "good", "label": "Внимательно" }
          ]
        },
        "answer": { "solutionMap": { "listen": "good", "watch": "good" } },
        "ui": { "checkMode": "button", "lockNextUntilCorrect": true }
      },
      {
        "variantId": 5,
        "prompt": "Перетащи действия хорошего ученика.",
        "choices": {
          "items": [
            { "id": "sit", "label": "Сидит спокойно" },
            { "id": "run", "label": "Бегает по классу" },
            { "id": "listen", "label": "Слушает" }
          ],
          "zones": [
            { "id": "good", "label": "Хороший ученик" }
          ]
        },
        "answer": { "solutionMap": { "sit": "good", "listen": "good" } },
        "ui": { "checkMode": "button", "lockNextUntilCorrect": true }
      }
    ]
  },

  {
    "id": 32,
    "block": 7,
    "type": "action",
    "icon": "hand",
    "titleKey": "m32_title",
    "variants": [
      {
        "variantId": 1,
        "prompt": "Raise your hand like in class!",
        "choices": {},
        "answer": { "confirm": true },
        "ui": { "confirmText": "Done!", "lockNextUntilConfirm": true }
      },
      {
        "variantId": 2,
        "prompt": "Show how you raise your hand to answer.",
        "choices": {},
        "answer": { "confirm": true },
        "ui": { "confirmText": "Done!", "lockNextUntilConfirm": true }
      },
      {
        "variantId": 3,
        "prompt": "Pretend you want to answer. Raise your hand.",
        "choices": {},
        "answer": { "confirm": true },
        "ui": { "confirmText": "I did it!", "lockNextUntilConfirm": true }
      },
      {
        "variantId": 4,
        "prompt": "Raise your hand and sit straight.",
        "choices": {},
        "answer": { "confirm": true },
        "ui": { "confirmText": "Ready!", "lockNextUntilConfirm": true }
      },
      {
        "variantId": 5,
        "prompt": "Raise your hand like a good student.",
        "choices": {},
        "answer": { "confirm": true },
        "ui": { "confirmText": "Done!", "lockNextUntilConfirm": true }
      }
    ]
  },

  {
    "id": 33,
    "block": 7,
    "type": "tap",
    "icon": "lesson",
    "titleKey": "m33_title",
    "variants": [
      {
        "variantId": 1,
        "prompt": "Что делают на уроке?",
        "choices": ["Слушают", "Играют в догонялки", "Кричат"],
        "answer": { "correctIndex": 0 },
        "ui": { "autoAdvance": true }
      },
      {
        "variantId": 2,
        "prompt": "Что делают ученики на уроке?",
        "choices": ["Работают", "Бегают", "Спят"],
        "answer": { "correctIndex": 0 },
        "ui": { "autoAdvance": true }
      },
      {
        "variantId": 3,
        "prompt": "Что правильно делать на уроке?",
        "choices": ["Слушать учителя", "Шуметь", "Драться"],
        "answer": { "correctIndex": 0 },
        "ui": { "autoAdvance": true }
      },
      {
        "variantId": 4,
        "prompt": "Что помогает учиться?",
        "choices": ["Внимание", "Шум", "Ссоры"],
        "answer": { "correctIndex": 0 },
        "ui": { "autoAdvance": true }
      },
      {
        "variantId": 5,
        "prompt": "Что делают на уроке?",
        "choices": ["Думают", "Кричат", "Бегают"],
        "answer": { "correctIndex": 0 },
        "ui": { "autoAdvance": true }
      }
    ]
  },

  {
    "id": 34,
    "block": 7,
    "type": "tap",
    "icon": "stop",
    "titleKey": "m34_title",
    "variants": [
      {
        "variantId": 1,
        "prompt": "When should you stop talking?",
        "choices": ["When teacher speaks", "Never", "Only at home"],
        "answer": { "correctIndex": 0 },
        "ui": { "autoAdvance": true }
      },
      {
        "variantId": 2,
        "prompt": "When do you stop playing in class?",
        "choices": ["When lesson starts", "Never", "When bored"],
        "answer": { "correctIndex": 0 },
        "ui": { "autoAdvance": true }
      },
      {
        "variantId": 3,
        "prompt": "When should you listen?",
        "choices": ["During lesson", "During break", "At night"],
        "answer": { "correctIndex": 0 },
        "ui": { "autoAdvance": true }
      },
      {
        "variantId": 4,
        "prompt": "When do you sit quietly?",
        "choices": ["In class", "On playground", "At party"],
        "answer": { "correctIndex": 0 },
        "ui": { "autoAdvance": true }
      },
      {
        "variantId": 5,
        "prompt": "When should you stop running?",
        "choices": ["In classroom", "Outside", "At home"],
        "answer": { "correctIndex": 0 },
        "ui": { "autoAdvance": true }
      }
    ]
  },

  {
    "id": 35,
    "block": 7,
    "type": "multi",
    "icon": "star",
    "titleKey": "m35_title",
    "variants": [
      {
        "variantId": 1,
        "prompt": "Хороший ученик — это… (выбери всё подходящее)",
        "choices": ["Слушает", "Старается", "Мешает другим", "Задает вопросы"],
        "answer": { "correctIndexes": [0, 1, 3] },
        "ui": { "lockNextUntilCorrect": true }
      },
      {
        "variantId": 2,
        "prompt": "Что делает хорошего ученика?",
        "choices": ["Внимание", "Труд", "Шум", "Интерес"],
        "answer": { "correctIndexes": [0, 1, 3] },
        "ui": { "lockNextUntilCorrect": true }
      },
      {
        "variantId": 3,
        "prompt": "Хороший ученик обычно…",
        "choices": ["Слушает учителя", "Старается", "Дерётся", "Помогает"],
        "answer": { "correctIndexes": [0, 1, 3] },
        "ui": { "lockNextUntilCorrect": true }
      },
      {
        "variantId": 4,
        "prompt": "Что важно для учёбы?",
        "choices": ["Внимание", "Шум", "Интерес", "Упорство"],
        "answer": { "correctIndexes": [0, 2, 3] },
        "ui": { "lockNextUntilCorrect": true }
      },
      {
        "variantId": 5,
        "prompt": "Выбери качества хорошего ученика.",
        "choices": ["Ответственность", "Старательность", "Лень", "Вежливость"],
        "answer": { "correctIndexes": [0, 1, 3] },
        "ui": { "lockNextUntilCorrect": true }
      }
    ]
  }
]
[
  {
    "id": 36,
    "block": 8,
    "type": "drag",
    "icon": "shop",
    "titleKey": "m36_title",
    "variants": [
      {
        "variantId": 1,
        "prompt": "Перетащи действия: что можно и что нельзя в магазине.",
        "choices": {
          "items": [
            { "id": "ask", "label": "Спросить вежливо" },
            { "id": "run", "label": "Бегать между полками" },
            { "id": "touch", "label": "Трогать всё подряд" }
          ],
          "zones": [
            { "id": "can", "label": "Можно" },
            { "id": "cannot", "label": "Нельзя" }
          ]
        },
        "answer": {
          "solutionMap": {
            "ask": "can",
            "run": "cannot",
            "touch": "cannot"
          }
        },
        "ui": { "checkMode": "button", "lockNextUntilCorrect": true }
      },
      {
        "variantId": 2,
        "prompt": "Что можно делать в магазине?",
        "choices": {
          "items": [
            { "id": "wait", "label": "Ждать очередь" },
            { "id": "shout", "label": "Кричать" },
            { "id": "pay", "label": "Платить на кассе" }
          ],
          "zones": [
            { "id": "can", "label": "Можно" }
          ]
        },
        "answer": { "solutionMap": { "wait": "can", "pay": "can" } },
        "ui": { "checkMode": "button", "lockNextUntilCorrect": true }
      },
      {
        "variantId": 3,
        "prompt": "Разложи действия по правилам.",
        "choices": {
          "items": [
            { "id": "sayplease", "label": "Говорить «пожалуйста»" },
            { "id": "grab", "label": "Хватать без спроса" }
          ],
          "zones": [
            { "id": "can", "label": "Можно" },
            { "id": "cannot", "label": "Нельзя" }
          ]
        },
        "answer": { "solutionMap": { "sayplease": "can", "grab": "cannot" } },
        "ui": { "checkMode": "button", "lockNextUntilCorrect": true }
      },
      {
        "variantId": 4,
        "prompt": "Что подходит для магазина?",
        "choices": {
          "items": [
            { "id": "quiet", "label": "Вести себя спокойно" },
            { "id": "run", "label": "Бегать" }
          ],
          "zones": [
            { "id": "can", "label": "Можно" },
            { "id": "cannot", "label": "Нельзя" }
          ]
        },
        "answer": { "solutionMap": { "quiet": "can", "run": "cannot" } },
        "ui": { "checkMode": "button", "lockNextUntilCorrect": true }
      },
      {
        "variantId": 5,
        "prompt": "Перетащи действия в правильную колонку.",
        "choices": {
          "items": [
            { "id": "askhelp", "label": "Попросить помощи" },
            { "id": "break", "label": "Ломать товары" }
          ],
          "zones": [
            { "id": "can", "label": "Можно" },
            { "id": "cannot", "label": "Нельзя" }
          ]
        },
        "answer": { "solutionMap": { "askhelp": "can", "break": "cannot" } },
        "ui": { "checkMode": "button", "lockNextUntilCorrect": true }
      }
    ]
  },

  {
    "id": 37,
    "block": 8,
    "type": "tap",
    "icon": "speech",
    "titleKey": "m37_title",
    "variants": [
      {
        "variantId": 1,
        "prompt": "Как вежливо попросить?",
        "choices": ["Пожалуйста", "Дай сейчас", "Эй ты"],
        "answer": { "correctIndex": 0 },
        "ui": { "autoAdvance": true }
      },
      {
        "variantId": 2,
        "prompt": "Какое слово вежливое?",
        "choices": ["Спасибо", "Быстро", "Моё"],
        "answer": { "correctIndex": 0 },
        "ui": { "autoAdvance": true }
      },
      {
        "variantId": 3,
        "prompt": "Что сказать продавцу?",
        "choices": ["Пожалуйста", "Отдай", "Мне надо"],
        "answer": { "correctIndex": 0 },
        "ui": { "autoAdvance": true }
      },
      {
        "variantId": 4,
        "prompt": "Как начать просьбу?",
        "choices": ["Извините", "Слушай", "Эй"],
        "answer": { "correctIndex": 0 },
        "ui": { "autoAdvance": true }
      },
      {
        "variantId": 5,
        "prompt": "Как сказать вежливо?",
        "choices": ["Будьте добры", "Давай", "Хочу"],
        "answer": { "correctIndex": 0 },
        "ui": { "autoAdvance": true }
      }
    ]
  },

  {
    "id": 38,
    "block": 8,
    "type": "action",
    "icon": "timer",
    "titleKey": "m38_title",
    "variants": [
      {
        "variantId": 1,
        "prompt": "Представь, что ты в очереди. Подожди 5 секунд.",
        "choices": { "seconds": 5 },
        "answer": { "complete": true },
        "ui": { "autoComplete": true }
      },
      {
        "variantId": 2,
        "prompt": "Постой спокойно, как в очереди, 6 секунд.",
        "choices": { "seconds": 6 },
        "answer": { "complete": true },
        "ui": { "autoComplete": true }
      },
      {
        "variantId": 3,
        "prompt": "Очередь агента: стой спокойно 7 секунд.",
        "choices": { "seconds": 7 },
        "answer": { "complete": true },
        "ui": { "autoComplete": true }
      },
      {
        "variantId": 4,
        "prompt": "Подожди своей очереди 8 секунд.",
        "choices": { "seconds": 8 },
        "answer": { "complete": true },
        "ui": { "autoComplete": true }
      },
      {
        "variantId": 5,
        "prompt": "Очередь почти дошла — подожди 10 секунд.",
        "choices": { "seconds": 10 },
        "answer": { "complete": true },
        "ui": { "autoComplete": true }
      }
    ]
  },

  {
    "id": 39,
    "block": 8,
    "type": "tap",
    "icon": "cart",
    "titleKey": "m39_title",
    "variants": [
      {
        "variantId": 1,
        "prompt": "Можно ли купить без спроса?",
        "choices": ["Нет", "Да", "Иногда"],
        "answer": { "correctIndex": 0 },
        "ui": { "autoAdvance": true }
      },
      {
        "variantId": 2,
        "prompt": "Что делают сначала?",
        "choices": ["Спрашивают", "Берут", "Убегают"],
        "answer": { "correctIndex": 0 },
        "ui": { "autoAdvance": true }
      },
      {
        "variantId": 3,
        "prompt": "Как правильно?",
        "choices": ["Попросить", "Схватить", "Спрятать"],
        "answer": { "correctIndex": 0 },
        "ui": { "autoAdvance": true }
      },
      {
        "variantId": 4,
        "prompt": "Перед покупкой нужно…",
        "choices": ["Спросить разрешение", "Кричать", "Бежать"],
        "answer": { "correctIndex": 0 },
        "ui": { "autoAdvance": true }
      },
      {
        "variantId": 5,
        "prompt": "Что правильно сделать?",
        "choices": ["Посоветоваться", "Взять тайком", "Уйти"],
        "answer": { "correctIndex": 0 },
        "ui": { "autoAdvance": true }
      }
    ]
  },

  {
    "id": 40,
    "block": 8,
    "type": "multi",
    "icon": "polite",
    "titleKey": "m40_title",
    "variants": [
      {
        "variantId": 1,
        "prompt": "Выбери вежливые слова.",
        "choices": ["Пожалуйста", "Спасибо", "Эй", "Извините"],
        "answer": { "correctIndexes": [0, 1, 3] },
        "ui": { "lockNextUntilCorrect": true }
      },
      {
        "variantId": 2,
        "prompt": "Какие слова вежливые?",
        "choices": ["Будьте добры", "Дай", "Спасибо", "Извините"],
        "answer": { "correctIndexes": [0, 2, 3] },
        "ui": { "lockNextUntilCorrect": true }
      },
      {
        "variantId": 3,
        "prompt": "Что говорят вежливые люди?",
        "choices": ["Пожалуйста", "Спасибо", "Быстро", "Извините"],
        "answer": { "correctIndexes": [0, 1, 3] },
        "ui": { "lockNextUntilCorrect": true }
      },
      {
        "variantId": 4,
        "prompt": "Выбери хорошие слова.",
        "choices": ["Спасибо", "Пожалуйста", "Отстань", "Извините"],
        "answer": { "correctIndexes": [0, 1, 3] },
        "ui": { "lockNextUntilCorrect": true }
      },
      {
        "variantId": 5,
        "prompt": "Какие слова подходят для магазина?",
        "choices": ["Пожалуйста", "Спасибо", "Эй", "Будьте добры"],
        "answer": { "correctIndexes": [0, 1, 3] },
        "ui": { "lockNextUntilCorrect": true }
      }
    ]
  }
]
[
  {
    "id": 41,
    "block": 9,
    "type": "tap",
    "icon": "anger",
    "titleKey": "m41_title",
    "variants": [
      {
        "variantId": 1,
        "prompt": "Что делать, если злюсь?",
        "choices": ["Подышать", "Ударить", "Кричать"],
        "answer": { "correctIndex": 0 },
        "ui": { "autoAdvance": true }
      },
      {
        "variantId": 2,
        "prompt": "Если я злюсь, лучше…",
        "choices": ["Сказать словами", "Толкнуть", "Сломать"],
        "answer": { "correctIndex": 0 },
        "ui": { "autoAdvance": true }
      },
      {
        "variantId": 3,
        "prompt": "Когда злюсь, я могу…",
        "choices": ["Считать до 5", "Кричать", "Обзываться"],
        "answer": { "correctIndex": 0 },
        "ui": { "autoAdvance": true }
      },
      {
        "variantId": 4,
        "prompt": "Что помогает успокоиться?",
        "choices": ["Глубокий вдох", "Ссора", "Шум"],
        "answer": { "correctIndex": 0 },
        "ui": { "autoAdvance": true }
      },
      {
        "variantId": 5,
        "prompt": "Если я сердит(а), я выбираю…",
        "choices": ["Пауза и дыхание", "Драку", "Крик"],
        "answer": { "correctIndex": 0 },
        "ui": { "autoAdvance": true }
      }
    ]
  },

  {
    "id": 42,
    "block": 9,
    "type": "tap",
    "icon": "sad",
    "titleKey": "m42_title",
    "variants": [
      {
        "variantId": 1,
        "prompt": "When I'm sad, I can…",
        "choices": ["Talk to someone", "Break things", "Hide forever"],
        "answer": { "correctIndex": 0 },
        "ui": { "autoAdvance": true }
      },
      {
        "variantId": 2,
        "prompt": "When I'm sad, it's good to…",
        "choices": ["Ask for a hug", "Shout", "Push people"],
        "answer": { "correctIndex": 0 },
        "ui": { "autoAdvance": true }
      },
      {
        "variantId": 3,
        "prompt": "When I'm sad, I may…",
        "choices": ["Rest a bit", "Fight", "Scream"],
        "answer": { "correctIndex": 0 },
        "ui": { "autoAdvance": true }
      },
      {
        "variantId": 4,
        "prompt": "When I'm sad, I can…",
        "choices": ["Draw a picture", "Hit", "Throw toys"],
        "answer": { "correctIndex": 0 },
        "ui": { "autoAdvance": true }
      },
      {
        "variantId": 5,
        "prompt": "When I'm sad, I should…",
        "choices": ["Tell an adult", "Run away", "Break rules"],
        "answer": { "correctIndex": 0 },
        "ui": { "autoAdvance": true }
      }
    ]
  },

  {
    "id": 43,
    "block": 9,
    "type": "tap",
    "icon": "tired",
    "titleKey": "m43_title",
    "variants": [
      {
        "variantId": 1,
        "prompt": "Когда я устал(а), лучше…",
        "choices": ["Отдохнуть", "Кричать", "Бегать быстрее"],
        "answer": { "correctIndex": 0 },
        "ui": { "autoAdvance": true }
      },
      {
        "variantId": 2,
        "prompt": "Если устал(а), что поможет?",
        "choices": ["Пауза", "Ссора", "Шум"],
        "answer": { "correctIndex": 0 },
        "ui": { "autoAdvance": true }
      },
      {
        "variantId": 3,
        "prompt": "Когда устал(а), я могу…",
        "choices": ["Сесть", "Толкнуть", "Кричать"],
        "answer": { "correctIndex": 0 },
        "ui": { "autoAdvance": true }
      },
      {
        "variantId": 4,
        "prompt": "Что лучше сделать, если устал(а)?",
        "choices": ["Попить воды", "Поругаться", "Обзываться"],
        "answer": { "correctIndex": 0 },
        "ui": { "autoAdvance": true }
      },
      {
        "variantId": 5,
        "prompt": "Если я устал(а), я выбираю…",
        "choices": ["Тихий отдых", "Громкий шум", "Ссору"],
        "answer": { "correctIndex": 0 },
        "ui": { "autoAdvance": true }
      }
    ]
  },

  {
    "id": 44,
    "block": 9,
    "type": "tap",
    "icon": "solution",
    "titleKey": "m44_title",
    "variants": [
      {
        "variantId": 1,
        "prompt": "Choose the best solution.",
        "choices": ["Say it calmly", "Push", "Yell"],
        "answer": { "correctIndex": 0 },
        "ui": { "autoAdvance": true }
      },
      {
        "variantId": 2,
        "prompt": "Choose the best solution.",
        "choices": ["Take a deep breath", "Hit", "Break"],
        "answer": { "correctIndex": 0 },
        "ui": { "autoAdvance": true }
      },
      {
        "variantId": 3,
        "prompt": "Choose the best solution.",
        "choices": ["Ask for help", "Cry and run", "Throw things"],
        "answer": { "correctIndex": 0 },
        "ui": { "autoAdvance": true }
      },
      {
        "variantId": 4,
        "prompt": "Choose the best solution.",
        "choices": ["Wait your turn", "Cut the line", "Shout"],
        "answer": { "correctIndex": 0 },
        "ui": { "autoAdvance": true }
      },
      {
        "variantId": 5,
        "prompt": "Choose the best solution.",
        "choices": ["Use kind words", "Be rude", "Push"],
        "answer": { "correctIndex": 0 },
        "ui": { "autoAdvance": true }
      }
    ]
  },

  {
    "id": 45,
    "block": 9,
    "type": "timer",
    "icon": "breath",
    "titleKey": "m45_title",
    "variants": [
      {
        "variantId": 1,
        "prompt": "Дыхание агента: медленно вдох… выдох… 10 секунд.",
        "choices": { "seconds": 10 },
        "answer": { "complete": true },
        "ui": { "autoComplete": true, "tickSound": false }
      },
      {
        "variantId": 2,
        "prompt": "Сделай 5 спокойных вдохов. Таймер поможет (10 секунд).",
        "choices": { "seconds": 10 },
        "answer": { "complete": true },
        "ui": { "autoComplete": true, "tickSound": false }
      },
      {
        "variantId": 3,
        "prompt": "Дыши как агент: вдох носом, выдох ртом (8 секунд).",
        "choices": { "seconds": 8 },
        "answer": { "complete": true },
        "ui": { "autoComplete": true, "tickSound": false }
      },
      {
        "variantId": 4,
        "prompt": "Считай дыхание: 1 вдох — 1 выдох. 10 секунд.",
        "choices": { "seconds": 10 },
        "answer": { "complete": true },
        "ui": { "autoComplete": true, "tickSound": false }
      },
      {
        "variantId": 5,
        "prompt": "Тихое дыхание: просто спокойно подыши 7 секунд.",
        "choices": { "seconds": 7 },
        "answer": { "complete": true },
        "ui": { "autoComplete": true, "tickSound": false }
      }
    ]
  }
]
[
  {
    "id": 46,
    "block": 10,
    "type": "multi",
    "icon": "globe",
    "titleKey": "m46_title",
    "variants": [
      {
        "variantId": 1,
        "prompt": "Где ты «побывал» в игре? Выбери несколько.",
        "choices": ["Франция", "Италия", "Япония", "Марс"],
        "answer": { "correctIndexes": [0, 1, 2] },
        "ui": { "lockNextUntilCorrect": false }
      },
      {
        "variantId": 2,
        "prompt": "Какие места ты помнишь? Выбери несколько.",
        "choices": ["Горы", "Море", "Пустыня", "Подушка"],
        "answer": { "correctIndexes": [0, 1, 2] },
        "ui": { "lockNextUntilCorrect": false }
      },
      {
        "variantId": 3,
        "prompt": "Где ты мог(ла) путешествовать? Выбери несколько.",
        "choices": ["Город", "Лес", "Океан", "Холодильник"],
        "answer": { "correctIndexes": [0, 1, 2] },
        "ui": { "lockNextUntilCorrect": false }
      },
      {
        "variantId": 4,
        "prompt": "Что похоже на путешествие? Выбери несколько.",
        "choices": ["Самолёт", "Поезд", "Карта", "Носок"],
        "answer": { "correctIndexes": [0, 1, 2] },
        "ui": { "lockNextUntilCorrect": false }
      },
      {
        "variantId": 5,
        "prompt": "Какие «страны» ты встречал(а)? Выбери несколько.",
        "choices": ["США", "Испания", "Греция", "Шкафландия"],
        "answer": { "correctIndexes": [0, 1, 2] },
        "ui": { "lockNextUntilCorrect": false }
      }
    ]
  },

  {
    "id": 47,
    "block": 10,
    "type": "tap",
    "icon": "medal",
    "titleKey": "m47_title",
    "variants": [
      {
        "variantId": 1,
        "prompt": "Твои суперсилы — это…",
        "choices": ["Смелость", "Лень", "Вредность"],
        "answer": { "correctIndex": 0 },
        "ui": { "lockNextUntilCorrect": false, "autoAdvance": true }
      },
      {
        "variantId": 2,
        "prompt": "Твои суперсилы — это…",
        "choices": ["Доброта", "Грубость", "Ссоры"],
        "answer": { "correctIndex": 0 },
        "ui": { "lockNextUntilCorrect": false, "autoAdvance": true }
      },
      {
        "variantId": 3,
        "prompt": "Твои суперсилы — это…",
        "choices": ["Любопытство", "Скука", "Капризы"],
        "answer": { "correctIndex": 0 },
        "ui": { "lockNextUntilCorrect": false, "autoAdvance": true }
      },
      {
        "variantId": 4,
        "prompt": "Твои суперсилы — это…",
        "choices": ["Умение слушать", "Кричать", "Драться"],
        "answer": { "correctIndex": 0 },
        "ui": { "lockNextUntilCorrect": false, "autoAdvance": true }
      },
      {
        "variantId": 5,
        "prompt": "Твои суперсилы — это…",
        "choices": ["Терпение", "Спешка", "Обиды"],
        "answer": { "correctIndex": 0 },
        "ui": { "lockNextUntilCorrect": false, "autoAdvance": true }
      }
    ]
  },

  {
    "id": 48,
    "block": 10,
    "type": "tap",
    "icon": "flag",
    "titleKey": "m48_title",
    "variants": [
      {
        "variantId": 1,
        "prompt": "Твоя любимая страна (выбери любую):",
        "choices": ["Япония", "Франция", "Италия", "Испания"],
        "answer": { "any": true },
        "ui": { "autoAdvance": true, "noWrongAnswer": true }
      },
      {
        "variantId": 2,
        "prompt": "Какая страна тебе нравится сегодня?",
        "choices": ["Греция", "Германия", "США", "Нидерланды"],
        "answer": { "any": true },
        "ui": { "autoAdvance": true, "noWrongAnswer": true }
      },
      {
        "variantId": 3,
        "prompt": "Выбери страну, куда бы ты хотел(а) поехать:",
        "choices": ["Австралия", "Египет", "Великобритания", "Россия"],
        "answer": { "any": true },
        "ui": { "autoAdvance": true, "noWrongAnswer": true }
      },
      {
        "variantId": 4,
        "prompt": "Выбери страну мечты на сегодня:",
        "choices": ["Италия", "Франция", "Япония", "Испания"],
        "answer": { "any": true },
        "ui": { "autoAdvance": true, "noWrongAnswer": true }
      },
      {
        "variantId": 5,
        "prompt": "Какая страна звучит красивее всего? (выбери любую)",
        "choices": ["Греция", "Япония", "Франция", "Италия"],
        "answer": { "any": true },
        "ui": { "autoAdvance": true, "noWrongAnswer": true }
      }
    ]
  },

  {
    "id": 49,
    "block": 10,
    "type": "tap",
    "icon": "star",
    "titleKey": "m49_title",
    "variants": [
      {
        "variantId": 1,
        "prompt": "Какой ты агент?",
        "choices": ["Добрый агент", "Грустный агент", "Сонный агент"],
        "answer": { "any": true },
        "ui": { "autoAdvance": true, "noWrongAnswer": true }
      },
      {
        "variantId": 2,
        "prompt": "Какой ты агент?",
        "choices": ["Смелый агент", "Шумный агент", "Вредный агент"],
        "answer": { "any": true },
        "ui": { "autoAdvance": true, "noWrongAnswer": true }
      },
      {
        "variantId": 3,
        "prompt": "Какой ты агент?",
        "choices": ["Умный агент", "Смешной агент", "Быстрый агент"],
        "answer": { "any": true },
        "ui": { "autoAdvance": true, "noWrongAnswer": true }
      },
      {
        "variantId": 4,
        "prompt": "Какой ты агент?",
        "choices": ["Внимательный агент", "Тихий агент", "Спокойный агент"],
        "answer": { "any": true },
        "ui": { "autoAdvance": true, "noWrongAnswer": true }
      },
      {
        "variantId": 5,
        "prompt": "Какой ты агент сегодня?",
        "choices": ["Дружелюбный агент", "Суперагент", "Агент-исследователь"],
        "answer": { "any": true },
        "ui": { "autoAdvance": true, "noWrongAnswer": true }
      }
    ]
  },

  {
    "id": 50,
    "block": 10,
    "type": "final",
    "icon": "trophy",
    "titleKey": "m50_title",
    "variants": [
      {
        "variantId": 1,
        "prompt": "ФИНАЛ! Нажми «Получить статус», чтобы открыть награду.",
        "choices": { "cta": "Получить статус!" },
        "answer": { "final": true },
        "ui": { "playFinalAnimation": true, "generateCertificate": true, "showSaveButton": true }
      },
      {
        "variantId": 2,
        "prompt": "ФИНАЛ! Ты почти MASTER EXPLORER. Нажми кнопку и получи сертификат.",
        "choices": { "cta": "Получить сертификат!" },
        "answer": { "final": true },
        "ui": { "playFinalAnimation": true, "generateCertificate": true, "showSaveButton": true }
      },
      {
        "variantId": 3,
        "prompt": "ФИНАЛ! Нажми кнопку — конфетти и твой статус готовы!",
        "choices": { "cta": "Я готов(а)!" },
        "answer": { "final": true },
        "ui": { "playFinalAnimation": true, "generateCertificate": true, "showSaveButton": true }
      },
      {
        "variantId": 4,
        "prompt": "ФИНАЛ! Получи звание и открой финальную награду.",
        "choices": { "cta": "Открыть награду!" },
        "answer": { "final": true },
        "ui": { "playFinalAnimation": true, "generateCertificate": true, "showSaveButton": true }
      },
      {
        "variantId": 5,
        "prompt": "ФИНАЛ! Ты молодец. Нажми кнопку, чтобы сохранить сертификат.",
        "choices": { "cta": "Сохранить!" },
        "answer": { "final": true },
        "ui": { "playFinalAnimation": true, "generateCertificate": true, "showSaveButton": true }
      }
    ]
  }
]
/* =========================================================
   BLOCK 16. Final Mission + Confetti
   Purpose: gate финала (все миссии пройдены), фанфары, конфетти,
            переход к сертификату.
   Depends on:
     - state.completed (array of mission ids)
     - MISSIONS (array of missions with id)
     - Audio.playSound('final')  (из блока Audio Engine)
     - Router.goTo(id) or Router.goToCertificate()
     - UI helpers: showToast(), pulseSuccess()
   Exposes:
     - Final.canEnterFinal()
     - Final.renderFinal(containerEl)
     - Final.runFinalSequence()
========================================================= */

window.Final = (() => {
  // ---------- Config ----------
  const FINAL_MISSION_ID = 50; // ваша финальная миссия
  const CONFETTI_DURATION_MS = 2500;
  const FANFARE_COOLDOWN_MS = 1500;

  let lastFanfareAt = 0;
  let confettiCanvas = null;
  let confettiCtx = null;
  let confettiRAF = null;
  let confettiParticles = [];

  // ---------- Helpers ----------
  function getAllPlayableMissionIds() {
    // Все миссии, кроме 50-й, считаем "обычными". Можно изменить при желании.
    return (window.MISSIONS || [])
      .map(m => m.id)
      .filter(id => id !== FINAL_MISSION_ID);
  }

  function getCompletedSet() {
    const completed = (window.state && Array.isArray(window.state.completed)) ? window.state.completed : [];
    return new Set(completed);
  }

  function allMissionsCompleted() {
    const ids = getAllPlayableMissionIds();
    const done = getCompletedSet();

    // Важно: если вы разрешаете "играть в любом порядке", это корректно.
    // Если хотите требовать именно 49 миссий: ids.length === 49.
    return ids.every(id => done.has(id));
  }

  function prefersReducedMotion() {
    try {
      return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    } catch (_) {
      return false;
    }
  }

  function safePlayFanfare() {
    const now = Date.now();
    if (now - lastFanfareAt < FANFARE_COOLDOWN_MS) return;
    lastFanfareAt = now;
    if (window.AudioEngine && typeof window.AudioEngine.playSound === 'function') {
      window.AudioEngine.playSound('final');
    }
  }

  // ---------- Confetti (no external libs) ----------
  function ensureCanvas() {
    if (confettiCanvas) return;

    confettiCanvas = document.createElement('canvas');
    confettiCanvas.id = 'confetti-canvas';
    confettiCanvas.style.position = 'fixed';
    confettiCanvas.style.inset = '0';
    confettiCanvas.style.width = '100%';
    confettiCanvas.style.height = '100%';
    confettiCanvas.style.pointerEvents = 'none';
    confettiCanvas.style.zIndex = '9999';
    document.body.appendChild(confettiCanvas);

    confettiCtx = confettiCanvas.getContext('2d');

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
  }

  function resizeCanvas() {
    if (!confettiCanvas) return;
    const dpr = Math.max(1, window.devicePixelRatio || 1);
    confettiCanvas.width = Math.floor(window.innerWidth * dpr);
    confettiCanvas.height = Math.floor(window.innerHeight * dpr);
    confettiCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function random(min, max) {
    return Math.random() * (max - min) + min;
  }

  function spawnConfetti(count = 130) {
    const w = window.innerWidth;
    const h = window.innerHeight;

    confettiParticles = new Array(count).fill(0).map(() => {
      const size = random(6, 12);
      return {
        x: random(0, w),
        y: random(-h * 0.2, h * 0.2),
        vx: random(-1.2, 1.2),
        vy: random(2.5, 5.5),
        rot: random(0, Math.PI * 2),
        vr: random(-0.12, 0.12),
        size,
        life: random(0.8, 1.2),
        // цвета можно подвязать к вашей палитре
        color: [ '#4A90D9', '#4CAF50', '#FF9800', '#F44336', '#9C27B0' ][Math.floor(random(0, 5))]
      };
    });
  }

  function drawConfetti() {
    const ctx = confettiCtx;
    const w = window.innerWidth;
    const h = window.innerHeight;

    ctx.clearRect(0, 0, w, h);

    confettiParticles.forEach(p => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = Math.max(0, Math.min(1, p.life));
      ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.65);
      ctx.restore();
    });
  }

  function stepConfetti() {
    const w = window.innerWidth;
    const h = window.innerHeight;

    confettiParticles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      p.rot += p.vr;
      p.life -= 0.012;

      // лёгкий "ветер"
      p.vx += random(-0.03, 0.03);

      // ре-спавн снизу/сверху, пока живы
      if (p.y > h + 30) {
        p.y = random(-40, 0);
        p.x = random(0, w);
      }
    });

    confettiParticles = confettiParticles.filter(p => p.life > 0);

    drawConfetti();

    if (confettiParticles.length > 0) {
      confettiRAF = requestAnimationFrame(stepConfetti);
    } else {
      stopConfetti();
    }
  }

  function startConfetti() {
    if (prefersReducedMotion()) return;
    ensureCanvas();
    spawnConfetti();
    stopConfetti(); // на всякий случай
    confettiRAF = requestAnimationFrame(stepConfetti);
  }

  function stopConfetti() {
    if (confettiRAF) cancelAnimationFrame(confettiRAF);
    confettiRAF = null;
    if (confettiCtx) confettiCtx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  }

  function teardownCanvas() {
    stopConfetti();
    if (!confettiCanvas) return;
    window.removeEventListener('resize', resizeCanvas);
    confettiCanvas.remove();
    confettiCanvas = null;
    confettiCtx = null;
  }

  // ---------- Public API ----------
  function canEnterFinal() {
    return allMissionsCompleted();
  }

  /**
   * Рендер финальной миссии (кнопка "Получить статус")
   * containerEl — DOM элемент, куда рендерить.
   * Вызовите это внутри renderMission() для id=50.
   */
  function renderFinal(containerEl) {
    if (!containerEl) return;

    const ok = canEnterFinal();

    containerEl.innerHTML = `
      <div class="final-card">
        <div class="final-title">ФИНАЛ</div>
        <div class="final-text">
          ${ok
            ? 'Ты прошёл(а) все миссии! Нажми кнопку и получи награду.'
            : 'Чтобы получить награду, нужно пройти все миссии.'}
        </div>

        <button class="btn btn-primary" id="final-cta" ${ok ? '' : 'disabled'}>
          Получить статус!
        </button>

        ${ok ? '' : '<div class="final-hint">Вернись и заверши пропущенные миссии.</div>'}
      </div>
    `;

    const btn = containerEl.querySelector('#final-cta');
    if (btn) {
      btn.addEventListener('click', () => {
        if (!canEnterFinal()) {
          if (window.showToast) window.showToast('Сначала пройди все миссии.', 'warning');
          return;
        }
        runFinalSequence();
      });
    }
  }

  /**
   * Запускает фанфары+конфетти и переводит на сертификат.
   * Встроите сюда ваш генератор сертификата/роутинг.
   */
  function runFinalSequence() {
    // Мини-фидбек
    if (window.pulseSuccess) window.pulseSuccess();
    if (window.showToast) window.showToast('Ура! Ты MASTER EXPLORER!', 'success');

    safePlayFanfare();
    startConfetti();

    // Через небольшую паузу — переход к сертификату
    window.setTimeout(() => {
      // Остановить конфетти можно сразу или оставить ещё чуть-чуть
      stopConfetti();

      // Переход к сертификату (варианты):
      // 1) если у вас есть отдельный экран:
      if (window.Router && typeof window.Router.goToCertificate === 'function') {
        window.Router.goToCertificate();
      } else if (window.Router && typeof window.Router.goTo === 'function') {
        // 2) или к отдельной миссии/странице (например id=50 всё же остаётся, а сертификат рисуете ниже)
        window.Router.goTo(FINAL_MISSION_ID);
      } else if (window.Certificate && typeof window.Certificate.open === 'function') {
        // 3) прямой вызов генерации сертификата
        window.Certificate.open();
      }

      // Если хотите полностью убрать canvas:
      // teardownCanvas();
    }, CONFETTI_DURATION_MS);
  }

  return {
    canEnterFinal,
    renderFinal,
    runFinalSequence,
    startConfetti,
    stopConfetti,
    teardownCanvas
  };
})();
/* =========================================================
   BLOCK 17. Certificate (canvas → PNG)
   Purpose: рисуем сертификат на canvas, имя ребёнка: Максим,
            текст "MASTER EXPLORER", кнопка "Сохранить".
   Depends on:
     - state (optional) for stats (medals/progress) if you want
     - UI container element passed in
   Exposes:
     - Certificate.render(containerEl)
     - Certificate.generatePNG()
========================================================= */

window.Certificate = (() => {
  // ---- Config ----
  const CHILD_NAME = 'Максим';
  const TITLE = 'MASTER EXPLORER';
  const SUBTITLE = 'Сертификат достижений';
  const FOOTER = 'Ты прошёл(а) 50 миссий и стал(а) настоящим исследователем!';

  // Canvas base size (we scale to fit)
  const BASE_W = 1200;
  const BASE_H = 850;

  // Palette (project palette)
  const COLORS = {
    primary: '#4A90D9',
    success: '#4CAF50',
    warning: '#FF9800',
    danger:  '#F44336',
    accent:  '#9C27B0',
    bg:      '#FFF8E1',
    ink:     '#2A2A2A',
    soft:    'rgba(0,0,0,0.08)'
  };

  // ---- State ----
  let canvas = null;
  let ctx = null;
  let lastPNGDataUrl = null;

  // ---- Helpers ----
  function dpr() {
    return Math.max(1, window.devicePixelRatio || 1);
  }

  function safeText(ctx, text, x, y, maxWidth) {
    // Simple text fit: shrink font size a bit if needed
    const original = ctx.font;
    let size = parseInt((ctx.font.match(/(\d+)px/) || [])[1] || '40', 10);

    while (maxWidth && ctx.measureText(text).width > maxWidth && size > 18) {
      size -= 2;
      ctx.font = original.replace(/\d+px/, `${size}px`);
    }
    ctx.fillText(text, x, y);
    ctx.font = original;
  }

  function roundedRect(ctx, x, y, w, h, r) {
    const radius = Math.min(r, w / 2, h / 2);
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.arcTo(x + w, y, x + w, y + h, radius);
    ctx.arcTo(x + w, y + h, x, y + h, radius);
    ctx.arcTo(x, y + h, x, y, radius);
    ctx.arcTo(x, y, x + w, y, radius);
    ctx.closePath();
  }

  function drawRibbon(ctx, x, y, w, h, color) {
    ctx.save();
    ctx.fillStyle = color;
    roundedRect(ctx, x, y, w, h, 18);
    ctx.fill();

    // little notch
    ctx.globalAlpha = 0.18;
    ctx.beginPath();
    ctx.moveTo(x + w * 0.55, y + h);
    ctx.lineTo(x + w * 0.62, y + h);
    ctx.lineTo(x + w * 0.585, y + h + 30);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  }

  function formatDateRU(date = new Date()) {
    // e.g., 22 января 2026
    try {
      return date.toLocaleDateString('ru-RU', { day: '2-digit', month: 'long', year: 'numeric' });
    } catch (_) {
      return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
    }
  }

  function getProgressText() {
    // Optional: if your state has completed
    const completed = (window.state && Array.isArray(window.state.completed)) ? window.state.completed : [];
    const count = new Set(completed).size;
    return `Прогресс: ${Math.min(count, 50)}/50`;
  }

  // ---- Core drawing ----
  function setupCanvasSize(canvasEl) {
    const ratio = BASE_W / BASE_H;
    const maxW = Math.min(window.innerWidth - 32, 760); // mobile-friendly
    const w = Math.max(320, maxW);
    const h = Math.round(w / ratio);

    // set CSS size
    canvasEl.style.width = `${w}px`;
    canvasEl.style.height = `${h}px`;

    // set internal pixels with DPR for crisp rendering
    const pixelRatio = dpr();
    canvasEl.width = Math.floor(w * pixelRatio);
    canvasEl.height = Math.floor(h * pixelRatio);

    const c = canvasEl.getContext('2d');
    c.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);

    return { cssW: w, cssH: h, ctx: c };
  }

  function drawCertificate() {
    if (!canvas || !ctx) return;

    const w = parseFloat(canvas.style.width);
    const h = parseFloat(canvas.style.height);

    // Background
    ctx.clearRect(0, 0, w, h);
    ctx.fillStyle = COLORS.bg;
    ctx.fillRect(0, 0, w, h);

    // Card shadow
    ctx.save();
    ctx.fillStyle = COLORS.soft;
    roundedRect(ctx, 16, 18, w - 32, h - 36, 28);
    ctx.fill();
    ctx.restore();

    // Main card
    ctx.save();
    ctx.fillStyle = '#FFFFFF';
    roundedRect(ctx, 12, 12, w - 24, h - 24, 28);
    ctx.fill();
    ctx.restore();

    // Border
    ctx.save();
    ctx.strokeStyle = COLORS.primary;
    ctx.lineWidth = 4;
    roundedRect(ctx, 16, 16, w - 32, h - 32, 26);
    ctx.stroke();
    ctx.restore();

    // Top ribbon
    drawRibbon(ctx, 50, 46, w - 100, 72, COLORS.accent);

    // Ribbon text
    ctx.save();
    ctx.fillStyle = '#FFFFFF';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = '700 26px system-ui, -apple-system, Segoe UI, Roboto, Arial';
    ctx.fillText(SUBTITLE, w / 2, 82);
    ctx.restore();

    // Title
    ctx.save();
    ctx.fillStyle = COLORS.ink;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'alphabetic';
    ctx.font = '900 54px system-ui, -apple-system, Segoe UI, Roboto, Arial';
    safeText(ctx, TITLE, w / 2, 210, w - 120);
    ctx.restore();

    // Name block
    ctx.save();
    ctx.fillStyle = COLORS.primary;
    ctx.globalAlpha = 0.10;
    roundedRect(ctx, 120, 250, w - 240, 90, 22);
    ctx.fill();
    ctx.globalAlpha = 1;

    ctx.fillStyle = COLORS.ink;
    ctx.textAlign = 'center';
    ctx.font = '600 20px system-ui, -apple-system, Segoe UI, Roboto, Arial';
    ctx.fillText('Награждается', w / 2, 285);

    ctx.font = '900 44px system-ui, -apple-system, Segoe UI, Roboto, Arial';
    safeText(ctx, CHILD_NAME, w / 2, 330, w - 280);
    ctx.restore();

    // Details
    ctx.save();
    ctx.fillStyle = COLORS.ink;
    ctx.textAlign = 'center';
    ctx.font = '500 20px system-ui, -apple-system, Segoe UI, Roboto, Arial';
    safeText(ctx, FOOTER, w / 2, 410, w - 160);
    ctx.restore();

    // Progress + medals (optional, decorative)
    ctx.save();
    ctx.textAlign = 'left';
    ctx.fillStyle = COLORS.ink;
    ctx.font = '600 18px system-ui, -apple-system, Segoe UI, Roboto, Arial';
    ctx.fillText(getProgressText(), 60, h - 120);

    // Medal circles
    const medals = (window.state && window.state.medals) ? window.state.medals : 0;
    const medalCount = Math.max(0, Math.min(5, Number(medals) || 0));
    const startX = 60;
    const y = h - 85;
    for (let i = 0; i < 5; i++) {
      ctx.beginPath();
      ctx.arc(startX + i * 34, y, 12, 0, Math.PI * 2);
      ctx.fillStyle = i < medalCount ? COLORS.warning : 'rgba(0,0,0,0.08)';
      ctx.fill();
      ctx.strokeStyle = 'rgba(0,0,0,0.10)';
      ctx.stroke();
    }
    ctx.restore();

    // Date + signature line
    ctx.save();
    ctx.textAlign = 'right';
    ctx.fillStyle = COLORS.ink;
    ctx.font = '500 16px system-ui, -apple-system, Segoe UI, Roboto, Arial';
    ctx.fillText(formatDateRU(new Date()), w - 60, h - 120);

    ctx.strokeStyle = 'rgba(0,0,0,0.18)';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(w - 260, h - 92);
    ctx.lineTo(w - 60, h - 92);
    ctx.stroke();

    ctx.fillStyle = 'rgba(0,0,0,0.55)';
    ctx.font = '500 14px system-ui, -apple-system, Segoe UI, Roboto, Arial';
    ctx.fillText('Подпись', w - 60, h - 65);
    ctx.restore();
  }

  function generatePNGDataUrl() {
    if (!canvas) return null;
    lastPNGDataUrl = canvas.toDataURL('image/png');
    return lastPNGDataUrl;
  }

  function downloadPNG(filename = 'master_explorer_certificate.png') {
    const url = lastPNGDataUrl || generatePNGDataUrl();
    if (!url) return;

    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
  }

  // ---- Public render ----
  function render(containerEl) {
    if (!containerEl) return;

    containerEl.innerHTML = `
      <div class="certificate-wrap" style="display:flex;flex-direction:column;align-items:center;gap:12px;">
        <canvas id="certificate-canvas" style="border-radius:16px; box-shadow:0 10px 28px rgba(0,0,0,0.12);"></canvas>
        <button class="btn btn-primary" id="cert-save-btn">Сохранить</button>
      </div>
    `;

    canvas = containerEl.querySelector('#certificate-canvas');
    const info = setupCanvasSize(canvas);
    ctx = info.ctx;

    drawCertificate();
    generatePNGDataUrl();

    const saveBtn = containerEl.querySelector('#cert-save-btn');
    if (saveBtn) {
      saveBtn.addEventListener('click', () => {
        // iOS: download может открывать вкладку — это нормально.
        downloadPNG();
        if (window.AudioEngine && typeof window.AudioEngine.playSound === 'function') {
          window.AudioEngine.playSound('success');
        }
        if (window.showToast) window.showToast('Сертификат сохранён!', 'success');
      });
    }

    // Redraw on resize (keeps crispness)
    const onResize = () => {
      if (!canvas) return;
      const next = setupCanvasSize(canvas);
      ctx = next.ctx;
      drawCertificate();
      generatePNGDataUrl();
    };
    window.addEventListener('resize', onResize, { passive: true });

    // Store cleanup hook on element
    containerEl._certificateCleanup = () => {
      window.removeEventListener('resize', onResize);
      canvas = null;
      ctx = null;
      lastPNGDataUrl = null;
    };
  }

  // Optional: if you want "open" method
  function open() {
    // If you have a dedicated screen/container in your app:
    const host = document.querySelector('#mission-interactive') || document.querySelector('#app') || document.body;
    render(host);
  }

  return {
    render,
    open,
    generatePNG: generatePNGDataUrl,
    downloadPNG
  };
})();
