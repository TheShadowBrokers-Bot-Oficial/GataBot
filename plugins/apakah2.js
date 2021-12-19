let handler = async (m, { conn, command, text }) => {
  conn.reply(m.chat, `
🐣 *Pregunta:* ${command} ${text}
🐥 *Respuesta:* ${pickRandom(['Sí ',' Quizás sí ',' Quizás ',' Probablemente no ',' No ',' De ninguna manera ',' Es probable... ',' No es probable ',' Es imposible ',' No es imposible'])}
`.trim(), m, m.mentionedJid ? {
    contextInfo: {
      mentionedJid: m.mentionedJid
    }
  } : {})
}
handler.help = ['pregunta <texto>']
handler.tags = ['kerang']
handler.command = /^pregunta/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

