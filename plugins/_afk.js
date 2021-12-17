let handler = m => m
handler.before = m => {
  let user = global.DATABASE.data.users[m.sender]
  if (user.afk > -1) {
    m.reply(
*_✳️ Dejaste de estar inactivo (AFK)${user.afkReason ? ' después de estar inactivo (AFK) por el motivo: ' + user.afkReason : ''}_*

*_⌛️ Tiempo de inactividad: ${clockString(new Date - user.afk)}_*
.trim())
    user.afk = -1
    user.afkReason = ''
  }
  let jids = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
  for (let jid of jids) {
    let user = global.DATABASE.data.users[jid]
    if (!user) continue
    let afkTime = user.afk
    if (!afkTime || afkTime < 0) continue
    let reason = user.afkReason || ''
    m.reply(
*_⚠️ No lo etiquetes!!! ⚠️_*

*_✳️ El usuario que mencionas está inactivo (AFK)_*

*_👉${reason ? 'Motivo de inactividad: ' + reason : 'Motivo de inactividad: El usuario no especifico un motivo'}_*

*_⌛️ Tiempo transcurrido de inactividad: ${clockString(new Date - afkTime)}_*
.trim())
  }
  return true
}

module.exports = handler

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}

