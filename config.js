//SCRIPT RECODE BY FANGZ 💌
// JANGAN DI HAPUS📣

//BUY NO ENC? CHAT wa.me/6288215689772
//GITHUB: https://github.com/Fangzbotz2007
//KALAU GA ADA KASIH TANDA "-"


import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import moment from 'moment-timezone'

/*⫘⫘⫘⫘ WAKTU ⫘⫘⫘⫘⫘*/
let wibh = moment.tz('Asia/Jakarta').format('HH')
    let wibm = moment.tz('Asia/Jakarta').format('mm')
    let wibs = moment.tz('Asia/Jakarta').format('ss')
    let wktuwib = `${wibh} H ${wibm} M ${wibs} S`
    
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
      
    
/*⫘⫘⫘⫘⫘ MEDIA SOSIAL ⫘⫘⫘⫘*/
// Kalau gapunya di biarin aja!, atau ga di kasih tanda '-'

// kalo ga punya ketik "-" atau biarin aja biar ada creditsnya :v
global.sig = 'https://instagram.com/rafli_editz2' //Instagram mu
global.sgh = 'https://github.com/Futaroukun' //Github mu
global.swb = '-'
global.syt = '-' //YT Mu
global.sgc = 'https://chat.whatsapp.com/KRy6wWgQpPP0h1b0TumuJY' //Group WhatsApp mu
global.sdc = '-' //Discord Mu
global.snh = 'https://nhentai.net/g/365296/' //Make ini aja gausah di ganti.

/*⫘⫘⫘⫘ALL PAYMENT⫘⫘⫘⫘⫘*/
global.pdana = '085722157719' //Dana
global.povo = '-' //Ovo
global.pgopay = '085722157719' //Gopay
global.ppulsa = '083854551575' //Pulsa 
global.ppulsa2 = '-' //Pulsa, Kalau nomor cuma 1, yg ini kasih tanda -
global.psaweria = '-' //Saweria
global.donate = '〔 Dᴏɴᴛ ғᴏʀɢᴇᴛ Dᴏɴᴀᴛɪᴏɴ 〕\n\n››╭─〘 *Donasi* 〙\n╭╡📮: Donasi ngab jangan make bot doang.│\n┝‷✧ *Ovo:* -\n│┝‷✧ *Dana:* 085722157719\n│┝‷✧ *Gopay:* 085722157719\n│╰───···─────\n│⁺◛˖ Ingin Donasi? Chat nomor owner\n╰──────────···───╮'

/*⫘⫘⫘⫘ GLOBAL NOMOR ⫘⫘⫘⫘⫘*/
global.nomorbot = '6285722157719' //Nomor Bot mu
global.nomorown = '628385722157719' //Nomormu
global.namebot = 'HU TAO BOT-MD' //Nama bot mu
global.nameown = 'A7 RAFLI' //Nama mu

