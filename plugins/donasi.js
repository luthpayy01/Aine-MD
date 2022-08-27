let handler = async m => m.reply(`
╭─「 Donasi 」
│ • Tri [08989513496]
│ • Dana • Gopay  [08989513496]
╰────
╭─「 *NOTE* 」
│ > Ingin donasi? Wa.me/628989513496
│ _Hasil donasi akan digunakan buat sewa_
│ _atau beli *RDP/VPS* agar bot bisa jalan_
│ _24jam tanpa kendala_
╰────

*｢ Made by ❤️ AINE ｣*
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler