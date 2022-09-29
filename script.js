class LinkedList{
    constructor(element){
        this.count = 0;
        this.head = null;
        this.prox = null;
        
    }
    append(element){
        let l = new LinkedList(element);
        l.head = element;
        let current;

        if(this.head === null){
            this.head = l;
        }else{
            current = this.head;

            while(current.prox != null){
                current = current.prox;
            }
            current.prox = l;
            this.count++;
        }
    }

    toString(){
        let current = this.head;
        let string = " ";
        let count = 0;
        let arr = [];

        while(current != null){
            arr[count] = current.head;
            string += current.head;
            current = current.prox;
            count++;
        }
        return arr;
    }
    print(){
        console.log(this.toString());
    }
}

let list = new LinkedList();


list.append("John");
list.append("Mary");
list.append("Paul");

list.print();

console.log(list);