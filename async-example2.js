const a=()=>console.log("a");
const b=()=>console.log("b");
const c=()=>console.log("c");
const start=()=>{
    console.log("start");
    setImmediate(a);
    new Promise((resolve,reject)=>{
        resolve("d");
    }).then((resolve)=>{
        console.log(resolve);
        process.nextTick(c);
    });
    process.nextTick(b);
};
start();