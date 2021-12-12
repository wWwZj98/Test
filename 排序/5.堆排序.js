//堆排序
let arr = [2,35,657,34,123,6,123,434,212,652,234241,3253212,23123,21,1,3]

function heapSort(arr){
    if(arr.length == 0){
        return
    }
    let len = arr.length
    //构建大顶堆,把待排序序列,变成一个大顶堆结构的数组
    buildMaxHeap(arr,len)

    //交换堆顶和当前末尾的节点,重置大顶堆
    for(let i=len-1;i>0;i--){
        swap(arr,0,i)
        len--
        heapify(arr,0,len)
    }
}
//构造大根堆
function buildMaxHeap(arr,len){
    //从最后一个非叶子结点开始向前遍历,调整结点,使之成为大顶堆
    for(let i =Math.floor(len/2)-1;i>=0; i--){
        heapify(arr,i,len)
    }
}
function heapify(arr,i,len){
    //找出它左右节点
    let left = 2*i + 1 
    let right = 2*i +2
    //默认当前结点(父结点)为最大值
    let largerstIndex = i
    //如果左孩子(存在的话)的值大于父结点的值,更新最大值的索引
    if(left<len && arr[left]>arr[largerstIndex]){
        largerstIndex = left
    }
    //如果右孩子(存在的话)的值大于父结点的值,更新最大值的索引
    if(right<len && arr[right]>arr[largerstIndex]){
        largerstIndex = right
    }

    if(largerstIndex != i){
        //如果最大值不是当前非叶子结点的值,那么就把当前结点和为最大值的子节点互换
        swap(arr,i,largerstIndex)
        //互换之后子节点的值变了,如果该子节点也有自己的子节点,仍需要再次调整
        heapify(arr,largerstIndex,len)
    }
}

function swap(arr,i,j){
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

heapSort(arr)
for(let i = 0;i<arr.length;i++){
    console.log(arr[i])
}




console.log('@@@@@@@@@@@@@@@@@@@@@@@@@')
let arr2 = [8,4,1,7,13,24,34,2,46,1,244,123]
//堆排序
function heapSort1(arr){
    if(arr.length == 0){
        return
    }
    let len = arr.length
    //首先将待排序序列构建成一个大根堆数组
    buildMaxHeap1(arr,len)

    for(let i = len-1;i>0;i--){
        swap(arr,0,i)
        len--
        heapify1(arr,0,len)
    }
}

function buildMaxHeap1(arr,len){
    //从最后一个非叶子结点开始向前遍历,调整结点,使之成为大根堆
    for(let i=Math.floor(len/2)-1;i>=0;i--){
        heapify1(arr,i,len)
    }
}

function heapify1(arr,i,len){
    //找到其两个子节点
    let left = 2*i + 1
    let right = 2*i + 2
    let largestIndex = i
    if(left<len && arr[largestIndex]<arr[left]){
        largestIndex = left
    }
    if(right<len && arr[largestIndex]<arr[right]){
        largestIndex = right
    }
    if(largestIndex != i){
        //如果最大值不是当前非叶子结点的值,那么就把当前结点和为最大值的子节点互换
        swap(arr,i,largestIndex)
        //互换之后子节点的值变了,如果该子节点也有自己的子节点,仍需要再次调整
        heapify1(arr,largestIndex,len)
    }
}

heapSort1(arr2)
for(let i = 0;i<arr2.length;i++){
    console.log(arr2[i])
}