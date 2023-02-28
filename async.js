function final(input,callback){
    callback(`${input} and callback`);
}
function middle(input,callback){
    return final(`${input} by middle`,callback);
}
function initiate(){
    const input="hello this a aysnc function";
    middle(input,function(result){
        console.log(result);
    })
}
initiate();