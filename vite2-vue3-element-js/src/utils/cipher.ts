import UTF8 from 'crypto-js/enc-utf8'
import md5 from 'crypto-js/md5'
import Base64 from 'crypto-js/enc-base64'

export function encodeBase64(cipherText: string) {
  return UTF8.parse(cipherText).toString(Base64)
}

export function decodeBase64(cipherText: string) {
  return Base64.parse(cipherText).toString(UTF8)
}

export function encodeMd5(cipherText: string) {
  return md5(cipherText).toString()
}
