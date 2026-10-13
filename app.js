/**
 * MENTYA.GFX - Interactive Application Logic
 * High-End Cinematography & Reel Production
 * Handles Portfolio Filters, Video Modals, Color Grade Slider, 
 * Interactive Shoot Calculator, and WhatsApp Integration
 */

// --- Portfolio Reel Data ---
const portfolioItems = [
  {
    id: 1,
    title: "Toyota Fortuner Legender Delivery",
    category: "car-delivery",
    categoryName: "Car Delivery",
    duration: "0:48",
    views: "1.4M",
    gear: "Sony FX3 + 24-70mm GM II",
    fps: "4K 120FPS",
    audio: "Phonk / Bass Boost Sync",
    thumb: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-car-headlights-in-the-dark-42465-large.mp4",
    igLink: "https://www.instagram.com/mentya.gfx_/",
    description: "Midnight showroom reveal for a matte black Fortuner Legender. Features tire smoke, dramatic curtain drop, and synchronized cinematic exhaust revs."
  },
  {
    id: 2,
    title: "Mahindra Thar Desert Sunset Rollers",
    category: "car-delivery",
    categoryName: "Car Delivery",
    duration: "0:56",
    views: "890K",
    gear: "DJI Ronin RS3 + Sony A7S III",
    fps: "4K 60FPS",
    audio: "Hard Cinematic Trap",
    thumb: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-sports-car-driving-in-a-parking-garage-43187-large.mp4",
    igLink: "https://www.instagram.com/mentya.gfx_/",
    description: "Post-delivery golden hour drive through winding hills. Low-angle speed ramped roller shots with custom motion blur grading."
  },
  {
    id: 3,
    title: "BMW M-Sport Showroom Ribbon Cut",
    category: "car-delivery",
    categoryName: "Car Delivery",
    duration: "0:39",
    views: "2.1M",
    gear: "Sony FX3 + 50mm f/1.2 GM",
    fps: "4K 120FPS",
    audio: "Ambient Hype Drill",
    thumb: "https://images.unsplash.com/photo-1617788138017-80ad40651399?auto=format&fit=crop&w=800&q=80",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-luxury-car-parked-at-night-42464-large.mp4",
    igLink: "https://www.instagram.com/mentya.gfx_/",
    description: "Key handover ceremony, champagne bottle pop in ultra slow-motion, and the first engine roar captured in pristine 32-bit float audio."
  },
  {
    id: 4,
    title: "The Royal Udaipur Palace Wedding",
    category: "wedding",
    categoryName: "Wedding Film",
    duration: "1:15",
    views: "3.5M",
    gear: "Sony FX3 + DJI Mavic 3 Cine",
    fps: "4K 60FPS ProRes",
    audio: "Emotional Orchestral Sufi",
    thumb: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-bride-holding-a-bouquet-of-flowers-43183-large.mp4",
    igLink: "https://www.instagram.com/mentya.gfx_/",
    description: "Cinematic bridal entry under fireworks, emotional father-daughter gaze, and an epic floral Haldi shower filmed from dual angles."
  },
  {
    id: 5,
    title: "Sunset Pre-Wedding Cinematic Teaser",
    category: "wedding",
    categoryName: "Wedding Film",
    duration: "0:52",
    views: "670K",
    gear: "Sony A7S III + Anamorphic 35mm",
    fps: "4K 24FPS Film Look",
    audio: "Dreamy Lo-Fi Acoustic",
    thumb: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-wedding-couple-walking-together-at-sunset-43184-large.mp4",
    igLink: "https://www.instagram.com/mentya.gfx_/",
    description: "Vibrant romance captured at a scenic mountain pass during golden hour with authentic film grain and teal-orange LUT."
  },
  {
    id: 6,
    title: "21st Neon Rooftop Birthday Bash",
    category: "birthday",
    categoryName: "Birthday Shoot",
    duration: "0:45",
    views: "940K",
    gear: "Sony FX3 + 16-35mm GM",
    fps: "4K 60FPS Slow-Mo",
    audio: "High Energy Electronic Bass",
    thumb: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-party-crowd-dancing-under-colored-lights-42502-large.mp4",
    igLink: "https://www.instagram.com/mentya.gfx_/",
    description: "Sparkler entrance, confetti cannon blast at the 12:00 AM countdown, and high-energy squad dance reels ready for TikTok & Instagram."
  },
  {
    id: 7,
    title: "Grand 1st Birthday Prince Fairytale",
    category: "birthday",
    categoryName: "Birthday Shoot",
    duration: "0:58",
    views: "420K",
    gear: "Sony FX3 + 85mm f/1.4 GM",
    fps: "4K 60FPS",
    audio: "Warm Acoustic Melody",
    thumb: "https://images.unsplash.com/photo-1513151233558-d860c5398176?auto=format&fit=crop&w=800&q=80",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-colorful-balloons-floating-in-the-air-42504-large.mp4",
    igLink: "https://www.instagram.com/mentya.gfx_/",
    description: "Dreamy fairy lights, cake smashing adorable giggles, and heartfelt parents' message woven into a timeless keepsake film."
  },
  {
    id: 8,
    title: "FPV Mountain Ridge Car Chase",
    category: "drone",
    categoryName: "Drone Cinematics",
    duration: "0:42",
    views: "1.8M",
    gear: "DJI Avata 2 + GoPro Bones 11",
    fps: "4K 60FPS RockSteady",
    audio: "Accelerating Synth Wave",
    thumb: "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=800&q=80",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-a-car-driving-on-a-curved-road-43188-large.mp4",
    igLink: "https://www.instagram.com/mentya.gfx_/",
    description: "Insane FPV dive chasing an SUV through twisting hairpin turns with ground-skimming proximity cinematography."
  },
  {
    id: 9,
    title: "Palace Wedding Aerial 4K Grand Sweep",
    category: "drone",
    categoryName: "Drone Cinematics",
    duration: "0:50",
    views: "1.1M",
    gear: "DJI Mavic 3 Pro Tri-Camera",
    fps: "5.1K Apple ProRes",
    audio: "Majestic Symphony",
    thumb: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=800&q=80",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-birds-eye-view-of-waves-crashing-on-a-beach-43189-large.mp4",
    igLink: "https://www.instagram.com/mentya.gfx_/",
    description: "Golden hour overhead orbit of the heritage wedding venue, tracing the Barat procession and royal fireworks display."
  }
];

