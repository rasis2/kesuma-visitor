// ── KESUMA JMB v2 API ──────────────────────────────────────
const SB_URL = 'https://zoxrgkiuamxaxysmcgby.supabase.co'
const SB_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpveHJna2l1YW14YXh5c21jZ2J5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzMzNDE1MTEsImV4cCI6MjA4ODkxNzUxMX0.E0x78HYdnLwm9qLbhxnaJNzXwurrRPp2xLALdNpJLCk'

function sbHeaders() {
  return { 'Content-Type':'application/json', 'apikey':SB_KEY, 'Authorization':'Bearer '+SB_KEY, 'Prefer':'return=representation' }
}
function sbFetch(path, opts={}) {
  return fetch(SB_URL+path, { headers:sbHeaders(), ...opts })
}

// ── AUTH / LOGIN ───────────────────────────────────────────
async function apiLoginByPhone(phone) {
  const enc = encodeURIComponent(phone)
  const r = await sbFetch('/rest/v1/v2_owners?select=*&or=(phone.eq.'+enc+',tenant1.eq.'+enc+',tenant2.eq.'+enc+',tenant3.eq.'+enc+')')
  const d = await r.json()
  if (!d.length) return null
  const row = d[0]
  return { ...row, role: row.phone===phone ? 'owner' : 'tenant', loginPhone: phone }
}

// ── OWNERS ─────────────────────────────────────────────────
async function apiGetOwner(unit) {
  const r = await sbFetch('/rest/v1/v2_owners?unit=eq.'+encodeURIComponent(unit)+'&select=*')
  const d = await r.json(); return d[0]||null
}
async function apiUpdateOwnerPhone(unit, phone) {
  const r = await sbFetch('/rest/v1/v2_owners?unit=eq.'+encodeURIComponent(unit), { method:'PATCH', body:JSON.stringify({phone}) })
  return r.ok
}
async function apiUpdateTenantSlot(unit, slot, phone) {
  const r = await sbFetch('/rest/v1/v2_owners?unit=eq.'+encodeURIComponent(unit), { method:'PATCH', body:JSON.stringify({[slot]: phone||null}) })
  return r.ok
}
async function apiGetAllOwners() {
  const r = await sbFetch('/rest/v1/v2_owners?order=unit.asc&select=*'); return r.json()
}
async function apiAdminUpdateOwner(unit, data) {
  const r = await sbFetch('/rest/v1/v2_owners?unit=eq.'+encodeURIComponent(unit), { method:'PATCH', body:JSON.stringify(data) })
  return r.ok
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
    const chk = await sbFetch('/rest/v1/v2_visitors?ref_code=eq.'+ref_code+'&select=id')
    if(!(await chk.json()).length) break
  } while(true)
  const r = await sbFetch('/rest/v1/v2_visitors', { method:'POST', body:JSON.stringify({...payload, ref_code, status:'Pending'}) })
  const d = await r.json(); return Array.isArray(d)?d[0]:d
}
async function apiGetVisitorByRef(ref_code) {
  const r = await sbFetch('/rest/v1/v2_visitors?ref_code=eq.'+encodeURIComponent(ref_code)+'&select=*')
  const d = await r.json(); return d[0]||null
}
async function apiGetVisitorsByUnit(unit) {
  const r = await sbFetch('/rest/v1/v2_visitors?unit=eq.'+encodeURIComponent(unit)+'&order=created_at.desc&select=*')
  return r.json()
}
async function apiGetAllVisitors() {
  const r = await sbFetch('/rest/v1/v2_visitors?order=created_at.desc&select=*'); return r.json()
}
async function apiUpdateVisitorStatus(id, status, extra={}) {
  const now = new Date().toISOString()
  const upd = { status, ...extra }
  if(status==='Approved') { upd.approved_at=now; upd.expires_at=new Date(Date.now()+86400000).toISOString() }
  if(status==='Checked In')  upd.checked_in_at=now
  if(status==='Checked Out') upd.checked_out_at=now
  const r = await sbFetch('/rest/v1/v2_visitors?id=eq.'+id, { method:'PATCH', body:JSON.stringify(upd) })
  return r.ok
}
function isExpired(v) { return v.expires_at && new Date()>new Date(v.expires_at) }
