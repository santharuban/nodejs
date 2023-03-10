const fs=require('fs');
try{
    const stats=fs.statSync('file.txt');
    // console.log(stats);
}catch(err){
    console.error(err);
}