let mail = document.getElementById ('mail-text');
    let mail1 = document.getElementById ('mail1-text');
    let name = document.getElementById ('name-text');
    let password1 = document.getElementById('pass-text');
    let password2 = document.getElementById('pass1-text');
    let password3 = document.getElementById('pass2-text');
    let button = document.getElementById('btn');
    let button1 = document.getElementById('btn2');
    let logbtn = document.getElementById('login')
    let signbtn = document.getElementById('signup')


    button.addEventListener('click', () => {
        if(mail.value != '' && password1.value != ''){
            alert("You Have Successfully Login");
            mail.value = '';
            password1.value = '';
        }
        else if(mail.value == '' && password1.value != ''){
            alert("Enter The Mail")
        }
        else if(mail.value != '' && password1.value == ''){
            alert("Enter The Password")
        }
        // else if(password.value == ''){
        //     alert("enter the password")
        // }
        else{
            alert("Enter The Correct Email or Password")
        }
       
    }); 
    signbtn.addEventListener('click', () => {
        document.getElementById('form1').style.display="none";
        document.getElementById('form2').style.display="block";
    })
    logbtn.addEventListener('click', () => {
        document.getElementById('form1').style.display="block";
        document.getElementById('form2').style.display="none";
    })
    
    button1.addEventListener('click', () => {
        if(mail1.value != '' && name.value != '' && password2.value != '' && password3.value != ''){
            alert("You Have Successfully Login");
            
        }
        else if(mail1.value != '' && name.value == '' && password2.value != '' && password3.value != ''){
            alert("Enter The Name")
        }
        else if(mail1.value == '' && name.value != '' && password2.value != '' && password3.value != ''){
            alert("Enter The MailID")
        }
        else if(mail1.value != '' && name.value != '' && password2.value == '' && password3.value != ''){
            alert("Enter The Password")
        }
        else if(mail1.value != '' && name.value != '' && password2.value != '' && password3.value == ''){
            alert("Enter The Confirm Password")
        }
        else if(mail1.value != '' && name.value == '' && password2.value == '' && password3.value == ''){
            alert("Enter The Name,Password,Confirm Password")
        }
        else if(mail1.value == '' && name.value != '' && password2.value == '' && password3.value == ''){
            alert("Enter The MailID,Password,Confirm Password")
        }
        else if(mail1.value == '' && name.value == '' && password2.value == '' && password3.value != ''){
            alert("Enter The MailID,Name,Password")
        }
        else if(mail1.value == '' && name.value == '' && password2.value != '' && password3.value == ''){
            alert("Enter The MailID,Name, Confirm Password")
        }
        else if(mail1.value == '' && name.value == '' && password2.value != '' && password3.value != ''){
            alert("Enter The MailID,Name")
        }
        else if(mail1.value != '' && name.value != '' && password2.value == '' && password3.value == ''){
            alert("Enter The Password,Confirm Password")
        }
        else if(mail1.value != '' && name.value == '' && password2.value != '' && password3.value == ''){
            alert("Enter The Name,Confirm Password")
        }
        else if(mail1.value == '' && name.value != '' && password2.value == '' && password3.value != ''){
            alert("Enter The MailID,Password")
        }
        else if(mail1.value == '' && name.value != '' && password2.value != '' && password3.value == ''){
            alert("Enter The MailID,Confirm Password")
        }
        else{
            alert("Enter The Correct Email or Password")
        }
        mail1.value = '';
        name.value = '';
            password2.value = '';
            password3.value = '';
    })