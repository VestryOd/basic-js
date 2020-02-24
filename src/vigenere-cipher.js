class VigenereCipheringMachine {
    constructor(direct, lang) {
        this.direct = direct === false ? false : true;
        this.lang = lang || "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }

    checkParams(str, key) {
        if (!str || !key || typeof (str) !== 'string' || typeof (key) !== 'string') throw new Error();
    }

    prepareKey(str, key) {
        while (str.length > key.length) {
            key += key;
        }
        for (let i = 0; i < str.length; i++) {
            if (this.lang.indexOf(str.charAt(i)) == -1) {
                key = key.slice(0, i) + str.charAt(i) + key.slice(i);
            }
        }
        return key;
    }

    cryptographer(str, key, mode) {
        let result = '';
        str = str.toUpperCase();
        key = this.prepareKey(str, key.toUpperCase());

        for (let i = 0; i < str.length; i++) {
            if (this.lang.indexOf(str.charAt(i)) === -1) {
                result += str.charAt(i);
            } else {
                if (mode === true) {
                    result += this.lang.charAt((this.lang.indexOf(str.charAt(i)) + this.lang.indexOf(key.charAt(i))) % 26);
                } else {
                    result += this.lang.charAt((this.lang.indexOf(str.charAt(i)) - this.lang.indexOf(key.charAt(i)) + 26) % 26);
                }
            }
        }
        return this.direct !== false ? result : result.split('').reverse().join('');
    }

    encrypt(string, key) {
        this.checkParams(string, key);
        return this.cryptographer(string, key, true);
    }

    decrypt(string, key) {
        this.checkParams(string, key);
        return this.cryptographer(string, key, false);
    }
}

module.exports = VigenereCipheringMachine;