/*⫘⫘⫘⫘GLOBAL FUNCTION⫘⫘⫘⫘⫘*/
//KALAU MAGER EDIT, MENDING GAUSAH DI APA² IN. SAMA AJA//
global.swo = 'https://wa.me/6283854551575' //Nomor mu
global.linksc = 'https://bit.ly/3PqdYYS' //Gausah di ganti, biar ga eror
global.danied = '✘ 𝗘𝗥𝗢𝗥 𝟰𝟬𝟰' //Gausah di apa² in
global.botclick = '𝍤 CLICK HERE' //Bebas, Kalau gw saranin mending gausah di ganti.
global.after = `Bot by A7 RAFLI`
global.author = '                ©HU TAO BOT-MD' //Wm author
global.acguest = 'Kamu akan Menggunakan akun guest dari HU TAO BOT-MD\n\nClick Button di bawah.'
global.botintro = 'Hallo, Kenalin saya HU TAO BOT-MD Saya akan membantu Anda kapan pun & Dimana pun, Saya asisten bot WhatsApp yang di buat oleh *A7 RAFLI* Saya di rilis pada tanggal\n🗓 ️_16/04/2022_'
global.sc = 'https://telegra.ph/file/605b369dac8a4fcc6595e.jpg'
global.ow = 'https://telegra.ph/file/5eb34f15512bdd2185635.jpg'
global.intro = 'https://telegra.ph/file/514a3aef710ed8575a4ee.jpg'
global.donsi = 'https://telegra.ph/file/b6f4de6c1b73a26aa3cf4.jpg'
global.collab = 'https://telegra.ph/file/2c038c5606ee1d29ce99f.jpg'
global.dand = 'https://telegra.ph/file/c9605def0aff55cc449da.jpg'
global.runtime = 'https://telegra.ph/file/19117b097456581ae9577.jpg'
global.serialimg = 'https://telegra.ph/file/97f05b34c321fc2c5c937.jpg'
global.jlimit = 'https://telegra.ph/file/54035038f380813b8258c.jpg'
global.verify = 'https://telegra.ph/file/74e00be8229ffcfbe5200.jpg'
global.guest = 'https://telegra.ph/file/e6efac62f7e9d07ff02c8.jpg'
/*⫘⫘⫘⫘ STAFF ⫘⫘⫘⫘⫘*/
global.owner = [
  ['6283854551575', 'A7 RAFLI', true] //Ini buat kamu!
  ['']// [number, dia creator/owner?, dia developer?]
  [''] // Put your number here
global.mods = [] // Want some help?
global.prems = [] // Jangan di isi, Tambahin dari bot nya ketik .addprem @Fangz 15


/*⫘⫘⫘⫘ APIKEY ⫘⫘⫘⫘⫘*/
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  rey: 'https://server-api-rey.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  lol: 'https://api.lolhuman.xyz',
  dhnjing: 'https://dhnjing.xyz',
  neoxr: 'https://neoxr-api.herokuapp.com',
  zeks: 'https://api.zeks.xyz',
  pencarikode: 'https://pencarikode.xyz',
  ana: 'https://anabotofc.herokuapp.com/',
  amel: 'https://melcanz.com',
  bsbt: 'https://bsbt-api-rest.herokuapp.com', 
  hardianto: 'https://hardianto.xyz',
  botstyle: 'https://botstyle-api.herokuapp.com',
  adiisus: 'https://adiixyzapi.herokuapp.com',
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  kanx: 'https://kannxapi.herokuapp.com/'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'NezukoTachibana281207',
  'https://anabotofc.herokuapp.com/': 'AnaBot',
  'https://api.lolhuman.xyz': 'Papah-Chan',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.xyz': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://melcanz.com': 'gedFijw7',
  'https://neoxr-api.herokuapp.com': 'yntkts',
  'https://server-api-rey.herokuapp.com': 'apirey',
  'https://botstyle-api.herokuapp.com': 'Fa2GhFnr',
  'https://bsbt-api-rest.herokuapp.com': 'benniismael',
  'https://hardianto.xyz': 'hardianto',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll'
}
// FREE APIKEY, WAJIB SUBSCRIBE:V
// kalau mau ganti apikey mu sendiri terserah

/*⫘⫘⫘⫘ WATERMAK ⫘⫘⫘⫘⫘*/
//GANTI JANGAN NGASAL.
global.wm = '                「 赤 HU TAO BOT-MD ⁩இ 」' //Wm
global.wm2 = '➳༻❀HU TAO BOT-MD❁ུ۪۪.;:୭̥.' //Name Wm
global.wm3 = '赤 HU TAO BOT-MD '
global.hiasan = '꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦ ͝ ꒷ ͝ ꒦'
global.botdate = `🗓️️ Date: ${week} ${date}`
global.bottime = `𝗧 𝗜 𝗠 𝗘 : ${wktuwib}`
global.titlebot = 'HU TAO BOT-MD' //Ganti serah lu


