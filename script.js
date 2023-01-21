function myval(){
    //getting the value of form
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var pass = document.getElementById("pass").value;
    var cpass = document.getElementById("cpass").value;
    // error message of every inputs
    var errorname =document.getElementById("error-name");
    var erroremail =document.getElementById("error-email");
    var errorpass =document.getElementById("error-pass");
    var errorcpass =document.getElementById("error-cpass");
    var emailpattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var pattern = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d][A-Za-z\d!@#$%^&*()_+]{7,19}$/;
    //name validtion 
    if(name.length<2){
        errorname.innerText="Name should have minimum 2 characters";
        return false;
    }else{
        errorname.innerText="";
    }

    if(!emailpattern.test(email)){
        erroremail.innerText="Your Email not valid";
        return false;
    }else{
        erroremail.innerText="";
    }
   /*  if(!pattern.test(pass)){
        errorpass.innerText="Passwords should have at least 1 capital letter, 1 small, 1 number and 1 special characters";
        return false;
    }else if(pass==name && pass==email){
        errorpass.innerText="Passwords not same as name or email";
        return false;
    }else{
        errorpass.innerText="";
    } */
    if(pass!=cpass){
        errorcpass.innerText="Passwords and confirm password not same";
        return false;
    }else{
        errorcpass.innerText=""; 
    }
    let formData = JSON.parse(localStorage.getItem('formData')) || [];
    let exist = formData.length && 
    JSON.parse(localStorage.getItem('formData')).some(data => 
        data.email == email);
if(!exist){
   
    formData.push({ name, email, pass });
    localStorage.setItem('formData', JSON.stringify(formData));
    
}
else{
    erroremail.innerText="Your Email Already taken";
    return false;
    
}

    return true;
}
function signIn(e){
    let email = document.getElementById('email').value, pwd = document.getElementById('password').value;
    let formData = JSON.parse(localStorage.getItem('formData')) || [];
    let exist = formData.length && 
    JSON.parse(localStorage.getItem('formData')).some(data => data.email == email && data.pass == pwd);
    if(!exist){
        var error =document.getElementById("error");
        error.innerText="Email And Passwords not match";
        return false;
    }
    else{
        //usertoken = generateString(10);

        location.href = "dashboard.html";
    }
   
    e.preventDefault();
    return true;
}

const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generateString(length) {
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}
let sampleData ={
    question: "What is a dog" , answer: "Dog is a animal with 4 legs", imageLink:"dog.jpg",
    question: "What is a cat" , answer: "Cat is a animal with 4 legs", imageLink:"cat.jpg",
    question: "What is a sunny" , answer: "sunny is a animal with 4 legs", imageLink:"sunny.jpg",
    question: "What is a Abhishek" , answer: "Full Stack Developer", imageLink:"abhi.jpg"
};

//alert(generateString(10));
