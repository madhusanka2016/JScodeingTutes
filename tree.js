class Node{ 
    constructor(data, left= null, right = null){ // create calls (prototpe of object) called node to make Node with left and right as defauld of null
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BST {
    constructor(){
        this.root = null; // imitially construct the gtree with root as null
    }
    add(data){
        const node = this.root;
        if(node ===null){ // check wheather there is a root
            this.root = new Node(data); //create new left node and assign value
            return;
        }
        else{
            const searchtree =function(node){
                if(data <node.data){ // checjh new data is grater than selected node
                    if(node.left===null){ // check there the left node is null
                        node.left = new Node(data);
                        return;
                    }
                    else{
                        return searchtree(node.left); // run the recursively to lect node
                    }
                     
                }
                else if(data >node.data){ // checjh new data is grater than selected node
                    if(node.right===null){ // check there the right node is null
                        node.right = new Node(data); //create new right node and assign value
                        return;
                    }
                    else{
                        return searchtree(node.right); // run the recursively to right node
                    }
                     
                }
                else{
                    return null;
                }
            }
            return searchtree(node);// calll as root node
        }
    } 

    findmin(){ // go to down of left most
        let current = this.root;// go to the root of the tree
        while(current.left!==null){
            current=current.left;
        }
        return current;
    }
    findmax(){ // go to down of right most
        let current = this.root;// go to the root of the tree
        while(current.right!==null){
            current=current.right;
        }
        return current;
    }
    find(data){ // 
        let current = this.root;// go to the root of the tree
        while(current.data !==data){

            if(data<current.data) {
                current = current.left;
            }
            else{
                current = current.right;
            }
            if(current ===null){
                return null
            }

                // check for go left
        }
      return current;
    }
    isPresent(data){ // 
        let current = this.root;// go to the root of the tree
        while(current){

            if(current.data===data){
                return true;
            }

            if(data<current.data) {
                current = current.left;
            }
            else{
                current = current.right;
            }
            if (current===null){
                return false;
            }
            

                // check for go left
        }
     
    }
    
}

var tree = new BST();
tree.add(3);
tree.add(2);
tree.add(10);
tree.add(5);
tree.add(13);
console.log(tree.findmin());
console.log(tree.findmax());
console.log(tree.find(2));
console.log(tree.find(1));
console.log(tree.isPresent(1));



console.log(tree);