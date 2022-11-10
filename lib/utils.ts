import * as crypto from "crypto";

const algorithm = 'aes-256-cbc';
const key = '7x!A%D*G-JaNdRgUkXp2s5v8y/B?E(H+';

export function convertDuration(duration: number) {
  const seconds = duration / 1000
  let durationSeconds = Math.round(seconds % 60);
  const durationMinutes = Math.round((seconds - durationSeconds) / 60)
  
  if (durationSeconds < 10) {
    let secondsString = String(durationSeconds / 10);
    secondsString = secondsString[0] + secondsString[2]
  }
  let newDuration = `${durationMinutes}:${durationSeconds}`
  return newDuration
}

export function encryption(data: any) {
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv(algorithm, key, iv)
  const encrypted = Buffer.concat([cipher.update(data), cipher.final()]);
  
  return {
    iv: iv,
    content: encrypted
  };
}

export function decryption(data: any) {
  const algorithm = 'aes-256-cbc';
  const key = '7x!A%D*G-JaNdRgUkXp2s5v8y/B?E(H+';
  try {
    const decipher = crypto.createDecipheriv(algorithm, key, data.iv.buffer);
    const decrypted = Buffer.concat([decipher.update(data.content.buffer, 'base64'), decipher.final()]);
    return decrypted.toString();
  } catch (error) {
    throw error;
  }
}