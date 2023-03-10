const fs=require('fs');
fs.stat('file.txt',(err,stats)=>{
    if(err){
        console.log(err);
    }
    console.log(stats);
    console.log(stats.isFile());
    console.log(stats.isDirectory());
    console.log(stats.isSymbolicLink());
    console.log(stats.size);
});