let { WAMessageProto } = require('@adiwajshing/baileys')
let handler = async (m, { command, usedPrefix, text }) => {
    let M = WAMessageProto.WebMessageInfo
    let which = command.replace(/\+|add/i, '')
    if (!m.quoted) throw 'Reply Pesan!'
    if (!text) throw `Usar *${usedPrefix}list${which}* para ver la lista`
    let msgs = global.DATABASE._data.msgs
    if (text in msgs) throw `'${text}' se ha registrado en la lista de mensajes`
    msgs[text] = M.fromObject(await m.getQuotedObj()).toJSON()
    m.reply(`Mensaje agregado exitosamente en la lista de mensajes como '${text}'
    
Accede con ${usedPrefix}get${which} ${text}

o escriba directamente el texto.`)
}
handler.help = ['vn', 'msg', 'video', 'gif', 'audio', 'img', 'sticker'].map(v => 'add' + v + ' <teks>')
handler.tags = ['database']
handler.command = /^(\+|add)(vn|msg|video|audio|img|stic?ker|gif)$/

module.exports = handler
