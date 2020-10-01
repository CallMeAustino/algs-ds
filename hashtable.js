function hashStringToInt(s, tableSize){
    let hash = 17;
    for (let i = 0; i < s.length; i++) {
        hash = hash * s.charCodeAt(i) % tableSize;
    }
    return hash;
}

class HashTable {

    array = new Array(100);
    numItems = 0;
    

    resize = () => {
        const newArray = new Array(array.length * 2);
        this.array.forEach(bucket => {
            if (bucket) {
                bucket.forEach(([key, value]) => {
                    const idx = hashStringToInt(key, newArray.length);
                    newArray[idx] = value;
                });
            }
        });
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
        if(loadFactor > .8){
            this.resize();
        }
        const idx = hashStringToInt(key, this.array.length);
        if (!this.array[idx]){
            this.array[idx] = [[key, value]];
        } else {
            this.array.push([key, value]);
        }
    }

}

const myTable = new HashTable();
myTable.setItem("first","Austin");
myTable.setItem("last","Wong");
myTable.getItem("name");
console.log(myTable.getItem("first"));
console.log(myTable.getItem("last"));


