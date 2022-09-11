let handler = async m => m.reply(`
╭─「 *GROUP BOT MULTI DEVICE* 」
 • BEBAS MAIN BOT ATAU 
 • TANYA TANYA TENTANG BOT 
 • https://chat.whatsapp.com/GmXOLVjquxA7iYhTfak2Mt
╰────
╭─「 *NOTE* 」
│ > Ingin donasi? Wa.me/628989513496
│ _Hasil donasi akan digunakan buat sewa_
│ _atau beli RDP/VPS agar bot bisa jalan_
│ _24jam tanpa kendala_
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
