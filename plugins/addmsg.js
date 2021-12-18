let { WAMessageProto } = require('@adiwajshing/baileys')
let handler = async (m, { command, usedPrefix, text }) => {
    let M = WAMessageProto.WebMessageInfo
    let which = command.replace(/\+|add/i, '')
    if (!m.quoted) throw '🍁 ¡Mensaje de respuesta!'
    if (!text) throw `Usar *${usedPrefix}list${which}* para ver la lista`
    let msgs = global.DATABASE._data.msgs
    if (text in msgs) throw `'${text}'📝 se ha registrado en la lista de mensajes`
    msgs[text] = M.fromObject(await m.getQuotedObj()).toJSON()
    m.reply(`⚘ Mensaje agregado exitosamente en la lista de mensajes como *"${text}".* 
    
🤔 Recuerda registrar la palabra clave etiquetando en mensaje, audio, imagen, video, sticker, etc...
    
👀 Accede con *${usedPrefix}get${which} ${text}* o escriba directamente el texto (palabra clave).`)
}
handler.help = ['vn', 'mensaje', 'video', 'gif', 'audio', 'img', 'sticker'].map(v => 'add' + v + ' <texto>')
handler.tags = ['database']
handler.command = /^(\+|add)(vn|mensaje|video|audio|img|stic?ker|gif)$/

module.exports = handler
