 // ============================================ GLOBAL VARIABLRS============================================
 var emailInput = document.querySelector(".collector input[name='email:']")
  var passwordInput = document.querySelector(".collector input[name='password:']")
  var loginButton=document.querySelector(".collector button")
  var accountList=[];
  var account={
    email:"",
    password:"",
    name:""
  };


  if(localStorage.getItem("accounts") !=null){
    accountList=JSON.parse(localStorage.getItem("accounts"));

  }

  
 
 
 // ============================================ EVENTS START============================================
    emailInput.addEventListener("input",function(){
        if(emailValidation()==true){
            emailInput.classList.add("is-valid");
            emailInput.classList.remove("is-invalid");

        }
        else{
            emailInput.classList.remove("is-valid");
            

        }
    })

    passwordInput.addEventListener("input",function(){
        if(passwordValidation()==true && emailValidation()==true) {
           
            passwordInput.classList.add("is-valid");
            passwordInput.classList.remove("is-invalid");
           

        }
        else{
            passwordInput.classList.remove("is-valid");

        }
    })      

 
    loginButton.addEventListener("click",function (eventInfo) {
        login();

    })
    document.querySelector(".collector p a").addEventListener("click",function(){
        window.location.assign("./signup.html")
    })
// ============================================ END EVENTS =================================================== 

// ============================================ MAIN FUNCTION =================================================

    function login(){
         account={
            email:emailInput.value,
            password:passwordInput.value,
        
// ============================================ CORRECT EMAIL& PASS =================================================            
        }
        if(passwordValidation()==true &&emailValidation()==true){

            localStorage.setItem("sessionaccount",JSON.stringify(account));
            window.location.assign("./home.html")
            
// ============================================ WRONG EMAIL& EMAIL IS NOT EMPTY=================================================  
        }
        else if(emailValidation()!=true&&emailInput.value!="" ){
            document.querySelector(".collector .email-text").classList.remove("d-none")
           
           
// ============================================ EMAIL IS EMPTY OR PASS IS EMPTY=================================================            
        }
        else if(emailInput.value==""||passwordInput.value==""){
            document.querySelector(".collector .no-input").classList.remove("d-none")
            document.querySelector(".collector .pass-text").classList.add("d-none")
            document.querySelector(".collector .email-text").classList.add("d-none")
            

        }
// ============================================  RIGHT EMAIL AND WRONG PASS=================================================            
        else if(passwordValidation()!=true &&emailValidation()==true){
            document.querySelector(".collector .pass-text").classList.remove("d-none")
            document.querySelector(".collector .no-input").classList.add("d-none")
            passwordInput.classList.add("is-invalid")  
        }
// ============================================   WRONG PASS & WRONG EMAIL================================================= 
        else if(passwordValidation()!=true && emailValidation()!= true){
            document.querySelector(".collector .email-text").classList.remove("d-none")

        }
        
       

    
    }
    
    
// ============================================ email Validation =================================================    
    function emailValidation(){
        var checker=false;
        for(let i=0;i<accountList.length;i++){
            if(emailInput.value==accountList[i].email){
                checker=true;
                document.querySelector(".collector .email-text").classList.add("d-none");
                account.name=accountList[i].name;
            }
            
            
        }
        return checker; 
        }
  // ============================================ password Validation =================================================
    function passwordValidation(){
        var checker=false;
        for(let i=0;i<accountList.length;i++){
            if(passwordInput.value==accountList[i].password){
                checker=true;
                document.querySelector(".collector .pass-text").classList.add("d-none")

            }
            
        }
        return checker; 
        }
        


      




