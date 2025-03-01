function checkData(email, name, password, birthdate){
    
    
    if(email == "" || birthdate == "" || password == "" || name == ""){
        alert("One or more fields have not been filled out");
    
    }
    
    let email_req = 0;
    for(let i=0;i<email.length;++i){
        if(email[i] != "@" && email_req == 0){
            email_req++;
        }
        if(email[i] == "@" && email_req == 1){
            email_req++;
        }
        if(email[i] != "@" && email_req == 2){
            email_req++;
        }

        if(email[i] == "." && email_req == 3){
            email_req++;
        }
        if(email[i] != "." && email_req == 4){
            email_req++;
        }
    }
    
    if(email_req != 5){
        alert("Please enter a valid email address");
    }
    
    let input_date = new Date(birthdate);
    

    let cur_time = new Date();
    cur_time = Date.now();
    let age = (cur_time - input_date) / 31536000000;
    if(age < 13){
        alert("Cannot be less than 13 years old");
    }



}
