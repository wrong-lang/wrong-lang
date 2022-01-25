export function unshift(input, thmode) {
  if(!input) return;

  let shiftThaiKedmanee = "+๑๒๓๔ู฿๕๖๗๘๙๐\"ฎฑธํ๊ณฯญฐ,ฅฤฆฏโฌ็๋ษศซ.()ฉฮฺ์?ฒฬฦ".split('')
  let shiftThaiManoonchai = "!@#$%^&*()_+ฒฏซญฟฉึธฐฎฆฑฌษถแชพผำขโภ\"ฤฝๆณ๊๋์ศฮ?".split('')
  let shiftThaiPattachote = "\"/,?ุ_.()--%๊ฤๆญษึฝซถฒฯฦํ๋ธำณ์ืผชโฆฑฎฏฐภัศฮฟฉฬ".split('')
  
  let thaiKedmanee = "ๅ/-ภถุึคตจขชๆไำพะัีรนยบลฃฟหกดเ้่าสวงผปแอิืทมใฝ".split('')
  let thaiManoonchai = "1234567890-=ใตหลสปักิบ็ฬฯงเรนมอา่้วืุไทยจคีดะู".split('')
  let thaiPattachote = "=๒๓๔๕ู๗๘๙๐๑๖็ตยอร่ดมวแใฌ้ทงกัีานเไขบปลหิคสะจพ+".split('')
  
  let thLayout = (thmode === 'Manoonchai' ? thaiManoonchai : thmode === 'Pattachote' ? thaiPattachote : thaiKedmanee);
  let shiftThLayout = (thmode === 'Manoonchai' ? shiftThaiManoonchai : thmode === 'Pattachote' ? shiftThaiPattachote : shiftThaiKedmanee);
  
  return input.split('').map(char => shiftThLayout.indexOf(char) !== -1 ? thLayout[shiftThLayout.indexOf(char)] : thLayout.indexOf(char) !== -1 ? shiftThLayout[thLayout.indexOf(char)] : char).join('')
}