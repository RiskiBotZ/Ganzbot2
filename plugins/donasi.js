let handler = async m => m.reply(`
┏━━°❀❬ *DONASI* ❭❀°━━┓
┣➥ *INDOSAT:* [6281339888334]
┣➥ *Dana:* [6281339888334]
┣➥ *Gopay:* [6281339888334]
┣➥ *Ovo:* [6281339888334]
┃ 「 *Chat OWNER* 」
┃ > *Ingin donasi? Wa.me/6281339888334*
┗━━━━━━━━━━━━━━━━
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
