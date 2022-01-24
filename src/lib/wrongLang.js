export function wrongLang(input, thmode, enmode) {
  if(!input) return;

  let thaiKedmanee = "ๅ/-ภถุึคตจขชๆไำพะัีรนยบลฃฟหกดเ้่าสวงผปแอิืทมใฝ+๑๒๓๔ู฿๕๖๗๘๙๐\"ฎฑธํ๊ณฯญฐ,ฅฤฆฏโฌ็๋ษศซ.()ฉฮฺ์?ฒฬฦ".split('')
  let thaiManoonchai = "1234567890-=ใตหลสปักิบ็ฬฯงเรนมอา่้วืุไทยจคีดะู!@#$%^&*()_+ฒฏซญฟฉึธฐฎฆฑฌษถแชพผำขโภ\"ฤฝๆณ๊๋์ศฮ?".split('')
  let thaiPattachote = "=๒๓๔๕ู๗๘๙๐๑๖็ตยอร่ดมวแใฌ้ทงกัีานเไขบปลหิคสะจพ+\"/,?ุ_.()--%๊ฤๆญษึฝซถฒฯฦํ๋ธำณ์ืผชโฆฑฎฏฐภัศฮฟฉฬ".split('')

  let engQwerty = "1234567890-=qwertyuiop[]\\asdfghjkl;'zxcvbnm,./!@#$%^&*()_+QWERTYUIOP{}|ASDFGHJKL:\"ZXCVBNM<>?".split('')
  let engDvorak = "1234567890[]',.pyfgcrl/=\\aoeuidhtns-;qjkxbmwvz!@#$%^&*(){}\"<>PYFGCRL?+|AOEUIDHTNS_:QJKXBMWVZ".split('')
  let engColemak = "1234567890-=qwfpgjluy;[]\\arstdhneio'zxcvbkm,./!@#$%^&*()_+QWFGPJLUY:{}|ARSTDHNEIO\"ZXCVBKM<>?".split('')

  return input.split('').map(char => (thmode === 'Manoonchai' ? thaiManoonchai : thmode === 'Pattachote' ? thaiPattachote : thaiKedmanee)[(enmode === 'Colemak' ? engColemak : enmode === 'Dvorak' ? engDvorak : engQwerty).indexOf(char)]).map(char => char || ' ').join('')
}