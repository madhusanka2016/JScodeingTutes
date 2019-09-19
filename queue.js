var Queue = function(){
    this.collection = [];
    this.print = function(){
        return this.collection;
    }
    this.enqueue =function(value){
        this.collection.push(value);
        return true;
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
myqueue.enqueue(2);
myqueue.enqueue(3);
myqueue.enqueue(4);
console.log(myqueue.print());
console.log(myqueue.size());
console.log(myqueue.isEmpty());

console.log(myqueue.front());
console.log(myqueue.dequeue());
console.log(myqueue.front());




