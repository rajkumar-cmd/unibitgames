// SAMPLE INPUT
let arr = [1, 3, 2, 2, -4, 6, -2, 8];

// TARGET VALUE
let value = 4;

// OUTPUT
// First Combination For Target value
// TIME COMPLEXITY:- O(n^2)
// SPACE COMPLEXITY:- O(n)
function firstCombination() {
    let firstArray=[];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === value) {
                firstArray.push([arr[i], arr[j]]);
                arr[i]=null,arr[j]=null;
            }
        }
    }
    return firstArray;
}
let result=firstCombination();
console.log(`First Combination For “${value}” :`,result);


// Merge into single Array
// TIME COMPLEXITY:- O(nlogn)
// SPACE COMPLEXITY:- O(n)
let mergeArray=[];
function mergeIntoSingleArray() {
    for (let i = 0; i < result.length; i++) {
        mergeArray.push(result[i][0]);
        mergeArray.push(result[i][1]);
    }
    mergeArray.sort();
}
mergeIntoSingleArray()
console.log("Merge Into a single Array : ",mergeArray)

// Second Combination For Double target value
let secondArray=[];
function secondCombination(mergeArray,newArray,position){
    if(newArray.length!=0){
        let sum=0;
        for(let i=0;i<newArray.length;i++){
            sum+=newArray[i];
        }
        if(sum==value*2){
            // console.log(newArray);
            secondArray.push([...newArray]);
        }
    }
    if(mergeArray.length==position){
        return;
    }
    for(let i=position;i<mergeArray.length;i++){
        newArray.push(mergeArray[i]);
        secondCombination(mergeArray,newArray,i+1);
        newArray.pop();
    }
}
secondCombination(mergeArray,[],0);
console.log(`Second Combination For “${value*2}” :`,secondArray);