let id = document.getElementById('userId')
let pw = document.getElementById('userPw')

function frSubmit() {
    if(id.value === 'journy002') {
        if(pw.value === '0000') {
            console.log('Collect ID and PW')
            return true
        } else {
            console.log('You wrote wrong password, please check again!')
            return false
        }
    } else {
        console.log('Wrong ID!')
        return false
    }
}