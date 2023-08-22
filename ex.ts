function findBigger(x:number, y:number) {
    if (x>y) {
        return x;
    } else if (y>x) {
        return y;
    };
};

function printBigger(x:number, y:number) {
    if (x>y) {
        console.log(x);
    } else if (y>x){
        console.log(y);
    };
};

function findOdd(x:number) {
    if (x%2===0) {
        return 'this is duable number';
    }else {
        return 'this is odd number';
    }
}

function findLength(p:string) {
    return p.length;
}

function arrOfNum(x:number) {
    const arr = [];
    for (let i = 0; i < x; i++) {
        arr.push(i);
    } return arr;
}

function max(arr:number[]) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (max<arr[i]) {
            max = arr[i];
        }
    }return max;
}

type person = {
    Name: string;
    Age: number;
    IsStudent: boolean;
}

function printPerson(p:person) {
    console.log('name: ', p.Name);
    console.log('age: ', p.Age);
    console.log('student n/y', p.IsStudent);   
}

function isMinor (p:person) {
    if (p.Age<18) {
        return true;
    }else{
        return false;
    }
}

interface book {
    Title: string;
    Author: string;
    Year: number; 
}

type favoriteBook = {
    favoriteBook: book;
}
type reader = person & favoriteBook

function whosOldest(arr:reader[]) {
    let oldest = arr[0];
    for (let i = 1; i < arr.length; i++){
        if (oldest.Age < arr[i].Age){
            oldest = arr[i];
        };
    }return oldest;
}

function whichOldest(arr:reader[]) {
    let oldest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (oldest.favoriteBook.Year > arr[i].favoriteBook.Year){
            oldest = arr[i];
        }
    }return oldest;
}