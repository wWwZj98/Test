// 冒泡排序
let arr = [2,35,657,34,123,6,123,434,212,652,234241,3253212,23123]

function bubbleSort(arr){
    for(let i = 0; i<arr.length;i++){
        for(let j = 0;j<arr.length-i;j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
}
bubbleSort(arr)
for(let i = 0;i<arr.length;i++){
    console.log(arr[i])
}



let arr1 = [8,4,1,7,13,24,34,2,46,1,244,123]
//冒泡排序：
function bubbleSort1(arr){
    for(let i =0;i<arr.length;i++){
        for(let j=0;j<arr.length-i;j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
}
bubbleSort1(arr1)
for(let i = 0;i<arr1.length;i++){
    console.log(arr1[i])
}