// --- Web Audio Synthesizer for Subtle Cinematic SFX ---
let audioCtx = null;
let soundEnabled = true;

function initAudio() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
}

function playCinemaWhoosh() {
  if (!soundEnabled) return;
  try {
    initAudio();
    if (!audioCtx) return;
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    const filter = audioCtx.createBiquadFilter();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(140, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(45, audioCtx.currentTime + 0.22);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(350, audioCtx.currentTime);
    filter.frequency.exponentialRampToValueAtTime(80, audioCtx.currentTime + 0.22);

    gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.25);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(audioCtx.destination);

    osc.start();
    osc.stop(audioCtx.currentTime + 0.25);
  } catch (e) {
    console.log("Audio FX error:", e);
  }
}

// --- Initialize DOM Components on Ready ---
document.addEventListener("DOMContentLoaded", () => {
  renderPortfolioGrid('all');
  initFilterButtons();
  initColorComparisonSlider();
  initCalculator();
  initFaqAccordion();
  initMobileMenu();
  initAudioToggle();
  initBookingForm();
  initSmoothScroll();
});

// --- Portfolio Rendering & Filtering ---
function renderPortfolioGrid(filterCategory = 'all') {
  const container = document.getElementById("portfolio-grid");
  if (!container) return;

  const filtered = filterCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === filterCategory);

  container.innerHTML = "";

  filtered.forEach(item => {
    const card = document.createElement("div");
    card.className = "group relative bg-slate-900/60 rounded-2xl overflow-hidden border border-white/10 hover:border-orange-500/50 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-orange-500/10 flex flex-col";
    
    // Category accent color
    let tagColor = "border-orange-500/40 text-orange-400 bg-orange-500/10";
    if (item.category === "wedding") tagColor = "border-amber-500/40 text-amber-300 bg-amber-500/10";
    if (item.category === "drone") tagColor = "border-cyan-500/40 text-cyan-300 bg-cyan-500/10";
    if (item.category === "birthday") tagColor = "border-purple-500/40 text-purple-300 bg-purple-500/10";

    card.innerHTML = `
      <div class="relative w-full aspect-video overflow-hidden bg-black/60 cursor-pointer" onclick="openVideoModal(${item.id})">
        <img 
          src="${item.thumb}" 
          alt="${item.title}" 
          class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
          loading="lazy"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
        
        <!-- Video Specs Top Bar -->
        <div class="absolute top-3 left-3 right-3 flex items-center justify-between">
          <span class="text-xs px-2.5 py-1 rounded-full font-mono-tech uppercase font-semibold backdrop-blur-md border ${tagColor}">
            ${item.categoryName}
          </span>
          <span class="text-xs px-2 py-0.5 rounded bg-black/70 backdrop-blur-md border border-white/20 text-slate-300 font-mono-tech flex items-center gap-1">
            <span class="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
            ${item.fps}
          </span>
        </div>

        <!-- Play Button Overlay -->
        <div class="absolute inset-0 flex items-center justify-center">
          <div class="w-14 h-14 rounded-full bg-orange-500/90 text-white flex items-center justify-center shadow-lg shadow-orange-500/50 transform group-hover:scale-110 transition-transform duration-300 group-hover:bg-orange-500">
            <svg class="w-6 h-6 translate-x-0.5 fill-current" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z"/>
            </svg>
          </div>
        </div>

        <!-- Duration & Views Bottom Bar -->
        <div class="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-slate-300 font-mono-tech">
          <span class="bg-black/80 px-2 py-1 rounded border border-white/10 flex items-center gap-1">
            ⏱️ ${item.duration}
          </span>
          <span class="bg-black/80 px-2 py-1 rounded border border-white/10 flex items-center gap-1 text-orange-400 font-semibold">
            🔥 ${item.views} Views
          </span>
        </div>
      </div>

      <!-- Card Details -->
      <div class="p-5 flex-1 flex flex-col justify-between">
        <div>
          <h3 class="text-lg font-bold text-white group-hover:text-orange-400 transition-colors line-clamp-1 mb-2 font-display">
            ${item.title}
          </h3>
          <p class="text-xs text-slate-400 line-clamp-2 mb-4 leading-relaxed">
            ${item.description}
          </p>
        </div>

        <div class="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 font-mono-tech">
          <span class="truncate max-w-[170px]" title="${item.gear}">🎥 ${item.gear}</span>
          <button 
            onclick="openVideoModal(${item.id})"
            class="text-orange-400 hover:text-orange-300 font-semibold flex items-center gap-1 hover:underline"
          >
            Watch Film ↗
          </button>
        </div>
      </div>
    `;

    container.appendChild(card);
  });
}

