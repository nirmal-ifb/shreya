<script lang="ts">
  interface Props {
    theme?: 'wedding' | 'haldi';
  }

  let { theme = 'wedding' }: Props = $props();

  // 16 staggered subtle floating golden dust motes
  const motes = [
    { left: '12%', top: '8%',  size: 3, delay: '0s',   dur: '14s', drift: '18px' },
    { left: '85%', top: '15%', size: 2, delay: '2.5s', dur: '18s', drift: '-15px' },
    { left: '22%', top: '28%', size: 4, delay: '5s',   dur: '16s', drift: '12px' },
    { left: '78%', top: '35%', size: 2, delay: '1.2s', dur: '20s', drift: '-20px' },
    { left: '15%', top: '48%', size: 3, delay: '7s',   dur: '15s', drift: '16px' },
    { left: '88%', top: '56%', size: 2, delay: '3.8s', dur: '17s', drift: '-14px' },
    { left: '28%', top: '68%', size: 4, delay: '6.2s', dur: '19s', drift: '22px' },
    { left: '72%', top: '74%', size: 2, delay: '4.1s', dur: '14s', drift: '-16px' },
    { left: '45%', top: '18%', size: 3, delay: '8.5s', dur: '16s', drift: '-10px' },
    { left: '60%', top: '42%', size: 2, delay: '9.2s', dur: '22s', drift: '14px' },
    { left: '38%', top: '62%', size: 3, delay: '3s',   dur: '15s', drift: '-12px' },
    { left: '52%', top: '82%', size: 2, delay: '11s',  dur: '18s', drift: '18px' },
    { left: '10%', top: '88%', size: 3, delay: '1.8s', dur: '16s', drift: '10px' },
    { left: '82%', top: '92%', size: 2, delay: '5.7s', dur: '21s', drift: '-18px' },
    { left: '25%', top: '96%', size: 4, delay: '10s',  dur: '17s', drift: '15px' },
    { left: '68%', top: '22%', size: 2, delay: '7.8s', dur: '19s', drift: '-12px' },
  ];
</script>

