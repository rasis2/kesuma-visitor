const THEMES = ['obsidian', 'light', 'breeze', 'candy']
const THEME_LABELS = { obsidian: '🌑 Obsidian', light: '☀️ Light', breeze: '🌊 Breeze', candy: '🍬 Candy' }
const THEME_ICONS = { obsidian: '🌑', light: '☀️', breeze: '🌊', candy: '🍬' }

// Simpan ID container supaya kita boleh re-render bila tukar tema
let _themeContainerId = 'themeSwitcher'

function getTheme() { 
  return localStorage.getItem('kp_theme') || 'obsidian' 
}

function setTheme(theme) {
  localStorage.setItem('kp_theme', theme)
  document.documentElement.setAttribute('data-theme', theme)
  
  // Kemaskini label butang utama
  const lbl = document.getElementById('_themeLabel')
  if (lbl) lbl.textContent = THEME_ICONS[theme] || theme
  
  // Re-render switcher supaya tanda "✓" berpindah ke tema baru
  renderThemeSwitcher(_themeContainerId)
  
  // Tutup dropdown selepas pilih
  document.querySelectorAll('._dd-panel').forEach(p => p.style.display = 'none')
}

function applyTheme() { 
  const current = getTheme()
  document.documentElement.setAttribute('data-theme', current)
}

function renderThemeSwitcher(containerId) {
  const el = document.getElementById(containerId)
  if (!el) return
  _themeContainerId = containerId // Simpan ID untuk kegunaan setTheme
  
  const cur = getTheme()
  
  el.innerHTML = `
    <div class="_dd" style="position:relative">
      <button id="_themeLabel" class="_dd-btn" onclick="_toggleDD(this)" title="Theme">
        ${THEME_ICONS[cur] || '🎨'}
      </button>
      <div class="_dd-panel" style="display:none;position:absolute;right:0;top:calc(100% + 6px);background:var(--surface);border:1px solid var(--border);border-radius:10px;padding:4px;min-width:130px;z-index:200;box-shadow:0 4px 20px rgba(0,0,0,0.2)">
        ${THEMES.map(t => {
          const isActive = t === cur
          return `
            <div onclick="setTheme('${t}')" 
                 style="display:flex;align-items:center;justify-content:space-between;padding:8px 10px;border-radius:7px;cursor:pointer;font-size:12px;font-weight:600;
                        background:${isActive ? 'var(--accent-dim)' : 'transparent'};
                        color:${isActive ? 'var(--accent)' : 'var(--text-muted)'};
                        transition:all 0.15s"
                 onmouseover="if(this.style.background!=='var(--accent-dim)') this.style.background='var(--surface2)'" 
                 onmouseout="if(this.style.background!=='var(--accent-dim)') this.style.background='transparent'">
              <span>${THEME_LABELS[t]}</span>
              <span>${isActive ? '✓' : ''}</span>
            </div>`
        }).join('')}
      </div>
    </div>`
}

function _toggleDD(btn) {
  const panel = btn.nextElementSibling
  const isOpen = panel.style.display === 'block'
  // Tutup semua dropdown lain dulu
  document.querySelectorAll('._dd-panel').forEach(p => p.style.display = 'none')
  if (!isOpen) panel.style.display = 'block'
}

// Tutup dropdown bila klik luar
document.addEventListener('click', e => {
  if (!e.target.closest('._dd')) {
    document.querySelectorAll('._dd-panel').forEach(p => p.style.display = 'none')
  }
})

// Jalankan tema semasa load
applyTheme()