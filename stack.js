var Stack = function() {
    this.count = 0;
    this.storage = {};

    this.push = function(value){ // pusah function
        this.storage[this.count] = value;
        this.count ++;
    }


    this.pop = function(){ //pop function
        if (this.count ===0){
            return undefined;
        }
        else{
            this.count --;
            var result = this.storage[this.count];
            delete this.storage[this.count];
            return result;
        }
    }

    this.size = function() { //size function
        return this.count;
    }

    this.isEmpty= function(){
        if(this.count===0){
            var result = 'true';
        }
        else{
            var result = 'false';
        }

        return result;
    }
    this.peak = function() {
        var result = this.storage[this.count -1];
        return result;
    }



}

var cars = new Stack();
cars.push("Audi");
console.log(cars.isEmpty());
cars.push('BMW');
console.log(cars.peak());
console.log(cars);
console.log(cars.pop());
console.log(cars);