function initFilterButtons() {
  const buttons = document.querySelectorAll(".filter-btn");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      playCinemaWhoosh();
      buttons.forEach(b => {
        b.classList.remove("bg-orange-500", "text-white", "shadow-orange-500/30", "shadow-lg");
        b.classList.add("bg-white/5", "text-slate-300", "hover:bg-white/10");
      });
      btn.classList.remove("bg-white/5", "text-slate-300", "hover:bg-white/10");
      btn.classList.add("bg-orange-500", "text-white", "shadow-orange-500/30", "shadow-lg");

      const filter = btn.getAttribute("data-filter");
      renderPortfolioGrid(filter);
    });
  });
}

// --- Video Modal Popup ---
window.openVideoModal = function(itemId) {
  playCinemaWhoosh();
  if (typeof trackEvent === 'function') trackEvent('reel');
  const item = portfolioItems.find(p => p.id === itemId);
  if (!item) return;

  const modal = document.getElementById("video-modal");
  const modalVideo = document.getElementById("modal-video");
  const modalTitle = document.getElementById("modal-title");
  const modalCategory = document.getElementById("modal-category");
  const modalDescription = document.getElementById("modal-description");
  const modalGear = document.getElementById("modal-gear");
  const modalFps = document.getElementById("modal-fps");
  const modalAudio = document.getElementById("modal-audio");
  const modalViews = document.getElementById("modal-views");
  const modalIgBtn = document.getElementById("modal-ig-link");

  if (modalTitle) modalTitle.innerText = item.title;
  if (modalCategory) modalCategory.innerText = item.categoryName;
  if (modalDescription) modalDescription.innerText = item.description;
  if (modalGear) modalGear.innerText = item.gear;
  if (modalFps) modalFps.innerText = item.fps;
  if (modalAudio) modalAudio.innerText = item.audio;
  if (modalViews) modalViews.innerText = item.views + " Instagram Views";
  if (modalIgBtn) modalIgBtn.href = item.igLink;

  if (modalVideo) {
    modalVideo.src = item.videoUrl;
    modalVideo.poster = item.thumb;
    modalVideo.play().catch(e => console.log("Autoplay prevented:", e));
  }

  if (modal) {
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }
};

