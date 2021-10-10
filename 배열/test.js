function getType(data) {
    return Object.prototype.toString.call(data).slice(8, -1);
}

const array = [1,2,3,4,5];

console.log(array);
console.log(array.length);
console.log(getType(array));

console.log('---------------');

const object = [{ name: 'dog' }, { name: 'cat' }];

console.log(object[0]);
console.log(object[1]);
console.log(object.length, 'length');

object.push({
    name: 'ggoggodack'
})

console.log(object)
console.log(object.length, 'length');
