let handler = m => m

let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
handler.before = async function (m, { user, isBotAdmin, isAdmin }) {
  if ((m.isBaileys && m.fromMe) || m.fromMe || !m.isGroup) return true
  let chat = global.DATABASE.data.chats[m.chat]
  let isGroupLink = linkRegex.exec(m.text)

  if (chat.antiLink && isGroupLink) {
    await m.reply(`*「 ANTI LINK 」*\n\nDetectado *${await this.getName(m.sender)}* ¡Has enviado enlace(s) de grupo(s)! 🤨 \n\n¡Lo siento, serás expulsado de este grupo, adiós! `)
    if (isAdmin) return m.reply('*Eres administrador, no te echarán.* 😆')
    if (!isBotAdmin) return m.reply('El bot no es administrador, ¿cómo puedo patear a la gente? 🥵')
    let linkGC = ('https://chat.whatsapp.com/' + await this.groupInviteCode(m.chat))
    let isLinkThisGc = new RegExp(linkGC, 'i')
    let isgclink = isLinkThisGc.test(m.text)
    if (isgclink) return m.reply('* Lol envía tu propio enlace de grupo *')
    await this.groupRemove(m.chat, [m.sender])
  }
  return true
}

module.exports = handler
