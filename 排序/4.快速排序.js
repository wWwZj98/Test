//快速排序
let arr = [2,35,657,34,123,6,123,434,212,652,234241,3253212,23123,2]
function quickSort(arr,low,high){
    if(low<high){
        //寻找基准数据的正确索引
        var index = getIndex(arr,low,high)
        //进行迭代对index之前和之后的数组进行相同的操作使整个数组有序
        quickSort(arr,low,index-1)
        quickSort(arr,index+1,high)
    }

}
function getIndex(arr,low,high){
    //基准数据
    let tmp = arr[low]
    while(low < high){
        //当队尾的元素大于等于基准数据时,high--
        while(low < high && (arr[high] >= tmp)){
            high--
        }
        //如果队尾元素小于tmp了,则需要将其赋值给low
        arr[low] = arr[high]
        //当队首的元素小于等于基准数据时,low++
        while(low < high && (arr[low] <= tmp)){
            low++
        }
        //如果队首元素大于tmp了,则需要将其赋值给high
        arr[high] = arr[low]
    }
    arr[low] = tmp
    return low
}

quickSort(arr,0,arr.length-1)
for(let i = 0;i<arr.length;i++){
    console.log(arr[i])
}


console.log('------------------------')
let arr2 = [8,4,1,7,13,24,34,2,46,1,244,123]
//快速排序
function quickSort1(arr,low,high){
    if(low<high){
        //首先找到基准数据的正确索引
        let index1 = getIndex1(arr,low,high)
        quickSort1(arr,low,index1-1)
        quickSort1(arr,index1+1,high)
    }
}

function getIndex1(arr,low,high){
    //确定基准数据
    let temp = arr[low]
    while(low<high){
        while(low<high && (arr[high] >= temp)){
            high--
        }
        arr[low] = arr[high]
        while(low<high && (arr[low] <= temp)){
            low++
        }
        arr[high] = arr[low]
    }
    arr[low] = temp
    return low
}

quickSort1(arr2,0,arr2.length-1)
for(let i = 0;i<arr2.length;i++){
    console.log(arr2[i])
}