/* ====================================================================
   🌷 BẢNG CẤU HÌNH DÀNH RIÊNG CHO BẠN (CHỈNH SỬA TẠI ĐÂY)
   Bạn có thể tùy ý sửa tên, lời chúc, số lượng hoa trực tiếp ở mục này!
   ==================================================================== */
const CONFIG = {
  // 0. MÀN HÌNH XÁC NHẬN VÂN TAY (TOUCH ID MỞ KHÓA BÍ MẬT)
  enableFingerprintLock: true,     // Bật màn hình khóa quét vân tay (true / false)
  lockTitle: "Xác Thực Mở Khóa Bí Mật",
  lockSubtitle: "Chạm và giữ vào cảm biến vân tay để mở khóa",
  lockSuccessMessage: "Xác thực vân tay thành công! ✨",

  // 1. THÔNG TIN NGƯỜI NHẬN & NGƯỜI GỬI
  recipientName: "Ngời xinh không nói",         // Tên người nhận (hiển thị trên tiêu đề & trong thư)
  senderName: "Người luôn trân trọng bạn 🌹",          // Tên người gửi (ký tên ở cuối bức thư)

  // 2. CÂU TỰA DƯỚI TIÊU ĐỀ CHÍNH
  subtitle: '"Tươi thắm tựa đóa tulip ban mai, rạng ngời tựa muôn vì sao sáng."',

  // 3. NỘI DUNG BỨC THƯ 20/10 (Mỗi dòng là một đoạn văn tràn đầy yêu thương)
  letterParagraphs: [
    "Hôm nay là ngày 20/10 – ngày để tôn vinh người phụ nữ tuyệt vời, rạng rỡ và đặc biệt nhất!",
    "Mỗi đóa hoa tulip bung nở trong khu vườn này tượng trưng cho một lời chúc chân thành nhất: Chúc cậu luôn rạng rỡ, xinh đẹp, nụ cười luôn nở trên môi và cuộc sống ngập tràn an yên, hạnh phúc mỗi ngày.",
    "Cảm ơn vì đã mang đến cho thế giới xung quanh vô vàn sắc màu ấm áp và tươi vui. Mong cậu luôn tự tin tỏa sáng rực rỡ như những bông hoa tulip đón ánh bình minh!",
    "Chúc cậu có một ngày 20/10 thật trọn vẹn, nhận được thật nhiều hoa, quà và những điều tuyệt vời nhất trần đời."
  ],
  letterQuote: '"Phụ nữ sinh ra là để được nâng niu, trân trọng và hạnh phúc nhất trần đời. Và cậu cũng thế!!!" ✨',

  // 4. THIẾT LẬP BÀI HÁT "CHỜ CHÚT..." (CONGB)
  audioFile: "chờ chút....mp3",   // File nhạc bài hát "chờ chút....mp3" (CONGB)
  audioStartTime: 0,             // Bấm vân tay là HÁT LIỀN LẬP TỨC (tự động bỏ qua 1.4s im lặng ở đầu file để nhạc vang lên ngay khoảnh khắc chạm)
  // 0    : Phát từ đầu bài hát (tự động khử khoảng lặng đầu)
  // 15.5 : Đoạn cất tiếng hát ngọt ngào ("Chờ chút... đừng vội buông tay...")
  // 46   : Điệp khúc 1 ("Chờ anh chút thôi...")
  audioVolume: 0.85,             // Âm lượng bài hát (0.1 đến 1.0)
  autoPlayMusicOnOpen: true,     // Tự động phát nhạc khi mở thư chúc mừng (true / false)

  // 5. THIẾT LẬP HOA TULIP NỞ BAN ĐẦU
  flowerCount: 50,             // Số lượng hoa tulip ban đầu nở rộ (gợi ý: 40 - 70 bông cho vườn hoa ngập tràn)
  defaultPalette: 'pink',      // Bảng màu mặc định:
  // 'pink'    : Hồng ngọt ngào
  // 'sunset'  : Hoàng hôn rực rỡ (cam vàng)
  // 'velvet'  : Đỏ nhung sang trọng
  // 'purple'  : Tím mộng mơ
  // 'aurora'  : Dạ quang cực quang
  // 'rainbow' : Cầu vồng muôn sắc

  defaultMode: 'garden',       // Chế độ ban đầu: 'garden' (vườn hoa ngút ngàn) hoặc 'bouquet' (bó hoa lộng lẫy)

  // 6. HIỆU ỨNG KHÁC
  enablePetalRain: true,       // Bật mưa cánh hoa tulip bay rơi tự nhiên (true / false)
};

/* ====================================================================
   HỆ THỐNG XỬ LÝ ĐỒ HỌA & HIỆU ỨNG VƯỜN HOA TULIP
   ==================================================================== */
