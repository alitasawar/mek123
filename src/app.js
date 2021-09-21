// const fs = require('fs');
// const path = require('path');
// // const { demandOption } = require('yargs');
// const yargs = require('yargs');
// let mynode = path.join(__dirname, '../')
// // console.log(__dirname, mynode);



// // let x=fs.readFileSync('app.js');
// // console.log(x.toString());



// // let myarg=process.argv[2];
// // console.log(myarg);

// yargs.command({
//     command: "read",
//     describe: "REaDinngg",
//     builder: {
//         title: {
//             describe: 'build read',
//             demandOption: true,
//             type: 'string'
//         }

//     },
//     handler: (arg) => { console.log('you added!!', arg); }
// })

// yargs.parse()
const fs= require('fs')
fs.writeFileSync('index.txt',(()=>{
    let x=''
    for (let i = 0; i < 100; i++) {
    x+='xxqqwecvbs\n'   
    }
    return x
})()
)


const path = require('path')
let Mypath=path.join(__dirname,'./static')

console.log(__dirname,Mypath);
const express=require('express')


app = express()
app.set("view engine",'hbs')
app.use(express.static(Mypath))

app.get('/',(req,res)=>{
    res.render('index',{
        'hello':'planting is good🌵🌱🌿☘☘☘🌿 '
    })
})


app.get('/about',(req,res)=>{
    res.render('xyz')
})


app.listen(3000,()=>{console.log('running at port --3000');})









