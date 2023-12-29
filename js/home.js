  var logoutButton=document.querySelector("nav button")
  var user= JSON.parse(localStorage.getItem("sessionaccount"));
  console.log(user);

  document.querySelector("h1").innerHTML="welcome  "+user.name;

 
    logoutButton.addEventListener("click",function (eventInfo) {
        localStorage.removeItem("sessionaccount");
        window.location.assign("./index.html")
        

    })
    
   
 
        


      




