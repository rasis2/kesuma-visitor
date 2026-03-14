function showToast(msg, type='') {
  const el=document.getElementById('toast'); if(!el) return
  el.textContent=msg; el.className=`toast ${type} show`
  setTimeout(()=>el.className='toast',2800)
}

function fmtDate(ts) {
  if(!ts) return '—'
  return new Date(ts).toLocaleString('ms-MY',{day:'numeric',month:'short',hour:'2-digit',minute:'2-digit'})
}

function fmtDateFull(ts) {
  if(!ts) return '—'
  return new Date(ts).toLocaleString('ms-MY',{day:'numeric',month:'short',year:'numeric',hour:'2-digit',minute:'2-digit'})
}

const STATUS_BADGE = {
  'Pending':'badge-pending', 'Approved':'badge-done',
  'Rejected':'badge-urgent', 'Checked In':'badge-done', 'Checked Out':'badge-pending'
}
const STATUS_KEY = {
  'Pending':'vis_status_pending', 'Approved':'vis_status_approved',
  'Rejected':'vis_status_rejected', 'Checked In':'vis_status_checkedin', 'Checked Out':'vis_status_checkout'
}

function statusBadge(status) {
  return `<span class="badge-status ${STATUS_BADGE[status]||'badge-pending'}">${t(STATUS_KEY[status]||'vis_status_pending')}</span>`
}

function regByLabel(registered_by) {
  const map = { owner:'reg_by_owner', tenant:'reg_by_tenant', guard:'reg_by_guard', visitor:'reg_by_visitor' }
  return t(map[registered_by]||'reg_by_visitor')
}

// Floor/unit dropdown helpers
const FLOORS = Array.from({length:19},(_,i)=>i+4)
const UNITS  = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,'23A',25]

function buildFloorSelect(selId, onchange='') {
  const sel=document.getElementById(selId); if(!sel) return
  sel.innerHTML=`<option value="">— Pilih Tingkat —</option>`+
    FLOORS.map(f=>`<option value="${f}">Tingkat ${f}</option>`).join('')
  if(onchange) sel.setAttribute('onchange', onchange)
}

function buildUnitSelect(selId, floor, onchange='') {
  const sel=document.getElementById(selId); if(!sel) return
  sel.innerHTML=`<option value="">— Pilih Unit —</option>`+
    UNITS.map(u=>`<option value="${floor}-${u}">Unit ${u}</option>`).join('')
  if(onchange) sel.setAttribute('onchange', onchange)
}
