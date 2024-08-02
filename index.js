
//IMP we put it in the beginning in order to be abel to use it the the function alos
let select=document.getElementById('s')

fetch('https://apionline-mj61.onrender.com/')
    .then(response=>response.json())
    .then(json=>{
        //let select=document.getElementById('s')
        json.forEach(std => {
            let op=document.createElement('option')
            op.innerHTML=std.name
            select.appendChild(op)
            
        });
    })


function showdata()
{   
    
    let namestd=select.value
    

    fetch('https://apionline-mj61.onrender.com/')
      .then(response=>response.json())
      .then(json=>{
       
        json.forEach(std => {
            if (namestd==std.name)
            {let ul =document.getElementById('ul')
             let stdata=document.createElement('li')
             stdata.innerHTML=`name:${std.name}, id:${std.id}, major:${std.major}, email:${std.email}`
             ul.appendChild(stdata) }
            
        });
    })


}