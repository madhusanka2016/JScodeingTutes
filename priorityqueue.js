var Queue = function(){
    this.collection = [];
    this.print = function(){
        return this.collection;
    }
    this.enqueue =function(value){
        if(this.isEmpty()){
            this.collection.push(value);

        }
        else{
            var added = false;
            for( var i = 0; i<this.collection.length; i++){
                if(value[1]<this.collection[i][1]){
                    this.collection.splice(i,0,value); // add to the begining of the element
                    added = true;
                    break;
                }
                    

            }
            if(!added){
                this.collection.push(value);

            }    
    }
}
    this.dequeue = function(){
        return this.collection.shift();
    }
    this.front = function(){
        return this.collection[0];
    }
    this.size = function(){
        return this.collection.length;
    }
    this.isEmpty = function(){
        if(this.collection.length!==0){
            return false;
        }
        return true
    }
}

var myqueue = new Queue();
console.log(myqueue.isEmpty());
myqueue.enqueue([2,2]);
myqueue.enqueue([3,1]);
myqueue.enqueue([4,1]);
console.log(myqueue.print());
console.log(myqueue.size());
console.log(myqueue.isEmpty());

console.log(myqueue.front());
console.log(myqueue.front());
console.log(myqueue.print());




