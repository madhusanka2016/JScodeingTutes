var Set = function(){
    this.collection = [];

    this.values = function(){
        return this.collection;
    }
    this.has = function(value){
        return (this.collection.indexOf(value)!==-1);
    }
    this.add = function (value){
        if(!this.has(value)){
            this.collection.push(value);
            return true;
        }
        return false;
    }
    this.size = function(){
        return this.collection.length;
    }
    this.remove = function(value){
        if(this.has(value)){
            index = this.collection.indexOf(value);
            this.collection.splice(index,1); // 
            return true;
        }
        return false;
    }
    this.union = function(otherset){
        var unionset = new Set();
        var firstset = this.values();
        var secondset = otherset.values();
        firstset.forEach(function(element) {
            unionset.add(element);
        });
        secondset.forEach(function(element) {
            unionset.add(element);
        });
        return unionset;
    }
    this.intersection = function(otherset){
        var intersectionset = new Set();
        var firstset = this.values();
        var secondset = otherset.values();
        firstset.forEach(function(element)
        {
            if(otherset.has(element)){
                intersectionset.add(element);
            }
        }
        );
        return intersectionset;

    }
    this.difference = function(otherset){
        var differenceset = new Set();
        var firstset = this.values();
        var secondset = otherset.values();
        firstset.forEach(function(element){
            if(!otherset.has(element)){
                difference.add(element);
            }
        });
        return differenceset;
    }
    this.subset = function(otherset){
        var firstset = this.values();
        return firstset.every(function(element){
            return otherset.has(element);
        });
    }
}


var myset = new Set();
console.log(myset.values());
console.log(myset.has(1));
console.log(myset.add(1));
console.log(myset.values());
console.log(myset.has(1));
console.log(myset.add(1));
console.log(myset.add(2));
console.log(myset.values());
console.log(myset.remove(1));
var set2 = new Set();
console.log(set2.add(3));
console.log(set2.add(2));
console.log(set2.add(1));



console.log(set2.size());
var unionset = myset.union(set2);
var inter = myset.intersection(set2);
var diff = myset.difference(set2);

console.log(unionset.values());
console.log(inter.values());
console.log(diff.values());
console.log(myset.subset(set2));





