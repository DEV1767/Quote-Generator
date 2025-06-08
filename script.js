
  const input=document.getElementById("bt")
  const li=document.querySelector("#li")
  input.addEventListener("click",function (){
    fetch("https://api.api-ninjas.com/v1/quotes",{
       headers: {
     'X-Api-Key': '41PhKtvre2nrvhOEUTQXhA==5WGQutdw64SQpZ1Z' }

 })
     .then((response)=>{
       return response.json()

     }).then((data)=>{
        console.log(data)
        li.innerText=data[0].quote + " ---  " +data[0].author

     })
     .catch((error)=>{
        console.log("Error fetching quote",error)
     })
    })

