const TRANSLATIONS = {
  ms: {
    // General
    nav_exit: '← Keluar', nav_back: '← Balik', save: 'Simpan', loading: 'Memuatkan...', 
    enter: 'Masuk', total: 'Jumlah', today: 'Hari Ini', inside: 'Dalam',
    footer: 'Residensi Kesuma, Beranang · v2.2',
    
    // Login (index.html)
    login_title: 'Kesuma <span>JMB</span>',
    index_subtitle: 'Residensi Kesuma, Beranang',
    login_resident: '🏠 Residen', login_security: '🛡️ Security', login_admin: '⚙️ Admin',
    login_res_title: 'LOG MASUK RESIDEN', login_sec_title: 'LOG MASUK SECURITY', login_adm_title: 'LOG MASUK ADMIN',
    res_type_label: 'Jenis Residen', res_type_ph: '— Pilih jenis —',
    login_type_owner: 'Pemilik (Owner)', login_type_tenant: 'Penyewa (Tenant)',
    res_floor_label: 'Tingkat', res_floor_ph: '— Pilih tingkat —',
    res_unit_label: 'No. Unit', res_unit_ph: '— Pilih unit —',
    password_label: 'Password', username_label: 'Username', login_btn: 'Log Masuk',
    
    // Registration (visitor-register.html)
    vis_reg_title: 'Daftar Pelawat',
    vis_sec_unit: 'UNIT YANG DILAWATI', vis_sec_info: 'MAKLUMAT PELAWAT',
    vis_name: 'Nama Penuh', vis_name_ph: 'Nama seperti dalam IC',
    vis_ic: 'No. IC', vis_ic_ph: 'Contoh: 901234-56-7890',
    vis_phone: 'No. Telefon', vis_phone_ph: '0123456789',
    vis_sec_veh: 'KENDERAAN', vis_v_type: 'Jenis Kenderaan', vis_v_type_ph: 'Pilih jenis',
    vis_v_car: 'Kereta', vis_v_moto: 'Motosikal', vis_v_lorry: 'Lori / Van', vis_v_none: 'Tiada Kenderaan',
    vis_v_plate: 'No. Plat', vis_v_plate_ph: 'Contoh: WXX 1234',
    vis_sec_purp: 'TUJUAN LAWATAN', vis_purpose: 'Tujuan', vis_purpose_ph: 'Pilih tujuan',
    vis_purp_visit: 'Ziarah', vis_purp_del: 'Hantar Barang', vis_purp_work: 'Kerja', vis_purp_rep: 'Pembaikan', vis_purp_oth: 'Lain-lain',
    vis_submit: 'Daftar Sekarang', vis_error_fill: 'Sila isi semua maklumat.',
    
    // QR / Success
    vis_success_title: 'Pendaftaran Berjaya!',
    vis_success_sub: 'Pelawat anda sedia untuk masuk (Auto-Lulus).',
    vis_ref_label: 'KOD RUJUKAN',
    vis_qr_hint: 'QR sah 24 jam · Tunjukkan kepada guard',
    vis_copy_code: 'Salin Kod', vis_copied: 'Disalin!', vis_download_qr: 'Muat Turun QR',
    vis_details: 'MAKLUMAT PENDAFTARAN', vis_new_reg: '+ Daftar Pelawat Lain',
    
    // Dashboard Common
    role_owner: 'Pemilik', role_tenant: 'Penyewa', role_security: 'Security', role_admin: 'Admin',
    tab_visitors: 'Pelawat', tab_log: 'Log', tab_settings: 'Tetapan', tab_pending: 'Lulus',
    status_pending: 'Menunggu', status_approved: 'Diluluskan', status_checkedin: 'Telah Masuk',
    status_checkedout: 'Telah Keluar', status_rejected: 'Ditolak',
    
    // Security / Admin page specific
    guard_scan_title: 'IMBAS / MASUKKAN KOD', admin_pin_error: 'Password salah atau unit tidak dijumpai.',
    error_not_owner: 'Bukan akaun pemilik.', error_not_tenant: 'Bukan akaun penyewa.',
    search_ph: 'Cari nama, unit, kod...', admin_all_records_desc: 'Semua rekod masuk/keluar',
    admin_all_units: 'Semua unit', admin_set_pass_owner: 'Set Password Baru Owner', 
    admin_set_pass_tenant: 'Set Password Baru Tenant', admin_changes: 'Perubahan',
    admin_no_units: 'Tiada unit dijumpai.', admin_filter_all: 'Semua Status',
    vis_status_pending: 'Menunggu',
    vis_status_approved: 'Diluluskan',
    vis_status_checkedin: 'Telah Masuk',
    vis_status_checkout: 'Telah Keluar',
    vis_status_rejected: 'Ditolak',
    tab_units: 'Urus Unit',
    admin_edit_prof: 'Edit profil owner & tenant',
    admin_search: 'Cari unit atau telefon...',
    res_unit_label: 'Unit',
    reg_by_visitor: 'Daftar: Pelawat (Sendiri)',
    reg_by_owner: 'Daftar: Pemilik',
    reg_by_tenant: 'Daftar: Penyewa',
    reg_by_guard: 'Daftar: Security',
    admin_all_records_desc: 'Semua rekod masuk/keluar',
    admin_all_units: 'Semua unit',
    owner_no_visitors: 'Tiada rekod pelawat.',
    admin_no_units: 'Tiada unit dijumpai.',
    demo_title: 'MAKLUMAT AKAUN DEMO',
    demo_res_hint: 'Guna Unit 4-1 / Pass: 1234',
    demo_sec_hint: 'guard1 / kesuma1125',
    demo_adm_hint: 'admin / kesuma1125',
    admin_saved: 'berjaya disimpan.',
    admin_save_error: 'Gagal simpan. Cuba lagi.',
    login_sub: 'Residensi Kesuma, Beranang'

  },
  en: {
    nav_exit: '← Logout', nav_back: '← Back', save: 'Save', loading: 'Loading...', 
    enter: 'Enter', total: 'Total', today: 'Today', inside: 'Inside',
    footer: 'Kesuma Residency, Beranang · Visitor System v2.2',
    login_title: 'Kesuma <span>JMB</span>',
    index_subtitle: 'Kesuma Residency, Beranang',
    login_resident: '🏠 Resident', login_security: '🛡️ Security', login_admin: '⚙️ Admin',
    login_res_title: 'RESIDENT LOGIN', login_sec_title: 'SECURITY LOGIN', login_adm_title: 'ADMIN LOGIN',
    res_type_label: 'Resident Type', res_type_ph: '— Select type —',
    login_type_owner: 'Owner', login_type_tenant: 'Tenant',
    res_floor_label: 'Floor', res_floor_ph: '— Select floor —',
    res_unit_label: 'Unit No.', res_unit_ph: '— Select unit —',
    password_label: 'Password', username_label: 'Username', login_btn: 'Login',
    vis_reg_title: 'Visitor Registration',
    vis_sec_unit: 'UNIT TO VISIT', vis_sec_info: 'VISITOR DETAILS',
    vis_name: 'Full Name', vis_name_ph: 'Name as in IC',
    vis_ic: 'IC No.', vis_ic_ph: 'e.g. 901234-56-7890',
    vis_phone: 'Phone No.', vis_phone_ph: '0123456789',
    vis_sec_veh: 'VEHICLE', vis_v_type: 'Vehicle Type', vis_v_type_ph: 'Select type',
    vis_v_car: 'Car', vis_v_moto: 'Motorcycle', vis_v_lorry: 'Lorry / Van', vis_v_none: 'No Vehicle',
    vis_v_plate: 'Plate No.', vis_v_plate_ph: 'e.g. WXX 1234',
    vis_sec_purp: 'PURPOSE', vis_purpose: 'Purpose', vis_purpose_ph: 'Select purpose',
    vis_purp_visit: 'Social Visit', vis_purp_del: 'Delivery', vis_purp_work: 'Work', vis_purp_rep: 'Repair', vis_purp_oth: 'Others',
    vis_submit: 'Register Now', vis_error_fill: 'Please fill all info.',
    vis_success_title: 'Registration Successful!',
    vis_success_sub: 'Your visitor is ready for entry (Auto-Approved).',
    vis_ref_label: 'REFERENCE CODE',
    vis_qr_hint: 'QR valid 24h · Show to guard',
    vis_copy_code: 'Copy Code', vis_copied: 'Copied!', vis_download_qr: 'Download QR',
    vis_details: 'REGISTRATION DETAILS', vis_new_reg: '+ Register Another',
    role_owner: 'Owner', role_tenant: 'Tenant', role_security: 'Security', role_admin: 'Admin',
    tab_visitors: 'Visitors', tab_log: 'Log', tab_settings: 'Settings', tab_pending: 'Approval',
    status_pending: 'Pending', status_approved: 'Approved', status_checkedin: 'Checked In',
    status_checkedout: 'Checked Out', status_rejected: 'Rejected',
    guard_scan_title: 'SCAN / ENTER CODE', admin_pin_error: 'Wrong password or unit not found.',
    error_not_owner: 'Not an owner account.', error_not_tenant: 'Not a tenant account.',
    search_ph: 'Search name, unit, code...', admin_all_records_desc: 'All entry/exit records',
    admin_all_units: 'All units',
    admin_set_pass_owner: 'Set New Owner Password',
    admin_set_pass_tenant: 'Set New Tenant Password',
    admin_changes: 'Changes',
    admin_no_units: 'No units found.',
    admin_filter_all: 'All Status',
    vis_status_pending: 'Pending',
    vis_status_approved: 'Approved',
    vis_status_checkedin: 'Checked In',
    vis_status_checkout: 'Checked Out',
    vis_status_rejected: 'Rejected',
    tab_units: 'Manage Units',
    admin_edit_prof: 'Edit owner & tenant profiles',
    admin_search: 'Search unit or phone...',
    res_unit_label: 'Unit',
    reg_by_visitor: 'Reg: Self Registered',
    reg_by_owner: 'Reg: Owner',
    reg_by_tenant: 'Reg: Tenant',
    reg_by_guard: 'Reg: Security',
    admin_all_records_desc: 'All entry/exit records',
    admin_all_units: 'All units',
    owner_no_visitors: 'No visitor records.',
    admin_no_units: 'No units found.',
    demo_title: 'DEMO ACCOUNT INFO',
    demo_res_hint: 'Use Unit 4-1 / Pass: 1234',
    demo_sec_hint: 'guard1 / kesuma1125',
    demo_adm_hint: 'admin / kesuma1125',
    admin_saved: 'saved successfully.',
    admin_save_error: 'Save failed. Try again.',
    login_sub: 'Kesuma Residency, Beranang'

  },
  zh: {
    nav_exit: '← 登出', nav_back: '← 返回', save: '保存', loading: '加载中...', 
    enter: '进入', total: '总计', today: '今日', inside: '在内',
    footer: 'Kesuma 公寓 · 访客系统 v2.2',
    login_title: 'Kesuma <span>物业</span>',
    index_subtitle: 'Kesuma 公寓, Beranang',
    login_resident: '🏠 住户', login_security: '🛡️ 保安', login_admin: '⚙️ 管理员',
    login_res_title: '住户登录', login_sec_title: '保安登录', login_adm_title: '管理员登录',
    res_type_label: '住户类型', res_type_ph: '— 选择类型 —',
    login_type_owner: '业主', login_type_tenant: '租客',
    res_floor_label: '楼层', res_floor_ph: '— 选择楼层 —',
    res_unit_label: '单位号', res_unit_ph: '— 选择单位 —',
    password_label: '密码', username_label: '用户名', login_btn: '登录',
    vis_reg_title: '访客登记',
    vis_sec_unit: '访问单位', vis_sec_info: '访客信息',
    vis_name: '全名', vis_name_ph: '身份证上的姓名',
    vis_ic: '身份证/护照号', vis_ic_ph: '例如: 901234-56-7890',
    vis_phone: '电话号码', vis_phone_ph: '0123456789',
    vis_sec_veh: '车辆信息', vis_v_type: '车辆类型', vis_v_type_ph: '选择类型',
    vis_v_car: '轿车', vis_v_moto: '摩托车', vis_v_lorry: '罗里 / 面包车', vis_v_none: '无车辆',
    vis_v_plate: '车牌号', vis_v_plate_ph: '例如: WXX 1234',
    vis_sec_purp: '访问目的', vis_purpose: '目的', vis_purpose_ph: '选择目的',
    vis_purp_visit: '探访', vis_purp_del: '送货', vis_purp_work: '工作', vis_purp_rep: '维修', vis_purp_oth: '其他',
    vis_submit: '立即登记', vis_error_fill: '请填写所有必填信息。',
    vis_success_title: '登记成功！',
    vis_success_sub: '访客可以进入（自动批准）。',
    vis_ref_label: '参考代码',
    vis_qr_hint: 'QR码24小时有效 · 出示给保安',
    vis_copy_code: '复制', vis_copied: '已复制！', vis_download_qr: '下载QR码',
    vis_details: '登记详情', vis_new_reg: '+ 登记另一位',
    role_owner: '业主', role_tenant: '租客', role_security: '保安', role_admin: '管理员',
    tab_visitors: '访客', tab_log: '记录', tab_settings: '设置', tab_pending: '审核',
    status_pending: '等待中', status_approved: '已批准', status_checkedin: '已进入',
    status_checkedout: '已离开', status_rejected: '已拒绝',
    guard_scan_title: '扫描或输入代码', admin_pin_error: '密码错误或单位未找到。',
    error_not_owner: '非业主账号。', error_not_tenant: '非租客账号。',
    search_ph: '搜索...', 
    admin_all_records_desc: '所有进入/离开记录',
    admin_all_units: '所有单位',
    admin_set_pass_owner: '设置业主新密码',
    admin_set_pass_tenant: '设置租客新密码',
    admin_changes: '更改',
    admin_no_units: '未找到单位',
    admin_filter_all: '所有状态',
    vis_status_pending: '等待中',
    vis_status_approved: '已批准',
    vis_status_checkedin: '已进入',
    vis_status_checkout: '已离开',
    vis_status_rejected: '已拒绝',
    tab_units: '管理单位',
    admin_edit_prof: '编辑业主和租客资料',
    admin_search: '搜索单位或电话...',
    res_unit_label: '单位',
    reg_by_visitor: '登记: 访客自主',
    reg_by_owner: '登记: 业主',
    reg_by_tenant: '登记: 租客',
    reg_by_guard: '登记: 保安',
    admin_all_records_desc: '所有出入记录',
    admin_all_units: '所有单位',
    owner_no_visitors: '无访客记录',
    admin_no_units: '未找到单位',
    demo_title: '演示账号信息',
    demo_res_hint: '使用单位 4-1 / 密码: 1234',
    demo_sec_hint: 'guard1 / kesuma1125',
    demo_adm_hint: 'admin / kesuma1125',
    admin_saved: '已成功保存。',
    admin_save_error: '保存失败。请重试。',
    login_sub: 'Kesuma 公寓, Beranang'
  },
  ta: {
    nav_exit: '← வெளியேறு', nav_back: '← பின்னால்', save: 'சேமி', loading: 'ஏற்றுகிறது...', 
    enter: 'உள்நுழை', total: 'மொத்தம்', today: 'இன்று', inside: 'உள்ளே',
    footer: 'கெசுமா ரெசிடென்சி · பார்வையாளர் அமைப்பு v2.2',
    login_title: 'கெசுமா <span>JMB</span>',
    index_subtitle: 'கெசுமா ரெசிடென்சி, பெரானாங்',
    login_resident: '🏠 குடியிருப்பாளர்', login_security: '🛡️ பாதுகாப்பு', login_admin: '⚙️ நிர்வாகி',
    login_res_title: 'குடியிருப்பாளர் உள்நுழைவு', login_sec_title: 'பாதுகாப்பு உள்நுழைவு', login_adm_title: 'நிர்வாகி உள்நுழைவு',
    res_type_label: 'வகை', res_type_ph: '— தேர்ந்தெடுக்கவும் —',
    login_type_owner: 'உரிமையாளர்', login_type_tenant: 'வாடகைதாரர்',
    res_floor_label: 'தளம்', res_floor_ph: '— தேர்ந்தெடுக்கவும் —',
    res_unit_label: 'வீட்டு எண்', res_unit_ph: '— தேர்ந்தெடுக்கவும் —',
    password_label: 'கடவுச்சொல்', username_label: 'பயனர் பெயர்', login_btn: 'உள்நுழைக',
    vis_reg_title: 'பார்வையாளர் பதிவு',
    vis_sec_unit: 'பார்க்க வேண்டிய வீடு', vis_sec_info: 'பார்வையாளர் விவரங்கள்',
    vis_name: 'முழு பெயர்', vis_name_ph: 'பெயர் (IC இல் உள்ளபடி)',
    vis_ic: 'IC எண்', vis_ic_ph: 'உதாரணம்: 901234-56-7890',
    vis_phone: 'தொலைபேசி எண்', vis_phone_ph: '0123456789',
    vis_sec_veh: 'வாகனம்', vis_v_type: 'வாகன வகை', vis_v_type_ph: 'தேர்ந்தெடுக்கவும்',
    vis_v_car: 'கார்', vis_v_moto: 'மோட்டார் சைக்கிள்', vis_v_lorry: 'லாரி / வேன்', vis_v_none: 'வாகனம் இல்லை',
    vis_v_plate: 'வாகன எண்', vis_v_plate_ph: 'உதாரணம்: WXX 1234',
    vis_sec_purp: 'நோக்கம்', vis_purpose: 'நோக்கம்', vis_purpose_ph: 'தேர்ந்தெடுக்கவும்',
    vis_purp_visit: '探探探探探探', vis_purp_del: 'பொருட்கள் வழங்கல்', vis_purp_work: 'வேலை', vis_purp_rep: 'பழுதுபார்த்தல்', vis_purp_oth: 'மற்றவை',
    vis_submit: 'பதிவு செய்க', vis_error_fill: 'அனைத்து விவரங்களையும் நிரப்பவும்.',
    vis_success_title: 'பதிவு முடிந்தது!',
    vis_success_sub: 'பார்வையாளர் நுழையலாம் (தானாக அங்கீகரிக்கப்பட்டது).',
    vis_ref_code: 'குறிப்பு எண்',
    vis_qr_hint: 'QR 24 மணிநேரம் செல்லும் · பாதுகாப்பிடம் காட்டவும்',
    vis_copy_code: 'நகல் எடு', vis_copied: 'நகலெடுக்கப்பட்டது!', vis_download_qr: 'பதிவிறக்கம் செய்க',
    vis_details: 'பதிவு விவரங்கள்', vis_new_reg: '+ மற்றொன்றை பதிவு செய்க',
    role_owner: 'உரிமையாளர்', role_tenant: 'வாடகைதாரர்', role_security: 'பாதுகாப்பு', role_admin: 'நிர்வாகி',
    tab_visitors: 'பார்வையாளர்கள்', tab_log: 'பதிவு', tab_settings: 'அமைப்புகள்', tab_pending: 'அங்கீகாரம்',
    status_pending: 'காத்திருக்கிறது', status_approved: 'அங்கீகரிக்கப்பட்டது', status_checkedin: 'உள்ளே வந்துள்ளார்',
    status_checkedout: 'வெளியேறியுள்ளார்', status_rejected: 'நிராகரிக்கப்பட்டது',
    guard_scan_title: 'ஸ்கேன் செய்யவும்', admin_pin_error: 'தவறான கடவுச்சொல்.',
    error_not_owner: 'இது உரிமையாளர் கணக்கு அல்ல.', error_not_tenant: 'இது வாடகைதாரர் கணக்கு அல்ல.',
    search_ph: 'தேடவும்...',
    admin_all_records_desc: 'அனைத்து நுழைவு/வெளியேறும் பதிவுகள்',
    admin_all_units: 'அனைத்து வீடுகள்',
    admin_set_pass_owner: 'உரிமையாளர் புதிய கடவுச்சொல்லை அமைக்கவும்',
    admin_set_pass_tenant: 'வாடகைதாரர் புதிய கடவுச்சொல்லை அமைக்கவும்',
    admin_changes: 'மாற்றங்கள்',
    admin_no_units: 'வீடுகள் எதுவும் காணப்படவில்லை',
    admin_filter_all: 'அனைத்து நிலை',
    vis_status_pending: 'காத்திருக்கிறது',
    vis_status_approved: 'அங்கீகரிக்கப்பட்டது',
    vis_status_checkedin: 'உள்ளே வந்துள்ளார்',
    vis_status_checkout: 'வெளியேறியுள்ளார்',
    vis_status_rejected: 'நிராகரிக்கப்பட்டது',
    tab_units: 'வீட்டு மேலாண்மை',
    admin_edit_prof: 'விவரங்களைத் திருத்தவும்',
    admin_search: 'வீடு அல்லது போன் தேடவும்...',
    res_unit_label: 'வீடு',
    reg_by_visitor: 'பதிவு: பார்வையாளர் சுய பதிவு',
    reg_by_owner: 'பதிவு: உரிமையாளர்',
    reg_by_tenant: 'பதிவு: வாடகைதாரர்',
    reg_by_guard: 'பதிவு: பாதுகாப்பு',
    admin_all_records_desc: 'அனைத்து நுழைவு/வெளியேறும் பதிவுகள்',
    admin_all_units: 'அனைத்து வீடுகள்',
    owner_no_visitors: 'பார்வையாளர் பதிவுகள் இல்லை',
    admin_no_units: 'வீடுகள் எதுவும் காணப்படவில்லை',
    demo_title: 'டெமோ கணக்கு தகவல்',
    demo_res_hint: 'வீடு 4-1 / கடவுச்சொல்: 1234',
    demo_sec_hint: 'guard1 / kesuma1125',
    demo_adm_hint: 'admin / kesuma1125',
    admin_saved: 'வெற்றிகரமாக சேமிக்கப்பட்டது.',
    admin_save_error: 'சேமிக்க முடியவில்லை. மீண்டும் முயற்சிக்கவும்.',
    login_sub: 'கெசுமா ரெசிடென்சி, பெரானாங்'
  }
};