(function () {
  'use strict';

  // --- PALETTE CONFIGURATIONS ---
  const PALETTES = {
    pink: {
      name: 'Hồng Ngọt Ngào',
      preview: '#ff4d8d',
      flowerGradients: [
        ['#ff75a0', '#ff2a6d', '#b3003b'],
        ['#ffa3c4', '#ff4d8d', '#d61b58'],
        ['#ffccd9', '#ff6b9e', '#e6005c'],
        ['#ffffff', '#ff80bf', '#ff1a75'],
        ['#ffd6e7', '#ff5997', '#c90052']
      ],
      glow: 'rgba(255, 77, 141, 0.45)'
    },
    sunset: {
      name: 'Hoàng Hôn Rực Rỡ',
      preview: '#ff7e40',
      flowerGradients: [
        ['#ffd166', '#ff7e40', '#d83a17'],
        ['#ffec99', '#ff9233', '#c42805'],
        ['#ffe066', '#f25c54', '#b81424'],
        ['#fff3b0', '#e09f3e', '#9e2a2b'],
        ['#ffadad', '#ff6b6b', '#c9184a']
      ],
      glow: 'rgba(255, 126, 64, 0.45)'
    },
    velvet: {
      name: 'Đỏ Nhung Sang Trọng',
      preview: '#c9184a',
      flowerGradients: [
        ['#ff4d6d', '#c9184a', '#590d22'],
        ['#ff758f', '#a4133c', '#800f2f'],
        ['#ff2a6d', '#800f2f', '#440516'],
        ['#ff8fa3', '#c9184a', '#6b0c26'],
        ['#e01e37', '#a71e34', '#3d0c11']
      ],
      glow: 'rgba(201, 24, 74, 0.45)'
    },
    purple: {
      name: 'Tím Mộng Mơ',
      preview: '#9d4edd',
      flowerGradients: [
        ['#e0aaff', '#9d4edd', '#3c096c'],
        ['#c77dff', '#7b2cbf', '#240046'],
        ['#f72585', '#b5179e', '#560bad'],
        ['#e2afff', '#a239ea', '#4c0070'],
        ['#f8b4d9', '#c05299', '#631d53']
      ],
      glow: 'rgba(157, 78, 221, 0.45)'
    },
    aurora: {
      name: 'Dạ Quang Cực Quang',
      preview: '#00f5d4',
      flowerGradients: [
        ['#70e000', '#00f5d4', '#0077b6'],
        ['#00f5d4', '#00bbf9', '#7b2cbf'],
        ['#ccff33', '#38b000', '#007200'],
        ['#72efdd', '#48bfe3', '#5e60ce'],
        ['#52b788', '#2d6a4f', '#081c15']
      ],
      glow: 'rgba(0, 245, 212, 0.45)'
    },
    rainbow: {
      name: 'Muôn Sắc Cầu Vồng',
      preview: '#ffd166',
      flowerGradients: [
        ['#ff75a0', '#ff2a6d', '#800f2f'],
        ['#ffd166', '#ff7e40', '#d83a17'],
        ['#00f5d4', '#00bbf9', '#7b2cbf'],
        ['#e0aaff', '#9d4edd', '#3c096c'],
        ['#ffffff', '#ff9ec6', '#d61b58']
      ],
      glow: 'rgba(255, 209, 102, 0.45)'
    }
  };

  let currentPaletteKey = CONFIG.defaultPalette || 'pink';
  let isGardenMode = (CONFIG.defaultMode !== 'bouquet');
  let tulips = [];
  let fireflies = [];
  let isRainActive = CONFIG.enablePetalRain !== false;
  let windTime = 0;

  // --- DOM ELEMENTS ---
  const tulipCanvas = document.getElementById('tulipCanvas');
  const tulipCtx = tulipCanvas.getContext('2d');
  const cursorCanvas = document.getElementById('cursorCanvas');
  const cursorCtx = cursorCanvas.getContext('2d');
  const petalsContainer = document.getElementById('petalsContainer');

  const btnModeGarden = document.getElementById('btnModeGarden');
  const btnModeBouquet = document.getElementById('btnModeBouquet');
  const btnPalette = document.getElementById('btnPalette');
  const paletteDropdown = document.getElementById('paletteDropdown');
  const palettePreviewDot = document.getElementById('palettePreviewDot');
  const btnMusic = document.getElementById('btnMusic');

  const btnOpenLetter = document.getElementById('btnOpenLetter');
  const clickHint = document.getElementById('clickHint');

  const letterModal = document.getElementById('letterModal');
  const btnCloseLetter = document.getElementById('btnCloseLetter');
  const btnCloseLetterBottom = document.getElementById('btnCloseLetterBottom');
  const envelopeWrapper = document.getElementById('envelopeWrapper');
  const envelopeSeal = document.getElementById('envelopeSeal');

  const recipientNameDisplay = document.getElementById('recipientNameDisplay');
  const heroSubtitle = document.getElementById('heroSubtitle');
  const letterRecipient = document.getElementById('letterRecipient');
  const letterSender = document.getElementById('letterSender');
  const letterBodyText = document.getElementById('letterBodyText');

  const toastNotification = document.getElementById('toastNotification');
  const toastMessage = document.getElementById('toastMessage');

  const btnToggleRain = document.getElementById('btnToggleRain');
  const btnClearFlowers = document.getElementById('btnClearFlowers');
  const btnCapture = document.getElementById('btnCapture');

  // Lockscreen Elements
  const lockscreenOverlay = document.getElementById('lockscreenOverlay');
  const lockTitle = document.getElementById('lockTitle');
  const lockSubtitle = document.getElementById('lockSubtitle');
  const fingerprintSensor = document.getElementById('fingerprintSensor');
  const ringFill = document.getElementById('ringFill');
  const scanLaser = document.getElementById('scanLaser');
  const fingerprintIcon = document.getElementById('fingerprintIcon');
  const successIcon = document.getElementById('successIcon');
  const statusDot = document.getElementById('statusDot');
  const statusText = document.getElementById('statusText');
  const scanCounter = document.getElementById('scanCounter');

  // --- CANVAS RESIZE ---
  let width = (tulipCanvas.width = window.innerWidth);
  let height = (tulipCanvas.height = window.innerHeight);
  cursorCanvas.width = width;
  cursorCanvas.height = height;

  window.addEventListener('resize', () => {
    width = tulipCanvas.width = window.innerWidth;
    height = tulipCanvas.height = window.innerHeight;
    cursorCanvas.width = width;
    cursorCanvas.height = height;
    initScene();
  });

  // --- ÁP DỤNG THÔNG TIN TỪ CONFIG VÀO GIAO DIỆN ---
  function applyConfigData() {
    const finalRecipient = CONFIG.recipientName || (recipientNameDisplay ? recipientNameDisplay.textContent.trim() : "Người Phụ Nữ Tuyệt Vời");
    if (recipientNameDisplay) recipientNameDisplay.textContent = finalRecipient;
    if (heroSubtitle) heroSubtitle.textContent = CONFIG.subtitle;
    if (letterRecipient) letterRecipient.textContent = finalRecipient;
    if (letterSender) letterSender.textContent = CONFIG.senderName;

    if (letterBodyText && CONFIG.letterParagraphs) {
      letterBodyText.innerHTML = '';
      CONFIG.letterParagraphs.forEach((text, idx) => {
        const p = document.createElement('p');
        p.className = 'letter-para-fade';
        p.style.animationDelay = `${0.5 + idx * 0.22}s`;
        p.textContent = text;
        letterBodyText.appendChild(p);
      });
      if (CONFIG.letterQuote) {
        const q = document.createElement('p');
        q.className = 'letter-quote letter-para-fade';
        q.style.animationDelay = `${0.5 + CONFIG.letterParagraphs.length * 0.22}s`;
        q.textContent = CONFIG.letterQuote;
        letterBodyText.appendChild(q);
      }
    }

    if (PALETTES[currentPaletteKey] && palettePreviewDot) {
      palettePreviewDot.style.background = PALETTES[currentPaletteKey].preview;
      palettePreviewDot.style.boxShadow = `0 0 10px ${PALETTES[currentPaletteKey].preview}`;
    }

    if (btnModeGarden && btnModeBouquet) {
      if (isGardenMode) {
        btnModeGarden.classList.add('active');
        btnModeBouquet.classList.remove('active');
      } else {
        btnModeBouquet.classList.add('active');
        btnModeGarden.classList.remove('active');
      }
    }
  }

  // --- BỘ TỔNG HỢP ÂM THANH CHUÔNG HOA (Web Audio API) ---
  class RomanticAudioSynth {
    constructor() {
      this.ctx = null;
      this.isPlaying = false;
      this.timer = null;
      this.step = 0;

      this.chords = [
        [174.61, 220.00, 261.63, 329.63, 392.00],
        [196.00, 246.94, 293.66, 329.63, 392.00],
        [164.81, 196.00, 246.94, 293.66, 329.63],
        [110.00, 220.00, 261.63, 329.63, 392.00],
        [146.83, 220.00, 261.63, 293.66, 392.00],
        [196.00, 246.94, 329.63, 392.00, 440.00],
        [130.81, 196.00, 246.94, 261.63, 329.63],
        [130.81, 196.00, 233.08, 261.63, 329.63]
      ];

      this.bellScale = [
        523.25, 587.33, 659.25, 783.99, 880.00, 1046.50, 1174.66, 1318.51
      ];
    }

    init() {
      if (!this.ctx) {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        this.ctx = new AudioContext();
      }
      if (this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
    }

    playNote(freq, type = 'sine', duration = 2.5, gainVal = 0.08) {
      if (!this.ctx) return;
      try {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const filter = this.ctx.createBiquadFilter();

        osc.type = type;
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(1600, this.ctx.currentTime);
        filter.frequency.exponentialRampToValueAtTime(300, this.ctx.currentTime + duration);

        gain.gain.setValueAtTime(0.0001, this.ctx.currentTime);
        gain.gain.linearRampToValueAtTime(gainVal, this.ctx.currentTime + 0.08);
        gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start();
        osc.stop(this.ctx.currentTime + duration);
      } catch (e) {
        console.error(e);
      }
    }

    playChime(noteIndex = null) {
      this.init();
      const idx = noteIndex !== null ? noteIndex % this.bellScale.length : Math.floor(Math.random() * this.bellScale.length);
      const freq = this.bellScale[idx];
      this.playNote(freq, 'sine', 1.8, 0.15);
      this.playNote(freq * 2.01, 'triangle', 1.2, 0.04);
    }

    startMusic() {
      this.init();
      if (this.isPlaying) return;
      this.isPlaying = true;

      const tick = () => {
        if (!this.isPlaying) return;

        const chordIdx = Math.floor(this.step / 4) % this.chords.length;
        const currentChord = this.chords[chordIdx];
        const chordNote = currentChord[this.step % currentChord.length];

        if (this.step % 4 === 0) {
          this.playNote(currentChord[0], 'sine', 3.6, 0.12);
        }

        this.playNote(chordNote, 'triangle', 2.2, 0.06);

        if (Math.random() > 0.45) {
          const melodyNote = this.bellScale[Math.floor(Math.random() * this.bellScale.length)];
          setTimeout(() => {
            if (this.isPlaying) this.playNote(melodyNote, 'sine', 2.0, 0.08);
          }, 320);
        }

        this.step++;
        this.timer = setTimeout(tick, 580);
      };

      tick();
    }

    stopMusic() {
      this.isPlaying = false;
      if (this.timer) clearTimeout(this.timer);
    }
  }

  // --- TRÌNH ĐIỀU KHIỂN BÀI HÁT "CHỜ CHÚT..." (CONGB) ---
  class SongAudioController {
    constructor() {
      this.bgAudio = document.getElementById('bgAudio');
      this.isPlaying = false;
      this.synth = new RomanticAudioSynth();
      this.hasSetStartTime = false;
      this.fadeInterval = null;
      this.fallbackSources = [
        "chờ chút....mp3",
        "cho%CC%9B%CC%80%20chu%CC%81t....mp3",
        "music.mp3"
      ];
      this.currentSourceIndex = 0;

      if (this.bgAudio) {
        this.bgAudio.volume = CONFIG.audioVolume || 0.85;
        this.bgAudio.preload = "auto";

        // Tự động thử nguồn dự phòng nếu xảy ra lỗi tải
        this.bgAudio.addEventListener('error', () => {
          this.tryNextSource();
        });

        // Theo dõi trạng thái phát thực tế
        this.bgAudio.addEventListener('play', () => {
          this.isPlaying = true;
          if (btnMusic) btnMusic.classList.add('playing');
        });

        this.bgAudio.addEventListener('pause', () => {
          if (this.bgAudio.paused) {
            this.isPlaying = false;
            if (btnMusic) btnMusic.classList.remove('playing');
          }
        });

        // Lặp lại bài hát mượt mà
        this.bgAudio.addEventListener('ended', () => {
          const startSec = (typeof CONFIG.audioStartTime === 'number') ? CONFIG.audioStartTime : 0;
          this.bgAudio.currentTime = (startSec === 0) ? 1.4 : startSec;
          this.bgAudio.play().catch(() => { });
        });
      }
    }

    tryNextSource() {
      if (!this.bgAudio) return;
      this.currentSourceIndex++;
      if (this.currentSourceIndex < this.fallbackSources.length) {
        const nextSrc = this.fallbackSources[this.currentSourceIndex];
        console.log("Đổi sang nguồn nhạc dự phòng:", nextSrc);
        this.bgAudio.src = nextSrc;
        this.bgAudio.load();
        if (this.isPlaying) {
          this.bgAudio.play().catch(() => { });
        }
      }
    }

    init() {
      this.synth.init();
      if (this.bgAudio && this.bgAudio.readyState === 0) {
        this.bgAudio.load();
      }
    }

    startMusic() {
      // Đảm bảo nút giao diện phát sáng
      if (btnMusic) btnMusic.classList.add('playing');

      if (!this.bgAudio) {
        this.synth.startMusic();
        return;
      }

      // Nếu bài hát đang thực sự chạy thì giữ nguyên
      if (!this.bgAudio.paused && this.bgAudio.currentTime > 0) {
        this.isPlaying = true;
        return;
      }

      // Xử lý vị trí bắt đầu bài hát:
      // File mp3 có 1.4 giây im lặng đầu tiên. Nếu audioStartTime = 0 thì bắt đầu tại 1.4s để cất tiếng đàn hát LIỀN NGAY LẬP TỨC!
      const startSec = (typeof CONFIG.audioStartTime === 'number') ? CONFIG.audioStartTime : 0;
      const actualStart = (startSec === 0) ? 1.4 : startSec;

      if (!this.hasSetStartTime) {
        try {
          this.bgAudio.currentTime = actualStart;
          this.hasSetStartTime = true;
        } catch (e) {
          this.bgAudio.addEventListener('loadedmetadata', () => {
            try { this.bgAudio.currentTime = actualStart; } catch (err) { }
          }, { once: true });
        }
      }

      const targetVol = CONFIG.audioVolume || 0.85;
      this.bgAudio.volume = targetVol;

      // Gọi play() trực tiếp và đồng bộ trong chuỗi tương tác người dùng
      const playPromise = this.bgAudio.play();

      if (playPromise !== undefined) {
        playPromise.then(() => {
          this.isPlaying = true;
        }).catch(err => {
          console.warn("Trình duyệt cần tương tác để phát nhạc hoặc lỗi nguồn:", err);
          this.tryNextSource();
        });
      }
    }

    stopMusic() {
      this.isPlaying = false;
      if (btnMusic) btnMusic.classList.remove('playing');
      if (this.fadeInterval) clearInterval(this.fadeInterval);
      if (this.bgAudio) {
        this.bgAudio.pause();
      }
      this.synth.stopMusic();
    }

    toggle() {
      if (this.bgAudio && !this.bgAudio.paused) {
        this.stopMusic();
      } else {
        this.startMusic();
      }
    }

    playChime(noteIndex = null) {
      try {
        this.synth.playChime(noteIndex);
      } catch (e) { }
    }
  }

  const audioSynth = new SongAudioController();

  // --- TULIP BOTANICAL ENGINE ---
  class Tulip {
    constructor(x, y, options = {}) {
      this.x = x;
      this.baseY = y;
      this.layer = options.layer || 1; // 0: background, 1: mid, 2: foreground

      const layerScale = this.layer === 0 ? 0.68 : (this.layer === 1 ? 0.92 : 1.18);
      this.scale = (options.scale || (0.8 + Math.random() * 0.4)) * layerScale;

      this.stemHeight = (options.stemHeight || (180 + Math.random() * 120)) * this.scale;
      this.growth = options.instant ? 1 : 0;
      this.targetGrowth = 1;
      this.growSpeed = 0.018 + Math.random() * 0.025;

      const palette = PALETTES[options.palette || currentPaletteKey];
      const grads = palette.flowerGradients;
      this.colorPair = grads[Math.floor(Math.random() * grads.length)];
      this.glowColor = palette.glow;

      this.swayPhase = Math.random() * Math.PI * 2;
      this.swayAmp = (10 + Math.random() * 14) * (this.layer === 2 ? 1.2 : 0.8);
      this.leanAngle = (Math.random() - 0.5) * 0.22;

      this.hasLeaves = Math.random() > 0.15;
      this.leafSize = 45 + Math.random() * 35;

      this.headWidth = 32 * this.scale;
      this.headHeight = 48 * this.scale;
      this.bloomOpen = 0.85 + Math.random() * 0.3;
      this.shimmerPhase = Math.random() * Math.PI * 2;
    }

    update(time) {
      if (this.growth < this.targetGrowth) {
        this.growth += this.growSpeed;
        if (this.growth > 1) this.growth = 1;
      }
      this.shimmerPhase += 0.04;
    }

    draw(ctx, time) {
      if (this.growth <= 0.02) return;

      ctx.save();
      const windSway = Math.sin(time * 1.5 + this.swayPhase) * this.swayAmp;
      const currentHeight = this.stemHeight * this.growth;

      const rootX = this.x;
      const rootY = this.baseY;

      const ctrlX = rootX + windSway * 0.4 + Math.sin(this.leanAngle) * (currentHeight * 0.5);
      const ctrlY = rootY - currentHeight * 0.55;
      const tipX = rootX + windSway + Math.sin(this.leanAngle) * currentHeight;
      const tipY = rootY - currentHeight;

      // 1. Lá cây
      if (this.hasLeaves && this.growth > 0.35) {
        const leafGrowth = Math.min(1, (this.growth - 0.35) / 0.65);
        this.drawLeaves(ctx, rootX, rootY, ctrlX, ctrlY, windSway, leafGrowth);
      }

      // 2. Thân cây uốn lượn
      ctx.beginPath();
      ctx.moveTo(rootX, rootY);
      ctx.quadraticCurveTo(ctrlX, ctrlY, tipX, tipY);

      const stemGrad = ctx.createLinearGradient(rootX, rootY, tipX, tipY);
      if (this.layer === 0) {
        stemGrad.addColorStop(0, '#193322');
        stemGrad.addColorStop(1, '#2d5a3c');
      } else {
        stemGrad.addColorStop(0, '#2d5a37');
        stemGrad.addColorStop(0.5, '#40804e');
        stemGrad.addColorStop(1, '#5bb86e');
      }

      ctx.strokeStyle = stemGrad;
      ctx.lineWidth = Math.max(2, 4.5 * this.scale * (this.layer === 0 ? 0.8 : 1));
      ctx.lineCap = 'round';
      ctx.stroke();

      // 3. Đóa hoa tulip nở
      if (this.growth > 0.25) {
        const headGrowth = Math.min(1, (this.growth - 0.25) / 0.75);
        this.drawBlossom(ctx, tipX, tipY, windSway, headGrowth);
      }

      ctx.restore();
    }

    drawLeaves(ctx, rx, ry, cx, cy, windSway, leafGrowth) {
      const midX = (rx + cx) / 2;
      const midY = (ry + cy) / 2;

      ctx.save();
      // Lá bên trái
      ctx.beginPath();
      ctx.moveTo(midX, midY + 10);
      const lEndNodeX = midX - this.leafSize * 1.3 * leafGrowth + windSway * 0.2;
      const lEndNodeY = midY - this.leafSize * 0.9 * leafGrowth;
      ctx.quadraticCurveTo(midX - this.leafSize * 0.8, midY + 15, lEndNodeX, lEndNodeY);
      ctx.quadraticCurveTo(midX - this.leafSize * 0.3, midY - 20, midX, midY - 15);

      const leafGradL = ctx.createLinearGradient(midX, midY, lEndNodeX, lEndNodeY);
      leafGradL.addColorStop(0, '#285834');
      leafGradL.addColorStop(0.6, '#3e7e4d');
      leafGradL.addColorStop(1, '#65b878');
      ctx.fillStyle = leafGradL;
      ctx.fill();

      // Lá bên phải
      ctx.beginPath();
      ctx.moveTo(midX, midY);
      const rEndNodeX = midX + this.leafSize * 1.2 * leafGrowth + windSway * 0.2;
      const rEndNodeY = midY - this.leafSize * 1.1 * leafGrowth;
      ctx.quadraticCurveTo(midX + this.leafSize * 0.9, midY + 10, rEndNodeX, rEndNodeY);
      ctx.quadraticCurveTo(midX + this.leafSize * 0.4, midY - 25, midX, midY - 20);

      const leafGradR = ctx.createLinearGradient(midX, midY, rEndNodeX, rEndNodeY);
      leafGradR.addColorStop(0, '#234d2e');
      leafGradR.addColorStop(0.6, '#488c58');
      leafGradR.addColorStop(1, '#78ce8c');
      ctx.fillStyle = leafGradR;
      ctx.fill();

      ctx.restore();
    }

    drawBlossom(ctx, x, y, windSway, headGrowth) {
      ctx.save();
      ctx.translate(x, y);

      const tilt = (windSway * 0.02) + this.leanAngle * 0.5;
      ctx.rotate(tilt);

      const hw = this.headWidth * headGrowth;
      const hh = this.headHeight * headGrowth;

      ctx.shadowColor = this.glowColor;
      ctx.shadowBlur = (15 + Math.sin(this.shimmerPhase) * 6) * this.scale;

      // Cánh hoa phía sau
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.bezierCurveTo(-hw * 0.7, -hh * 0.3, -hw * 0.6, -hh * 0.9, 0, -hh * 0.95);
      ctx.bezierCurveTo(hw * 0.6, -hh * 0.9, hw * 0.7, -hh * 0.3, 0, 0);
      const backGrad = ctx.createLinearGradient(0, 0, 0, -hh);
      backGrad.addColorStop(0, this.colorPair[2]);
      backGrad.addColorStop(0.7, this.colorPair[1]);
      backGrad.addColorStop(1, this.colorPair[0]);
      ctx.fillStyle = backGrad;
      ctx.fill();

      // Nhụy vàng phát sáng
      ctx.beginPath();
      ctx.arc(0, -hh * 0.55, 3.5 * this.scale, 0, Math.PI * 2);
      ctx.fillStyle = '#ffeb3b';
      ctx.shadowColor = '#fff59d';
      ctx.shadowBlur = 10;
      ctx.fill();

      // Cánh trước bên trái
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.bezierCurveTo(-hw * 1.05 * this.bloomOpen, -hh * 0.35, -hw * 0.85, -hh * 0.92, -hw * 0.2, -hh * 0.98);
      ctx.bezierCurveTo(0, -hh * 0.7, 0, -hh * 0.3, 0, 0);

      const leftGrad = ctx.createLinearGradient(-hw, 0, 0, -hh);
      leftGrad.addColorStop(0, this.colorPair[2]);
      leftGrad.addColorStop(0.4, this.colorPair[1]);
      leftGrad.addColorStop(1, this.colorPair[0]);
      ctx.fillStyle = leftGrad;
      ctx.fill();

      // Cánh trước bên phải
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.bezierCurveTo(hw * 1.05 * this.bloomOpen, -hh * 0.35, hw * 0.85, -hh * 0.92, hw * 0.2, -hh * 0.98);
      ctx.bezierCurveTo(0, -hh * 0.7, 0, -hh * 0.3, 0, 0);

      const rightGrad = ctx.createLinearGradient(hw, 0, 0, -hh);
      rightGrad.addColorStop(0, this.colorPair[2]);
      rightGrad.addColorStop(0.4, this.colorPair[1]);
      rightGrad.addColorStop(1, this.colorPair[0]);
      ctx.fillStyle = rightGrad;
      ctx.fill();

      // Cánh trung tâm ôm trọn đóa tulip
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.bezierCurveTo(-hw * 0.55, -hh * 0.35, -hw * 0.45, -hh * 1.02, 0, -hh * 1.05);
      ctx.bezierCurveTo(hw * 0.45, -hh * 1.02, hw * 0.55, -hh * 0.35, 0, 0);

      const centerGrad = ctx.createLinearGradient(0, 0, 0, -hh * 1.1);
      centerGrad.addColorStop(0, this.colorPair[1]);
      centerGrad.addColorStop(0.5, this.colorPair[0]);
      centerGrad.addColorStop(1, '#ffffff');
      ctx.fillStyle = centerGrad;
      ctx.fill();

      // Gân hoa sáng mờ
      ctx.beginPath();
      ctx.moveTo(0, -hh * 0.1);
      ctx.quadraticCurveTo(0, -hh * 0.6, 0, -hh * 0.95);
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.45)';
      ctx.lineWidth = 1.2 * this.scale;
      ctx.stroke();

      // Bụi tiên lấp lánh đầu cánh hoa
      if (Math.sin(this.shimmerPhase) > 0.7) {
        ctx.fillStyle = '#ffffff';
        ctx.beginPath();
        ctx.arc(
          (Math.random() - 0.5) * hw,
          -hh * (0.8 + Math.random() * 0.3),
          1.5 * this.scale,
          0,
          Math.PI * 2
        );
        ctx.fill();
      }

      ctx.restore();
    }
  }

  // --- ĐOM ĐÓM PHÁT SÁNG ---
  class Firefly {
    constructor() {
      this.reset();
    }

    reset() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.7;
      this.vy = (Math.random() - 0.5) * 0.5;
      this.radius = 1.2 + Math.random() * 2.2;
      this.alpha = Math.random();
      this.alphaSpeed = 0.015 + Math.random() * 0.025;
      this.color = Math.random() > 0.4 ? '#ffbe53' : '#ff75a0';
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;
      this.alpha += this.alphaSpeed;

      if (this.alpha > 1 || this.alpha < 0.1) {
        this.alphaSpeed = -this.alphaSpeed;
      }

      if (this.x < 0 || this.x > width || this.y < 0 || this.y > height) {
        this.reset();
      }
    }

    draw(ctx) {
      ctx.save();
      ctx.globalAlpha = Math.max(0, Math.min(1, this.alpha));
      ctx.shadowColor = this.color;
      ctx.shadowBlur = 12;
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }
  }

  // --- MƯA CÁNH HOA TULIP 3D ---
  function createPetalElement() {
    if (!isRainActive) return;
    const petal = document.createElement('div');
    petal.className = 'falling-petal';

    const size = 16 + Math.random() * 18;
    petal.style.width = `${size}px`;
    petal.style.height = `${size * 1.3}px`;
    petal.style.left = `${Math.random() * 100}vw`;

    const pInfo = PALETTES[currentPaletteKey];
    const grad = pInfo.flowerGradients[Math.floor(Math.random() * pInfo.flowerGradients.length)];
    petal.style.background = `linear-gradient(135deg, ${grad[0]}, ${grad[1]})`;
    petal.style.boxShadow = `0 4px 15px ${pInfo.glow}`;

    const duration = 6 + Math.random() * 6;
    const delay = Math.random() * 2;
    const xMovement = (Math.random() - 0.2) * 160;

    petal.animate(
      [
        { transform: `translate(0, 0) rotate(0deg) rotateY(0deg)`, opacity: 0 },
        { opacity: 0.95, offset: 0.15 },
        { transform: `translate(${xMovement}px, 105vh) rotate(${240 + Math.random() * 360}deg) rotateY(720deg)`, opacity: 0 }
      ],
      {
        duration: duration * 1000,
        delay: delay * 1000,
        easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
      }
    ).onfinish = () => petal.remove();

    petalsContainer.appendChild(petal);
  }

  let petalRainInterval = null;
  function startPetalRain() {
    if (petalRainInterval) clearInterval(petalRainInterval);
    petalRainInterval = setInterval(() => {
      if (isRainActive && document.visibilityState === 'visible') {
        createPetalElement();
      }
    }, 450);
  }

  // --- CON TRỎ BỤI TIÊN PHÁT SÁNG ---
  const cursorTrail = [];
  window.addEventListener('mousemove', (e) => {
    addSparkle(e.clientX, e.clientY);
  });

  window.addEventListener('touchmove', (e) => {
    if (e.touches && e.touches[0]) {
      addSparkle(e.touches[0].clientX, e.touches[0].clientY);
    }
  }, { passive: true });

  function addSparkle(x, y) {
    for (let i = 0; i < 2; i++) {
      cursorTrail.push({
        x: x + (Math.random() - 0.5) * 12,
        y: y + (Math.random() - 0.5) * 12,
        vx: (Math.random() - 0.5) * 1.5,
        vy: (Math.random() - 0.5) * 1.5 - 0.8,
        life: 1,
        decay: 0.03 + Math.random() * 0.02,
        size: 2 + Math.random() * 3,
        color: Math.random() > 0.4 ? '#ffd166' : '#ff75a0'
      });
    }
  }

  function drawCursorTrail() {
    cursorCtx.clearRect(0, 0, width, height);
    for (let i = cursorTrail.length - 1; i >= 0; i--) {
      const p = cursorTrail[i];
      p.x += p.vx;
      p.y += p.vy;
      p.life -= p.decay;

      if (p.life <= 0) {
        cursorTrail.splice(i, 1);
        continue;
      }

      cursorCtx.save();
      cursorCtx.globalAlpha = p.life;
      cursorCtx.shadowColor = p.color;
      cursorCtx.shadowBlur = 8;
      cursorCtx.fillStyle = p.color;
      cursorCtx.beginPath();
      cursorCtx.arc(p.x, p.y, p.size * p.life, 0, Math.PI * 2);
      cursorCtx.fill();
      cursorCtx.restore();
    }
  }

  // --- KHỞI TẠO KHU VƯỜN DỰA THEO CONFIG ---
  function initScene() {
    tulips = [];
    fireflies = [];

    const fireflyCount = Math.min(45, Math.floor(width / 30));
    for (let i = 0; i < fireflyCount; i++) {
      fireflies.push(new Firefly());
    }

    if (isGardenMode) {
      initGardenMode();
    } else {
      initBouquetMode();
    }
  }

  function initGardenMode() {
    tulips = [];
    // Số lượng hoa lấy từ CONFIG hoặc tính theo độ rộng màn hình
    const targetCount = CONFIG.flowerCount || 50;
    const baseCount = Math.max(targetCount, Math.floor(width / 32));

    // 1. Tầng hậu cảnh
    const bgCount = Math.floor(baseCount * 0.32);
    for (let i = 0; i < bgCount; i++) {
      const x = (width / bgCount) * i + (Math.random() - 0.5) * 40;
      const y = height * 0.87 + Math.sin(i * 0.6) * 20 + (Math.random() - 0.5) * 30;
      tulips.push(new Tulip(x, y, {
        layer: 0,
        stemHeight: 140 + Math.random() * 60,
        instant: false
      }));
    }

    // 2. Tầng trung cảnh
    const midCount = Math.floor(baseCount * 0.38);
    for (let i = 0; i < midCount; i++) {
      const x = (width / midCount) * i + (Math.random() - 0.5) * 35;
      const y = height * 0.93 + Math.sin(i * 0.5 + 1) * 25 + (Math.random() - 0.5) * 25;
      tulips.push(new Tulip(x, y, {
        layer: 1,
        stemHeight: 180 + Math.random() * 90,
        instant: false
      }));
    }

    // 3. Tầng tiền cảnh (hoa lớn, rực rỡ nhất)
    const fgCount = Math.floor(baseCount * 0.30);
    for (let i = 0; i < fgCount; i++) {
      const x = (width / fgCount) * i + (Math.random() - 0.5) * 50;
      const y = height * 0.99 + Math.sin(i * 0.4 + 2) * 20 + (Math.random() - 0.5) * 15;
      tulips.push(new Tulip(x, y, {
        layer: 2,
        stemHeight: 220 + Math.random() * 110,
        instant: false
      }));
    }

    tulips.sort((a, b) => a.layer - b.layer || a.baseY - b.baseY);
  }

  function initBouquetMode() {
    tulips = [];
    const centerX = width * 0.5;
    const centerY = height * 0.82;
    const bouquetSize = Math.min(36, Math.max(24, Math.floor((CONFIG.flowerCount || 40) * 0.75)));

    for (let i = 0; i < bouquetSize; i++) {
      const spread = (Math.random() - 0.5) * 280;
      const x = centerX + spread * 0.65;
      const y = centerY + Math.abs(spread) * 0.16;
      const lean = (spread / 320) * 0.48;

      const tulip = new Tulip(x, y, {
        layer: Math.abs(spread) > 100 ? 0 : 2,
        stemHeight: 220 + (1 - Math.abs(spread) / 220) * 130 + Math.random() * 40,
        scale: 1.08 + Math.random() * 0.25,
        instant: false
      });
      tulip.leanAngle = lean;
      tulip.swayAmp = 8;
      tulips.push(tulip);
    }

    tulips.sort((a, b) => a.layer - b.layer || a.baseY - b.baseY);
  }

  // Trồng hoa tương tác khi chạm vào màn hình
  function plantTulipAt(x, y) {
    const layer = y > height * 0.85 ? 2 : (y > height * 0.7 ? 1 : 0);
    const newTulip = new Tulip(x, y, {
      layer: layer,
      stemHeight: 160 + Math.random() * 120,
      scale: 0.9 + Math.random() * 0.35,
      instant: false
    });
    newTulip.growSpeed = 0.035;
    tulips.push(newTulip);

    audioSynth.playChime();

    // Bụi pháo hoa nảy nở tại điểm chạm
    for (let i = 0; i < 20; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 2 + Math.random() * 4;
      cursorTrail.push({
        x: x,
        y: y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 1.5,
        life: 1,
        decay: 0.025 + Math.random() * 0.02,
        size: 3 + Math.random() * 3,
        color: Math.random() > 0.5 ? '#ffd166' : '#ff4d8d'
      });
    }

    tulips.sort((a, b) => a.layer - b.layer || a.baseY - b.baseY);
  }

  tulipCanvas.addEventListener('click', (e) => {
    plantTulipAt(e.clientX, e.clientY);
    if (clickHint) {
      clickHint.style.opacity = '0';
      setTimeout(() => clickHint.style.display = 'none', 500);
    }
  });

  // --- VÒNG LẶP RENDER ---
  function render() {
    windTime += 0.016;

    tulipCtx.clearRect(0, 0, width, height);

    // Màn sương đêm huyền ảo trên mặt đất
    const groundGrad = tulipCtx.createLinearGradient(0, height * 0.75, 0, height);
    groundGrad.addColorStop(0, 'rgba(10, 5, 20, 0)');
    groundGrad.addColorStop(0.5, 'rgba(20, 10, 35, 0.45)');
    groundGrad.addColorStop(1, 'rgba(5, 2, 10, 0.85)');
    tulipCtx.fillStyle = groundGrad;
    tulipCtx.fillRect(0, height * 0.7, width, height * 0.3);

    // Đom đóm
    for (let f of fireflies) {
      f.update();
      f.draw(tulipCtx);
    }

    // Hoa Tulip
    for (let t of tulips) {
      t.update(windTime);
      t.draw(tulipCtx, windTime);
    }

    // Vệt sáng chuột
    drawCursorTrail();

    requestAnimationFrame(render);
  }

  // --- SỰ KIỆN GIAO DIỆN ---
  if (btnModeGarden) {
    btnModeGarden.addEventListener('click', () => {
      if (isGardenMode) return;
      isGardenMode = true;
      btnModeGarden.classList.add('active');
      if (btnModeBouquet) btnModeBouquet.classList.remove('active');
      initScene();
      showToast('Đã chuyển sang Vườn Tulip ngút ngàn 🌾');
    });
  }

  if (btnModeBouquet) {
    btnModeBouquet.addEventListener('click', () => {
      if (!isGardenMode) return;
      isGardenMode = false;
      btnModeBouquet.classList.add('active');
      if (btnModeGarden) btnModeGarden.classList.remove('active');
      initScene();
      showToast('Đã chuyển sang Bó Hoa Tulip Dạ Quang 💐');
    });
  }

  if (btnPalette && paletteDropdown) {
    btnPalette.addEventListener('click', (e) => {
      e.stopPropagation();
      paletteDropdown.classList.toggle('show');
    });

    document.addEventListener('click', () => {
      paletteDropdown.classList.remove('show');
    });
  }

  document.querySelectorAll('.palette-opt').forEach((btn) => {
    btn.addEventListener('click', () => {
      const pKey = btn.getAttribute('data-palette');
      if (PALETTES[pKey]) {
        currentPaletteKey = pKey;
        if (palettePreviewDot) {
          palettePreviewDot.style.background = PALETTES[pKey].preview;
          palettePreviewDot.style.boxShadow = `0 0 10px ${PALETTES[pKey].preview}`;
        }
        tulips.forEach((t) => {
          const grads = PALETTES[pKey].flowerGradients;
          t.colorPair = grads[Math.floor(Math.random() * grads.length)];
          t.glowColor = PALETTES[pKey].glow;
        });
        showToast(`Đổi sang gam màu: ${PALETTES[pKey].name} 🎨`);
      }
    });
  });

  if (btnMusic) {
    btnMusic.addEventListener('click', () => {
      audioSynth.toggle();
    });
  }

  if (btnToggleRain) {
    btnToggleRain.addEventListener('click', () => {
      isRainActive = !isRainActive;
      btnToggleRain.style.opacity = isRainActive ? '1' : '0.5';
      showToast(isRainActive ? 'Đã bật mưa hoa tulip 🌸' : 'Đã tắt mưa hoa tulip');
    });
  }

  if (btnClearFlowers) {
    btnClearFlowers.addEventListener('click', () => {
      initScene();
      audioSynth.playChime(3);
      showToast('Vườn hoa tulip đã được làm mới tinh khôi 🔄');
    });
  }

  if (btnCapture) {
    btnCapture.addEventListener('click', () => {
      const tempCanvas = document.createElement('canvas');
      tempCanvas.width = width;
      tempCanvas.height = height;
      const tempCtx = tempCanvas.getContext('2d');

      const bgGrad = tempCtx.createRadialGradient(width / 2, height * 0.3, 0, width / 2, height * 0.5, width);
      bgGrad.addColorStop(0, '#200f33');
      bgGrad.addColorStop(1, '#05020a');
      tempCtx.fillStyle = bgGrad;
      tempCtx.fillRect(0, 0, width, height);

      tempCtx.drawImage(tulipCanvas, 0, 0);

      tempCtx.save();
      tempCtx.fillStyle = 'rgba(255, 255, 255, 0.95)';
      tempCtx.font = 'bold 36px "Playfair Display", serif';
      tempCtx.textAlign = 'center';
      tempCtx.shadowColor = 'rgba(255, 77, 141, 0.8)';
      tempCtx.shadowBlur = 20;
      tempCtx.fillText('Chúc Mừng Ngày 20/10 🌷', width / 2, 70);

      tempCtx.font = '22px "Dancing Script", cursive';
      tempCtx.fillStyle = '#ffb3d9';
      tempCtx.fillText(`Gửi tặng: ${CONFIG.recipientName}`, width / 2, 110);
      tempCtx.restore();

      const link = document.createElement('a');
      link.download = `Thiep-20-10-Vuon-Tulip-${Date.now()}.png`;
      link.href = tempCanvas.toDataURL('image/png');
      link.click();
      showToast('Đã lưu bức ảnh vườn tulip tuyệt đẹp về máy! 📸💖');
    });
  }

  // --- HIỆU ỨNG MỞ PHONG BÌ THƯ 20/10 HUY HOÀNG (MAGICAL 3D ENVELOPE OPENING FX) ---
  function triggerLetterOpeningFx() {
    const seal = document.getElementById('envelopeSeal');
    const container = document.getElementById('letterParticles');
    if (!container || !letterModal) return;

    container.innerHTML = '';

    // Lấy vị trí trung tâm dấu sáp
    const rect = seal ? seal.getBoundingClientRect() : null;
    const modalBox = document.querySelector('.letter-modal-box');
    const boxRect = modalBox ? modalBox.getBoundingClientRect() : letterModal.getBoundingClientRect();

    const originX = rect ? (rect.left + rect.width / 2 - boxRect.left) : (boxRect.width / 2);
    const originY = rect ? (rect.top + rect.height / 2 - boxRect.top) : (boxRect.height * 0.4);

    // 1. Pháo hoa bụi sao vàng & trái tim bùng nổ từ tâm dấu sáp
    const icons = ['✨', '💖', '🌸', '🌷', '✦', '⭐', '💕', '🌹'];
    const count = 38;

    for (let i = 0; i < count; i++) {
      const p = document.createElement('div');
      p.className = 'letter-fx-particle';
      p.textContent = icons[Math.floor(Math.random() * icons.length)];

      const angle = (Math.PI * 2 * i) / count + (Math.random() - 0.5) * 0.35;
      const distance = 90 + Math.random() * 180;
      const targetX = Math.cos(angle) * distance;
      const targetY = Math.sin(angle) * distance - (45 + Math.random() * 65); // Bay chếch lên cao
      const rot = (Math.random() - 0.5) * 720;
      const scale = 0.7 + Math.random() * 0.8;
      const duration = 1.2 + Math.random() * 0.7;

      p.style.left = `${originX}px`;
      p.style.top = `${originY}px`;
      p.style.setProperty('--tx', `${targetX}px`);
      p.style.setProperty('--ty', `${targetY}px`);
      p.style.setProperty('--rot', `${rot}deg`);
      p.style.setProperty('--scale', scale);
      p.style.animation = `letterParticleFly ${duration}s cubic-bezier(0.2, 0.8, 0.3, 1) forwards`;

      container.appendChild(p);
    }

    // 2. Mưa cánh hoa lấp lánh rơi chầm chậm xung quanh bức thư
    for (let j = 0; j < 18; j++) {
      const petal = document.createElement('div');
      petal.className = 'letter-ambient-petal';
      petal.textContent = Math.random() > 0.5 ? '🌸' : (Math.random() > 0.5 ? '🌷' : '💖');
      petal.style.left = `${Math.random() * 100}%`;
      petal.style.top = `-25px`;
      petal.style.animationDelay = `${0.3 + Math.random() * 1.6}s`;
      petal.style.animationDuration = `${3.8 + Math.random() * 2.2}s`;
      container.appendChild(petal);
    }

    // Dọn dẹp hạt sau khi kết thúc animation
    setTimeout(() => {
      if (container) container.innerHTML = '';
    }, 6000);
  }

  function openLetterModal(autoOpenEnvelope = false) {
    if (!letterModal) return;
    letterModal.classList.add('active');

    // Đảm bảo bài hát chắc chắn ngân vang
    if (CONFIG.autoPlayMusicOnOpen && !audioSynth.isPlaying) {
      audioSynth.startMusic();
    }

    const seal = document.getElementById('envelopeSeal');
    if (envelopeWrapper) envelopeWrapper.classList.remove('open');
    if (seal) seal.classList.remove('breaking');

    audioSynth.playChime(2);

    // Chuỗi hiệu ứng mở phong bì điện ảnh (Cinematic Staged Opening)
    if (autoOpenEnvelope && envelopeWrapper) {
      // Giai đoạn 1: Dấu sáp 20/10 phát sáng rực rỡ và nứt tem
      setTimeout(() => {
        if (seal) seal.classList.add('breaking');
        audioSynth.playChime(3);
      }, 420);

      // Giai đoạn 2: Nổ tung bụi sao, mở nắp phong bì và lá thư vươn lên
      setTimeout(() => {
        envelopeWrapper.classList.add('open');
        triggerLetterOpeningFx();
        audioSynth.playChime(5);
      }, 750);
    }
  }

  function closeLetterModal() {
    if (!letterModal) return;
    letterModal.classList.remove('active');
  }

  if (btnOpenLetter) {
    btnOpenLetter.addEventListener('click', () => {
      openLetterModal(true);
    });
  }
  if (btnCloseLetter) btnCloseLetter.addEventListener('click', closeLetterModal);
  if (btnCloseLetterBottom) {
    btnCloseLetterBottom.addEventListener('click', closeLetterModal);
  }

  if (letterModal) {
    letterModal.addEventListener('click', (e) => {
      if (e.target === letterModal) closeLetterModal();
    });
  }

  // Nhấn trực tiếp vào dấu sáp 20/10 để bóc tem thư
  if (envelopeSeal) {
    envelopeSeal.addEventListener('click', () => {
      envelopeSeal.classList.add('breaking');
      audioSynth.playChime(3);
      setTimeout(() => {
        if (envelopeWrapper) envelopeWrapper.classList.add('open');
        triggerLetterOpeningFx();
        audioSynth.playChime(5);
      }, 350);
    });
  }

  const envelopeFlap = document.getElementById('envelopeFlap');
  if (envelopeFlap && envelopeWrapper) {
    envelopeFlap.addEventListener('click', () => {
      if (!envelopeWrapper.classList.contains('open')) {
        const seal = document.getElementById('envelopeSeal');
        if (seal) seal.classList.add('breaking');
        setTimeout(() => {
          envelopeWrapper.classList.add('open');
          triggerLetterOpeningFx();
          audioSynth.playChime(5);
        }, 300);
      }
    });
  }

  // Toast Helper
  let toastTimer = null;
  function showToast(msg) {
    toastMessage.textContent = msg;
    toastNotification.classList.add('show');
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toastNotification.classList.remove('show');
    }, 3200);
  }

  // --- 3D CELESTIAL SKY, AURORA & GALAXY ENGINE (BẦU TRỜI 3D VŨ TRỤ SIÊU CẤP) ---
  class Sky3DEngine {
    constructor() {
      this.canvas = document.getElementById('sky3DCanvas');
      if (!this.canvas) return;
      this.ctx = this.canvas.getContext('2d');
      this.stars = [];
      this.stardust = [];
      this.shootingStars = [];
      this.shockwaves = [];
      this.width = (this.canvas.width = window.innerWidth);
      this.height = (this.canvas.height = window.innerHeight);
      this.fov = 360;
      this.speed = 0.55;
      this.targetSpeed = 0.55;
      this.mouseX = 0;
      this.mouseY = 0;
      this.targetMouseX = 0;
      this.targetMouseY = 0;
      this.running = true;
      this.lastShootingStarTime = Date.now();

      this.initStars();
      this.initStardust();
      this.initEvents();
      this.animate = this.animate.bind(this);
      requestAnimationFrame(this.animate);
    }

    initStars() {
      const count = Math.min(1000, Math.floor((this.width * this.height) / 1100));
      this.stars = [];
      const colors = ['#ffffff', '#ffffff', '#e0f7ff', '#ffebf3', '#ffe4b5', '#d4e5ff'];
      for (let i = 0; i < count; i++) {
        this.stars.push({
          x: (Math.random() - 0.5) * this.width * 2.8,
          y: (Math.random() - 0.5) * this.height * 2.8,
          z: Math.random() * 1800 + 1,
          baseSize: Math.random() * 2.2 + 0.6,
          color: colors[Math.floor(Math.random() * colors.length)],
          twinkleSpeed: Math.random() * 0.04 + 0.015,
          twinklePhase: Math.random() * Math.PI * 2,
          prevX: 0,
          prevY: 0
        });
      }
    }

    initStardust() {
      this.stardust = [];
      for (let i = 0; i < 42; i++) {
        this.stardust.push({
          x: Math.random() * this.width,
          y: Math.random() * this.height,
          r: Math.random() * 3.5 + 1.2,
          vx: (Math.random() - 0.5) * 0.4,
          vy: -Math.random() * 0.35 - 0.1,
          alpha: Math.random() * 0.6 + 0.2,
          pulseSpeed: Math.random() * 0.03 + 0.01,
          phase: Math.random() * Math.PI * 2,
          color: Math.random() > 0.4 ? '#ffd166' : '#ff75a0'
        });
      }
    }

    initEvents() {
      window.addEventListener('resize', () => {
        if (!this.canvas) return;
        this.width = this.canvas.width = window.innerWidth;
        this.height = this.canvas.height = window.innerHeight;
        this.initStars();
        this.initStardust();
      });

      window.addEventListener('mousemove', (e) => {
        this.targetMouseX = (e.clientX / this.width - 0.5) * 2;
        this.targetMouseY = (e.clientY / this.height - 0.5) * 2;
      });

      window.addEventListener('touchmove', (e) => {
        if (e.touches && e.touches[0]) {
          this.targetMouseX = (e.touches[0].clientX / this.width - 0.5) * 2;
          this.targetMouseY = (e.touches[0].clientY / this.height - 0.5) * 2;
        }
      }, { passive: true });
    }

    setWarp(warpActive) {
      this.targetSpeed = warpActive ? 12.0 : 0.55;
    }

    triggerShockwave(x, y) {
      this.shockwaves.push({
        x: x || this.width / 2,
        y: y || this.height * 0.85,
        radius: 10,
        maxRadius: Math.max(this.width, this.height) * 0.75,
        speed: 18,
        life: 1.0
      });
    }

    createShootingStar() {
      const startX = Math.random() * this.width * 0.9 + this.width * 0.05;
      const startY = Math.random() * this.height * 0.45;
      const angle = Math.PI / 4 + (Math.random() - 0.5) * 0.35;
      const speed = Math.random() * 14 + 18;
      const length = Math.random() * 95 + 75;
      this.shootingStars.push({
        x: startX,
        y: startY,
        dx: Math.cos(angle) * speed,
        dy: Math.sin(angle) * speed,
        length: length,
        life: 1.0,
        decay: Math.random() * 0.02 + 0.015,
        color: Math.random() > 0.4 ? '#ffffff' : '#ffd166'
      });
    }

    drawMoon(ctx) {
      const mx = this.width * 0.84 + this.mouseX * 12;
      const my = this.height * 0.17 + this.mouseY * 12;
      const r = Math.min(34, this.width * 0.06);

      ctx.save();
      // Quầng sáng trăng đa tầng
      const moonGlow = ctx.createRadialGradient(mx, my, r * 0.3, mx, my, r * 3.6);
      moonGlow.addColorStop(0, 'rgba(255, 235, 160, 0.42)');
      moonGlow.addColorStop(0.35, 'rgba(255, 185, 215, 0.16)');
      moonGlow.addColorStop(0.7, 'rgba(92, 225, 230, 0.06)');
      moonGlow.addColorStop(1, 'transparent');
      ctx.fillStyle = moonGlow;
      ctx.beginPath();
      ctx.arc(mx, my, r * 3.6, 0, Math.PI * 2);
      ctx.fill();

      // Vầng trăng khuyết dát vàng dịu êm
      ctx.fillStyle = '#fffdf0';
      ctx.shadowColor = '#ffd166';
      ctx.shadowBlur = 18;
      ctx.beginPath();
      ctx.arc(mx, my, r, 0, Math.PI * 2);
      ctx.fill();

      // Cắt mặt trăng khuyết bằng hình cầu tối
      ctx.shadowBlur = 0;
      ctx.globalCompositeOperation = 'destination-out';
      ctx.beginPath();
      ctx.arc(mx - r * 0.42, my - r * 0.26, r * 0.9, 0, Math.PI * 2);
      ctx.fill();
      ctx.globalCompositeOperation = 'source-over';

      // Ánh sáng bạc viền trăng
      const rim = ctx.createRadialGradient(mx + r * 0.3, my + r * 0.2, r * 0.2, mx, my, r);
      rim.addColorStop(0, 'rgba(255, 255, 255, 0.95)');
      rim.addColorStop(0.6, 'rgba(255, 220, 140, 0.4)');
      rim.addColorStop(1, 'transparent');
      ctx.fillStyle = rim;
      ctx.beginPath();
      ctx.arc(mx, my, r, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }

    drawAurora(ctx, time) {
      ctx.save();
      ctx.globalCompositeOperation = 'screen';

      const ribbons = [
        { baseY: this.height * 0.22, color1: 'rgba(0, 242, 254, 0.13)', color2: 'rgba(168, 85, 247, 0.11)', freq: 0.0022, speed: 0.6 },
        { baseY: this.height * 0.34, color1: 'rgba(168, 85, 247, 0.11)', color2: 'rgba(255, 77, 141, 0.13)', freq: 0.003, speed: 0.45 }
      ];

      for (let r of ribbons) {
        const grad = ctx.createLinearGradient(0, r.baseY - 90, 0, r.baseY + 90);
        grad.addColorStop(0, 'transparent');
        grad.addColorStop(0.5, r.color1);
        grad.addColorStop(0.85, r.color2);
        grad.addColorStop(1, 'transparent');
        ctx.fillStyle = grad;

        ctx.beginPath();
        ctx.moveTo(0, this.height * 0.55);
        for (let x = 0; x <= this.width; x += 16) {
          const y = r.baseY + Math.sin(x * r.freq + time * r.speed) * 45 + Math.cos(x * 0.0035 + time * 0.25) * 25 + this.mouseY * 20;
          ctx.lineTo(x, y);
        }
        ctx.lineTo(this.width, 0);
        ctx.lineTo(0, 0);
        ctx.closePath();
        ctx.fill();
      }
      ctx.restore();
    }

    drawStardust(ctx) {
      for (let p of this.stardust) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.y < -10) { p.y = this.height + 10; p.x = Math.random() * this.width; }
        if (p.x < -10) p.x = this.width + 10;
        if (p.x > this.width + 10) p.x = -10;

        const pulse = Math.sin(Date.now() * p.pulseSpeed + p.phase) * 0.3 + 0.7;
        const alpha = p.alpha * pulse;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * pulse, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = alpha;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 10;
        ctx.fill();
      }
      ctx.shadowBlur = 0;
      ctx.globalAlpha = 1;
    }

    animate() {
      if (!this.running) return;

      this.mouseX += (this.targetMouseX - this.mouseX) * 0.05;
      this.mouseY += (this.targetMouseY - this.mouseY) * 0.05;
      this.speed += (this.targetSpeed - this.speed) * 0.08;

      const ctx = this.ctx;
      const cx = this.width / 2;
      const cy = this.height / 2;
      const time = Date.now() * 0.0008;

      if (this.speed > 3) {
        ctx.fillStyle = 'rgba(3, 1, 10, 0.35)';
      } else {
        ctx.fillStyle = '#03010a';
      }
      ctx.fillRect(0, 0, this.width, this.height);

      // 1. Tinh vân xoay đa tầng (Multi-layer 3D Nebula)
      const nebTime = Date.now() * 0.0003;
      const neb1 = ctx.createRadialGradient(
        cx + Math.cos(nebTime) * 120 + this.mouseX * 30,
        cy * 0.7 + Math.sin(nebTime) * 80 + this.mouseY * 30,
        10,
        cx,
        cy * 0.7,
        this.width * 0.65
      );
      neb1.addColorStop(0, 'rgba(121, 40, 202, 0.22)');
      neb1.addColorStop(0.4, 'rgba(0, 242, 254, 0.08)');
      neb1.addColorStop(0.8, 'rgba(255, 0, 128, 0.04)');
      neb1.addColorStop(1, 'transparent');
      ctx.fillStyle = neb1;
      ctx.fillRect(0, 0, this.width, this.height);

      const neb2 = ctx.createRadialGradient(
        cx * 0.6 - this.mouseX * 40,
        cy * 1.2 - this.mouseY * 40,
        20,
        cx * 0.6,
        cy * 1.2,
        this.width * 0.5
      );
      neb2.addColorStop(0, 'rgba(255, 77, 141, 0.16)');
      neb2.addColorStop(0.5, 'rgba(255, 209, 102, 0.06)');
      neb2.addColorStop(1, 'transparent');
      ctx.fillStyle = neb2;
      ctx.fillRect(0, 0, this.width, this.height);

      // 2. Dải cực quang uốn lượn (Aurora Borealis)
      this.drawAurora(ctx, time);

      // 3. Mặt trăng khuyết dát vàng huyền ảo (Crescent Moon)
      this.drawMoon(ctx);

      // 4. Các vì sao 3D
      const isWarping = this.speed > 2;
      const renderedStars = [];

      for (let star of this.stars) {
        star.z -= this.speed;
        if (star.z <= 1) {
          star.z = 1800;
          star.x = (Math.random() - 0.5) * this.width * 2.8;
          star.y = (Math.random() - 0.5) * this.height * 2.8;
          star.prevX = 0;
          star.prevY = 0;
        }

        const k = this.fov / star.z;
        const sx = cx + (star.x + this.mouseX * 50) * k;
        const sy = cy + (star.y + this.mouseY * 50) * k;

        if (sx < -50 || sx > this.width + 50 || sy < -50 || sy > this.height + 50) {
          continue;
        }

        const depthRatio = 1 - star.z / 1800;
        const twinkle = Math.sin(Date.now() * star.twinkleSpeed + star.twinklePhase) * 0.35 + 0.65;
        const alpha = Math.min(1, depthRatio * 1.2) * twinkle;

        if (isWarping && star.prevX !== 0) {
          ctx.beginPath();
          ctx.moveTo(star.prevX, star.prevY);
          ctx.lineTo(sx, sy);
          ctx.strokeStyle = star.color;
          ctx.lineWidth = Math.max(1, depthRatio * 2.8);
          ctx.globalAlpha = Math.min(1, alpha * 1.6);
          ctx.stroke();
          ctx.globalAlpha = 1;
        } else {
          const r = Math.max(0.6, star.baseSize * depthRatio * 1.4);
          ctx.beginPath();
          ctx.arc(sx, sy, r, 0, Math.PI * 2);
          ctx.fillStyle = star.color;
          ctx.globalAlpha = alpha;
          ctx.fill();

          if (depthRatio > 0.68) {
            ctx.beginPath();
            ctx.arc(sx, sy, r * 2.8, 0, Math.PI * 2);
            ctx.fillStyle = star.color;
            ctx.globalAlpha = alpha * 0.26;
            ctx.fill();
            renderedStars.push({ sx, sy, alpha });
          }
          ctx.globalAlpha = 1;
        }

        star.prevX = sx;
        star.prevY = sy;
      }

      // 5. Kết nối chòm sao lấp lánh (Constellations)
      if (!isWarping && renderedStars.length > 5) {
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
        ctx.lineWidth = 0.8;
        for (let i = 0; i < renderedStars.length; i++) {
          for (let j = i + 1; j < renderedStars.length; j++) {
            const dx = renderedStars[i].sx - renderedStars[j].sx;
            const dy = renderedStars[i].sy - renderedStars[j].sy;
            const dist = Math.hypot(dx, dy);
            if (dist < 60) {
              ctx.beginPath();
              ctx.moveTo(renderedStars[i].sx, renderedStars[i].sy);
              ctx.lineTo(renderedStars[j].sx, renderedStars[j].sy);
              ctx.stroke();
            }
          }
        }
      }

      // 6. Bụi sao 3D lơ lửng tiền cảnh (Stardust Bokeh)
      if (!isWarping) {
        this.drawStardust(ctx);
      }

      // 7. Sóng siêu âm vũ trụ (Cosmic Shockwaves on touch)
      for (let i = this.shockwaves.length - 1; i >= 0; i--) {
        const sw = this.shockwaves[i];
        sw.radius += sw.speed;
        sw.life = 1 - sw.radius / sw.maxRadius;
        if (sw.life <= 0) {
          this.shockwaves.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.beginPath();
        ctx.arc(sw.x, sw.y, sw.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(0, 242, 254, ${sw.life * 0.5})`;
        ctx.lineWidth = 2.5;
        ctx.shadowColor = '#00f2fe';
        ctx.shadowBlur = 12;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(sw.x, sw.y, Math.max(0, sw.radius - 8), 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(255, 117, 160, ${sw.life * 0.4})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
        ctx.restore();
      }

      // 8. Sao băng (Shooting stars)
      const now = Date.now();
      if (!isWarping && now - this.lastShootingStarTime > 2400 && Math.random() < 0.65) {
        this.createShootingStar();
        this.lastShootingStarTime = now;
      }

      for (let i = this.shootingStars.length - 1; i >= 0; i--) {
        const ss = this.shootingStars[i];
        ss.x += ss.dx;
        ss.y += ss.dy;
        ss.life -= ss.decay;

        if (ss.life <= 0 || ss.x > this.width + 100 || ss.y > this.height + 100) {
          this.shootingStars.splice(i, 1);
          continue;
        }

        const tailX = ss.x - (ss.dx / Math.hypot(ss.dx, ss.dy)) * ss.length;
        const tailY = ss.y - (ss.dy / Math.hypot(ss.dx, ss.dy)) * ss.length;

        const grad = ctx.createLinearGradient(tailX, tailY, ss.x, ss.y);
        grad.addColorStop(0, 'transparent');
        grad.addColorStop(0.7, 'rgba(255, 209, 102, ' + (ss.life * 0.4) + ')');
        grad.addColorStop(1, 'rgba(255, 255, 255, ' + ss.life + ')');

        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(ss.x, ss.y);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 2.2;
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(ss.x, ss.y, 2.2, 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff';
        ctx.globalAlpha = ss.life;
        ctx.fill();
        ctx.globalAlpha = 1;
      }

      requestAnimationFrame(this.animate);
    }

    stop() {
      this.running = false;
    }
  }

  // --- ĐỒNG HỒ & NGÀY THÁNG SAMSUNG GALAXY ---
  function initSamsungClock() {
    const clockEl = document.getElementById('samsungClock');
    const dateEl = document.getElementById('samsungDate');
    if (!clockEl) return;

    const days = ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'];

    function updateTime() {
      const now = new Date();
      const h = String(now.getHours()).padStart(2, '0');
      const m = String(now.getMinutes()).padStart(2, '0');
      clockEl.textContent = `${h}:${m}`;

      if (dateEl) {
        const dayName = days[now.getDay()];
        const date = now.getDate();
        const month = now.getMonth() + 1;
        dateEl.textContent = `${dayName}, ${date} Tháng ${month}`;
      }
    }

    updateTime();
    setInterval(updateTime, 1000);
  }

  // --- XỬ LÝ MÀN HÌNH KHÓA SAMSUNG VÂN TAY DƯỚI MÀN HÌNH ---
  let isScanning = false;
  let scanProgress = 0;
  let scanInterval = null;
  let isUnlocked = false;
  let sky3DEngine = null;

  function initFingerprintLock() {
    if (!CONFIG.enableFingerprintLock || !lockscreenOverlay) {
      if (lockscreenOverlay) lockscreenOverlay.style.display = 'none';
      return;
    }

    // Khởi tạo Bầu trời 3D Vũ trụ & Đồng hồ Samsung
    sky3DEngine = new Sky3DEngine();
    initSamsungClock();

    const updateScanUI = (progress) => {
      // Bán kính r=70 => chu vi ~440
      const offset = 440 - (440 * progress / 100);
      if (ringFill) ringFill.style.strokeDashoffset = offset;

      if (statusText) {
        if (progress > 10 && progress < 85) {
          statusText.textContent = "Đang truyền năng lượng vào đóa hoa hồng... ✨";
        } else if (progress >= 85 && progress < 100) {
          statusText.textContent = "Đóa hoa hồng đang hé nở... ✨";
        }
      }
    };

    const startScan = (e) => {
      // Kích hoạt phát bài hát NGAY LẬP TỨC từ tương tác người dùng
      audioSynth.startMusic();

      if (isUnlocked) return;
      if (isScanning) return;

      isScanning = true;
      fingerprintSensor.classList.add('scanning');
      if (statusText) statusText.textContent = "Đang truyền năng lượng vào đóa hoa hồng... ✨";

      // Kích hoạt gia tốc vũ trụ (Warp speed) & sóng xung kích vũ trụ
      if (sky3DEngine) {
        sky3DEngine.setWarp(true);
        const rect = fingerprintSensor.getBoundingClientRect();
        sky3DEngine.triggerShockwave(rect.left + rect.width / 2, rect.top + rect.height / 2);
      }

      // Phản hồi rung nhẹ haptic nếu thiết bị hỗ trợ
      if (navigator.vibrate) {
        try { navigator.vibrate(30); } catch (err) { }
      }

      if (scanInterval) clearInterval(scanInterval);
      scanInterval = setInterval(() => {
        if (!isScanning) return;
        scanProgress += 3.4;

        if (scanProgress >= 100) {
          scanProgress = 100;
          completeScan();
        }

        updateScanUI(scanProgress);
      }, 25);
    };

    const stopScan = () => {
      // Khi người dùng đã chạm tay và nhạc bắt đầu vang lên, để quá trình mở khóa tiếp tục hoàn tất mượt mà
      if (isUnlocked || !isScanning) return;
    };

    const completeScan = () => {
      isScanning = false;
      isUnlocked = true;
      clearInterval(scanInterval);
      updateScanUI(100);

      fingerprintSensor.classList.remove('scanning');
      fingerprintSensor.classList.add('success');
      if (statusText) statusText.textContent = "Đóa hoa hồng bung nở rực rỡ! 🌹✨";
      document.title = "Vườn Hoa Tulip - Chúc Mừng Ngày 20/10 🌷";

      // Đảm bảo bài hát chắc chắn đang ngân vang
      audioSynth.startMusic();

      // Kích hoạt sóng chấn động tỏa sáng toàn vũ trụ
      if (sky3DEngine) {
        const rect = fingerprintSensor.getBoundingClientRect();
        sky3DEngine.triggerShockwave(rect.left + rect.width / 2, rect.top + rect.height / 2);
      }

      // Rung haptic hoàn tất
      if (navigator.vibrate) {
        try { navigator.vibrate([40, 30, 60]); } catch (err) { }
      }

      // Pháo hoa bụi sao bùng nổ
      for (let i = 0; i < 40; i++) {
        const x = width * 0.5 + (Math.random() - 0.5) * 260;
        const y = height * 0.5 + (Math.random() - 0.5) * 260;
        addSparkle(x, y);
      }

      // Mở màn hình mượt mà
      setTimeout(() => {
        lockscreenOverlay.classList.add('unlocked');
        setTimeout(() => {
          lockscreenOverlay.style.display = 'none';
          if (sky3DEngine) sky3DEngine.stop();
        }, 900);
      }, 850);
    };

    // Hàm xử lý tương tác chạm/bấm vân tay: BẤM VÀO LÀ HÁT LIỀN!
    const handleFingerprintPress = (e) => {
      audioSynth.startMusic();
      startScan(e);
    };

    // Hỗ trợ PointerEvent hiện đại (bao quát cả Touch, Mouse, Pen)
    fingerprintSensor.addEventListener('pointerdown', handleFingerprintPress);
    fingerprintSensor.addEventListener('touchstart', handleFingerprintPress, { passive: true });
    fingerprintSensor.addEventListener('mousedown', (e) => {
      if (e.button === 0) handleFingerprintPress(e);
    });

    window.addEventListener('pointerup', stopScan);
    window.addEventListener('mouseup', stopScan);
    window.addEventListener('touchend', stopScan);

    // Bấm click cũng tự động quét và hát ngay lập tức
    fingerprintSensor.addEventListener('click', (e) => {
      audioSynth.startMusic();
      if (!isUnlocked && !isScanning) {
        startScan(e);
      }
    });

    // Chạm bất kỳ đâu trên màn hình khóa cũng chuẩn bị kích hoạt audio
    lockscreenOverlay.addEventListener('pointerdown', () => {
      audioSynth.init();
    }, { once: true });
  }

  // --- KHỞI ĐỘNG HỆ THỐNG ---
  applyConfigData();
  initScene();
  startPetalRain();
  initFingerprintLock();
  requestAnimationFrame(render);

  document.body.addEventListener('pointerdown', () => {
    audioSynth.init();
  }, { once: true });

})();
