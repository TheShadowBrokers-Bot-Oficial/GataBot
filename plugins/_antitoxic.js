let handler = m => m

let linkRegex = /(ton|to|ta))|(mal|la|lo)/
handler.before = function (m, { user }) {
  if (m.isBaileys && m.fromMe) return true
  if (/masuk|lanjutkan|banjir|(per)?panjang/g.exec(m.text)) return true
  let chat = global.DATABASE.data.chats[m.chat]
  let isGroupToxic = linkRegex.exec(m.text)

  if (chat.antiToxic && isGroupToxic) {
    m.reply('¡No seas tóxico, eh! 😡 \n' + readMore + '\n¿Quieres apagarlo? escribe */desactivar antitóxico*')
    if (global.opts['restrict']) {
      // if (!user.isAdmin) return true
      // this.groupRemove(m.chat, [m.sender])
    }
  }
  return true
}

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
