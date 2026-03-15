function renderNav(titleKey, session) {
  const nav = document.getElementById('mainNav'); if (!nav) return
  const s = session || getSession()
  const roleLabel = s ? ({ owner:'Owner', tenant:'Tenant', security:'Security', admin:'Admin' }[s.role] || '') : ''
  nav.innerHTML = `
    <a href="index.html" class="nav-back" onclick="clearSession();return true">← Keluar</a>
    <span class="nav-title">${roleLabel}</span>
    <div style="margin-left:auto;display:flex;gap:8px;align-items:center">
      <div id="themeSwitcher"></div>
      <div id="langSwitcher"></div>
    </div>`
  renderThemeSwitcher('themeSwitcher')
  renderLangSwitcher('langSwitcher')
}
