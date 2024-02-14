import { playfairDecrypt, playfairEncrypt } from "./playfair.js"

let args = process.argv.slice(2)
let output = ""

if(args[0] == "--encrypt") {
    const key = args[2]
    const message = args[1]
    
    output = playfairEncrypt(message, key)
    console.log("Cipher Text: ", output)
}

else if (args[0] == "--decrypt") {
    const key = args[2]
    const cipher = args[1]

    output = playfairDecrypt(cipher, key)
    console.log("Plain Text: ", output)
}
else {
    console.log("use --encrypt/decrypt plain/cipher key")
}
