// const fs=require('fs');
// const content='learing the node js';
// fs.writeFile('file.txt',content,err =>{
//     if(err){
//         console.error(err);
//     }
// });

// const fs=require('fs');
// const contents='writing a file synchronously';
// try{
//     fs.writeFileSync('file.txt',contents)
// }catch(err){
//     console.error(err);
// }

const fs=require('fs')
const contentss='creating the new text file';
fs.appendFile('text.txt',contentss,err =>{
    if(err){
        console.error(err)
    }
});