window.closeVideoModal = function() {
  const modal = document.getElementById("video-modal");
  const modalVideo = document.getElementById("modal-video");
  if (modalVideo) {
    modalVideo.pause();
    modalVideo.src = "";
  }
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "auto";
  }
};

// Close modal when clicking background overlay or pressing ESC
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeVideoModal();
    closeBookingModal();
  }
});

// --- Before / After Color Grading Slider ---
function initColorComparisonSlider() {
  const container = document.getElementById("comparison-container");
  const beforeImg = document.getElementById("comparison-before");
  const divider = document.getElementById("comparison-divider");
  const handle = document.getElementById("comparison-handle");

  if (!container || !beforeImg || !divider || !handle) return;

  let isDragging = false;

  function updateSliderPosition(clientX) {
    const rect = container.getBoundingClientRect();
    let x = clientX - rect.left;
    if (x < 0) x = 0;
    if (x > rect.width) x = rect.width;

    const percentage = (x / rect.width) * 100;

    beforeImg.style.clipPath = `polygon(0 0, ${percentage}% 0, ${percentage}% 100%, 0 100%)`;
    divider.style.left = `${percentage}%`;
    handle.style.left = `${percentage}%`;
  }

  container.addEventListener("mousedown", (e) => {
    isDragging = true;
    updateSliderPosition(e.clientX);
  });

  window.addEventListener("mouseup", () => {
    isDragging = false;
  });

  window.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    updateSliderPosition(e.clientX);
  });

  // Touch Support for Mobile / Tablets
  container.addEventListener("touchstart", (e) => {
    isDragging = true;
    if (e.touches[0]) updateSliderPosition(e.touches[0].clientX);
  }, { passive: true });

  window.addEventListener("touchend", () => {
    isDragging = false;
  });

  window.addEventListener("touchmove", (e) => {
    if (!isDragging) return;
    if (e.touches[0]) updateSliderPosition(e.touches[0].clientX);
  }, { passive: true });
}

// --- Interactive Shoot Cost Estimator & WhatsApp Builder ---
function initCalculator() {
  const shootTypeSelect = document.getElementById("calc-shoot-type");
  const durationSelect = document.getElementById("calc-duration");
  const addonCheckboxes = document.querySelectorAll(".calc-addon");
  const priceDisplay = document.getElementById("calc-total-price");
  const summaryShootType = document.getElementById("summary-shoot-type");
  const summaryDuration = document.getElementById("summary-duration");
  const summaryAddons = document.getElementById("summary-addons");
  const whatsappQuoteBtn = document.getElementById("whatsapp-quote-btn");

  const baseRates = {
    "car-delivery": { name: "Car Delivery Cinematic Shoot", price: 7999 },
    "wedding": { name: "Wedding / Pre-Wedding Film", price: 24999 },
    "birthday": { name: "Birthday & Milestone Celebration", price: 9999 },
    "drone": { name: "Dedicated 4K Drone Aerial Showcase", price: 8499 },
    "combo": { name: "All-Inclusive Cinematic Combo", price: 29999 }
  };

  const durationMultipliers = {
    "standard": { name: "Standard (2-3 Hours)", extra: 0 },
    "half-day": { name: "Half-Day (4-6 Hours)", extra: 4500 },
    "full-day": { name: "Full-Day (8-10 Hours)", extra: 9500 }
  };

  function recalculate() {
    if (!shootTypeSelect || !durationSelect || !priceDisplay) return;

    const selectedTypeKey = shootTypeSelect.value;
    const selectedDurationKey = durationSelect.value;

    const baseData = baseRates[selectedTypeKey] || baseRates["car-delivery"];
    const durationData = durationMultipliers[selectedDurationKey] || durationMultipliers["standard"];

    let total = baseData.price + durationData.extra;
    const selectedAddonNames = [];

    addonCheckboxes.forEach(cb => {
      if (cb.checked) {
        const addonPrice = parseInt(cb.getAttribute("data-price") || 0, 10);
        const addonName = cb.getAttribute("data-name") || "Addon";
        total += addonPrice;
        selectedAddonNames.push(addonName);
      }
    });

    // Animate price change
    priceDisplay.innerText = "₹" + total.toLocaleString("en-IN");
    if (summaryShootType) summaryShootType.innerText = baseData.name;
    if (summaryDuration) summaryDuration.innerText = durationData.name;
    if (summaryAddons) {
      summaryAddons.innerText = selectedAddonNames.length > 0 ? selectedAddonNames.join(", ") : "None";
    }

    // Update WhatsApp link with prefilled message
    if (whatsappQuoteBtn) {
      const message = `Hey @mentya.gfx_! I customized a shoot on your website:%0A%0A` +
        `📹 *Shoot Type:* ${encodeURIComponent(baseData.name)}%0A` +
        `⏱️ *Coverage:* ${encodeURIComponent(durationData.name)}%0A` +
        `✨ *Add-ons:* ${encodeURIComponent(selectedAddonNames.length > 0 ? selectedAddonNames.join(", ") : "None")}%0A` +
        `💰 *Estimated Investment:* ₹${total.toLocaleString("en-IN")}%0A%0A` +
        `Can we check your availability for this date?`;

      // Instagram / WhatsApp contact (phone number customizable)
      whatsappQuoteBtn.href = `https://wa.me/917620392790?text=${message}`;
    }
  }

  if (shootTypeSelect) shootTypeSelect.addEventListener("change", () => { playCinemaWhoosh(); recalculate(); });
  if (durationSelect) durationSelect.addEventListener("change", () => { playCinemaWhoosh(); recalculate(); });
  addonCheckboxes.forEach(cb => {
    cb.addEventListener("change", () => { playCinemaWhoosh(); recalculate(); });
  });

  recalculate();
}

