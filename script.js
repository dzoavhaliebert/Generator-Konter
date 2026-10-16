(() => {
  'use strict';

  /* =========================================================
     DATA: semua pilihan ada di sini, mudah ditambah/diubah.
     en  = potongan prompt bahasa Inggris
     idn = label ringkasan bahasa Indonesia
     ========================================================= */
  const DATA = {
    platform: [
      { id: 'mj', label: 'Midjourney', note: 'Tempel di Midjourney (web/Discord). Parameter --ar, --v, dan --no sudah ditambahkan otomatis.' },
      { id: 'dalle', label: 'DALL-E / Bing', note: 'Cocok untuk Bing Image Creator & ChatGPT. Ditulis dalam kalimat natural, tanpa parameter teknis.' },
      { id: 'sd', label: 'Stable Diffusion', note: 'Format tag dipisah koma. Isi negative prompt di kolom terpisah, dan atur rasio gambar di aplikasimu.' },
      { id: 'generic', label: 'Canva / Lainnya', note: 'Kalimat natural dengan rasio gambar disebut jelas. Cocok untuk Canva AI, Leonardo, Ideogram, dll.' }
    ],

    theme: [
      { id: 'data', label: 'Promo Paket Data', desc: 'Diskon kuota untuk pelajar & gamer', en: 'a promotional visual for cheap mobile internet data packages for students and gamers', idn: 'promo paket data murah untuk pelajar & gamer' },
      { id: 'open24', label: 'Layanan 24 Jam', desc: 'Cepat & selalu siap, termasuk tengah malam', en: 'a visual showing a mobile credit and electricity token shop open 24 hours non-stop, serving customers even at midnight', idn: 'layanan konter buka 24 jam nonstop' },
      { id: 'edu', label: 'Edukasi Pelanggan', desc: 'Tips hemat kuota & pulsa tersedot', en: 'an educational visual with tips on how to save mobile data quota and avoid losing prepaid credit', idn: 'edukasi hemat kuota & pulsa tersedot' },
      { id: 'digital', label: 'Transaksi Digital', desc: 'Bayar via QRIS, e-wallet, transfer', en: 'a visual about easy cashless payments at a mobile shop using QR code, e-wallet and bank transfer', idn: 'kemudahan bayar digital (QRIS/e-wallet/transfer)' },
      { id: 'token', label: 'Pulsa & Token Listrik', desc: 'Layanan isi ulang harian', en: 'a visual about fast and affordable prepaid mobile credit and electricity token top-up service', idn: 'isi ulang pulsa & token listrik' },
      { id: 'game', label: 'Voucher Game', desc: 'Top up diamond & voucher game', en: 'a visual advertising game vouchers and in-game currency top-up service for young gamers', idn: 'voucher & top up game' },
      { id: 'grand', label: 'Grand Opening Konter', desc: 'Pembukaan toko, promo perdana', en: 'a festive grand opening celebration visual for a new mobile phone credit shop with special launch promotions', idn: 'grand opening konter baru' },
      { id: 'lebaran', label: 'Promo Musiman', desc: 'Ramadan, Lebaran, tahun ajaran baru', en: 'a seasonal promotion visual for a mobile credit shop with a warm festive Indonesian atmosphere', idn: 'promo musiman/hari besar' }
    ],

    format: [
      { id: 'story', label: 'Status WA / Story', desc: '9:16', ratio: '9:16', ratioText: 'vertical 9:16 aspect ratio', idn: '9:16 (Status WA/Story)' },
      { id: 'square', label: 'Post Kotak', desc: '1:1', ratio: '1:1', ratioText: 'square 1:1 aspect ratio', idn: '1:1 (Post kotak)' },
      { id: 'feed', label: 'Feed IG', desc: '4:5', ratio: '4:5', ratioText: 'portrait 4:5 aspect ratio', idn: '4:5 (Feed IG)' },
      { id: 'banner', label: 'Banner / Spanduk', desc: '16:9', ratio: '16:9', ratioText: 'wide 16:9 aspect ratio', idn: '16:9 (Banner/Thumbnail)' }
    ],

    style: [
      { id: '3d', label: '3D Kekinian', desc: 'Claymorphism, lucu, bulat', en: '3D claymorphism illustration, soft rounded shapes, glossy finish, trending on Behance', idn: '3D kekinian (claymorphism)' },
      { id: 'vector', label: 'Vector Flat', desc: 'Bersih, minimalis, korporat', en: 'flat vector illustration, clean lines, minimalist corporate style, crisp edges', idn: 'vector flat minimalis' },
      { id: 'neon', label: 'Neon / Gamers', desc: 'Cyberpunk, glowing', en: 'cyberpunk illustration, neon glow, futuristic technology, high contrast', idn: 'neon cyberpunk' },
      { id: 'photo', label: 'Foto Realistis', desc: 'Sinematik, seperti foto asli', en: 'realistic commercial photography, shot on a full-frame camera, shallow depth of field, natural skin texture', idn: 'foto realistis' },
      { id: 'iso', label: 'Isometrik', desc: 'Diorama toko mini 3D', en: 'isometric 3D diorama illustration, tiny detailed miniature scene, clean render', idn: 'isometrik diorama' },
      { id: 'cartoon', label: 'Kartun Ceria', desc: 'Karakter kartun berwarna', en: 'cheerful cartoon illustration, bold outlines, vibrant colors, friendly characters', idn: 'kartun ceria' }
    ],

    objects: [
      { id: 'shopkeeper', label: 'Mas-mas Konter Ramah', desc: 'Memegang HP menyala', en: 'a friendly young Indonesian male shopkeeper holding a glowing smartphone', idn: 'mas-mas konter ramah pegang HP' },
      { id: 'customerF', label: 'Pelanggan Cewek Senang', desc: 'Ekspresi puas & tersenyum', en: 'a happy young Indonesian woman customer smiling at her phone', idn: 'pelanggan cewek senang' },
      { id: 'icons', label: 'Ikon Melayang', desc: 'WiFi, SIM card, token', en: 'floating 3D icons of wifi signal, SIM cards and electricity tokens', idn: 'ikon melayang (WiFi, SIM, token)' },
      { id: 'neonsign', label: 'Papan Neon "BUKA 24 JAM"', desc: 'Penanda layanan nonstop', en: 'a glowing neon sign reading "BUKA 24 JAM"', idn: 'papan neon "BUKA 24 JAM"' },
      { id: 'mother', label: 'Ibu & Anak', desc: 'Beli pulsa di konter', en: 'an Indonesian mother and her child buying mobile credit at the shop counter', idn: 'ibu & anak beli pulsa' },
      { id: 'student', label: 'Anak Sekolah', desc: 'Beli voucher kuota', en: 'a schoolkid in uniform buying an internet data voucher at the counter', idn: 'anak sekolah beli voucher kuota' },
      { id: 'gamer', label: 'Gamer Remaja', desc: 'Headset & HP gaming', en: 'a teenage gamer wearing a headset and playing on a smartphone', idn: 'gamer remaja' },
      { id: 'vouchers', label: 'Tumpukan Voucher', desc: 'Kartu voucher warna-warni', en: 'a stack of colorful prepaid voucher cards', idn: 'tumpukan voucher' },
      { id: 'qr', label: 'Standing QRIS', desc: 'Pembayaran digital', en: 'a QR code payment stand on the counter with a smartphone scanning it', idn: 'standing QRIS & scan HP' },
      { id: 'badge', label: 'Badge Diskon', desc: 'Label harga/promo besar', en: 'a bold round discount badge and price tag', idn: 'badge diskon' },
      { id: 'tips', label: 'Lampu Ide / Tips', desc: 'Untuk konten edukasi', en: 'a glowing lightbulb and a phone showing a data saver shield icon', idn: 'lampu ide & ikon hemat data' },
      { id: 'balloons', label: 'Balon & Konfeti', desc: 'Suasana perayaan', en: 'colorful balloons and confetti', idn: 'balon & konfeti' }
    ],

    setting: [
      { id: 'shop', label: 'Dalam Konter Modern', desc: 'Etalase kaca, lampu hangat', en: 'inside a modern aesthetic mobile top-up shop with glass display cases and warm lighting', idn: 'di dalam konter modern' },
      { id: 'abstract', label: 'Background Abstrak', desc: 'Gradasi & bentuk geometris', en: 'an abstract colorful gradient background with geometric shapes', idn: 'background abstrak warna-warni' },
      { id: 'night', label: 'Konter Malam Hari', desc: 'Pinggir jalan, nuansa neon', en: 'a cozy roadside phone credit stall at night lit by neon lights', idn: 'konter pinggir jalan malam hari' },
      { id: 'studio', label: 'Studio Putih Bersih', desc: 'Mudah ditempel teks/stiker', en: 'a clean white studio background with soft shadows', idn: 'studio putih bersih' },
      { id: 'street', label: 'Konter Pinggir Jalan Siang', desc: 'Suasana kampung Indonesia', en: 'a sunny Indonesian neighborhood street with a small phone credit kiosk', idn: 'konter pinggir jalan siang hari' },
      { id: 'school', label: 'Sekitar Sekolah / Kampus', desc: 'Target pelajar & mahasiswa', en: 'a lively area near a school gate with a small mobile credit shop', idn: 'dekat sekolah/kampus' }
    ],

    mood: [
      { id: 'cheerful', label: 'Ceria', en: 'cheerful and playful', idn: 'ceria' },
      { id: 'pro', label: 'Profesional', en: 'trustworthy and professional', idn: 'profesional' },
      { id: 'energetic', label: 'Energik', en: 'energetic and exciting', idn: 'energik' },
      { id: 'warm', label: 'Hangat & Ramah', en: 'warm, friendly and welcoming', idn: 'hangat & ramah' },
      { id: 'urgent', label: 'Urgen / Promo Terbatas', en: 'urgent limited-time sale excitement', idn: 'urgen/promo terbatas' }
    ],

    palette: [
      { id: 'bluey', label: 'Biru & Kuning', en: 'dominant blue and yellow', idn: 'biru & kuning', color: 'linear-gradient(90deg,#2563eb,#facc15)' },
      { id: 'redwhite', label: 'Merah & Putih', en: 'dominant red and white', idn: 'merah & putih', color: 'linear-gradient(90deg,#dc2626,#f8fafc)' },
      { id: 'greenor', label: 'Hijau & Oranye', en: 'dominant green and orange', idn: 'hijau & oranye', color: 'linear-gradient(90deg,#16a34a,#f97316)' },
      { id: 'neonpp', label: 'Ungu & Pink Neon', en: 'dominant purple and hot pink neon', idn: 'ungu & pink neon', color: 'linear-gradient(90deg,#7c3aed,#ec4899)' },
      { id: 'pastel', label: 'Pastel Lembut', en: 'soft pastel colors', idn: 'pastel lembut', color: 'linear-gradient(90deg,#bfdbfe,#fbcfe8,#fde68a)' }
    ],

    light: [
      { id: 'soft', label: 'Lembut (studio)', en: 'soft studio lighting', idn: 'lembut studio' },
      { id: 'golden', label: 'Hangat keemasan', en: 'warm golden lighting', idn: 'hangat keemasan' },
      { id: 'neon', label: 'Cahaya neon', en: 'vibrant neon glow lighting', idn: 'cahaya neon' },
      { id: 'day', label: 'Siang alami', en: 'bright natural daylight', idn: 'cahaya siang alami' }
    ],

    comp: [
      { id: 'medium', label: 'Medium shot (seimbang)', en: 'medium shot, centered subject, balanced composition', idn: 'medium shot' },
      { id: 'close', label: 'Close-up (fokus karakter)', en: 'close-up shot focused on the main subject', idn: 'close-up' },
      { id: 'wide', label: 'Wide (suasana toko)', en: 'wide establishing shot showing the whole scene', idn: 'wide shot' },
      { id: 'top', label: 'Top-down (flat lay)', en: 'top-down flat lay composition', idn: 'top-down/flat lay' },
      { id: 'low', label: 'Low angle (heroik)', en: 'low angle heroic shot', idn: 'low angle' }
    ],

    copy: [
      { id: 'none', label: 'Tidak perlu', en: '', idn: 'tanpa ruang teks' },
      { id: 'top', label: 'Atas', en: 'Leave a clean empty area at the top of the frame for adding text later', idn: 'ruang kosong di atas' },
      { id: 'bottom', label: 'Bawah', en: 'Leave a clean empty area at the bottom of the frame for adding text later', idn: 'ruang kosong di bawah' },
      { id: 'left', label: 'Kiri', en: 'Leave a clean empty area on the left side of the frame for adding text later', idn: 'ruang kosong di kiri' },
      { id: 'right', label: 'Kanan', en: 'Leave a clean empty area on the right side of the frame for adding text later', idn: 'ruang kosong di kanan' },
      { id: 'center', label: 'Tengah', en: 'Leave a clean empty area in the center of the frame for adding text later', idn: 'ruang kosong di tengah' }
    ],

    quality: [
      { id: 'std', label: 'Standar', en: 'high quality', idn: 'standar' },
      { id: 'high', label: 'Tinggi', en: 'highly detailed, sharp focus, professional composition', idn: 'tinggi' },
      { id: 'ultra', label: 'Ultra', en: 'ultra detailed, 8k resolution, sharp focus, award-winning composition', idn: 'ultra' }
    ],

    negatives: [
      { id: 'blur', label: 'Blur / buram', en: 'blurry, out of focus' },
      { id: 'hands', label: 'Tangan & jari rusak', en: 'deformed hands, extra fingers, distorted anatomy' },
      { id: 'water', label: 'Watermark', en: 'watermark, signature' },
      { id: 'lowq', label: 'Kualitas rendah', en: 'low quality, pixelated, jpeg artifacts' },
      { id: 'logos', label: 'Logo merek asli', en: 'real brand logos, copyrighted logos' },
      { id: 'text', label: 'Teks acak / typo', en: 'gibberish text, misspelled words, random letters' },
      { id: 'clutter', label: 'Terlalu ramai', en: 'cluttered composition, too many objects' },
      { id: 'dark', label: 'Terlalu gelap', en: 'underexposed, too dark' }
    ]
  };

  /* Konfigurasi grup yang dirender otomatis */
  const GROUPS = [
    { key: 'platform', el: 'g-platform', type: 'radio', ui: 'seg', def: 'mj' },
    { key: 'theme', el: 'g-theme', type: 'radio', ui: 'chip', def: 'data' },
    { key: 'format', el: 'g-format', type: 'radio', ui: 'chip', def: 'story' },
    { key: 'style', el: 'g-style', type: 'radio', ui: 'chip', def: '3d' },
    { key: 'objects', el: 'g-objects', type: 'checkbox', ui: 'chip', def: ['shopkeeper', 'icons'] },
    { key: 'setting', el: 'g-setting', type: 'radio', ui: 'chip', def: 'shop' },
    { key: 'mood', el: 'g-mood', type: 'radio', ui: 'chip', def: 'cheerful' },
    { key: 'palette', el: 'g-palette', type: 'radio', ui: 'chip', def: 'bluey' },
    { key: 'light', el: 'g-light', type: 'radio', ui: 'chip', def: 'soft' },
    { key: 'comp', el: 'g-comp', type: 'radio', ui: 'chip', def: 'medium' },
    { key: 'copy', el: 'g-copy', type: 'radio', ui: 'seg', def: 'top' },
    { key: 'quality', el: 'g-quality', type: 'radio', ui: 'seg', def: 'high' },
    { key: 'negatives', el: 'g-negatives', type: 'checkbox', ui: 'chip', def: ['blur', 'hands', 'water', 'lowq', 'logos'] }
  ];

  const PRESETS = [
    {
      name: 'Promo Gamer Malam',
      values: { platform: 'mj', theme: 'game', format: 'story', style: 'neon', objects: ['gamer', 'icons', 'badge'], setting: 'night', mood: 'energetic', palette: 'neonpp', light: 'neon', comp: 'medium', copy: 'top' }
    },
    {
      name: 'Konter Ramah Harian',
      values: { platform: 'dalle', theme: 'token', format: 'square', style: '3d', objects: ['shopkeeper', 'customerF', 'icons'], setting: 'shop', mood: 'warm', palette: 'bluey', light: 'golden', comp: 'medium', copy: 'bottom' }
    },
    {
      name: 'Edukasi Hemat Kuota',
      values: { platform: 'generic', theme: 'edu', format: 'feed', style: 'vector', objects: ['tips', 'icons'], setting: 'abstract', mood: 'pro', palette: 'greenor', light: 'soft', comp: 'medium', copy: 'right' }
    },
    {
      name: 'Grand Opening',
      values: { platform: 'mj', theme: 'grand', format: 'banner', style: 'cartoon', objects: ['shopkeeper', 'balloons', 'badge'], setting: 'street', mood: 'cheerful', palette: 'redwhite', light: 'day', comp: 'wide', copy: 'left' }
    },
    {
      name: 'Bayar QRIS',
      values: { platform: 'dalle', theme: 'digital', format: 'story', style: 'iso', objects: ['qr', 'customerF', 'icons'], setting: 'abstract', mood: 'pro', palette: 'bluey', light: 'soft', comp: 'top', copy: 'top' }
    }
  ];

  /* ---------- Util ---------- */
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const pick = (key, id) => DATA[key].find(i => i.id === id) || DATA[key][0];
  const trimDot = s => s.replace(/[.\s,]+$/, '');
  const HISTORY_KEY = 'konterPrompterHistory.v2';
  const MAX_HISTORY = 8;

  /* ---------- Render grup pilihan ---------- */
  function renderGroups() {
    GROUPS.forEach(g => {
      const box = document.getElementById(g.el);
      if (!box) return;
      box.innerHTML = DATA[g.key].map(item => {
        const checked = Array.isArray(g.def) ? g.def.includes(item.id) : g.def === item.id;
        const attrs = `type="${g.type}" name="${g.key}" value="${item.id}" ${checked ? 'checked' : ''}`;
        if (g.ui === 'seg') {
          return `<label class="seg"><input ${attrs}><span>${item.label}</span></label>`;
        }
        const swatch = item.color ? `<i class="swatch" style="background:${item.color}"></i>` : '';
        const desc = item.desc ? `<small>${item.desc}</small>` : '';
        return `<label class="chip"><input ${attrs}><span class="chip-body"><b>${item.label}</b>${desc}${swatch}</span></label>`;
      }).join('');
    });

    $('#presetBar').innerHTML = PRESETS.map((p, i) =>
      `<button type="button" class="preset-btn" data-preset="${i}">${p.name}</button>`
    ).join('');
  }

  /* ---------- Baca & set nilai form ---------- */
  function getValues() {
    const v = {};
    GROUPS.forEach(g => {
      if (g.type === 'radio') {
        const el = $(`input[name="${g.key}"]:checked`);
        v[g.key] = el ? el.value : (Array.isArray(g.def) ? g.def[0] : g.def);
      } else {
        v[g.key] = $$(`input[name="${g.key}"]:checked`).map(e => e.value);
      }
    });
    v.withText = $('#withText').checked;
    v.brand = $('#brandName').value.trim();
    v.headline = $('#headline').value.trim();
    v.custom = $('#custom').value.trim();
    v.customNeg = $('#customNeg').value.trim();
    return v;
  }

  function setValues(v) {
    GROUPS.forEach(g => {
      if (!(g.key in v)) return;
      $$(`input[name="${g.key}"]`).forEach(el => {
        el.checked = g.type === 'radio' ? el.value === v[g.key] : v[g.key].includes(el.value);
      });
    });
    if ('withText' in v) $('#withText').checked = !!v.withText;
    if ('brand' in v) $('#brandName').value = v.brand || '';
    if ('headline' in v) $('#headline').value = v.headline || '';
    if ('custom' in v) $('#custom').value = v.custom || '';
    if ('customNeg' in v) $('#customNeg').value = v.customNeg || '';
    update();
  }

  /* ---------- Pembangun prompt ---------- */
  function build(v) {
    const platform = pick('platform', v.platform);
    const th = pick('theme', v.theme);
    const fm = pick('format', v.format);
    const st = pick('style', v.style);
    const se = pick('setting', v.setting);
    const mo = pick('mood', v.mood);
    const pa = pick('palette', v.palette);
    const li = pick('light', v.light);
    const co = pick('comp', v.comp);
    const cs = pick('copy', v.copy);
    const q = pick('quality', v.quality);
    const objs = v.objects.map(id => pick('objects', id));

    const negs = v.negatives.map(id => pick('negatives', id).en);
    if (v.customNeg) negs.push(v.customNeg);
    const negText = negs.join(', ');

    // teks di dalam gambar (opsional)
    let textPart = '';
    if (v.withText && (v.brand || v.headline)) {
      const bits = [];
      if (v.headline) bits.push(`the headline "${v.headline}"`);
      if (v.brand) bits.push(`the shop name "${v.brand}"`);
      textPart = `Include short, clearly legible text: ${bits.join(' and ')}`;
    }

    const objectsText = objs.map(o => o.en).join(', ');
    const sentenceParts = [
      `${st.en}, depicting ${th.en}`,
      co.en,
      objs.length ? `Featuring ${objectsText}` : '',
      `Setting: ${se.en}`,
      `Mood: ${mo.en}`,
      `Color palette: ${pa.en}`,
      `Lighting: ${li.en}`,
      cs.en,
      textPart,
      v.custom ? `Additional details: ${v.custom}` : '',
      q.en
    ].filter(Boolean);

    let main = '';
    let negOut = negText;

    if (v.platform === 'sd') {
      const tags = [
        st.en, th.en, co.en, objectsText, se.en, mo.en, `${pa.en} color palette`, li.en,
        cs.en ? 'empty copy space for text' : '',
        textPart ? `text: ${[v.headline, v.brand].filter(Boolean).join(' / ')}` : '',
        v.custom, q.en, `${fm.ratio} aspect ratio`
      ].filter(Boolean);
      main = tags.map(trimDot).join(', ');
    } else {
      main = sentenceParts.map(s => trimDot(s) + '.').join(' ');
      if (v.platform === 'mj') {
        main = trimDot(main) + ` --ar ${fm.ratio} --v 6.1`;
        if (negText) main += ` --no ${negs.join(', ')}`;
      } else {
        main += ` Format: ${fm.ratioText}.`;
        if (negText) main += ` Avoid: ${negText}.`;
      }
    }

    // Ringkasan Indonesia
    const idLines = [
      `Platform: ${platform.label}`,
      `Tema: ${th.idn}`,
      `Ukuran: ${fm.idn}`,
      `Gaya: ${st.idn}`,
      `Objek: ${objs.length ? objs.map(o => o.idn).join('; ') : '(belum dipilih)'}`,
      `Latar: ${se.idn}`,
      `Mood: ${mo.idn} · Warna: ${pa.idn}`,
      `Cahaya: ${li.idn} · Sudut: ${co.idn}`,
      `Ruang teks: ${cs.idn}`,
      `Detail: ${q.idn}`
    ];
    if (textPart) idLines.push(`Teks di gambar: ${[v.headline, v.brand].filter(Boolean).join(' / ')}`);
    if (v.custom) idLines.push(`Tambahan: ${v.custom}`);

    return { main, negOut, idText: idLines.join('\n'), platform, objCount: objs.length };
  }

  /* ---------- Update UI ---------- */
  function update() {
    const v = getValues();
    const r = build(v);

    $('#outEn').value = r.main;
    $('#outNeg').value = r.negOut || '(tidak ada)';
    $('#outId').value = r.idText;
    $('#platformBadge').textContent = r.platform.label;
    $('#platformNote').textContent = r.platform.note;
    $('#counter').textContent = `${r.main.split(/\s+/).filter(Boolean).length} kata`;
    $('#textFields').hidden = !v.withText;
    $('#objectWarn').hidden = r.objCount <= 4;
  }

  /* ---------- Clipboard & toast ---------- */
  let toastTimer;
  function toast(msg) {
    const t = $('#toast');
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove('show'), 2200);
  }

  async function copyText(text, msg) {
    try {
      await navigator.clipboard.writeText(text);
      toast(msg);
    } catch (e) {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.cssText = 'position:fixed;top:0;left:0;opacity:0';
      document.body.appendChild(ta);
      ta.focus(); ta.select();
      try { document.execCommand('copy') ? toast(msg) : toast('Gagal menyalin, salin manual ya.'); }
      catch (err) { toast('Gagal menyalin, salin manual ya.'); }
      document.body.removeChild(ta);
    }
  }

  /* ---------- Riwayat (localStorage, aman jika diblokir) ---------- */
  function loadHistory() {
    try { return JSON.parse(localStorage.getItem(HISTORY_KEY)) || []; }
    catch (e) { return []; }
  }
  function saveHistory(list) {
    try { localStorage.setItem(HISTORY_KEY, JSON.stringify(list)); }
    catch (e) { toast('Riwayat tidak bisa disimpan di browser ini.'); }
  }
  function renderHistory() {
    const list = loadHistory();
    const ul = $('#historyList');
    $('#historyEmpty').hidden = list.length > 0;
    $('#clearHistory').hidden = list.length === 0;
    ul.innerHTML = '';
    list.forEach((item, i) => {
      const li = document.createElement('li');
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.dataset.index = i;
      const title = document.createElement('span');
      title.textContent = item.title;
      const small = document.createElement('small');
      small.textContent = item.time;
      btn.append(title, small);
      li.appendChild(btn);
      ul.appendChild(li);
    });
  }
  function addHistory() {
    const v = getValues();
    const th = pick('theme', v.theme), st = pick('style', v.style), fm = pick('format', v.format);
    const entry = {
      title: `${th.label} · ${st.label} · ${fm.desc}`,
      time: new Date().toLocaleString('id-ID', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' }),
      values: v
    };
    const list = [entry, ...loadHistory()].slice(0, MAX_HISTORY);
    saveHistory(list);
    renderHistory();
    toast('Disimpan ke riwayat!');
  }

  /* ---------- Acak & reset ---------- */
  const rand = arr => arr[Math.floor(Math.random() * arr.length)];
  function randomize() {
    const keep = $$('input[name="platform"]:checked')[0].value;
    const objPool = DATA.objects.map(o => o.id).sort(() => Math.random() - .5).slice(0, 2 + Math.floor(Math.random() * 2));
    setValues({
      platform: keep,
      theme: rand(DATA.theme).id,
      format: rand(DATA.format).id,
      style: rand(DATA.style).id,
      objects: objPool,
      setting: rand(DATA.setting).id,
      mood: rand(DATA.mood).id,
      palette: rand(DATA.palette).id,
      light: rand(DATA.light).id,
      comp: rand(DATA.comp).id
    });
  }
  function resetAll() {
    const v = {};
    GROUPS.forEach(g => { v[g.key] = g.def; });
    Object.assign(v, { withText: false, brand: '', headline: '', custom: '', customNeg: '' });
    setValues(v);
    toast('Form dikembalikan ke awal.');
  }

  /* ---------- Event ---------- */
  function bind() {
    const form = document.querySelector('.col-form');
    form.addEventListener('change', update);
    form.addEventListener('input', e => {
      if (e.target.matches('input[type="text"], textarea')) update();
    });

    $('#presetBar').addEventListener('click', e => {
      const btn = e.target.closest('[data-preset]');
      if (!btn) return;
      const p = PRESETS[+btn.dataset.preset];
      setValues({ ...p.values });
      toast(`Template "${p.name}" diterapkan.`);
    });

    $('#copyMain').addEventListener('click', () => copyText($('#outEn').value, 'Prompt berhasil disalin!'));
    $('#copyNeg').addEventListener('click', () => copyText($('#outNeg').value === '(tidak ada)' ? '' : $('#outNeg').value, 'Negative prompt disalin!'));
    $('#saveBtn').addEventListener('click', addHistory);
    $('#randomBtn').addEventListener('click', randomize);
    $('#resetBtn').addEventListener('click', resetAll);

    $('#historyList').addEventListener('click', e => {
      const btn = e.target.closest('button[data-index]');
      if (!btn) return;
      const item = loadHistory()[+btn.dataset.index];
      if (item) { setValues(item.values); toast('Riwayat dimuat.'); }
    });
    $('#clearHistory').addEventListener('click', () => {
      if (confirm('Hapus semua riwayat?')) { saveHistory([]); renderHistory(); }
    });
  }

  /* ---------- Init ---------- */
  renderGroups();
  bind();
  renderHistory();
  update();
})();