// ── KESUMA JMB v2.2 API ────────────────────────────────────
const SB_URL = 'https://zoxrgkiuamxaxysmcgby.supabase.co'
const SB_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpveHJna2l1YW14YXh5c21jZ2J5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMzNDE1MTEsImV4cCI6MjA4ODkxNzUxMX0.E0x78HYdnLwm9qLbhxnaJNzXwurrRPp2xLALdNpJLCk'

function sbHeaders() {
  return { 'Content-Type':'application/json', 'apikey':SB_KEY, 'Authorization':'Bearer '+SB_KEY, 'Prefer':'return=representation' }
}
function sbFetch(path, opts={}) {
  return fetch(SB_URL+path, { headers:sbHeaders(), ...opts })
}

// ── SESSION ────────────────────────────────────────────────
function saveSession(data) { localStorage.setItem('kjmb_session', JSON.stringify(data)) }
function getSession()      { try { return JSON.parse(localStorage.getItem('kjmb_session')) } catch { return null } }
function clearSession()    { localStorage.removeItem('kjmb_session') }

function requireSession(allowedRoles) {
  const s = getSession()
  if (!s) { location.href = 'index.html'; return null }
  if (allowedRoles && !allowedRoles.includes(s.role)) { location.href = 'index.html'; return null }
  return s
}

// ── AUTH LOGIN ─────────────────────────────────────────────
async function apiLoginResident(unit, password) {
  const r = await sbFetch('/rest/v1/v2_owners?unit=eq.'+encodeURIComponent(unit)+'&select=*')
  const d = await r.json()
  if (!d.length) return null
  const row = d[0]

  // Check owner password
  if (row.password && row.password === password) {
    return { role:'owner', unit:row.unit, name:'Unit '+row.unit, phone:row.phone, email:row.email, row }
  }
  // Check tenant slots
  const tenants = [
    { slot:'tenant1', phone:row.tenant1, email:row.tenant1_email, password:row.tenant1_password },
    { slot:'tenant2', phone:row.tenant2, email:row.tenant2_email, password:row.tenant2_password },
    { slot:'tenant3', phone:row.tenant3, email:row.tenant3_email, password:row.tenant3_password },
  ]
  for (const t of tenants) {
    if (t.password && t.password === password) {
      return { role:'tenant', unit:row.unit, name:'Unit '+row.unit, phone:t.phone, email:t.email, slot:t.slot, row }
    }
  }
  return null
}

async function apiLoginSecurity(username, password) {
  const r = await sbFetch('/rest/v1/v2_security?username=eq.'+encodeURIComponent(username)+'&select=*')
  const d = await r.json()
  if (!d.length || d[0].password !== password) return null
  return { role:'security', id:d[0].id, name:d[0].name||username, username }
}

async function apiLoginAdmin(username, password) {
  const r = await sbFetch('/rest/v1/v2_admin?username=eq.'+encodeURIComponent(username)+'&select=*')
  const d = await r.json()
  if (!d.length || d[0].password !== password) return null
  return { role:'admin', id:d[0].id, name:d[0].name||username, username }
}

// ── OWNERS ─────────────────────────────────────────────────
async function apiGetOwner(unit) {
  const r = await sbFetch('/rest/v1/v2_owners?unit=eq.'+encodeURIComponent(unit)+'&select=*')
  const d = await r.json(); return d[0]||null
}
async function apiUpdateOwner(unit, data) {
  const r = await sbFetch('/rest/v1/v2_owners?unit=eq.'+encodeURIComponent(unit), { method:'PATCH', body:JSON.stringify(data) })
  return r.ok
}
async function apiGetAllOwners() {
  const r = await sbFetch('/rest/v1/v2_owners?order=unit.asc&select=*'); return r.json()
}

// ── VISITORS ───────────────────────────────────────────────
function genRef() {
  const c='ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; let s='KES'
  for(let i=0;i<6;i++) s+=c[Math.floor(Math.random()*c.length)]; return s
}
async function apiRegisterVisitor(payload) {
  let ref_code, tries=0
  do {
    ref_code=genRef(); tries++
    if(tries>10) throw new Error('ref fail')
    const chk=await sbFetch('/rest/v1/v2_visitors?ref_code=eq.'+ref_code+'&select=id')
    if(!(await chk.json()).length) break
  } while(true)
  const r=await sbFetch('/rest/v1/v2_visitors',{method:'POST',body:JSON.stringify({...payload,ref_code,status:'Approved'})})
  const d=await r.json(); return Array.isArray(d)?d[0]:d
}
async function apiGetVisitorByRef(ref_code) {
  const r=await sbFetch('/rest/v1/v2_visitors?ref_code=eq.'+encodeURIComponent(ref_code)+'&select=*')
  const d=await r.json(); return d[0]||null
}
async function apiGetVisitorsByUnit(unit) {
  const r=await sbFetch('/rest/v1/v2_visitors?unit=eq.'+encodeURIComponent(unit)+'&order=created_at.desc&select=*')
  return r.json()
}
async function apiGetAllVisitors() {
  const r=await sbFetch('/rest/v1/v2_visitors?order=created_at.desc&select=*'); return r.json()
}
async function apiUpdateVisitorStatus(id, status, extra={}) {
  const now=new Date().toISOString()
  const upd={status,...extra}
  if(status==='Approved'){upd.approved_at=now;upd.expires_at=new Date(Date.now()+86400000).toISOString()}
  if(status==='Checked In') upd.checked_in_at=now
  if(status==='Checked Out') upd.checked_out_at=now
  const r=await sbFetch('/rest/v1/v2_visitors?id=eq.'+id,{method:'PATCH',body:JSON.stringify(upd)})
  return r.ok
}
function isExpired(v) { return v.expires_at && new Date()>new Date(v.expires_at) }
