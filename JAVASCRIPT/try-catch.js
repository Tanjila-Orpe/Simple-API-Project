function checkAge(){
    
    const input = document.getElementById('age');
    const inputStr = input.value;
    // console.log(inputStr);
    const errorTag = document.getElementById('error');
    try{
        
        const inputInt = parseInt(inputStr);
        console.log(inputInt);
        if(isNaN(inputInt)){
            // console.log("1");
            throw "give input";
        }
        else if(inputInt<18){
            throw "baccha not allowed";
        }
        else if(inputInt>30){
            throw "murubbi not allowed";
        } 
        errorTag.innerHTML = "";
    }
    catch(err){
        // console.log("Error: ",err);
        errorTag.innerHTML = "Error: " + err;
    }
    finally{
        console.log("Done");
    }
    // console.log("bhalo acho");
    input.value = "";

}