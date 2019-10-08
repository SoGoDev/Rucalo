import crypto from 'crypto';
export function encryptData(data) {
  return crypto.createHash("md5").update(data).digest("hex");
}
