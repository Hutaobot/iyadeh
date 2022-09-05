let handler = async (m, { conn }) => {
let info = `
*${htki} INFO BOT ${htka}*
`
const sections = [
   {
	title: `✃ STATS`,
	rows: [
	    {title: "Test Speed", rowId: '.testspeed', description: '╰►Test Speed BOT' },
	    {title: "Stats Server", rowId: '.statserver', description: '╰►Status server BOT' },
	    {title: "Bot Info", rowId: '.botinfo', description: '╰►Info Server BOT' },
	{title: "Nama Creator", rowId: '.nameown', description: '╰►Developer BOT' },
	{title: "Donasi", rowId: '.donasi', description: '╰►Support BOT Agar on 24 Jam' },
	]
    }, {
    title: `✃ INFO`,
	rows: [
	    {title: "Rules", rowId: '.rules', description: '╰►S&K' },
	    {title: "No Menu", rowId: '', description: '╰►No menu' },
	    {title: "Event", rowId: '.event', description: '╰►Event Dari Kami' },
	{title: "Speed", rowId: '.speed', description: '╰►SpeedBOT' },
	{title: "Sewa BOT", rowId: '.sewa', description: '╰►Sewa BOT' },
	{title: "️Request Fitur", rowId: '.request', description: '╰►Request Fitur BOT' },
	{title: "Lokasi BOT", rowId: '.loc2', description: '╰►Lokasi Fangz BOT' },
	{title: "Version Bot", rowId: '.cekversi', description: '╰►Versi BOT' },
	{title: "Sapa Bot", rowId: '.salken', description: '╰►Menyapa BOT' },
	]
    },{
    title: `✃ INFO BOT`,
	rows: [
	    {title: "Version Bot", rowId: '.cekversi', description: '╰►Versi BOT' },
	    {title: "Lokasi BOT", rowId: '.loc2', description: '╰►Lokasi BOT' },
	{title: "Sapa Bot", rowId: '.salken', description: '╰►Menyapa BOT' },
	{title: "Speed Bot", rowId: '.speed', description: '╰►Speed BOT' },
	{title: "Customer Service", rowId: '.complaint', description: '╰►Laporkan keluhan mu di sini...' },
	{title: "Status Bot", rowId: '.botstats', description: '╰►Sistem BOT' },
	]
    },
]

const listMessage = {
  text: ' ',
  footer: info,
  title: null,
  buttonText: "C E K",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: m})
//conn.sendHydrated(m.chat, info, wm, null, sgc, " Group Official", null,null, [['Owner','.owner']], m)
}

handler.help = ['info', 'infobot']
handler.tags = ['info']
handler.command = /^(info|infobot)$/i

export default handler