let levelling = require('../lib/levelling')
let { MessageType } = require('@adiwajshing/baileys')
let fs = require('fs')
let path = require('path')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
const defaultMenu = {
  before: `
━━ 『 *Akio Bot* 』 ━━
➲ Hallo👋 %name!
➲ Kamu Adalah Role %role
➲ Kamu adalah %rank
➲ Tersisa *%limit Limit*
➲ Level *%level (%exp / %maxexp)* [%xp4levelup lagi untuk levelup]
%totalexp XP in Total
✮ 𝐒𝐜 : 𝐓𝐚𝐧𝐲𝐚𝐤 𝐎𝐰𝐧𝐞𝐫
✮ 𝐆𝐫𝐮𝐛 𝐁𝐨𝐭 𝐎𝐟𝐟𝐜𝐢𝐚𝐥: *https://chat.whatsapp.com/KbdXQZOfyFd0otZw7KooO8*
 
%readmore`.trimStart(),
  header: '┏━━━•❅•°•❈ %category 』',
  body: '┣ ➲ %cmd %islimit %isPremium',
  footer: '┗━━━•❅•°•❈ *Next* ──\n',
  after: `
*%npmname@^%version*
${'```%npmdesc```'}
`,
}
let handler = async (m, { conn, usedPrefix: _p, args, command }) => {
  let tags
  let user = global.db.data.users[m.sender]
  let teks = `${args[0]}`.toLowerCase()
  let gambar = global.media
  let arrayMenu = ['all', 'rpg', 'daftar', 'rules', 'request', 'main', 'game', 'xp', 'sticker', 'kerang', 'quotes', 'admin', 'group', 'premium', 'internet', 'anonymous', 'nulis', 'maker', 'asupan', 'downloader', 'tools', 'fun', 'database', 'quran', 'jadibot', 'owner', 'host', 'advanced', 'info', 'donasi', 'exp']
  if (!arrayMenu.includes(teks)) teks = '404'
  if (teks == 'all') tags = {
          'daftar': 'Daftar', 
      'rpg': '𝐑𝐏𝐆', 
      'rules': '𝐑𝐔𝐋𝐄𝐒', 
      'request': '𝐑𝐄𝐐𝐔𝐄𝐒𝐓 𝐅𝐈𝐓𝐔𝐑', 
      'main': '𝐌𝐀𝐈𝐍',
      'game': '𝐆𝐀𝐌𝐄',
      'xp': '𝐄𝐗𝐏 & 𝐋𝐈𝐌𝐈𝐓',
      'sticker': '𝐒𝐓𝐈𝐂𝐊𝐄𝐑',
      'kerang': '𝐊𝐄𝐑𝐀𝐍𝐆 𝐀𝐉𝐀𝐈𝐁',
      'quotes': '𝐐𝐔𝐎𝐓𝐄𝐒',
      'admin': '𝐀𝐃𝐌𝐈𝐍',
      'group': '𝐆𝐑𝐎𝐔𝐏',
      'premium': '𝐏𝐑𝐄𝐌𝐈𝐔𝐌',
      'internet': '𝐈𝐍𝐓𝐄𝐑𝐍𝐄𝐓',
      'nulis': '𝐦𝐚𝐠𝐞𝐫𝐧𝐮𝐥𝐢𝐬 & 𝐥𝐨𝐠𝐨',
      'maker': '𝐌𝐚𝐤𝐞𝐫',
      'downloader': '𝐃𝐎𝐖𝐍𝐋𝐎𝐀𝐃𝐄𝐑',
      'tools': '𝐓𝐎𝐎𝐋𝐒',
      'fun': '𝐅𝐔𝐍',
      'asupan': '𝐀𝐒𝐔𝐏𝐀𝐍',
      'database': '𝐃𝐀𝐓𝐀𝐁𝐀𝐒𝐄',
      'quran': '𝐀𝐥-𝐐𝐮𝐫𝐚𝐧', 
      'jadibot': '𝐉𝐀𝐃𝐈 𝐁𝐎𝐓',
      'owner': '𝐎𝐰𝐧𝐞𝐫',
      'host': '𝐇𝐨𝐬𝐭',
      'advanced': '𝐀𝐃𝐕𝐀𝐍𝐂𝐄𝐃',
      'info': '𝐈𝐍𝐅𝐎',
      'donasi': '𝐃𝐎𝐍𝐀𝐒𝐈', 
      'exp': '𝐄𝐗𝐏', 
  }
   if (teks == 'daftar') tags = {
    'daftar': 'Daftar'
  }
  if (teks == 'rpg') tags = {
    'rpg': 'Rpg'
  }
  if (teks == 'rules') tags = {
    'rules': 'Rules'
  }
  if (teks == 'request') tags = {
    'request': 'Request Fitur'
  }
   if (teks == 'main') tags = {
    'main': 'Main'
  }
  if (teks == 'game') tags = {
    'game': 'Game'
  }
  if (teks == 'xp') tags = {
    'xp': 'Exp & Limit'
  }
  if (teks == 'sticker') tags = {
    'sticker': 'Sticker'
  }
  if (teks == 'donasi') tags = {
    'donasi': 'Donasi'
  }
  if (teks == 'kerang') tags = {
    'kerang': 'Kerang Ajaib'
  }
  if (teks == 'quotes') tags = {
    'quotes': 'Quotes'
  }
  if (teks == 'admin') tags = {
    'admin': `Admin ${global.opts['restrict'] ? '' : '(Dinonaktifkan)'}`
  }
  if (teks == 'group') tags = {
    'group': 'Grup'
  }
  if (teks == 'premium') tags = {
    'premium': 'Premium'
  }
  if (teks == 'internet') tags = {
    'internet': 'Internet'
  }
  if (teks == 'anonymous') tags = {
    'anonymous': 'Anonymous Chat'
  }
  if (teks == 'nulis') tags = {
    'nulis': 'MagerNulis & Logo'
  }
  if (teks == 'maker') tags = {
    'maker': 'Maker'
  }
  if (teks == 'downloader') tags = {
    'downloader': 'Downloader'
  }
  if (teks == 'tools') tags = {
    'tools': 'Tools'
  }
  if (teks == 'fun') tags = {
    'fun': 'Fun'
  }
  if (teks == 'asupan') tags = {
    'asupan': 'Asupan'
  }
  if (teks == 'database') tags = {
    'database': 'Database'
  }
  if (teks == 'quran') tags = {
    'quran': 'Al-Quran'
  }
  if (teks == 'jadibot') tags = {
    'jadibot': 'Jadi Bot'
  }
  if (teks == 'owner') tags = {
    'owner': 'Owner'
  }
  if (teks == 'host') tags = {
    'host': 'Host'
  }
  if (teks == 'advanced') tags = {
    'advanced': 'Advanced',
  }
  if (teks == 'info') tags = {
    'info': 'Info'
  }
  if (teks == 'exp') tags = {
    'exp': 'Exp'
  }

  try {
    let package = JSON.parse(await fs.promises.readFile(path.join(__dirname, '../package.json')).catch(_ => '{}'))
    let { exp, limit, level, role, rank, money, registered } = global.db.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let name = registered ? global.db.data.users[m.sender].name : await(conn.getName(m.sender)) 
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.help) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    if (teks == '404') {
      return conn.sendMessage(m.chat, {
           title: `Hallo ${name} ${'@'+m.sender.split`@`[0]}`.trim(),
           text: `\nKamu Adalah ${rank}\nTersisa *${limit}* Limit\nLevel *${level}*`, 
           footer: "© 𝐀𝐤𝐢𝐨 𝐁𝐨𝐭",
           buttonText: "Klik Disini",
           "sections": [
            {
              "rows": [
                {
                  "title": `"Menu Utama📶"`,
                  "description": "© 𝐀𝐤𝐢𝐨 𝐁𝐨𝐭 𝐔𝐭𝐚𝐦𝐚",
                  "rowId": ".? all"
                },
                 {
                  "title": "Rpg🕹️",
                  "description": "© 𝐀𝐤𝐢𝐨 𝐁𝐨𝐭 𝐑𝐩𝐠",
                  "rowId": ".? rpg"
                },
                {
                  "title": "Daftar📒",
                  "description": "© 𝐀𝐤𝐢𝐨 𝐁𝐨𝐭 𝐃𝐚𝐟𝐭𝐚𝐫",
                  "rowId": ".? daftar"
                },
                {
                  "title": "Rules⛔",
                  "description": "© 𝐀𝐤𝐢𝐨 𝐁𝐨𝐭 𝐑𝐮𝐥𝐞𝐬",
                  "rowId": ".? rules"
                },
                 {
                  "title": "Request Fitur📲",
                  "description": "© 𝐀𝐤𝐢𝐨 𝐁𝐨𝐭 𝐑𝐞𝐪𝐮𝐞𝐬𝐭",
                  "rowId": ".? request"
                },
                {
                  "title": "Main⬆️",
                  "description": "© 𝐀𝐤𝐢𝐨 𝐁𝐨𝐭 𝐌𝐚𝐢𝐧",
                  "rowId": ".? main"
                },
                  {
                  "title": "Game⚔️",
                  "description": "© 𝐀𝐤𝐢𝐨 𝐁𝐨𝐭 𝐆𝐚𝐦𝐞",
                  "rowId": ".? game"
                }, {
                  "title": "Exp & Limit🔗",
                  "description": "© 𝐀𝐤𝐢𝐨 𝐁𝐨𝐭 𝐄𝐱𝐩 & 𝐋𝐢𝐦𝐢𝐭",
                  "rowId": ".? xp"
                }, {
                  "title": "Sticker🎭",
                  "description": "© 𝐀𝐤𝐢𝐨 𝐁𝐨𝐭 𝐒𝐭𝐢𝐜𝐤𝐞𝐫",
                  "rowId": ".? sticker"
                }, 
                {
                  "title": "Donasi💰",
                  "description": "© 𝐀𝐤𝐢𝐨 𝐁𝐨𝐭 𝐃𝐨𝐧𝐚𝐬𝐢",
                  "rowId": ".? donasi"
                },
                {
                  "title": "Kerang Ajaib🐉️",
                  "description": "© 𝐀𝐤𝐢𝐨 𝐁𝐨𝐭 𝐊𝐞𝐫𝐚𝐧𝐠",
                  "rowId": ".? kerang"
                }, {
                  "title": "Quotes🎙️",
                  "description": "© 𝐀𝐤𝐢𝐨 𝐁𝐨𝐭 𝐐𝐮𝐨𝐭𝐞𝐬",
                  "rowId": ".? quotes"
                }, {
                  "title": "Admin👤",
                  "description": "© 𝐀𝐤𝐢𝐨 𝐁𝐨𝐭 𝐀𝐝𝐦𝐢𝐧",
                  "rowId": ".? admin"
                }, {
                  "title": "Grup👨‍👨‍👧‍👧",
                  "description": "© 𝐀𝐤𝐢𝐨 𝐁𝐨𝐭 𝐆𝐫𝐮𝐩",
                  "rowId": ".? group"
                },
                {
                  "title": "Premium📺",
                  "description": "© 𝐀𝐤𝐢𝐨 𝐁𝐨𝐭 𝐏𝐫𝐞𝐦𝐢𝐮𝐦",
                  "rowId": ".? premium"
                }, {
                  "title": "Internet🌏",
                  "description": "© 𝐀𝐤𝐢𝐨 𝐁𝐨𝐭 𝐈𝐧𝐭𝐞𝐫𝐧𝐞𝐭",
                  "rowId": ".? internet"
                },
                {
                  "title": "Anonymous Chat🎭",
                  "description": "© 𝐀𝐤𝐢𝐨 𝐁𝐨𝐭 𝐀𝐧𝐨𝐧𝐲",
                 "rowId": ".? anonymous"
                },
                {
                  "title": "Nulis & Logo✏️",
                  "description": "© 𝐀𝐤𝐢𝐨 𝐁𝐨𝐭 𝐍𝐮𝐥𝐢𝐬",
                  "rowId": ".? nulis"
                },
                {
                  "title": "Maker Menu 🍱",
                  "description": "© 𝐀𝐤𝐢𝐨 𝐁𝐨𝐭 𝐌𝐚𝐤𝐞𝐫",
                  "rowId": ".? maker"
                }, {
                  "title": "Downloader📲",
                  "description": "© 𝐀𝐤𝐢𝐨 𝐁𝐨𝐭 𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝𝐞𝐫",
                  "rowId": ".? downloader"
                }, {
                  "title": "Tools🧰",
                  "description": "© 𝐀𝐤𝐢𝐨 𝐁𝐨𝐭 𝐓𝐨𝐨𝐥𝐬",
                  "rowId": ".? tools"
                }, {
                  "title": "Fun🎮",
                  "description": "© 𝐀𝐤𝐢𝐨 𝐁𝐨𝐭 𝐅𝐮𝐧",
                  "rowId": ".? fun"
                }, 
                {
                  "title": "Asupan📺",
                  "description": "© 𝐀𝐤𝐢𝐨 𝐁𝐨𝐭 𝐀𝐬𝐮𝐩𝐚𝐧",
                  "rowId": ".? asupan"
                },
                {
                  "title": "Database📁",
                  "description": "© 𝐀𝐤𝐢𝐨 𝐁𝐨𝐭 𝐃𝐚𝐭𝐚𝐛𝐚𝐬𝐞",
                  "rowId": ".? database"
                },
                {
                  "title": "Al-Qur'an📖",
                  "description": "© 𝐀𝐤𝐢𝐨 𝐁𝐨𝐭 𝐀𝐥-𝐐𝐮𝐫'𝐚𝐧",
                  "rowId": ".? quran"
                },
                
                {
                  "title": "Jadi Bot👾",
                  "description": "© 𝐀𝐤𝐢𝐨 𝐁𝐨𝐭 𝐉𝐚𝐝𝐢 𝐁𝐨𝐭",
                  "rowId": ".? jadibot"
                },
                   {
                  "title": "Owner👤",
                  "description": "© 𝐀𝐤𝐢𝐨 𝐁𝐨𝐭 𝐎𝐰𝐧𝐞𝐫",
                  "rowId": ".? owner"
                },
                {
                  "title": "Host🚥",
                  "description": "© 𝐀𝐤𝐢𝐨 𝐁𝐨𝐭 𝐇𝐨𝐬𝐭",
                  "rowId": ".? host"
                },
                {
                  "title": "Advanced🏇",
                  "description": "© 𝐀𝐤𝐢𝐨 𝐁𝐨𝐭 𝐀𝐝𝐯𝐚𝐧𝐜𝐞𝐝",
                  "rowId": ".? advanced"
                },
                {
                  "title": "Infoℹ️",
                  "description": "© 𝐀𝐤𝐢𝐨 𝐁𝐨𝐭 𝐈𝐧𝐟𝐨",
                  "rowId": ".? info"
                },
                {
                  "title": "Exp🎑",
                  "description": "© 𝐀𝐤𝐢𝐨 𝐁𝐨𝐭 𝐄𝐱𝐩",
                  "rowId": ".? exp"
                },
              ]
            }
          ],
          mentions: [m.sender]
          }, { 
          	   quoted: m, 
                 contextInfo: {
                     stanzaId: m.key.id,
                     participant: m.sender
                 }
             }
      )
    }
    // gunakan ini jika kamu menggunakan whatsapp bisnis
    //   throw `
    // ┌〔 DAFTAR MENU 〕
    // ├ ${_p + command} all
    // ├ ${_p + command} game
    // ├ ${_p + command} xp
    // ├ ${_p + command} stiker
    // ├ ${_p + command} kerang
    // ├ ${_p + command} quotes
    // ├ ${_p + command} admin
    // ├ ${_p + command} group
    // ├ ${_p + command} premium
    // ├ ${_p + command} internet
    // ├ ${_p + command} anonymous
    // ├ ${_p + command} nulis
    // ├ ${_p + command} downloader
    // ├ ${_p + command} tools
    // ├ ${_p + command} fun
    // ├ ${_p + command} database
    // ├ ${_p + command} vote
    // ├ ${_p + command} quran
    // ├ ${_p + command} audio
    // ├ ${_p + command} jadibot
    // ├ ${_p + command} info
    // ├ ${_p + command} tanpa kategori
    // ├ ${_p + command} owner
    // └────  
    //     `.trim()
    let groups = {}
    for (let tag in tags) {
      groups[tag] = []
      for (let plugin of help)
        if (plugin.tags && plugin.tags.includes(tag))
          if (plugin.help) groups[tag].push(plugin)
      // for (let tag of plugin.tags)
      //   if (!(tag in tags)) tags[tag] = tag
    }
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Dipersembahkan oleh https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%islimit/g, menu.limit ? '(Limit)' : '')
                .replace(/%isPremium/g, menu.premium ? '(Premium)' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      me: conn.user.name,
      npmname: package.name,
      npmdesc: package.description,
      version: package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp <= 0 ? `Siap untuk *${_p}levelup*` : `${max - exp} XP lagi untuk levelup`,
      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
      level, limit, rank, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    //await conn.reply(m.chat, text.trim(), m)
    await conn.sendButton(m.chat, text.trim(), '© ArieTube', {"button[0]": 'Owner', "row[0]": '.owner'}, m, { mentions: [m.sender] })
  } catch (e) {
    conn.reply(m.chat, 'Maaf, menu sedang error', m)
    throw e
  }
}
handler.help = ['menu', 'help', '?']
handler.tags = ['main']
handler.command = /^(menu|help|\?)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 3

module.exports = handler

const more = String.fromCharCode(1)
const readMore = more.repeat(1)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  res = "Selamat dinihari"
  if (time >= 4) {
    res = "Selamat pagi"
  }
  if (time > 10) {
    res = "Selamat siang"
  }
  if (time >= 15) {
    res = "Selamat sore"
  }
  if (time >= 18) {
    res = "Selamat malam"
  }
  return res
}
