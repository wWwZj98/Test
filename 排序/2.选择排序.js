// 选择排序
let arr = [2,35,657,34,123,6,127,434,212,652,234241,3253212,23123]
function selectionSort(arr){
    var minIndex,temp
    for(var i=0; i<arr.length-1; i++){
        minIndex = i
        for(var j=i+1;j<arr.length; j++){
            if(arr[minIndex]>arr[j]){       //寻找最小的数
                minIndex = j               //将最小的数的索引保存
            }
        }
        temp = arr[minIndex]
        arr[minIndex] = arr[i]
        arr[i] = temp
    }
}
selectionSort(arr)
for(let i = 0;i<arr.length;i++){
    console.log(arr[i])
}

let arr1 = [8,4,1,7,13,24,34,2,46,1,244,123]
//选择排序  
function selectionSort1(arr){
    for(let i =0;i<arr.length-1;i++){
        //当前索引作为最小值索引
        let minIndex = i
        for(let j =i+1;j<arr.length;j++){
            if(arr[minIndex]>arr[j]){
                minIndex = j
            }
        }
        let temp = arr[minIndex]
        arr[minIndex] = arr[i]
        arr[i] = temp
    }
    return arr
}
console.log(selectionSort1(arr1))