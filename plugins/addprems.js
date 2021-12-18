const { MessageType } = require('@adiwajshing/baileys')

let handler = async(m, { conn, text }) => {
let who
  if (m.isGroup) who = m.mentionedJid[0]
  else who = m.chat
  if (!who) throw '¡Marque uno e ingrese el número para verificación!'
  // if (participants.map(v=>v.jid).includes(global.conn.user.jid)) {
    global.DATABASE._data.chats[m.chat].premium = true
  var nomor = m.sender
    m.reply(`*Hecho con éxito agregado Usuario✅*\n\n*Número: wa.me/${nomor.split("@s.whatsapp.net")[0]}\n*Expired:* 30Days\n*¡Gracias por la primera añadida!*`)
  // } else m.reply('Aquí hay un número de host ...')
}
handler.help = ['addprems <nomor>']
handler.tags = ['owner']
handler.command = /^addprems$/i
handler.rowner = true

module.exports = handler
