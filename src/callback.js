// setTimeout(()=>{
//     console.log(2 ,'=> sec are Up!!');
// },3000)

// let x={
//     abc:'name is',
//     ph:'123444'
// }

// const {abc,ph} =x
// console.log(abc,ph);


const express=require('express')
const request = require('request')
const app = express()

app.get('/help',(req,res)=>{
    console.log(req.query);
    res.send(req.query)
})
// https://api.openweathermap.org/data/2.5/weather?lat=31&lon=74&appid=19beb604b1b1d184465b9b96189fc94a


getInfo=(city)=>{
console.log(city +123);
url='https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid=19beb604b1b1d184465b9b96189fc94a'
// console.log(url);
request({url:url,json:true},(err,res)=>{
// const loc=res.body.coords
// console.log(res.body);
return res.body.coord

})

}

app.get('/weather',async(req,res)=>{
    let city_name=req.query.city_name
    if(city_name){
        url='https://api.openweathermap.org/data/2.5/weather?q='+city_name+'&appid=19beb604b1b1d184465b9b96189fc94a'
       const loc= request({url:url,json:true},(err,resp)=>{
           let x= resp.body
           console.log(x);
           myurl=`https://openweathermap.org/img/wn/${x.weather[0].icon}@2x.png`
        //    {x:x.coord,y:x.weather,z:x.weather[0].icon},
           return res.send('<img src='+myurl+' >');
        })
        // console.log(loc);
    }else{
        return res.send("A City/City-Name Is not provided!!!!!!")
    }
    

})



app.listen(3000,()=>console.log('👩👩'))
