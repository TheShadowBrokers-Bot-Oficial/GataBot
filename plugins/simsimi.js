let fetch = require('node-fetch')
let handler = async (m, { text }) => {
  let res = await fetch(global.API KEY ('https://apikey.simsimi.HPe8jU_gm5APBm.uxLRUIOGTnX2RJZVK6RzgZMet', '/v2/', { text: encodeURIComponent(text), lc: "es" }, ''))
  let json = await res.json()
  if (json.success) m.reply(json.success)
  else throw json
}
//handler.help = ['simi', 'simsimi', 'simih'].map(v => v + ' <teks>')
//handler.tags = ['fun']
handler.command = /^((sim)?simi|simih|?|sam)$/i
handler.register = false

module.exports = handler