<div class="card-bg-container {theme}" aria-hidden="true">
  <!-- 1. Very subtle ambient breathing radiance behind couple & title -->
  <div class="ambient-glow glow-top"></div>
  <div class="ambient-glow glow-mid"></div>

  <!-- 2. Sacred Royal Mandala Watermark (Super subtle, slow-spinning luxury stationery watermark) -->
  <div class="mandala-wrap">
    <svg class="mandala-svg mandala-outer" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
      <!-- Outer intricate ring -->
      <circle cx="250" cy="250" r="238" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4 6" opacity="0.6" />
      <circle cx="250" cy="250" r="226" stroke="currentColor" stroke-width="0.8" opacity="0.4" />
      <circle cx="250" cy="250" r="214" stroke="currentColor" stroke-width="1.5" stroke-dasharray="14 8" opacity="0.7" />

      <!-- 16 Royal Lotus Flower Petals -->
      {#each Array(16) as _, i}
        <g transform="rotate({i * 22.5} 250 250)">
          <!-- Outer pointed arch -->
          <path d="M 250 36 C 265 80 278 125 250 170 C 222 125 235 80 250 36 Z" stroke="currentColor" stroke-width="0.9" fill="none" opacity="0.5" />
          <!-- Inner petal vein -->
          <path d="M 250 36 L 250 170" stroke="currentColor" stroke-width="0.6" stroke-dasharray="3 3" opacity="0.4" />
          <!-- Diamond accent -->
          <path d="M 250 22 L 254 30 L 250 38 L 246 30 Z" fill="currentColor" opacity="0.7" />
        </g>
      {/each}

      <!-- Mid decorative ring -->
      <circle cx="250" cy="250" r="145" stroke="currentColor" stroke-width="1" stroke-dasharray="8 6" opacity="0.6" />
      <circle cx="250" cy="250" r="132" stroke="currentColor" stroke-width="0.8" opacity="0.4" />

      <!-- 8 Inner Floral Petals -->
      {#each Array(8) as _, j}
        <g transform="rotate({j * 45 + 11.25} 250 250)">
          <path d="M 250 135 C 262 165 262 195 250 215 C 238 195 238 165 250 135 Z" stroke="currentColor" stroke-width="0.8" fill="none" opacity="0.6" />
          <circle cx="250" cy="126" r="3" fill="currentColor" opacity="0.7" />
        </g>
      {/each}

      <!-- Center Royal Rosette -->
      <circle cx="250" cy="250" r="35" stroke="currentColor" stroke-width="1.2" opacity="0.7" />
      <circle cx="250" cy="250" r="18" stroke="currentColor" stroke-width="0.8" stroke-dasharray="2 3" opacity="0.5" />
      <circle cx="250" cy="250" r="6" fill="currentColor" opacity="0.8" />
    </svg>

    <!-- Inner counter-rotating delicate ring -->
    <svg class="mandala-svg mandala-inner" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="150" cy="150" r="95" stroke="currentColor" stroke-width="0.8" stroke-dasharray="6 6" opacity="0.5" />
      {#each Array(12) as _, k}
        <g transform="rotate({k * 30} 150 150)">
          <circle cx="150" cy="62" r="2" fill="currentColor" opacity="0.6" />
          <path d="M 150 68 L 150 88" stroke="currentColor" stroke-width="0.6" opacity="0.4" />
        </g>
      {/each}
    </svg>
  </div>

  <!-- 3. Soft diagonal silk sheen sweep across card parchment -->
  <div class="silk-shimmer"></div>

  <!-- 4. Subtle floating golden stardust motes -->
  <div class="motes-layer">
    {#each motes as m}
      <span
        class="dust-mote"
        style="
          left: {m.left};
          top: {m.top};
          width: {m.size}px;
          height: {m.size}px;
          animation-delay: {m.delay};
          animation-duration: {m.dur};
          --drift-x: {m.drift};
        "
      ></span>
    {/each}
  </div>
</div>

<style>
  .card-bg-container {
    position: absolute;
    inset: 0;
    pointer-events: none;
    overflow: hidden;
    border-radius: inherit;
    z-index: 1;
  }

  /* ── 1. Ambient Glow ── */
  .ambient-glow {
    position: absolute;
    border-radius: 50%;
    filter: blur(60px);
    opacity: 0.28;
    animation: ambientBreathe 12s ease-in-out infinite alternate;
  }

  .wedding .glow-top {
    top: 5%;
    left: 50%;
    transform: translateX(-50%);
    width: min(420px, 85%);
    height: 380px;
    background: radial-gradient(circle, var(--gold-light) 0%, rgba(201, 169, 110, 0.15) 55%, transparent 75%);
  }

  .wedding .glow-mid {
    top: 42%;
    left: 50%;
    transform: translateX(-50%);
    width: min(360px, 75%);
    height: 320px;
    background: radial-gradient(circle, rgba(245, 197, 205, 0.25) 0%, rgba(201, 169, 110, 0.12) 50%, transparent 75%);
    animation-delay: -6s;
  }

  .haldi .glow-top {
    top: 5%;
    left: 50%;
    transform: translateX(-50%);
    width: min(420px, 85%);
    height: 380px;
    background: radial-gradient(circle, rgba(247, 201, 72, 0.3) 0%, rgba(200, 134, 10, 0.15) 55%, transparent 75%);
  }

  .haldi .glow-mid {
    top: 42%;
    left: 50%;
    transform: translateX(-50%);
    width: min(360px, 75%);
    height: 320px;
    background: radial-gradient(circle, rgba(255, 233, 160, 0.3) 0%, rgba(212, 160, 23, 0.12) 50%, transparent 75%);
    animation-delay: -6s;
  }

  @keyframes ambientBreathe {
    0%   { transform: translateX(-50%) scale(0.92); opacity: 0.2; }
    100% { transform: translateX(-50%) scale(1.08); opacity: 0.36; }
  }

  /* ── 2. Mandala Watermark ── */
  .mandala-wrap {
    position: absolute;
    top: 80px;
    left: 50%;
    transform: translateX(-50%);
    width: min(520px, 94%);
    aspect-ratio: 1;
    pointer-events: none;
    color: var(--gold);
    opacity: 0.048; /* Super subtle watermark like genuine royal parchment */
    transition: opacity 0.4s ease, color 0.4s ease;
  }

  :global([data-theme="dark"]) .mandala-wrap {
    opacity: 0.075;
  }

  .mandala-svg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
  }

  .mandala-outer {
    animation: rotateMandala 160s linear infinite;
    transform-origin: center center;
  }

  .mandala-inner {
    inset: 20%;
    width: 60%;
    height: 60%;
    animation: rotateMandalaRev 110s linear infinite;
    transform-origin: center center;
  }

  @keyframes rotateMandala {
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
  }

  @keyframes rotateMandalaRev {
    from { transform: rotate(360deg); }
    to   { transform: rotate(0deg); }
  }

  /* ── 3. Silk Light Sheen ── */
  .silk-shimmer {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      115deg,
      transparent 25%,
      rgba(255, 255, 255, 0.07) 45%,
      rgba(201, 169, 110, 0.12) 50%,
      rgba(255, 255, 255, 0.07) 55%,
      transparent 75%
    );
    background-size: 250% 250%;
    opacity: 0.4;
    animation: silkSweep 16s ease-in-out infinite;
    mix-blend-mode: overlay;
  }

  :global([data-theme="dark"]) .silk-shimmer {
    background: linear-gradient(
      115deg,
      transparent 25%,
      rgba(223, 183, 108, 0.05) 45%,
      rgba(245, 218, 138, 0.1) 50%,
      rgba(223, 183, 108, 0.05) 55%,
      transparent 75%
    );
    opacity: 0.35;
  }

  @keyframes silkSweep {
    0%   { background-position: 0% 0%; }
    50%  { background-position: 100% 100%; }
    100% { background-position: 0% 0%; }
  }

  /* ── 4. Golden Dust Motes ── */
  .motes-layer {
    position: absolute;
    inset: 0;
  }

  .dust-mote {
    position: absolute;
    border-radius: 50%;
    background: var(--gold-light);
    box-shadow: 0 0 6px var(--gold-glow);
    opacity: 0;
    animation: moteFloat ease-in-out infinite;
  }

  @keyframes moteFloat {
    0% {
      transform: translate(0, 0) scale(0.7);
      opacity: 0;
    }
    20% {
      opacity: 0.45;
      transform: translate(calc(var(--drift-x) * 0.3), -20px) scale(1);
    }
    50% {
      opacity: 0.25;
      transform: translate(var(--drift-x), -50px) scale(0.9);
    }
    80% {
      opacity: 0.45;
      transform: translate(calc(var(--drift-x) * 0.6), -80px) scale(1.1);
    }
    100% {
      transform: translate(calc(var(--drift-x) * 1.2), -110px) scale(0.6);
      opacity: 0;
    }
  }
</style>
