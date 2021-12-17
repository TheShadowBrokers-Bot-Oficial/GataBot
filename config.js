global.DeveloperMode = 'false' //verdadero o falso
global.linkGC = ['https://chat.whatsapp.com/Lb4Emjih98rBiCZiZoS2eM', 'https://chat.whatsapp.com/FrluVyY5kBRIhY6yKfH4DI']
global.Owner = {
  // utilice el número de teléfono con el código del país, por ejemplo, Ecuador '593' América '1', Mexico '52' etc.
  '593993684821': { // pon tu numero aqui
    name: 'Owner Metro Bot/Creator GataBot',
    isDev: false, // si es cierto, este número se enviará si el bot tiene error y el modo de desarrollador es verdadero
    isReport: false, // si es verdadero, este número se enviará si el usuario usa el comando / informe o / unirse
    isCreator: true // si es verdadero, este número se enviará si el usuario usa el comando / propietario o / creador
  },
  '6281390658325': { // pon tu numero aqui
    isDev: true, // si es cierto, este número se enviará si el bot tiene error y el modo de desarrollador es verdadero
    isReport: true, // si es verdadero, este número se enviará si el usuario usa el comando / informe o / unirse
    isCreator: false // si es verdadero, este número se enviará si el usuario usa el comando / propietario o / creador
  },
  '6282256115584': { // pon tu numero aqui
    name: 'Dave',
    isDev: false, // si es cierto, este número se enviará si el bot tiene error y el modo de desarrollador es verdadero
    isReport: true, // si es verdadero, este número se enviará si el usuario usa el comando / informe o / unirse
    isCreator: false // si es verdadero, este número se enviará si el usuario usa el comando / propietario o / creador
  },
  '60199782326': {
    name: 'Adiixyz',
    isReport: true, // si es verdadero, este número se enviará si el usuario usa el comando / informe o / unirse
  },
  '6285713964963': {
    isReport: true
  },
  '13479805233': {} // ignora si no quieres nada, como nombre, etc.
}
global.mods = ['13479805233'] //¿Quieres ayuda?
global.prems = [] // El usuario premium tiene límite ilimitado
global.APIs = { // Prefijo de API
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  nzcha: 'http://nzcha-apii.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  fdci: 'https://api.fdci.se',
  dzx: 'https://api.dhamzxploit.my.id',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  pencarikode: 'https://pencarikode.xyz',
  hardianto: 'http://hardianto-chan.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.xyz': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'http://hardianto-chan.herokuapp.com': 'hardianto'
}

// Sticker WM
global.packname = 'wa.me/6285713964963'
global.author = 'Metro Bot Is The Best'

global.multiplier = 5 // Cuanto más alto, más difícil sube de nivel

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
