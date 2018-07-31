// function loadjson(file,callback)
// {
//   var xhr=new XMLHttpRequest();
//   xhr.overrideMimeType("application/json");
//   xhr.open("GET",file,true);
//   xhr.onreadystatechange=function()
//   {
//     if(xhr.readyState===4 && xhr.status=="200")
//     {
//       callback(xhr.responseText);
//     }
//   }
//   xhr.send();
// }
// loadjson("data.json",function(text){
//   var data=JSON.parse(text);
//   console.log(data);
// })
function loadjson(file){
  return new Promise((resolve,reject)=>{
    return fetch(file).then(response=>{
      if(response.ok){
        resolve(response.json());
        }
        else{
          reject(new Error('error'));
        }
    })
  })
}
var fetchedData=loadjson("data.json");
fetchedData.then(data=>{  console.log(data);
  career(data.career);
})

var child2=document.querySelector("#child2");

function career(car){
  var heading=document.createElement("h1");
  heading.textContent="Career Objective";
  child2.appendChild(heading);
  var hr=document.createElement("hr");
  heading.appendChild(hr);
  var p=document.createElement("p");
  p.textContent=car.info;
  child2.appendChild(p);
}