/*⫘⫘⫘⫘ LOGO ⫘⫘⫘⫘⫘*/
// INI JUGA GANTI SETERAH MU
global.thumb = 'https://telegra.ph/file/e7837685f20c7d6d6c1ea.jpg' //Thumbnail nya
global.thumb2 = 'https://telegra.ph/file/7e4ee0992f6e9aa422bb8.jpg' //Thumbnail 2
global.thumbbc = 'https://telegra.ph/file/e7837685f20c7d6d6c1ea.jpg' //Image Bcgcb
global.giflogo = 'https://telegra.ph/file/e7837685f20c7d6d6c1ea.jpg' //Bebas

global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text='
//global.fla Jangan di ganti
/*⫘⫘⫘⫘ LOADING ⫘⫘⫘⫘⫘*/
global.wait = '```[ ! ] wait...```'
global.eror = '⸨Acsess Danied⸩'

/*⫘⫘⫘⫘ DOCUMENT ⫘⫘⫘⫘⫘*/
global.dpptx = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.ddocx = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.dxlsx = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.dpdf = 'application/pdf'
global.drtf = 'text/rtf'

global.thumbdoc = 'https://telegra.ph/file/e7837685f20c7d6d6c1ea.jpg' //Ganti jadi foto Bot

/*⫘⫘⫘⫘ FAKE SIZE ⫘⫘⫘⫘⫘*/
global.fsizedoc = '99999999999999' // 10TB
global.fpagedoc = '999' //Gausah di ganti.

/*⫘⫘⫘⫘ HIASAN ⫘⫘⫘⫘⫘*/
// DEFAULT MENU
global.dmenut = '╭────━•〔' //top
global.dmenub = '│ ⸙͎۪۫' //body
global.dmenub2 = '│' //body for info cmd on Default menu
global.dmenuf = '𝙏𝙃𝘼𝙉𝙆𝙎 𝙏𝙊\n\n◐ Fokus Id\n◐FangzXD\n◐The.sad.boy01\n◐Kanna\n◐Nurutomo\n◐Bochilgaming\n◐Amirul\n◐Ilham\n◐Rasel\n◐Pemakai bot ini\n◐I love you\n\n_© Creator by https://bit.ly/3QJOy9F_' //footer

// COMMAND MENU
global.cmenut = '╭────━•〔' //top
global.cmenuh = '〕•━────┐' //header
global.cmenub = '│⸙͎۪۫ ︎' //body
global.cmenuf = '╰──────────━⃝┅⃝━────────┘\n' //footer
global.cmenua = '\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     ' //after
global.pmenus = '│⸙︎' //pembatas menu selector

global.htki = '––––––⦅' // Hiasan Titile (KIRI)
global.htka = '⦆––––––' // Hiasan Title  (KANAN)
global.lopr = '🅟' //LOGO PREMIUM ON MENU.JS
global.lolm = '🅛' //LOGO FREE ON MENU.JS
global.htjava = 'இ'    //hiasan Doang :v
global.hsquere = ['⛶','❏','⫹⫺']


/*⫘⫘⫘⫘ STICKER ⫘⫘⫘⫘⫘*/
global.stickpack = 'HU TAO BOT-MD'
global.stickauth = `©HU TAO BOT-MD\nOfficial by A7 RAFLI`

global.multiplier = 38 // The higher, The harder levelup

/*⫘⫘⫘⫘ GLOBAL EMOJI ⫘⫘⫘⫘⫘*/
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      level: '📊',
      limit: '🎫',
      health: '❤️',
      exp: '✨',
      money: '💹',
      bank: '🏦',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🛍️',
      mythic: '🎁',
      legendary: '🗃️',
      superior: '💼',
      pet: '🔖',
      trash: '🗑',
      armor: '🥼',
      sword: '⚔️',
      pickaxe: '⛏️',
      fishingrod: '🎣',
      wood: '🪵',
      rock: '🪨',
      string: '🕸️',
      horse: '🐴',
      cat: '🐱',
      dog: '🐶',
      fox: '🦊',
      petFood: '🍖',
      iron: '⛓️',
      gold: '🪙',
      emerald: '❇️',
      upgrader: '🧰'
      
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

//------ JANGAN DIUBAH -----
let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
