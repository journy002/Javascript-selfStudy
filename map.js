const testArray = [1,2,3,4,5];
const returnArray = testArray.map(function(currentValue, index, array){
    console.log(currentValue, 'current');
    console.log(index, 'index');
    console.log(array,'arrya')
    return currentValue * 2;
    }
);

console.log('------------------------');
console.log('------------------------');
console.log('------------------------');



function test() {
    const testJson = [
        {
            name: 'igent',
            salary : 500000,
        },
        {
            name: 'igent2',
            salary : 700000,
        },
        {
            name: 'igent3',
            salary : 300000,
        },
    ];

    const newJson = testJson.map(function(element, index) {
        console.log(element, 'element');
        let returnObj = {}
        returnObj[element.name] = element.salary;
        console.log(index, 'index')
        return returnObj;
    });
    
    console.log('newObj');
    console.log(newJson);
}

test();