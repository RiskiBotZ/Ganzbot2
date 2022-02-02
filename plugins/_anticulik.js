let handler = m => handler.all = async function (m, { isAdmin, isBotAdmin }) {
  if (m.mtype == 'groupInviteMessage') {
idnya = await this.reply(m.chat, `「 Donasi • Pulsa 」

• *Gopay:* 6281339888334
• *Telkomsel:* 6281339888334
• *Indosat:* 6281339888334

Donasi semampunya untuk mendukung bot ini tetap hidup untuk kalian^_^
Kalau gak mampu yang di atas bisa juga *follow ig* https://instagram.com/caliph91_

Kontak pemilik saya⬇️⬇️
`, m)
this.sendContact(m.chat, '6281339888334', 'Pemilik saya', idnya)
  }
  return true
}

module.exports = handler