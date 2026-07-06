import sharp from 'sharp'
import { mkdir, copyFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')
const assets = path.join(
  root,
  '.cursor/projects/Users-redaessebar-Downloads-agency-website-redesign/assets',
)
const iconSrc = path.join(
  '/Users/redaessebar/.cursor/projects/Users-redaessebar-Downloads-agency-website-redesign/assets/4-93a67ff3-52a3-44c5-ae55-2aea5bbd7fe0.png',
)
const ogSrc = path.join(
  '/Users/redaessebar/.cursor/projects/Users-redaessebar-Downloads-agency-website-redesign/assets/3-8acfc1c3-991b-433e-a350-9033e8c82d93.png',
)
const publicDir = path.join(root, 'public')
const appDir = path.join(root, 'app')

async function circleIcon(input, output, size) {
  const inset = Math.round(size * 0.14)
  const inner = size - inset * 2

  const icon = await sharp(input)
    .resize(inner, inner, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png()
    .toBuffer()

  const mask = Buffer.from(
    `<svg width="${size}" height="${size}"><circle cx="${size / 2}" cy="${size / 2}" r="${size / 2}" fill="white"/></svg>`,
  )

  await sharp({
    create: {
      width: size,
      height: size,
      channels: 4,
      background: { r: 18, g: 18, b: 18, alpha: 255 },
    },
  })
    .composite([{ input: icon, top: inset, left: inset }])
    .composite([{ input: mask, blend: 'dest-in' }])
    .png()
    .toFile(output)
}

await mkdir(publicDir, { recursive: true })

await circleIcon(iconSrc, path.join(appDir, 'icon.png'), 512)
await circleIcon(iconSrc, path.join(appDir, 'apple-icon.png'), 180)
await circleIcon(iconSrc, path.join(publicDir, 'favicon.png'), 32)

await sharp(ogSrc)
  .resize(1200, 630, { fit: 'contain', background: { r: 18, g: 18, b: 18, alpha: 255 } })
  .png()
  .toFile(path.join(appDir, 'opengraph-image.png'))

await sharp(ogSrc)
  .resize(1200, 630, { fit: 'contain', background: { r: 18, g: 18, b: 18, alpha: 255 } })
  .png()
  .toFile(path.join(appDir, 'twitter-image.png'))

await copyFile(path.join(appDir, 'icon.png'), path.join(publicDir, 'icon.png'))
await copyFile(path.join(appDir, 'apple-icon.png'), path.join(publicDir, 'apple-icon.png'))
await copyFile(iconSrc, path.join(publicDir, 'gieo-mark.png'))
await copyFile(ogSrc, path.join(publicDir, 'gieo-og.png'))

console.log('Brand icons generated.')
