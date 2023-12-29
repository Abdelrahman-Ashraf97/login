// ============================================ GLOBAL VARIABLRS============================================
var emailInput = document.querySelector(".collector input[name='email:']")
  var passwordInput = document.querySelector(".collector input[name='password:']")
  var nameInput = document.querySelector(".collector input[name='name:']")
  var signupButton=document.querySelector(".collector button")
  var accountList=[];

// ============================================ GET DATA FROM LOCAL STORAGE =================================
  if(localStorage.getItem("accounts") !=null){
    accountList=JSON.parse(localStorage.getItem("accounts"));
  }
// ============================================ START EVENTS ================================================= 
  console.log(accountList);
  signupButton.addEventListener("click",function (eventInfo) {
    signup();
  })
  nameInput.addEventListener("input",function(){
    nameValidation();
  })
  emailInput.addEventListener("input",function(){
    emailValidation();
  })
  passwordInput.addEventListener("input",function(){
    passwordValidation();
  })

document.querySelector(".collector p a").addEventListener("click",function(){
    window.location.assign("./index.html")
  })

 
   
  
// ============================================ END EVENTS =================================================== 

// ============================================ MAIN FUNCTION ================================================= 
  function signup(){
    var newAccount={
        name:nameInput.value,
        email:emailInput.value,
        password:passwordInput.value
    }
    // ============================================ ALL VALID ================================================= 
    if( nameValidation()==true && emailValidation()==true &&passwordValidation()==true){
    accountList.push(newAccount);
    localStorage.setItem("accounts",JSON.stringify(accountList));
    document.querySelector("#success").classList.remove("d-none")
    setInterval(backToSignin, 2000);
    }
  }
  // ============================================ Name Validation ================================================= 
  function nameValidation(){
    var nameRegex=/^[a-zA-Z]\w{3,}$/;
    if(nameRegex.test(nameInput.value)){
        nameInput.classList.add("is-valid")
        nameInput.classList.remove("is-invalid")
        document.querySelector(".name-text").classList.add("d-none")
        
    }
    else{
        nameInput.classList.remove("is-valid")
        nameInput.classList.add("is-invalid")
        document.querySelector(".name-text").classList.remove("d-none")
    }
    return nameRegex.test(nameInput.value);
  }
  // ============================================ email Validation =================================================
  function emailValidation(){
    var emailRegex=/^[a-zA-Z]\w{3,}$/;
    var check=false;
    if(emailRegex.test(emailInput.value)){
      for(var i=0;i<accountList.length;i++){
        if(accountList[i].email==emailInput.value){
          emailInput.classList.add("is-invalid");
          emailInput.classList.remove("is-valid");
          document.querySelector(".email-text").classList.add("d-none");
          document.querySelector(".email-text2").classList.remove("d-none");
          check=false;
          break;   
        }
        else{
          emailInput.classList.add("is-valid")
          emailInput.classList.remove("is-invalid")
          document.querySelector(".email-text").classList.add("d-none")
          document.querySelector(".email-text2").classList.add("d-none");
          check=true;
        }
      }
        
    }
    else{
        emailInput.classList.add("is-invalid")
        emailInput.classList.remove("is-valid")
        document.querySelector(".email-text").classList.remove("d-none")
        document.querySelector(".email-text2").classList.add("d-none");
        return false;
      
    }
    return check;

  }
  // ============================================ password Validation =================================================
  function passwordValidation(){
    var passRegex=/^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{7,})\S$/;
    if(passRegex.test(passwordInput.value)){
        passwordInput.classList.add("is-valid")
        passwordInput.classList.remove("is-invalid")
        document.querySelector(".pass-text").classList.add("d-none")
    }
    else{
        passwordInput.classList.remove("is-valid")
        passwordInput.classList.add("is-invalid")
        document.querySelector(".pass-text").classList.remove("d-none")

    }
    return passRegex.test(passwordInput.value);
  }

  // ============================================ BACK TO SIGN IN PAGE=================================================
  function backToSignin(){
    window.location.assign("../index.html")
  }
