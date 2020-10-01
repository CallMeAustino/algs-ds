function hashStringToInt(s, tableSize){
    let hash = 17;
    for (let i = 0; i < s.length; i++) {
        hash = hash * s.charCodeAt(i) % tableSize;
    }
    return hash;
}

class HashTable {

    array = new Array(100);

    getItem = (key) => {
        const idx = hashStringToInt(key, this.array.length);
        return this.array[idx];
    }

    setItem = (key, value) => {
        const idx = hashStringToInt(key, this.array.length);
        this.array[idx] = value;
    }

}

const myTable = new HashTable();
myTable.setItem("first","Austin");
myTable.setItem("last","Wong");
myTable.getItem("name");
console.log(myTable.getItem("first"));
console.log(myTable.getItem("last"));


