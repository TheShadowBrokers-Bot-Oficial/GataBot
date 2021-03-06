let { WAMessageProto } = require('@adiwajshing/baileys')
let handler = async (m, { command, usedPrefix, text }) => {
    let M = WAMessageProto.WebMessageInfo
    let which = command.replace(/\+|add/i, '')
    if (!m.quoted) throw '๐ ยกMensaje de respuesta!'
    if (!text) throw `Usar *${usedPrefix}list${which}* para ver la lista`
    let msgs = global.DATABASE._data.msgs
    if (text in msgs) throw `'${text}'๐ se ha registrado en la lista de mensajes`
    msgs[text] = M.fromObject(await m.getQuotedObj()).toJSON()
    m.reply(`โ Mensaje agregado exitosamente en la lista de mensajes como *"${text}".* 
    
๐ค Recuerda registrar la palabra clave etiquetando en mensaje, audio, imagen, video, sticker, etc...
    
๐ Accede con *${usedPrefix}get${which} ${text}* o escriba directamente el texto (palabra clave).`)
}
handler.help = ['vn', 'mensaje', 'video', 'gif', 'audio', 'img', 'sticker'].map(v => 'add' + v + ' <texto>')
handler.tags = ['database']
handler.command = /^(\+|add)(vn|ms|video|audio|img|stic?ker|gif)$/

module.exports = handler
