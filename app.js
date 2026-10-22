/**
 * DIAMOND PAINTS VISUALIZER - INTERACTIVE CONTROLLER
 * Powering live in-browser room recoloring, before/after slider, and conversion elements.
 */

document.addEventListener('DOMContentLoaded', () => {
  // ==========================================
  // 3. APP PREVIEW TABS SWITCHER
  // ==========================================
  const previewTabs = document.querySelectorAll('.btn-preview-tab');
  const previewCards = document.querySelectorAll('.preview-phone-card');

  previewTabs.forEach((tab, index) => {
    tab.addEventListener('click', () => {
      previewTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const targetIndex = parseInt(tab.dataset.target, 10);
      if (!isNaN(targetIndex) && previewCards[targetIndex]) {
        previewCards[targetIndex].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        // Pulse effect
        previewCards[targetIndex].querySelector('.preview-phone-frame').style.borderColor = '#e5252a';
        setTimeout(() => {
          previewCards[targetIndex].querySelector('.preview-phone-frame').style.borderColor = '#2b303c';
        }, 1200);
      }
    });
  });



  // ==========================================
  // 5. QR CODE QUICK MODAL
  // ==========================================
  const qrTriggers = document.querySelectorAll('.btn-trigger-qr');
  const qrModal = document.getElementById('qr-download-modal');
  const qrClose = document.getElementById('qr-modal-close');

  qrTriggers.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (qrModal) qrModal.classList.add('active');
    });
  });

  if (qrClose && qrModal) {
    qrClose.addEventListener('click', () => {
      qrModal.classList.remove('active');
    });
  }

  if (qrModal) {
    qrModal.addEventListener('click', (e) => {
      if (e.target === qrModal) {
        qrModal.classList.remove('active');
      }
    });
  }

  // ==========================================
  // 6. HERO CHOREOGRAPHED SCROLL SHOWCASE
  // - Reduces opacity of top content smoothly on scroll
  // - Center mobile rises first
  // - Then left mobile rises and glides into position
  // - Then right mobile rises and glides into position
  // - Centers the 3-phone stage in the hero viewport
  // - Silky smooth 60/120fps lerp physics
  // ==========================================
  const heroSection = document.getElementById('hero-section');
  const heroTopContent = document.getElementById('hero-top-content');
  const heroStage = document.getElementById('hero-mockups-stage');
  const mockupCenter = document.getElementById('hero-mockup-center');
  const mockupLeft = document.getElementById('hero-mockup-left');
  const mockupRight = document.getElementById('hero-mockup-right');

  if (heroSection && heroTopContent && heroStage && mockupCenter && mockupLeft && mockupRight) {
    let currentProgress = -1;
    let targetProgress = 0;
    let isTicking = false;

    // Smoothstep curve for zero-jerk transitions
    function smoothStep(t) {
      const clamped = Math.max(0, Math.min(1, t));
      return clamped * clamped * (3 - 2 * clamped);
    }

    // Responsive position and transform parameters
    // Desktop position and transform parameters for choreographed scroll showcase
    function getHeroBreakpoints() {
      return {
        phoneWidth: 320,
        gap: 32,
        left: { startOffset: -210, endOffset: -352, startY: 85, endY: 0, startScale: 0.95, endScale: 1.0, startOpacity: 0.75, endOpacity: 1.0 },
        right: { startOffset: 210, endOffset: 352, startY: 85, endY: 0, startScale: 0.95, endScale: 1.0, startOpacity: 0.75, endOpacity: 1.0 },
        center: { startY: 20, endY: 0 },
        stageRise: 235
      };
    }

    function renderHeroFrame(p) {
      const w = window.innerWidth;
      if (w <= 768) {
        // Mobile view: completely clean static layout — no slide up, no scroll animation, no sticky
        heroTopContent.style.opacity = '';
        heroTopContent.style.transform = '';
        heroTopContent.style.pointerEvents = '';
        heroStage.style.transform = '';
        mockupCenter.style.transform = '';
        mockupLeft.style.transform = '';
        mockupLeft.style.opacity = '';
        mockupRight.style.transform = '';
        mockupRight.style.opacity = '';
        return;
      }

      const bp = getHeroBreakpoints();

      // 1. Top Content Opacity Reduction on each scroll (0.00 -> 0.32)
      const topFadeProg = Math.max(0, Math.min(1, p / 0.32));
      const topOpacity = 1 - topFadeProg;
      const topShiftY = -topFadeProg * 35;
      heroTopContent.style.opacity = topOpacity.toFixed(3);
      heroTopContent.style.transform = `translate3d(0, ${topShiftY.toFixed(2)}px, 0)`;
      heroTopContent.style.pointerEvents = topOpacity < 0.05 ? 'none' : 'auto';

      // 2. Mobile phones scroll up into content's position (0.00 -> 0.65)
      const stageProg = smoothStep(p / 0.65);
      const stageShiftY = -stageProg * bp.stageRise;
      heroStage.style.transform = `translate3d(0, ${stageShiftY.toFixed(2)}px, 0)`;

      // 3. Center Mobile Rises (0.00 -> 0.40) - Animated smoothly on all devices
      const centerProg = smoothStep(p / 0.40);
      const centerY = bp.center.startY + (bp.center.endY - bp.center.startY) * centerProg;
      mockupCenter.style.transform = `translate3d(-50%, ${centerY.toFixed(2)}px, 0) scale(1)`;

      // Desktop view: All 3 rise to EQUAL HEIGHT (Y: 0, scale: 1) and EQUAL SPACE (gap: 32px)
      // 4. Left Mobile Rises and spreads to equal gap
      const leftProg = p <= 0.18 ? 0 : smoothStep((p - 0.18) / 0.44);
      const leftOffset = bp.left.startOffset + (bp.left.endOffset - bp.left.startOffset) * leftProg;
      const leftY = bp.left.startY + (bp.left.endY - bp.left.startY) * leftProg;
      const leftScale = bp.left.startScale + (bp.left.endScale - bp.left.startScale) * leftProg;
      const leftOpacity = bp.left.startOpacity + (bp.left.endOpacity - bp.left.startOpacity) * leftProg;
      mockupLeft.style.transform = `translate3d(calc(-50% + ${leftOffset.toFixed(2)}px), ${leftY.toFixed(2)}px, 0) scale(${leftScale.toFixed(3)})`;
      mockupLeft.style.opacity = leftOpacity.toFixed(3);

      // 5. Right Mobile Rises and spreads to equal gap
      const rightProg = p <= 0.38 ? 0 : smoothStep((p - 0.38) / 0.44);
      const rightOffset = bp.right.startOffset + (bp.right.endOffset - bp.right.startOffset) * rightProg;
      const rightY = bp.right.startY + (bp.right.endY - bp.right.startY) * rightProg;
      const rightScale = bp.right.startScale + (bp.right.endScale - bp.right.startScale) * rightProg;
      const rightOpacity = bp.right.startOpacity + (bp.right.endOpacity - bp.right.startOpacity) * rightProg;
      mockupRight.style.transform = `translate3d(calc(-50% + ${rightOffset.toFixed(2)}px), ${rightY.toFixed(2)}px, 0) scale(${rightScale.toFixed(3)})`;
      mockupRight.style.opacity = rightOpacity.toFixed(3);
    }

    function updateScrollProgress() {
      const w = window.innerWidth;
      if (w <= 768) {
        renderHeroFrame(0);
        return;
      }

      const rect = heroSection.getBoundingClientRect();
      const scrollTrack = heroSection.offsetHeight - window.innerHeight;
      if (scrollTrack <= 0) {
        targetProgress = 0;
      } else {
        const scrolled = -rect.top;
        targetProgress = Math.max(0, Math.min(1, scrolled / scrollTrack));
      }

      if (!isTicking) {
        isTicking = true;
        requestAnimationFrame(smoothAnimationLoop);
      }
    }

    function smoothAnimationLoop() {
      // Damping factor 0.12 ensures liquid-smooth deceleration
      const diff = targetProgress - currentProgress;
      if (Math.abs(diff) < 0.0004) {
        currentProgress = targetProgress;
        renderHeroFrame(currentProgress);
        isTicking = false;
        return;
      }

      currentProgress += diff * 0.12;
      renderHeroFrame(currentProgress);
      requestAnimationFrame(smoothAnimationLoop);
    }

    window.addEventListener('scroll', updateScrollProgress, { passive: true });
    window.addEventListener('resize', () => {
      currentProgress = -1;
      updateScrollProgress();
    }, { passive: true });

    // Initial paint
    updateScrollProgress();
  }

  // ==========================================
  // 7. HOW IT WORKS - PINNED STAGE STACKING CARDS CONTROLLER
  // ==========================================
  const howItWorksSec = document.getElementById('how-it-works');
  const cardsStack = document.getElementById('process-cards-stack');
  const stackCards = cardsStack ? Array.from(cardsStack.querySelectorAll('.process-card-wrap')) : [];

  if (howItWorksSec && cardsStack && stackCards.length >= 2) {
    let currentP = -1;
    let targetP = 0;
    let ticking = false;

    // Smoothstep easing for zero-jerk transitions
    const ease = (t) => t * t * (3 - 2 * t);

    function updateStackingProgress() {
      const secRect = howItWorksSec.getBoundingClientRect();
      const maxScroll = howItWorksSec.offsetHeight - window.innerHeight;
      if (maxScroll <= 0) return;

      const stickyTop = 40;
      const scrolledIntoSec = -secRect.top + stickyTop;
      targetP = Math.max(0, Math.min(1, scrolledIntoSec / maxScroll));

      if (!ticking) {
        ticking = true;
        requestAnimationFrame(renderStackLoop);
      }
    }

    function renderStackFrame(p) {
      // Phase 1: Card 1 glide in and Card 0 scale/blur (progress 0.10 to 0.45)
      const t1 = Math.max(0, Math.min(1, (p - 0.10) / 0.35));
      const e1 = ease(t1);

      // Phase 2: Card 2 (AI Suggestions) glide in and Card 1 scale/blur (progress 0.55 to 0.85)
      const t2 = Math.max(0, Math.min(1, (p - 0.55) / 0.30));
      const e2 = ease(t2);

      // Card 0 (Upload or Capture): stays at (0,0,0), scales down gently
      const s0 = 1 - 0.04 * e1 - 0.04 * e2;
      stackCards[0].style.transform = `scale(${s0.toFixed(4)})`;

      // Card 1 (Choose Your Shade): glides up from bottom, lands at (0,0,0) by p=0.45, then scales as Card 2 arrives
      const y1 = (1 - e1) * 115;
      const s1 = 1 - 0.04 * e2;
      stackCards[1].style.transform = `translate3d(0, ${y1.toFixed(2)}%, 0) scale(${s1.toFixed(4)})`;

      // Card 2 (AI Suggestions): glides up from bottom, lands at EXACT (0,0,0) by p=0.85, stays locked through p=1.00!
      if (stackCards[2]) {
        const y2 = (1 - e2) * 115;
        stackCards[2].style.transform = `translate3d(0, ${y2.toFixed(2)}%, 0)`;
      }

      // Blur only inner elements (content & media) so outer borders have ZERO drop-shadow halo
      const blur0 = (e1 * 3 + e2 * 3).toFixed(1);
      const op0 = (1 - 0.25 * e1 - 0.25 * e2).toFixed(2);
      stackCards[0].querySelectorAll('.process-card-content, .process-card-media').forEach(el => {
        el.style.filter = `blur(${blur0}px)`;
        el.style.opacity = op0;
      });

      const blur1 = (e2 * 4).toFixed(1);
      const op1 = (1 - 0.25 * e2).toFixed(2);
      stackCards[1].querySelectorAll('.process-card-content, .process-card-media').forEach(el => {
        el.style.filter = `blur(${blur1}px)`;
        el.style.opacity = op1;
      });
    }

    function renderStackLoop() {
      const diff = targetP - currentP;
      if (Math.abs(diff) < 0.0005) {
        currentP = targetP;
        renderStackFrame(currentP);
        ticking = false;
        return;
      }

      currentP += diff * 0.16;
      renderStackFrame(currentP);
      requestAnimationFrame(renderStackLoop);
    }

    window.addEventListener('scroll', updateStackingProgress, { passive: true });
    window.addEventListener('resize', () => {
      currentP = -1;
      updateStackingProgress();
    }, { passive: true });

    // Initial paint
    updateStackingProgress();
  }

  // ==========================================
  // 8. FAQ ACCORDION INTERACTIVITY
  // ==========================================
  const faqButtons = document.querySelectorAll('.faq-question-btn');

  faqButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const parentItem = btn.closest('.faq-item');
      if (!parentItem) return;

      const isExpanded = parentItem.classList.contains('active');

      // Optional: Close other open FAQ items for a clean single-open accordion feel
      document.querySelectorAll('.faq-item.active').forEach(openItem => {
        if (openItem !== parentItem) {
          openItem.classList.remove('active');
          const otherBtn = openItem.querySelector('.faq-question-btn');
          if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
        }
      });

      // Toggle current item
      if (isExpanded) {
        parentItem.classList.remove('active');
        btn.setAttribute('aria-expanded', 'false');
      } else {
        parentItem.classList.add('active');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });
});
