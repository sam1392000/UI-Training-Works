/**
 * Input:
523
Output:
2 
Explanation:
As input is 523, 
Step 1: Compute Sum of factorial. 5! + 2! + 3! = 128
Step 2: Reduce the number to a single digit. Compute sum of digits 1 + 2 + 8 = 11. As the result 11 is a two digit number, again compute sum of digits. 1 + 1 = 2.

Thus the result is 2
 */


const factorial = (num) => {
    if(num === 0)
        return 1;
    else
        return num * factorial(num-1);
}

const divide = (input) => {
    console.log("Number to be divided "+input )
    let remainder = input % 10;
    let quotient = Math.floor(input / 10);
    
    return {remainder,quotient}
}

const repeat_fact = (input) => {
    let sum =0;
    console.log("comes to repeat....");
    while(input > 0){
        let {remainder ,quotient}=  divide(input);
        console.log(remainder , quotient)
        let val = factorial(remainder);
        input = quotient
        sum+=val;
    }
    console.log(sum)
    return sum;
}

const repeat_sum = (input) => {
    let sum =0;
    //console.log("comes to repeat....");
    while(input > 0){
        let {remainder ,quotient}=  divide(input);
        console.log(remainder , quotient)
        input = quotient
        sum+=remainder;
    }
    console.log(sum)
    return sum;
}


const problem2 = (input) => {
    console.log("from problem 2   "+input);
    let step_ans = repeat_fact(input);;
    let sum_to_be_divided=step_ans;
    while(sum_to_be_divided> 0){
        // sum_to_be_divided = sum;
        var sum = repeat_sum(step_ans);
        step_ans = sum;
        sum_to_be_divided = Math.floor(sum/10);
        console.log("Step-ans "+step_ans)
    }
    console.log("value "+sum)
}


problem2(255)

// 256
// 2 + 120 + 120 = 242 