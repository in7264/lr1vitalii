function encryptCaesar() {
    const inputText = document.getElementById("inputText").value;
    const shift = parseInt(document.getElementById("shift").value);
    const outputText = document.getElementById("outputText");
    
    let result = "";

    for (let i = 0; i < inputText.length; i++) {
        let charCode = inputText.charCodeAt(i);

        if (charCode >= 65 && charCode <= 90) {
            result += String.fromCharCode(((charCode - 65 + shift) % 26) + 65);
        } else if (charCode >= 97 && charCode <= 122) {
            result += String.fromCharCode(((charCode - 97 + shift) % 26) + 97);
        } else {
            result += inputText[i];
        }
    }

    outputText.value = result;
}

function decryptCaesar() {
    const inputText = document.getElementById("inputText").value;
    const shift = parseInt(document.getElementById("shift").value);
    const outputText = document.getElementById("outputText");

    let result = "";

    for (let i = 0; i < inputText.length; i++) {
        let charCode = inputText.charCodeAt(i);

        if (charCode >= 65 && charCode <= 90) {
            result += String.fromCharCode(((charCode - 65 - shift + 26) % 26) + 65);
        } else if (charCode >= 97 && charCode <= 122) {
            result += String.fromCharCode(((charCode - 97 - shift + 26) % 26) + 97);
        } else {
            result += inputText[i];
        }
    }

    outputText.value = result;
}

function encryptSubstitution() {
    const inputText = document.getElementById("inputText").value;
    const outputText = document.getElementById("outputText");
    
    const substitutionKey = {
        'a': 'q', 'b': 'w', 'c': 'e', 'd': 'r', 'e': 't',
        'f': 'y', 'g': 'u', 'h': 'i', 'i': 'o', 'j': 'p',
        'k': 'a', 'l': 's', 'm': 'd', 'n': 'f', 'o': 'g',
        'p': 'h', 'q': 'j', 'r': 'k', 's': 'l', 't': 'z',
        'u': 'x', 'v': 'c', 'w': 'v', 'x': 'b', 'y': 'n',
        'z': 'm',
    };

    let result = '';

    for (let i = 0; i < inputText.length; i++) {
        const char = inputText.charAt(i).toLowerCase();

        if (substitutionKey.hasOwnProperty(char)) {
            if (inputText.charAt(i).toUpperCase() === inputText.charAt(i)) {
                result += substitutionKey[char].toUpperCase();
            } else {
                result += substitutionKey[char];
            }
        } else {
            result += inputText.charAt(i);
        }
    }

    outputText.value = result;
}

function decryptSubstitution() {
    const inputText = document.getElementById("inputText").value;
    const outputText = document.getElementById("outputText");
    
    const substitutionKey = {
        'q': 'a', 'w': 'b', 'e': 'c', 'r': 'd', 't': 'e',
        'y': 'f', 'u': 'g', 'i': 'h', 'o': 'i', 'p': 'j',
        'a': 'k', 's': 'l', 'd': 'm', 'f': 'n', 'g': 'o',
        'h': 'p', 'j': 'q', 'k': 'r', 'l': 's', 'z': 't',
        'x': 'u', 'c': 'v', 'v': 'w', 'b': 'x', 'n': 'y',
        'm': 'z',
    };

    let result = '';

    for (let i = 0; i < inputText.length; i++) {
        const char = inputText.charAt(i).toLowerCase();

        if (substitutionKey.hasOwnProperty(char)) {
            if (inputText.charAt(i).toUpperCase() === inputText.charAt(i)) {
                result += substitutionKey[char].toUpperCase();
            } else {
                result += substitutionKey[char];
            }
        } else {
            result += inputText.charAt(i);
        }
    }

    outputText.value = result;
}
