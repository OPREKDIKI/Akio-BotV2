const { default: makeWASocket, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, downloadContentFromMessage, downloadHistory, proto, getMessage, generateWAMessageContent, prepareWAMessageMedia } = require('@adiwajshing/baileys')
let handler = async (m) => {
let duit = `*────── 「 DONATE 」 ──────*

Hai 👋
Kalian bisa mendukung saya agar bot ini tetap up to date dengan:

┌〔 Donasi • Emoney 〕
├🔃 Scan Barcod Qrisnya diatas🤗
├⛽ Dana : 6281260730830
├⛽ Pulsa Telkomsel : 6281260730830
└────

Berapapun donasi kalian akan sangat berarti 👍
𝐍𝐨𝐭𝐞 : 𝐉𝐚𝐧𝐠𝐚𝐧 𝐋𝐢𝐚𝐭𝐢𝐧 𝐀𝐣𝐚 𝐃𝐨𝐧𝐚𝐭𝐞 𝐃𝐨𝐧𝐠

Contact person Owner:
wa.me/6281260730830 (Owner)`
let message = await prepareWAMessageMedia({ image: {url: 'https://telegra.ph/file/878173ab8e36b24a88ba1.jpg' }}, { upload: conn.waUploadToServer })
     const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
     templateMessage: {
         hydratedTemplate: {
           imageMessage: message.imageMessage,
           hydratedContentText: duit,
           hydratedFooterText: wm,
           hydratedButtons: [{
             urlButton: {
               displayText: '🏧 Owner',
               url: 'https://wa.me/6281260730830'
             }

           },
               {
             callButton: {
               displayText: 'Dana',
               phoneNumber: '+62 812-6073-0830'
             }
           },           
               {
             quickReplyButton: {
               displayText: '🧒 Owner',
               id: '.owner',
             }

           }]
         }
       }
     }), { userJid: m.sender, quoted: m });
    //conn.reply(m.chat, text.trim(), m)
    return await conn.relayMessage(
         m.chat,
         template.message,
         { messageId: template.key.id }
     )
}

handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)|bagiduit$/i

module.exports = handler
