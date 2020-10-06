class AnimalShelter {
    constructor(){
        this.queue = [];
        this.oldest_dog = null;
        this.oldest_cat = null;
    }
    addAnimal(name, type) {
        this.queue.push([name,type])
        if (type === "Cat"){
            this.oldest_cat = [name];
        } else {
            this.oldest_dog = [name];
        }
    }
    adoptOldest() {
        this.queue.shift();
    }

    adoptCat() {
        this.queue.forEach((animal,i) => {
            console.log(i);
            console.log((animal[0] === this.oldest_cat[0]));
            if(animal[0] === this.oldest_cat[0] && animal[1] === "Cat"){
                this.queue.splice(i,1);
                // go through queue to assign next oldest Cat
            }
        })
    }

    adoptDog() {
        this.queue.forEach(animal,i => {
            if(animal[1] === this.oldest_dog){
                this.queue.splice(i,1);
            }
        })
    }
}

let Hempstead = new AnimalShelter();
Hempstead.addAnimal("Todd", "Cat");
Hempstead.adoptCat();
console.log(Hempstead);