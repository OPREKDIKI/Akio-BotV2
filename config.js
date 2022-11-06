global.you = ['6281260730830'] // Developer Bot
global.rowner = ['6281260730830'] // Real Owner Bot
global.owner = ['6281372197701,6281260730830,6289601401176'] // Owner Bot
global.police = ['6281372197701,6281260730830'] // Police Bot
global.mods = ['6281260730830,6289601401176']  // Want some help?
global.prems = ['6281260730830,60178053692'] // Premium user has unlimited limit
global.helper = ['6281260730830']
global.APIs = { // API Prefix
  // name: 'https://website'
  amel: 'https://melcanz.com',
    bx: 'https://bx-hunter.herokuapp.com',
  dhnjing: 'https://dhnjing.xyz', 
  hardianto: 'https://hardianto.xyz',
  jonaz: 'https://jonaz-api-v2.herokuapp.com',
  neoxr: 'https://neoxr-api.herokuapp.com',
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  nzcha: 'http://nzcha-apii.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  fdci: 'https://api.fdci.se',
  rey: 'https://server-api-rey.herokuapp.com',
  dzx: 'https://api.dhamzxploit.my.id',
  bsbt: 'https://bsbt-api-rest.herokuapp.com',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  zekais: 'http://zekais-api.herokuapp.com',
  hardianto: 'https://hardianto-chan.herokuapp.com',
  pencarikode: 'https://pencarikode.xyz',
  erdwepe: 'https://erdwpe-api.herokuapp.com',
  lolhuman: 'https://api.lolhuman.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com' 
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://melcanz.com': 'elaina',
  'https://hardianto.xyz': 'hardianto',
  'https://api.xteam.xyz': 'Dawnfrostkey',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://bsbt-api-rest.herokuapp.com': 'benniismael',
  'https://server-api-rey.herokuapp.com': 'apirey',
  'https://api.zeks.xyz': 'apivinz',
  'https://hardianto-chan.herokuapp.com': 'hardianto',
  'https://pencarikode.xyz': 'pais',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll',
  'https://zekais-api.herokuapp.com': 'zekais',
  'https://api.lolhuman.xyz': 'pelitbetsihluwh',
}

// Config Whatsapp socket
global.socket = {
	qr: true, //wajib keknya
	version: false, // jika mau
	logger: true, //on in aja
	retryMap: false, //not recommend now
	pendingMessage: false, //off aja ngab, ntar lag
}

global.useMulti = false //Bug?

global.media = 'https://telegra.ph/file/8ad1c9f43cd3df491d87f.jpg'

// Sticker WM
global.packname = '𝐀𝐤𝐢𝐨 𝐁𝐨𝐭'
global.author = '𝐀𝐤𝐢𝐨 𝐁𝐨𝐭'
global.wm = '© 🗿 𝐗 𝐀𝐤𝐢𝐨 𝐁𝐨𝐭'

global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text='

global.lelang = []
global.barter = []

global.multiplier = 69 // The higher, The harder levelup

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
