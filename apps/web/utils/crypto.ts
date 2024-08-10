import crypto from "crypto";
import { createSafeActionClient } from "next-safe-action";

export const action = createSafeActionClient()

export const encryptSymmetric = ({ key, data }: { key: Buffer, data: string }) => {
	const iv = crypto.randomBytes(16);

	const cipher = crypto.createCipheriv("aes256", Buffer.from(key), Buffer.from(iv));


	const ciphertext = Buffer.from(iv).toString('hex') + ':' + Buffer.concat([cipher.update(data), cipher.final()]).toString("hex")

	return { ciphertext, key: Buffer.from(key).toString('hex') };
}

export const decryptSymmetric = ({ key, data }: { key: string, data: string }) => {
	const [iv, ciphertext] = data.split(':')

	const decipher = crypto.createDecipheriv("aes256", Buffer.from(key, 'hex'), Buffer.from(iv, 'hex'));

	const plaintext = decipher.update(ciphertext, 'hex', 'utf8') + decipher.final('utf8');

	return plaintext;
}

export const compareSymmetric = ({ key, data, compare }: { key: string, data: string, compare: string }) => {
	const decryptedPassphrase = decryptSymmetric({ key: key, data: data })
	return decryptedPassphrase === compare ? true : false
}