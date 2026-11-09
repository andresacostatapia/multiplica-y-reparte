const sharp=require('sharp');const fs=require('fs');
const bg=`<linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#B38DFF"/><stop offset="1" stop-color="#7A3FE0"/></linearGradient>`;
const fg=`<g font-family="Arial Rounded MT Bold,Arial,sans-serif" font-weight="900" text-anchor="middle">
<circle cx="400" cy="400" r="150" fill="#FF4F9A"/><circle cx="400" cy="400" r="150" fill="none" stroke="#C92A72" stroke-width="12"/>
<text x="400" y="485" font-size="260" fill="#fff">×</text>
<circle cx="640" cy="640" r="150" fill="#1E96F5"/><circle cx="640" cy="640" r="150" fill="none" stroke="#0B68C2" stroke-width="12"/>
<text x="640" y="725" font-size="260" fill="#fff">÷</text></g>`;
const svg=(inner,defs='')=>Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><defs>${defs}</defs>${inner}</svg>`);
// centrar el par en 1024 (el contenido ocupa ~ 250..790)
const centered=`<g transform="translate(512 512) scale(1.15) translate(-520 -520)">${fg}</g>`;
(async()=>{
 await sharp(svg(`<rect width="1024" height="1024" fill="url(#g)"/>${centered}`,bg)).png().toFile('assets/icon-only.png');
 await sharp(svg(`<rect width="1024" height="1024" fill="url(#g)"/>`,bg)).png().toFile('assets/icon-background.png');
 await sharp(svg(centered)).png().toFile('assets/icon-foreground.png');
})();
