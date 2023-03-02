setTimeout(()=>{
    console.log("abc")
},2000)
setTimeout(()=>{
    console.log("abc2")
},50)

setInterval(()=>{
    console.log("xyz")
},2000)
// continous called every two seconds

const id=setInterval(()=>{
    console.log("whoo")
},3000)
clearInterval(id);
