const fs = require('fs');
const https = require('https');
const path = require('path');

const imageUrls = [
  // Hero
  { url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sunniertoday_1683731244_3099684799622440933_49563268918_1-KbACmfYVnuMkqljeMu098Ohemu8HA2.webp', name: 'hero-studio.webp' },
  
  // Gallery (horizontal scroll)
  { url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sunniertoday_1733489727_3517089208193474908_49563268918_1-2STaRtvAi5BcSM4xSeEJwls1kCHxIm.jpg', name: 'gallery-delicate.jpg' },
  { url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sunniertoday_1755475484_3701519101424376676_49563268918_1-8CDqrMudmM5RO1UlYqOI1ZCTE9FP0G.jpg', name: 'gallery-gold-blue.jpg' },
  { url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sunniertoday_1757324337_3717028407315148201_49563268918_1-Nfwv3HufkqXaPJFfuCydsdnKclsErN.jpeg', name: 'gallery-artistic.jpg' },
  { url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sunniertoday_1759199509_3732758488956205647_49563268918_1-kZVcDp4UxRncYccl8FHNk4EqomHNxm.jpeg', name: 'gallery-colorful.jpg' },
  { url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sunniertoday_1733322824_3515689121961663019_49563268918_1-lsFNRsTLQwDddbeW5a5kBdEh99mHnt.jpg', name: 'gallery-cream.jpg' },
  { url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sunniertoday_1755475516_3701519375756974352_49563268918_1-tCmeiZr2LSRgrY1UbkQZ3hyDyxB6iG.jpg', name: 'gallery-glitter.jpg' },
  { url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sunniertoday_1757324379_3717028764334333613_49563268918_1-T1HLKBjgps5WhsArNS9tWInUlM7Yaa.jpeg', name: 'gallery-floral.jpg' },
  
  // Services
  { url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sunniertoday_1757324379_3717028764334333613_49563268918_1-T1HLKBjgps5WhsArNS9tWInUlM7Yaa.jpeg', name: 'service-acrylic.jpg' },
  { url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sunniertoday_1733489727_3517089208193474908_49563268918_1-2STaRtvAi5BcSM4xSeEJwls1kCHxIm.jpg', name: 'service-mani-pedi.jpg' },
  { url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sunniertoday_1755475484_3701519101424376676_49563268918_1-8CDqrMudmM5RO1UlYqOI1ZCTE9FP0G.jpg', name: 'service-nail-art.jpg' },
  
  // About
  { url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sunniertoday_1683731285_3099685146952805214_49563268918_1-dsZTRKymbfkaOw7mQ1W308LNTtN1se.webp', name: 'about-studio.webp' },
];

const publicDir = path.join(__dirname, '../public');
const imagesDir = path.join(publicDir, 'images');

// Create directories if they don't exist
if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir);
if (!fs.existsSync(imagesDir)) fs.mkdirSync(imagesDir);

let downloaded = 0;
let failed = 0;

function downloadImage(url, filename) {
  return new Promise((resolve) => {
    const filepath = path.join(imagesDir, filename);
    const file = fs.createWriteStream(filepath);
    
    https.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`✓ Downloaded: ${filename}`);
        downloaded++;
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filepath, () => {});
      console.error(`✗ Failed: ${filename} - ${err.message}`);
      failed++;
      resolve();
    });
  });
}

async function downloadAll() {
  console.log('Starting download of all blob images...\n');
  
  for (const image of imageUrls) {
    await downloadImage(image.url, image.name);
  }
  
  console.log(`\nDownload complete: ${downloaded} succeeded, ${failed} failed`);
}

downloadAll();
