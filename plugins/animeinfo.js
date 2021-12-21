let fetch = require('node-fetch')
let handler = async(m, { conn, text }) => {
  if (!text) throw Enter a query!
  let res = await fetch(global.API('https://api.jikan.moe', '/v3/search/anime', { q: text }))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  let { title, synopsis, episodes, url, rated, score, image_url } = json.results[0]
let animeingfo = ✨ *Title:* ${title}
🎆 *Episodes:* ${episodes}
💌 *Rating:* ${rated}
❤️ *Score:* ${score}
💚 *Synopsis:* ${synopsis}
🌐 *URL*: ${url}
  conn.sendFile(m.chat, image_url, '', animeingfo, m)
}
handler.help = ['anime <title>']
handler.tags = ['anime']
handler.command = /^(anime|animeinfo)$/i
//maapin fatur :<
module.exports = handler
