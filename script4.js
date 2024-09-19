function calculateAverage(numbers) {
    if (numbers.lenght ===0){
        return 0;

}

const sum = numbers.recude((acc,num) =>
    acc+num,0)
    return sum / numbers.lenght;
}

calculate.log(calculateAverage([1,2,3,4,5]));
console.log(calculateAverage([10,20 ,30]));
console.log(calculateAverage([]))
