function  send(){
    //name
      var name=document.myform.name.value;
      var y_name=/^[A-Za-z_]+$/;
      var y_result=y_name.test(name);
  //address
      var address=document.myform.address.value;
      //zipcode
      var zipcode=document.myform.zipcode.value;
      var z_code=/^[0-9]+$/;
      var z_result=z_code.test(zipcode);
      //country
      var country=document.myform.country.value;
      //gender
      var gender=document.myform.radio.value;
     
  
  //phone number
      var phone=document.myform.phone.value;
      var phnum=/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
      var ph_result=phnum.test(phone);
  //email   
      var email=document.myform.email.value;
      var vali=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      var e_result=vali.test(email);
  //password
      var password=document.myform.password.value;
      var p_vali=password.length;
  //varifypassword
      var varify=document.myform.confermation.value;
  
  
      if(name=="" ||y_result==false){
        document.getElementById("box-1").innerHTML="please enter your name!"
        document.myform.name.focus();
          return false;
      }
     
      
      if (address==""){
        document.getElementById("add-box").innerHTML="please enter your address";
        document.myform.address.focus();
        return false;
      }
      if(zipcode==""||z_result== false){
        document.getElementById("zip-box").innerHTML="please enter your zipcode";
        document.myform.zipcode.focus();
        return false;
      }
      if(country==""){
        document.getElementById("coun-box").innerHTML="please enter your country";
        document.myform.country.focus();
        return false;
      }
      if(gender==""){
        document.getElementById("gen-box").innerHTML="please select";
        document.myform.radio.focus();
        return false;
  
    }
   
  
  
  if (ph_result==false){
    document.getElementById("num").innerHTML="please enter phone";
    document.myform.phone.focus();
    return false;
  }
  if(e_result==false){
    document.getElementById("mail").innerHTML="enter a valid email";
    document.myform.email.focus();
    return false;
  }
  if (password==""||p_vali <6){
    document.getElementById("pass").innerHTML="please enter  valid password";
    document.myform.password.focus();
    
  
  }
  
   if (varify==password){
     return true;
    
  }
  else{
    document.getElementById("confi").innerHTML="password dosent match";
    document.myform.confermation.focus();
    return false;
  }
  }
  function clr(){
    document.getElementById("Theform").reset();
  }