const listLength = 20000;
let reverseArray = "false";
let selectedAlgorithm = "0";
let duplicated = "false";

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

function conditionSelected(){
    duplicated = document.getElementById("selectDuplicated").value;
    reverseArray = document.getElementById("selectReverse").value;
    selectedAlgorithm = document.getElementById("selectSortAlgorithm").value;

    // console.log(typeof(duplicated) )
    // console.log(typeof(reverseArray))
    // console.log(typeof(selectedAlgorithm))
}

function sortArray(){
    let startT;
    let endT;
    startT = new Date().getTime();

    let resultArray = new Array;
    
    if(duplicated == "true"){
        resultArray = creatDuplicatedList(resultArray);
    }else if(duplicated == "false"){
        resultArray = creatUnduplicatedList(resultArray);
    }

    switch(selectedAlgorithm){
        case "0":
            resultArray = bubbleSort(resultArray);
            break;
        case "1":
            resultArray = selectionSort(resultArray);
            break;
        case "2":
            resultArray = insertionSort(resultArray);
            break;
        case "3":
            resultArray = mergerSort(resultArray, resultArray[0], resultArray[resultArray.length-1]);
            break;
        case "4":
            resultArray = quickSort(resultArray);
            break;
        case "5":
            resultArray = heapSort(resultArray);
            break;
        case "6":
            resultArray = bucketSort(resultArray);
            break;
        case "7":
            resultArray = shellSort(resultArray);
            break;
        case "8":
            resultArray = pigenHoleSort(resultArray);
            break;
        case "9":
            resultArray = binaryTreeSort(resultArray);
            break;
        case "10":
            resultArray = radixSort(resultArray);
            break;
        case "11":
            resultArray = cocktailSort(resultArray);
            break;
        
    }

    endT = new Date().getTime();

    if(reverseArray == "false"){
        document.getElementById("sortTime").innerHTML = `Duration time: ${endT-startT} mm`;
        document.querySelector("main").innerHTML = resultArray;
    }else if(reverseArray == "true"){
        document.getElementById("sortTime").innerHTML = `Duration time: ${endT-startT} mm`;
        document.querySelector("main").innerHTML = resultArray.reverse();
    }

}

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

// 2. Selection sort
function selectionSort(array){
    let temp;
    for(i=0; i<(array.length-1); i++){
        for(j=i+1; j<=(array.length-1); j++){
            if(array[i]>array[j]){
                temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    }
    return array;
}

// 3. Insertion sort
function insertionSort(array){
    let resultArray = new Array;
    for(i=0; i<array.length; i++){
        if(i == 0){
            resultArray.push(array[i]);
        }else{
            for(j=0; j<resultArray.length; j++){
                if(array[i]<=resultArray[0]){
                    resultArray.splice(0, 0, array[i]);
                    break;
                }else if(array[i]>=resultArray[resultArray.length-1]){
                    resultArray.push(array[i]);
                    break;
                }else if(array[i]>=resultArray[j] && array[i]<=resultArray[j+1]){
                    resultArray.splice(j+1, 0, array[i]);
                    break;
                }
            }
        }
    }
    return resultArray;
}

// 4. Merger sort(damn hard)
function mergerSort(array, l, r){

}