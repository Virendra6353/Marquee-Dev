arr =[1,2,3,4]
// arr.shift()
// console.log(arr);
// arr.unshift(1)
// for(let i in arr){
//     console.log(i+" "+arr[i]);   
// 

let total = arr.reduce((i,j)=>{
    return i+j;
})

console.log(total);
