setTimeout(()=>console.log('timer 2s'),.0000000000000000000001)



const names= ['ali',Math.random(),'tasawar']

shortNames=names.filter(e=>e.length>3 )


const geocode = ( address , callback) => {
   setTimeout(()=>{
        const data ={
            latitude:0,
            longitude:0
        }
   
        callback(data)        
    },2000)

} 


 geocode('lhr',(data)=>console.log(data))














// add=(x,y,callback)=>{
//     setTimeout(e=>{
//         callback(x+y)
//     },2000)

// }

// add(1,4,(sum)=>{console.log(sum);})


