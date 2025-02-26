// promise
const myLoader = () =>{
    return new Promise((resolve, reject) =>{
        const success = Math.random();
        if(success <= 0.5){
            resolve(success)
        }
        else{
            reject(success)
        }
    })
}
myLoader()
.then(data => console.log('resolved data', data))
.catch(arr => console.log('reject with value', arr))


// fetch
fetch('')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(arr => console.arror(arr))


// funtion
async function loadData(){
    const res = await fetch('')
    const data = await res.json()
    console.log(data)
}
loadData()


// arrow funtion
const taskLoader = async() => {
    const res = await fetch('')
    const data = await res.json()
    console.log(data)
}

taskLoader()