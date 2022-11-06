let handler = function (m) {
  // this.sendContact(m.chat, '6281515860089', 'Nurutomo', m)
  conn.sendContact(m.chat, '6281260730830', '𝐃𝐢𝐤𝐢𝐳', m)
  
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

module.exports = handler