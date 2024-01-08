// Hash Table do JS

let shop = new Map();

shop.set("Arroz", 40);
shop.set("Frango", 30);
shop.set("30 Ovos", 20);

let precoFrango = `R$ ${shop.get("Frango").toFixed(2)}`;

console.log("Hash do JS:\n");
console.log(shop.get("Arroz"));
console.log(precoFrango);
console.log(shop.size);


// Implementação de uma hash table própria

class HashTable {
    constructor() {
        this.table = new Array(127);
        this.size = 0;
    }

    set(chave, valor) {
        const indice = this._hash(chave);

        if (this.table[indice]) {
            for (let i = 0; i < this.table[indice].length; i++) {
                if (this.table[indice][i][0] === chave) {
                    this.table[indice][i][1] = valor;
                    return;
                }
            }

            this.table[indice].push([chave, valor]);
        } else {
            this.table[indice] = [];
            this.table[indice].push([chave, valor]);
            return;
        }

        this.size++;
    }

    get(chave) {
        const indice = this._hash(chave);

        if (this.table[indice]) {
            for (let i = 0; i < this.table[indice].length; i++) {
                if (this.table[indice][i][0] === chave) {
                    return this.table[indice][i][1];
                }
            }
        }

        return undefined;
    }

    remove(chave) {
        const indice = this._hash(chave);

        if (this.table[indice] && this.table[indice].length) {
            for (let i = 0; i < this.table.length; i++) {
                if (this.table[indice][i][0] === chave) {
                    this.table[indice].splice(i, 1);
                    this.size--;
                    return true;
                }
            }
        } else {
            return false;
        }
    }

    showAll() {
        this.table.forEach((valores, indice) => {
            const indiceValores = valores.map(([chave, valor]) => `[ ${chave}: ${valor} ]`);
            console.log(`${indice}: ${indiceValores}`);
        });
    }

    _hash(chave) {
        let indice = 0;

        for (const char of chave) {
            indice += char.charCodeAt(0);
        }

        return indice % this.table.length;
    }
}

// Teste

let minhaHash = new HashTable();

minhaHash.set("Arroz", 40);
minhaHash.set("Galinha", 30);
minhaHash.set("30 Ovos", 20);

let precoGalinha = `R$ ${minhaHash.get("Galinha").toFixed(2)}`;

console.log("\n----------------------------\nMinha Hash:\n");
console.log(minhaHash.get("Arroz"));
console.log(precoGalinha);
console.log(minhaHash.size);
minhaHash.showAll();

minhaHash.remove("Arroz");
console.log(minhaHash.size);
console.log(minhaHash.get("Arroz"));

//Teste de colisão
minhaHash.set("alo", 10);
minhaHash.set("ola", 20);
console.log(minhaHash.get("alo"));
console.log(minhaHash.get("ola"));
minhaHash.showAll();