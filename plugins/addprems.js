const { MessageType } = require('@adiwajshing/baileys')

let handler = async(m, { conn, text }) => {
let who
  if (m.isGroup) who = m.mentionedJid[0]
  else who = m.chat
  if (!who) throw '¡Marque uno y etiquete un número para verificación!'
  // if (participants.map(v=>v.jid).includes(global.conn.user.jid)) {
    global.DATABASE._data.chats[m.chat].premium = true
  var nomor = m.sender
    m.reply(`*Hecho con éxito. Usuario agregado ✅*\n\n💠 *Número: wa.me/${nomor.split("@s.whatsapp.net")[0]}*\n💠 *Expiración: 30 Días*\n\n*¡Gracias por la añadida! 😳*`)
  // } else m.reply('Aquí hay un número de host ...')
}
handler.help = ['addpremium < etiquetar número>']
handler.tags = ['owner']
handler.command = /^addprems$/i
handler.rowner = true

module.exports = handler
