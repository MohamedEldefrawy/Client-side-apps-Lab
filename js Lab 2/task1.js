var numberOfElements = Number(prompt("PLease enter number of elements"));
var numbers = [];
var average = 0;
var total = 0;

for (var i = 0; i < numberOfElements; i++) {
    numbers.push(Number(prompt("Number " + String(i + 1))));
}

function sum(numbers, fun) {
    var sum = 0;

    for (var i = 0; i < numbers.length; i++) {
        sum = fun(sum, numbers[i]);
    }
    return sum;
}


total = sum(numbers, function (total, item) {
    return total + item;
})

prompt("total = " + total);
prompt("average = " + total / numberOfElements)