// --- FAQ Accordion Logic ---
function initFaqAccordion() {
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach(item => {
    const questionBtn = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");
    const icon = item.querySelector(".faq-icon");

    if (questionBtn && answer) {
      questionBtn.addEventListener("click", () => {
        playCinemaWhoosh();
        const isOpen = !answer.classList.contains("hidden");

        // Close all
        document.querySelectorAll(".faq-answer").forEach(a => a.classList.add("hidden"));
        document.querySelectorAll(".faq-icon").forEach(i => i.classList.remove("rotate-180", "text-orange-500"));

        if (!isOpen) {
          answer.classList.remove("hidden");
          if (icon) icon.classList.add("rotate-180", "text-orange-500");
        }
      });
    }
  });
}

// --- Mobile Navigation Menu ---
function initMobileMenu() {
  const mobileToggle = document.getElementById("mobile-menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const mobileLinks = document.querySelectorAll(".mobile-nav-link");

  if (!mobileToggle || !mobileMenu) return;

  mobileToggle.addEventListener("click", () => {
    playCinemaWhoosh();
    mobileMenu.classList.toggle("hidden");
  });

  mobileLinks.forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
    });
  });
}

// --- Audio SFX Toggle Button ---
function initAudioToggle() {
  const toggleBtn = document.getElementById("sound-fx-toggle");
  const soundWaves = document.getElementById("sound-waves");
  if (!toggleBtn) return;

  toggleBtn.addEventListener("click", () => {
    soundEnabled = !soundEnabled;
    if (soundEnabled) {
      playCinemaWhoosh();
      if (soundWaves) soundWaves.classList.remove("opacity-20");
      toggleBtn.classList.add("border-orange-500/50", "text-orange-400");
      toggleBtn.title = "Cinematic Audio FX: Enabled";
    } else {
      if (soundWaves) soundWaves.classList.add("opacity-20");
      toggleBtn.classList.remove("border-orange-500/50", "text-orange-400");
      toggleBtn.title = "Cinematic Audio FX: Muted";
    }
  });
}