// --- LOGIK BAHASA ---
let _langContainerId = 'langSwitcher';

function getLang() { return localStorage.getItem('kjmb_lang') || 'ms'; }

function setLang(lang) {
  localStorage.setItem('kjmb_lang', lang);
  applyTranslations(); 
  renderLangSwitcher(_langContainerId); // Re-render tanda checkmark
  location.reload(); // Refresh paling selamat untuk i18n
}

function t(key) {
  const lang = getLang();
  return TRANSLATIONS[lang][key] || TRANSLATIONS['ms'][key] || key;
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const translation = t(key);
    
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      if (el.placeholder !== undefined) el.placeholder = translation;
    } else {
      el.innerHTML = translation;
    }
  });
}

function renderLangSwitcher(containerId) {
  const el = document.getElementById(containerId);
  if (!el) return;
  _langContainerId = containerId;

  const cur = getLang();
  const langs = [
    { code: 'ms', label: '🇲🇾 BM' },
    { code: 'en', label: '🇬🇧 EN' },
    { code: 'zh', label: '🇨🇳 中文' },
    { code: 'ta', label: '🇮🇳 தமிழ்' }
  ];

  const currentLabel = langs.find(l => l.code === cur).label;

  el.innerHTML = `
    <div class="_dd" style="position:relative">
      <button id="_langLabel" class="_dd-btn" onclick="_toggleDD(this)" title="Language">
        ${currentLabel.split(' ')[1]}
      </button>
      <div class="_dd-panel" style="display:none;position:absolute;right:0;top:calc(100% + 6px);background:var(--surface);border:1px solid var(--border);border-radius:10px;padding:4px;min-width:120px;z-index:200;box-shadow:var(--shadow)">
        ${langs.map(l => {
          const isActive = l.code === cur;
          return `
            <div onclick="setLang('${l.code}')" 
                 style="display:flex;align-items:center;justify-content:space-between;padding:8px 10px;border-radius:7px;cursor:pointer;font-size:12px;font-weight:600;
                        background:${isActive ? 'var(--accent-dim)' : 'transparent'};
                        color:${isActive ? 'var(--accent)' : 'var(--text-muted)'};
                        transition:all 0.15s"
                 onmouseover="if(this.style.background!=='var(--accent-dim)') this.style.background='var(--surface2)'" 
                 onmouseout="if(this.style.background!=='var(--accent-dim)') this.style.background='transparent'">
              <span>${l.label}</span>
              <span>${isActive ? '✓' : ''}</span>
            </div>`;
        }).join('')}
      </div>
    </div>`;
}

document.addEventListener('DOMContentLoaded', applyTranslations);