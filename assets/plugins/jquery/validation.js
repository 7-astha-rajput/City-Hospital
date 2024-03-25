
function userlogin(form)/*function to check userid & password*/
{
 /*the following code checkes whether the entered userid and password are matching*/
<<<<<<< HEAD
 if(form.userid.value == "shubham@gmail.com" && form.usrpsw.value == "123")
=======
 if(form.userid.value == "nirav@gmail.com" && form.usrpsw.value == "123")
>>>>>>> 76eeea612567dce51cc2969bdb97d8b417e378f0
  {
    window.open('index.html')/*opens the target page while Id & password matches*/
  }
 else
 {
   alert("your user name or password is wrong")/*displays error message*/
  }
}