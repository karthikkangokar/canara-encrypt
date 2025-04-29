const jose = require('jose');
var JSON_parse = require('uint8array-json-parser').JSON_parse;

exports.handler = async (event, context) => {
    let body;
    
    // Parse the incoming event body
    const incomingData = JSON.parse(event.body);
    
    // Extract the payload and key
    const payload = incomingData.encrypt;
    const key = incomingData.key;
    
    // Convert the key to a buffer
    const secret = Buffer.from(key, 'hex');
    
    // Encrypt the payload
    try {
        const jwe = await new jose.EncryptJWT(payload)
            .setProtectedHeader({ alg: 'A256KW', enc: 'A128CBC-HS256' })
            .encrypt(secret);
        
        // Return the encrypted object
        var response = {
            encrypt: jwe
        };
        return response;
    } catch (error) {
        // Handle any errors
        return {
            error: error.message
        };
    }
};
