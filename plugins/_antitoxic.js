let handler = m => m

let linkRegex = /(ton(ta|to(([ie])ng|([ie])r)?)|es?tupi?do|estu?pi?da|as?co|fu?ck|bo(bo|ba)k|babo?so|ba?bosa|sa([iueo])bl([iueo])(k|g)|g (gusa(na|no)|(bast(ardo|arda)|(mise(ria|rio)([iueo])|(car?ajo)|?|(se(xo|xy)|me?nso|?|men?sa|b l ([iueo]) (k|g)|a (n j (i n g|i r)?)s u|col(i|ay)|an?jg|b([ia])ngs([ia])?t|t([iuo])l([iuo])l)/i
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
