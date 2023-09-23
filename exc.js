console.log(1);//synchronous
console.log(2);
setTimeout(()=>{ //asychronous
    console.log(4);
},2000)
console.log(3);