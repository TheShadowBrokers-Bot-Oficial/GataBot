let handler = async (m, { text }) => {
  let user = global.DATABASE.data.users[m.sender]
  user.afk = + new Date
  user.afkReason = text
  m.reply(`
😹 *${conn.getName(m.sender)}* establecio un nuevo AFK${text ? ': ' + text : ''}
`)
}
handler.help = ['afk [Escribe tú mensaje]']
handler.tags = ['Solocitar inactividad']
handler.command = /^afk$/i

module.exports = handler
