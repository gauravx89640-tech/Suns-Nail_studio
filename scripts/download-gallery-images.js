const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');

const galleryData = [
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sunniertoday_1632693916_2671552657879228346_49563268918_1-3KEj8fJDhgawjFFDSYyMdF6DJKfHWc.jpg", alt: "Black matte flame nails", category: "Acrylic", localName: "001-black-flame.jpg" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sunniertoday_1632693926_2671552744961586354_49563268918_1-rG4N1bBP3ozx0DZrLu7Ld0jhT7RpZ8.jpg", alt: "Leopard print nails", category: "Acrylic", localName: "002-leopard-print.jpg" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sunniertoday_1720903908_3411511704817595584_49563268918_1-aAKt0vSr4KOckTYozqaiiAOambPYRU.jpg", alt: "Red checkered cherry acrylic nails", category: "Acrylic", localName: "003-cherry-checkered.jpg" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sp3-QI1x8Iqh5nN8M4KDMRZhqzBmcVyv6R.webp", alt: "Coffee cappuccino theme with leopard spots and geometric patterns", category: "Acrylic", localName: "004-coffee-theme.webp" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sunniertoday_1704934734_3277552568769568629_49563268918_1-bJGWyC4Ix3uVuq9KPeRBgp6rxOv1af.jpg", alt: "White checkered ghost nails", category: "Nail Art", localName: "005-ghost-checkered.jpg" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sunniertoday_1707662830_3300437497236802372_49563268918_1-LI47ANbRlZJ2s06twDvKPq1hK9vU5g.jpg", alt: "Pink swirl abstract nails", category: "Nail Art", localName: "006-pink-swirl.jpg" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sunniertoday_1689475593_3147871894803190197_49563268918_1-tHqLJL7jefEw7rK9s3gv5fBHR5kemb.jpg", alt: "Yellow sunflower nails", category: "Nail Art", localName: "007-sunflower.jpg" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sunniertoday_1686434758_3122363517584245661_49563268918_1-HoY6HPpHevEmnxXGfwxyYCU7B4Gi8Z.jpg", alt: "Neon bright color leaf nails", category: "Nail Art", localName: "008-neon-leaves.jpg" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sunniertoday_1686335090_3121527439234990178_49563268918_1-10LcpTZEwWqR6rSYKU4WkDjhuh7F6v.jpg", alt: "Lavender shimmer gem nails", category: "Nail Art", localName: "009-lavender-gems.jpg" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sunniertoday_1703821048_3268210291325021462_49563268918_1-SDKR1uu2khcexs8JEAG55RlqrWe7d1.jpg", alt: "Black star sparkle nails", category: "Nail Art", localName: "010-star-sparkle.jpg" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sunniertoday_1731021837_3496387046287321034_49563268918_1-UfEvzjK3cHnHl6PoG3rBWtVD9lT2xi.jpg", alt: "Gray ombre wavy pattern nails", category: "Nail Art", localName: "011-gray-ombre.jpg" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sunniertoday_1734652880_3526846442427597313_49563268918_1-YtDxi8uFZzvuaKiqf4EKFpCHX0lHg0.jpg", alt: "Deep red metallic with hand-painted cherry design", category: "Nail Art", localName: "012-red-cherries.jpg" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sunniertoday_1734267618_3523614626622822647_49563268918_1-TNZhgFVXfcU1PBpaJ9l9MdurltBv09.jpg", alt: "Red and green hand-painted nail art", category: "Nail Art", localName: "013-red-green-art.jpg" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sunniertoday_1728315903_3473688027895629991_49563268918_1-JJ3gNpA62wbDuemQZtbAem9zJmDMQ7.jpg", alt: "White with black eyelash nail art", category: "Nail Art", localName: "014-eyelash-art.jpg" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sunniertoday_1708826287_3310197274577756250_49563268918_1-cwgg4IdvwXU2QvMWlH88gjp6Kp40hw.jpg", alt: "Rainbow gradient hand-painted nails", category: "Nail Art", localName: "015-rainbow-gradient.jpg" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sunniertoday_1727484557_3466714187634129972_49563268918_1-HLm85oY1GU8eUgP4l3F4mj0dU7S58D.jpg", alt: "Nude with light blue flowers and gold leaves", category: "Nail Art", localName: "016-blue-flowers.jpg" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sunniertoday_1723909899_3436727787878761515_49563268918_1-Tf9bSVbjCXR44mWNXvs3doEtfcDi6E.jpg", alt: "Light blue with navy hand-painted branches", category: "Nail Art", localName: "017-blue-branches.jpg" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sunniertoday_1702346916_3255844375433731836_49563268918_1-XWkn0PgZkK42iH3qo21UlyJf68lFAZ.jpg", alt: "Silver white glitter nails", category: "Manicure & Pedicure", localName: "018-silver-glitter.jpg" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sunniertoday_1660127512_2901682344588509487_49563268918_1-iccLaQ9AYOyPdVWaTJv7hxf0aESa2X.jpg", alt: "Natural pink shimmer nails", category: "Manicure & Pedicure", localName: "019-pink-shimmer.jpg" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sunniertoday_1660127594_2901683030642468863_49563268918_1-qLszFixjVp0DatydFRGLr7xcFc6EEp.jpg", alt: "White daisy dot french nails", category: "Manicure & Pedicure", localName: "020-daisy-french.jpg" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sunniertoday_1721093332_3413100713171923564_49563268918_1-vrKD3JlWeAm23YVhUmpGF3ViGn6yhV.jpg", alt: "Nude with brown ombre and gold accents", category: "Manicure & Pedicure", localName: "021-brown-ombre.jpg" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sunniertoday_1727484515_3466713837216797395_49563268918_1-Np69dHa2MD2lp3hq34UpiomGKc4vaj.jpg", alt: "Brown ombre with glitter accent nails", category: "Manicure & Pedicure", localName: "022-brown-glitter.jpg" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sunniertoday_1702578224_3257784724150360369_49563268918_1-RPAze8qon2WEiWcL14j8zKX8u9cnip.jpg", alt: "Blue glitter winter nails", category: "Seasonal", localName: "023-blue-winter.jpg" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sunniertoday_1701219613_3246387870959454523_49563268918_1-BnUbhOSLKUHtF6iWMlgzUmCuFMLpz9.jpg", alt: "Gold glitter snowflake nails", category: "Seasonal", localName: "024-snowflake-gold.jpg" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sunniertoday_1697157374_3212311340864270973_49563268918_1-fnktVlw2EzvGqHqQh7GROEg4XDg4gX.jpg", alt: "Orange Halloween spider web nails", category: "Seasonal", localName: "025-spider-web.jpg" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sunniertoday_1666526183_2955358289743767621_49563268918_1-pQZg60XStkZkg2RNzT4EBTWC3soSVl.webp", alt: "Orange pumpkin face Halloween nails", category: "Seasonal", localName: "026-pumpkin-face.webp" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sunniertoday_1706890978_3293962725573361004_49563268918_1-1yKpxgBy3glMU9xMkvB0V4dVUPjnEW.jpg", alt: "Pink Valentine hearts nails", category: "Seasonal", localName: "027-valentine-hearts.jpg" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sunniertoday_1706437663_3290160043269009818_49563268918_1-YkBisOu328vtXdImjUWsg90ROvBvbP.jpg", alt: "Red heart flower Valentine nails", category: "Seasonal", localName: "028-heart-flower.jpg" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sunniertoday_1759589816_3736032627116618979_49563268918_1-6HSkufMXypA1awCj8d2sERGcGNyVqW.jpeg", alt: "Halloween white and red blood drip nails", category: "Seasonal", localName: "029-blood-drip.jpg" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sunniertoday_1733631745_3518280540458915006_49563268918_1-pln8DBeABlcEnZYV2aUWAGWypWAH3S.jpg", alt: "Dark green Christmas tree and gold nails", category: "Seasonal", localName: "030-christmas-tree.jpg" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sunniertoday_1734267583_3523614334464418761_49563268918_1-lnW6XL8lmfBwatwN191NDfz9UW0E01.jpg", alt: "Red and green Christmas plaid nails", category: "Seasonal", localName: "031-christmas-plaid.jpg" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sunniertoday_1725147770_3447111803903820089_49563268918_1-I3jatsBvtMwaSaj0u3cAX5hjjAvdqv.jpg", alt: "Orange with hand-painted fall leaf design", category: "Seasonal", localName: "032-fall-leaves.jpg" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sp-8YdgiMcVhXKlVWCAJA6lHiFm9AWL4B.webp", alt: "Halloween ghost faces with blood drip effects", category: "Seasonal", localName: "033-ghost-drip.webp" },
  { src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sp2-3rDdAKndUFqQkOf3R8Qf1Zq35qu0SY.webp", alt: "Halloween jack-o-lantern pumpkins with spiders", category: "Seasonal", localName: "034-pumpkin-spiders.webp" },
];

const galleryDir = path.join(__dirname, '../public/gallery');

// Create gallery directory if it doesn't exist
if (!fs.existsSync(galleryDir)) {
  fs.mkdirSync(galleryDir, { recursive: true });
  console.log('Created /public/gallery directory');
}

// Download function
function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https') ? https : http;
    const filePath = path.join(galleryDir, filename);

    const file = fs.createWriteStream(filePath);
    
    protocol.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`✓ Downloaded: ${filename}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(filePath, () => {});
      reject(err);
    });
  });
}

// Main execution
async function downloadAllImages() {
  console.log(`Starting download of ${galleryData.length} images...\n`);
  
  let downloaded = 0;
  let failed = 0;

  for (const image of galleryData) {
    try {
      await downloadImage(image.src, image.localName);
      downloaded++;
    } catch (err) {
      console.error(`✗ Failed to download: ${image.localName}`);
      failed++;
    }
  }

  console.log(`\n✓ Download complete: ${downloaded} succeeded, ${failed} failed`);
  
  if (failed === 0) {
    console.log('\nGenerating updated gallery configuration...');
    generateUpdatedConfig();
  }
}

// Generate updated page.tsx with local paths
function generateUpdatedConfig() {
  const updatedData = galleryData.map(img => ({
    ...img,
    src: `/gallery/${img.localName}`
  }));

  const config = `// Auto-generated - all images are now self-hosted locally
const galleryImages = ${JSON.stringify(updatedData, null, 2)};

export default galleryImages;`;

  fs.writeFileSync(
    path.join(__dirname, '../lib/gallery-data.ts'),
    config
  );
  
  console.log('✓ Generated /lib/gallery-data.ts');
  console.log('\nNext steps:');
  console.log('1. Update your app/gallery/page.tsx to import from /lib/gallery-data.ts');
  console.log('2. Test the gallery to ensure all images load correctly');
  console.log('3. Commit the /public/gallery/ folder to your repository');
}

downloadAllImages();
