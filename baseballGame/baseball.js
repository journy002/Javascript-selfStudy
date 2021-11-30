let list = [0,1,2,3,4,5,6,7,8,9];
let number = [];
for(let i = 0; i < 4; i++) {
    let select = Math.floor(Math.random() * list.length);
    console.log('list', list, 'number' , number, 'length', list.length);
    number[i] = list.splice(select, 1)[0];
}
