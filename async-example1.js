console.log("person 1");
setTimeout(()=>{
    console.log("person 2");
},0);
setImmediate(()=>{
    console.log("person 3");
});
process.nextTick(()=>{
    console.log("person 4")
});