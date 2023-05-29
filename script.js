// Supervisor Leave Each Year Start\
let supervisorNumberRange = $("#charSizeSelectedRange");
let numberOfSupervisor = $("#charSizeSelected");
let numberOfSupervisorInstance;
let numberOfSupervisorMin = 4;
let numberOfSupervisorMax = 10;

supervisorNumberRange.ionRangeSlider({
    skin: "round",
    type: "single",
    min: numberOfSupervisorMin,
    max: numberOfSupervisorMax,
    from: 6,
    onStart: function (data) {
        numberOfSupervisor.prop("innerHTML", data.from);
    },
    onChange: function (data) {
        numberOfSupervisor.prop("innerHTML", data.from);
        Strength();
    },
    hide_min_max: true,
});

numberOfSupervisorInstance = supervisorNumberRange.data("ionRangeSlider");

numberOfSupervisor.on("change", function () {
    let val = $(this).prop("value");

    // validate
    if (val < numberOfSupervisorMin) {
        val = numberOfSupervisorMin;
    } else if (val > numberOfSupervisorMax) {
        val = numberOfSupervisorMax;
    }

    numberOfSupervisorInstance.update({
        from: val
    });
});




function generate(){
    let characterLength = parseFloat(document.getElementById("charSizeSelectedRange").value);
    let includeUppercase = document.getElementById("includeUppercase");
    let includeLowercase = document.getElementById("includeLowercase");
    let includeNumber = document.getElementById("includeNumber");
    let includeSpecial = document.getElementById("includeSpecial");

    let charUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let charLowercase = "abcdefghijklmnopqrstuvwxyz";
    let charNumber = "0123456789";
    let charSpecial = "~!@#$%^&*_+:?";

    let result ="";
    let password = document.getElementById("password");
    document.getElementById("error").classList.add("d-none");
    if((includeUppercase.checked)||(includeLowercase.checked)||(includeNumber.checked)||(includeSpecial.checked)){
        // alert("alfa");
        for ( let i = 0; i <= characterLength; i++ ) {
            if(includeUppercase.checked){
              
                    result += charUppercase.charAt(Math.floor(Math.random() * charUppercase.length));
            }
        
             if(includeLowercase.checked){
                    result += charLowercase.charAt(Math.floor(Math.random() * charLowercase.length));
            }
        
             if(includeNumber.checked){
                    result += charNumber.charAt(Math.floor(Math.random() * charNumber.length));
            }
            
             if(includeSpecial.checked){
                    result += charSpecial.charAt(Math.floor(Math.random() * charSpecial.length));
            }
            }
    }
    else{
        // alert("gama");
        document.getElementById("error").classList.remove("d-none");
    }
    
    // alert(result);




    password.value = result.slice(0, characterLength);
    password.classList.add("shake-horizontal");

    setTimeout( function() { password.classList.remove("shake-horizontal"); },200);

}

function copyText() {
    // Get the input field and its value
    var inputField = document.getElementById("password");
    var inputValue = inputField.value;
  
    // Create a temporary element to hold the value
    var tempElement = document.createElement("textarea");
    tempElement.value = inputValue;
  
    // Add the temporary element to the DOM
    document.body.appendChild(tempElement);
  
    // Select the value of the temporary element
    tempElement.select();
  
    // Copy the selected value to the clipboard
    document.execCommand("copy");
  
    // Remove the temporary element from the DOM
    document.body.removeChild(tempElement);
  
    // Show a notification that the text has been copied
    alert("Password is copied to clipboard!");
  }
  

  function Strength(){
    let characterLength = parseFloat(document.getElementById("charSizeSelectedRange").value);
    let includeUppercase = document.getElementById("includeUppercase");
    let includeLowercase = document.getElementById("includeLowercase");
    let includeNumber = document.getElementById("includeNumber");
    let includeSpecial = document.getElementById("includeSpecial");

    // .jello-horizontal1 have to add this

    let result = characterLength*2;
    let password = document.getElementById("password");



    if(includeUppercase.checked){
      
            result += 20;
    }

    if(includeLowercase.checked){
            result += 20;
    }

    if(includeNumber.checked){
            result += 20;
    }
    
    if(includeSpecial.checked){
            result += 20;
    }
    
    // alert(result);

    if(result<33.33){
        // alert("red");
        document.getElementById("st1").style.backgroundColor="#ff0000";
        document.getElementById("st2").style.backgroundColor="#ff0000";
        document.getElementById("st3").style.backgroundColor="#3f3f3e";
        document.getElementById("st4").style.backgroundColor="#3f3f3e";
        document.getElementById("st5").style.backgroundColor="#3f3f3e";
        document.getElementById("strength").innerHTML="Weak";
    }
    else if(result<66.66){
        // alert("red");
        document.getElementById("st1").style.backgroundColor="#fbff00";
        document.getElementById("st2").style.backgroundColor="#fbff00";
        document.getElementById("st3").style.backgroundColor="#fbff00";
        document.getElementById("st4").style.backgroundColor="#3f3f3e";
        document.getElementById("st5").style.backgroundColor="#3f3f3e";
        document.getElementById("strength").innerHTML="Medium";

    }
    else{
        document.getElementById("st1").style.backgroundColor="#02ac1b";
        document.getElementById("st2").style.backgroundColor="#02ac1b";
        document.getElementById("st3").style.backgroundColor="#02ac1b";
        document.getElementById("st4").style.backgroundColor="#02ac1b";
        document.getElementById("st5").style.backgroundColor="#02ac1b";
        document.getElementById("strength").innerHTML="Strong";

    }


   

}
