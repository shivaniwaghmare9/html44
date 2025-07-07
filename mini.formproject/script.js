

let sub=()=>{
    let btn=document.querySelector("#inp")
    let nameinput=document.querySelector("#name")
    let emailinput=document.querySelector("#email")
    let passinput=document.querySelector("#pass")
    let cpassinput=document.querySelector("#cpass")
    let dobinput=document.querySelector("#dob")


    let inpname= document.querySelector("#name").value
    let inpemail= document.querySelector("#email").value
    let inppass= document.querySelector("#pass").value
    let inpcpass= document.querySelector("#cpass").value
    let inpdob= document.querySelector("#dob").value

   let errname= document.querySelector("#errname")
   let erremail= document.querySelector("#erremail")
   let errpass= document.querySelector("#errpass")
   let errcpass= document.querySelector("#errcpass")
   let errdob= document.querySelector("#errdob")

   if(inpname==""){
  
   nameinput.style.border="3px solid red"
   nameinput.placeholder=" Enter The Name"
   nameinput.style.color="white"
   return false;
   }
   if(inpemail==""){
    emailinput.placeholder="Please enter email"
    emailinput.style.border="3px solid red"
     emailinput.style.color="white"
    return false;
 }
 if(inppass==""){
    passinput.placeholder="Please enter password"
    passinput.style.border="3px solid red"
    passinput.style.color="white"
    return false;
 }
 if(inpcpass==""){
    cpassinput.placeholder="Please enter Confirm-password"
    cpassinput.style.border="3px solid red"
    cpassinput.style.color="white"
    return false;
 }
 if(inpdob==""){
    dobinput.placeholder="Please enter Date of Birth"
    dobinput.style.border="3px solid red"
    dobinput.style.color="white"
    return false;
 }
 if(inppass!==inpcpass){
    cpassinput.placeholder="Password does not match"
     cpassinput.style.border="3px solid red"
     document.querySelector("#cpass").value=""
     document.querySelector("#cpass").focus()
       return false;
 }
 else if(!(inpemail.includes('@') && inpemail.includes(".com"))){
    emailinput.placeholder="Please Enter the Valid E-mail @,.com"
    emailinput.style.border="3px solid red"
    emailinput.style.color="white"
    return false;
 }
 else if(!(inppass.match([/123456789/])&& inppass.match([/!@#$%^&*><.,/])&& inppass.match([/a-z/]))){
    passinput.placeholder="Please Enter Strong Password Write dots,symbols,number"
    passinput.style.border="3px solid red"
    passinput.style.color="white"
    return false;
 }
 

}