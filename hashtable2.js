function hashStringToInt(s, tableSize){
    let hash = 17;
    for (let i = 0; i < s.length; i++) {
        hash = hash * s.charCodeAt(i) % tableSize;
    }
    return hash;
}

class HashTable {

    array = new Array(3);
    numItems = 0;

    resize = () => {
        const newArray = new Array(this.array.length * 2);
        this.array.forEach(bucket => {
            if (bucket) {
                bucket.forEach(([key, value]) => {
                    const idx = hashStringToInt(key, newArray.length);
                    if (newArray[idx]){
                        newArray[idx].push([key, value]);
                    } else {
                        newArray[idx] = [[key, value]];
                    }
                });
            }
        });
        this.array = newArray;
    }

    getItem = (key) => {
        const idx = hashStringToInt(key, this.array.length);
        if (!this.array[idx]){
            return null;
        }
        return this.array[idx].find(x => x[0] === key)[1];
    }

    setItem = (key, value) => {
        this.numItems++;
        const loadFactor = this.numItems / this.array.length;
        if (loadFactor > .8){
            resize();
        }
        const idx = hashStringToInt(key, this.array.length);
        if (this.array[idx]){
            this.array[idx].push([key, value]);
        } else {
            this.array[idx] = [[key, value]];
        }
    }
}

let table = new HashTable; //instance of HashTable class
table.setItem("keya","verycute");
console.log(table.getItem("keya"));

/* [ [[kelly, lesscute]], [[keya, verycute],[austin, cutest]] , [[eva, notcute]] ]*/
