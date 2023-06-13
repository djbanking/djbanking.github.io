class Bank{
    static accountdetails(){
        var account = { 
            1001:{name:'daniel',acno:1001,pin:1996,password:'a123123',balance:2000},
            1002:{name:'joseph',acno:1002,pin:1997,password:'b123123',balance:4000},
            1003:{name:'manu',acno:1003,pin:1999,password:'c123123',balance:6000}
        }
        return account
    }
    static login(){
        var acno = document.querySelector('#acno').value;
        var password = document.querySelector('#pwd').value;
        try{
            if(isNaN(acno))
            // isNaN is not a number
            throw 'not a account number';
            
        }
        catch(err){
            alert(err)
        }
    let data = Bank.accountdetails()
    // let value dose not change
    if(acno in data){
        let pwd = data[acno].password;
        if(pwd == password){
            alert('login');
            window.location.href='project2.html';
        
        }
        else{
            alert('incorrect password');
        }

    }
    else{
        alert('user does not exsist');
    }
    }
    static deposit(){
        var acno = document.querySelector('#acno').value;
        var pin = document.querySelector('#pin').value;
        var amount = Number (document.querySelector('#amount').value);
    let data = Bank.accountdetails();
    if(acno in data){
        let pin = data[acno].pin;
        if(pin==pin){
            data[acno].balance += amount;
            // to add amount deposited with the balance amount
            alert('amount credited');
            alert(data[acno].balance);
            // to display the amount
        }
        else{
            alert('pin not valid');
        }

    }
    else{
        alert('incorrect account number');
    }
    }
    static withdraw(){
        var acno = document.querySelector('#acno').value;
        var pin = document.querySelector('#pin').value;
        var amount = Number (document.querySelector('#amount').value);
    let data = Bank.accountdetails();
    if(acno in data){
        let pin = data[acno].pin;
        if(pin==pin){
            data[acno].balance -= amount;
            // to add amount deposited with the balance amount
            alert('amount debited');
            alert(data[acno].balance);
            // to display the amount
        }
        else{
            alert('pin not valid');
        }

    }
    else{
        alert('incorrect account number');
    }
    }
}
    