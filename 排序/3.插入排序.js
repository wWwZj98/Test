let arr = [2,35,657,34,123,6,127,434,212,652,234241,3253212,23123]
let arr1 = [47,35,657,34,123,6,127,434,212,652,234241,3253212,23123,5,87,2]
function insertSort(arr){
    for(let i=1; i<arr.length; i++){
        if(arr[i]<arr[i-1]){
            let j = i-1
            let x = arr[i]    //复制为哨兵,存储待排序元素
            arr[i] = arr[i-1]
            while(x < arr[j]){
                arr[j+1] = arr[j]
                j--
            }
            arr[j+1] = x
        }
    }
}
insertSort(arr1)
for(let i = 0;i<arr1.length;i++){
    console.log(arr1[i])
}

let arr2 = [8,4,1,7,13,24,34,2,46,1,244,123]
//插入排序
function insertSort1(arr){
    for(let i =1;i<arr.length;i++){
        //如果要插入的值比它前一个值要小
        if(arr[i]<arr[i-1]){
            let j = i -1
            //保存要插入的值
            let x = arr[i]
            while(x < arr[j]){
                arr[j+1] = arr[j]
                j--
            }
            arr[j+1] = x
        }
    }
}   
insertSort1(arr2)
for(let i = 0;i<arr2.length;i++){
    console.log(arr2[i])
}