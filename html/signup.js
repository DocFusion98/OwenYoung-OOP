"use strict";
function checkData(email, name, password, birthdate){
    
    let erroring = false;

    let tmp = document.createElement("div");
    

    if(email == "" || birthdate == "" || password == "" || name == "" && erroring == false){
        erroring = true;
        tmp.classList.add("alert");
        document.body.appendChild(tmp);
        tmp.appendChild( document.createTextNode( "One or more fields have not been filled out" ) );
    
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
    
    if(email_req != 5 && erroring == false){
        erroring = true;
        tmp.classList.add("alert");
        document.body.appendChild(tmp);
        tmp.appendChild( document.createTextNode( "Please enter a valid email address" ) );
    }
    
    let input_date = new Date(birthdate);
    

    let cur_time = new Date();
    cur_time = Date.now();
    let age = (cur_time - input_date) / 31536000000;
    if(age < 13 && erroring == false){
        erroring = true;
        tmp.classList.add("alert");
        document.body.appendChild(tmp);
        tmp.appendChild( document.createTextNode( "Cannot be less than 13 years old" ) );
    }
    
    
    if(erroring == false){
        while( tmp.childNodes.length > 0 )
            tmp.removeChild( tmp.childNodes[0] );
        tmp.classList.add("victory");
        document.body.appendChild(tmp);
        tmp.appendChild( document.createTextNode( "Welcome!" ) );
    }



}