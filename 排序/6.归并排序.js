//归并排序
function mergeSort(arr,startIndex = 0,endIndex = arr.length-1){
    //递归结束条件：startIndex大于等于endIndex的时候
    if(startIndex >= endIndex){
        return
    }
    //折半递归
    let midIndex = Math.floor((startIndex + endIndex)/2)
    mergeSort(arr,startIndex,midIndex)
    mergeSort(arr,midIndex+1,endIndex)
    //将两个有序小数组合并成一个大数组
    merge(arr,startIndex,midIndex,endIndex)
}

function merge(arr,startIndex,midIndex,endIndex){
    let tmpArr = []
    let p1 = startIndex
    let p2 = midIndex+1
    let p = 0
    while(p1 <= midIndex && p2 <= endIndex){
        if(arr[p1] <= arr[p2]){
            tmpArr[p++] = arr[p1++]
        }else{
            tmpArr[p++] = arr[p2++]
        }
    }
    //右侧小数组已经排序完毕,左侧小数组还有剩余,将左侧小数组元素依次放入大数组尾部
    while(p1<=midIndex){
        tmpArr[p++] = arr[p1++]
    }
    //左侧小数组已经排序完毕,右侧小数组还有剩余,将右侧小数组元素依次放入大数组尾部
    while(p2<=endIndex){
        tmpArr[p++] = arr[p2++]
    }
    for(let i = 0;i < tmpArr.length;i++){
        arr[i+startIndex] = tmpArr[i]
    }
}

let arr = [2,35,657,34,123,6,123,434,212,652,234241,3253212,23123,21,1,3,7]
mergeSort(arr)
for(let i = 0;i<arr.length;i++){
    console.log(arr[i])
}
