const listLength = 10000;
let duplicatedList = new Array;
let unduplicatedList = new Array;

// Creat a dublicated list.
function creatDuplicatedList(array){
    let count = 0;
    while(count<listLength){
        array.push(Math.floor(Math.random()*listLength));
        count++;
    }
    return array;
}

// Creat an undublicated list.
function creatUnduplicatedList(array){
    let count = 0;
    let tempArr = new Array;
    while(count<listLength){
        tempArr.push(count);
        count++;
    }
    for(i=0; i<listLength; i++){
        let index = Math.floor(Math.random()*count)
        array.push(tempArr[index]);
        tempArr.splice(index, 1);
        count--;
    }
    return array; 
}

creatDuplicatedList(duplicatedList);
creatUnduplicatedList(unduplicatedList);

// 1. Bubble sort
function bubbleSort(array){
    let count = 0;
    let temp;

    while(count<(listLength-1)){
        for(i=0; i<array.length-(count+1); i++){
            let j = i + 1;
            if(array[i]>array[j]){
                temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
        count++;
    }
    return array;
}

// console.log(bubbleSort(unduplicatedList));

// 2. Selection sort
function selectionSort(){
    
}

console.log(selectionSort(unduplicatedList));