// --- Booking / Inquiry Form Handling ---
function initBookingForm() {
  const form = document.getElementById("booking-inquiry-form");
  const feedbackMsg = document.getElementById("form-feedback");

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    playCinemaWhoosh();

    const name = document.getElementById("form-name")?.value || "";
    const phone = document.getElementById("form-phone")?.value || "";
    const eventType = document.getElementById("form-service")?.value || "";
    const eventDate = document.getElementById("form-date")?.value || "";
    const city = document.getElementById("form-city")?.value || "";
    const notes = document.getElementById("form-notes")?.value || "";

    const message = `🎬 *New Shoot Inquiry for @mentya.gfx_*%0A%0A` +
      `👤 *Client:* ${encodeURIComponent(name)}%0A` +
      `📞 *Phone:* ${encodeURIComponent(phone)}%0A` +
      `🎯 *Event / Shoot Type:* ${encodeURIComponent(eventType)}%0A` +
      `📅 *Date:* ${encodeURIComponent(eventDate)}%0A` +
      `📍 *Location:* ${encodeURIComponent(city)}%0A` +
      `📝 *Vision / Notes:* ${encodeURIComponent(notes)}%0A%0A` +
      `Looking forward to collaborating on this cinematic film!`;

    // Direct WhatsApp redirect
    const whatsappUrl = `https://wa.me/917620392790?text=${message}`;

    if (feedbackMsg) {
      feedbackMsg.innerHTML = `
        <div class="p-4 rounded-xl bg-green-500/10 border border-green-500/30 text-green-400 text-sm flex items-center justify-between">
          <span>✅ Inquiring booked! Redirecting to WhatsApp with your details...</span>
          <a href="${whatsappUrl}" target="_blank" class="px-3 py-1 bg-green-500 text-black font-semibold rounded-lg text-xs hover:bg-green-400">Open WhatsApp Now</a>
        </div>
      `;
    }

    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
    }, 800);
  });
}

// --- Smooth Scroll for in-page anchors ---
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        playCinemaWhoosh();
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// --- Built-In Live Analytics System ---
const ANALYTICS_STORAGE_KEY = "mentya_site_analytics_v1";

function getAnalyticsData() {
  try {
    const raw = localStorage.getItem(ANALYTICS_STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) {}
  return { pageviews: 1, whatsappClicks: 0, reelsPlayed: 0, quotesCalculated: 0, firstVisit: new Date().toISOString() };
}

function saveAnalyticsData(data) {
  try {
    localStorage.setItem(ANALYTICS_STORAGE_KEY, JSON.stringify(data));
  } catch (e) {}
}

function trackEvent(type) {
  const data = getAnalyticsData();
  if (type === 'pageview') data.pageviews = (data.pageviews || 0) + 1;
  if (type === 'whatsapp') data.whatsappClicks = (data.whatsappClicks || 0) + 1;
  if (type === 'reel') data.reelsPlayed = (data.reelsPlayed || 0) + 1;
  if (type === 'quote') data.quotesCalculated = (data.quotesCalculated || 0) + 1;
  saveAnalyticsData(data);

  // Send to Google Analytics 4 (GA4) if active
  if (typeof gtag === 'function') {
    gtag('event', type, { event_category: 'Engagement', event_label: 'MentyaGFX' });
  }
}

// Track pageview on load
setTimeout(() => trackEvent('pageview'), 500);

// Track all WhatsApp clicks
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('a[href*="wa.me"]').forEach(link => {
    link.addEventListener('click', () => trackEvent('whatsapp'));
  });

  // Track quote calculator changes
  const calcSelects = document.querySelectorAll('#calc-shoot-type, #calc-duration, .calc-addon');
  calcSelects.forEach(el => {
    el.addEventListener('change', () => trackEvent('quote'));
  });
});

window.openAnalyticsModal = function() {
  playCinemaWhoosh();
  const data = getAnalyticsData();
  const modal = document.getElementById("analytics-modal");
  const pvEl = document.getElementById("metric-pageviews");
  const waEl = document.getElementById("metric-whatsapp");
  const reEl = document.getElementById("metric-reels");
  const quEl = document.getElementById("metric-quotes");

  if (pvEl) pvEl.innerText = data.pageviews || 1;
  if (waEl) waEl.innerText = data.whatsappClicks || 0;
  if (reEl) reEl.innerText = data.reelsPlayed || 0;
  if (quEl) quEl.innerText = data.quotesCalculated || 0;

  if (modal) {
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }
};

window.closeAnalyticsModal = function() {
  const modal = document.getElementById("analytics-modal");
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "auto";
  }
};

window.resetLocalAnalytics = function() {
  saveAnalyticsData({ pageviews: 1, whatsappClicks: 0, reelsPlayed: 0, quotesCalculated: 0, firstVisit: new Date().toISOString() });
  window.openAnalyticsModal();
};

// Keyboard shortcut: Ctrl + Shift + A opens Analytics dashboard
document.addEventListener("keydown", (e) => {
  if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === 'a') {
    window.openAnalyticsModal();
  }
});
