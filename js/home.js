  var logoutButton=document.querySelector("nav button")
  var user= JSON.parse(sessionStorage.getItem("sessionaccount"));
  console.log(user);

  document.querySelector("h1").innerHTML="welcome  "+user.name;

 
    logoutButton.addEventListener("click",function (eventInfo) {
        sessionStorage.clear();
        window.location.assign("../index.html")
        

    })
    
   
 
        


      




