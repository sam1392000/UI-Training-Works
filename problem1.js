/**
 * You will be given a list of numbers. Find if any two consequtive number forms the provided sum.

Input 
5 => number of array elements
9 2 1 3 8 => The list of array elements
3 => Expected sum

Output
2

Explanation: 
Consider the sum from start of the array list
For index 1, 9 + 2 = 11 which is not equal to 3
For index 2, 2 + 1 = 3 Which is equal to 3. so, index is 2.
 */


/**
 * 
 * @param {*} size 
 * @param {*} array 
 * @param {*} sum  
 */
const problem1 = (size ,array , sum) => {
    let ans = -1;
    for(let i = 0 ; i < size-1 ; i++)
    {
        if(array[i]+array[i+1] == sum){
            ans =  i+1;
        }else{
            continue;
        }
    }
    return ans;
}

let answer = problem1(5,[9,2,1,3,8],3)
console.log(answer == -1 ? "Sum cannot be Made" : answer )  


