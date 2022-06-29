import fetch from 'node-fetch'
let handler = async (m, { conn, command, usedPrefix }) => {
let pp = await conn.profilePictureUrl(m.chat).catch(_ => null)
let pepe = pp ? await (await fetch(pp)).buffer() : Buffer.alloc(0)
let str = ` ${conn.getName(m.sender)} Ingin Support Bot?
kalo serius mau donasi ya silahkan saja
pembayaran bisa memakai cara dibawah

*PAYMENT ↓*
_*Pulsa/pulse(Telkomsel):*_ 082136421665
_*Dana:*_ 082136421665
Setelah melakukan donasi kirim bukti pembayaran ke owner

Terima kasih buat yg udh mau doanasi🤗
`
conn.sendHydrated(m.chat, str, wm, pepe, 'https://youtube.com/channel/UCNr667OTz0M7kvfdffWasUw', 'youtube', null, null, [
['𝙼𝙴𝙽𝚄', '/menu']
], m)

}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
