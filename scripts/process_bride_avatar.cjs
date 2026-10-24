const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const inputPath = 'C:/Users/Nirmal/.gemini/antigravity-ide/brain/5fda8bfb-f437-4e02-a5a2-fd0099b6e9bc/bride_haldi_avatar_1792833318684.jpg';
const outputPath = 'static/bride_haldi_avatar.png';

async function processImage() {
  console.log('Loading input:', inputPath);
  const { data, info } = await sharp(inputPath).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;
  const visited = new Uint8Array(width * height);
  const queue = [];

  function isWhite(idx) {
    const p = idx * channels;
    return data[p] >= 242 && data[p+1] >= 242 && data[p+2] >= 242;
  }

  for (let x = 0; x < width; x++) {
    let idx = x;
    if (isWhite(idx)) { visited[idx] = 1; queue.push(idx); }
    idx = (height - 1) * width + x;
    if (isWhite(idx)) { visited[idx] = 1; queue.push(idx); }
  }
  for (let y = 0; y < height; y++) {
    let idx = y * width;
    if (!visited[idx] && isWhite(idx)) { visited[idx] = 1; queue.push(idx); }
    idx = y * width + (width - 1);
    if (!visited[idx] && isWhite(idx)) { visited[idx] = 1; queue.push(idx); }
  }

  let head = 0;
  while(head < queue.length) {
    const curr = queue[head++];
    const cx = curr % width;
    const cy = Math.floor(curr / width);

    const neighbors = [
      cx > 0 ? curr - 1 : -1,
      cx < width - 1 ? curr + 1 : -1,
      cy > 0 ? curr - width : -1,
      cy < height - 1 ? curr + width : -1
    ];

    for (const n of neighbors) {
      if (n !== -1 && !visited[n] && isWhite(n)) {
        visited[n] = 1;
        queue.push(n);
      }
    }
  }

  for (let i = 0; i < width * height; i++) {
    const p = i * channels;
    if (visited[i]) {
      data[p + 3] = 0;
    } else {
      const br = (data[p] + data[p+1] + data[p+2]) / 3;
      if (br > 248) {
        data[p + 3] = Math.max(0, Math.min(255, Math.round((255 - br) / 7 * 255)));
      }
    }
  }

  await sharp(data, { raw: { width, height, channels } })
    .png()
    .toFile(outputPath);
  console.log('Saved static/bride_haldi_avatar.png successfully!');
}

processImage().catch(console.error);
