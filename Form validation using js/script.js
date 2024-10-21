
let isUsername = document.getElementById("username");
let isPassword = document.getElementById("password");
let btn  =  document.getElementById("btn");
let isPlaceHolderEmpty = true;

// function myFunction(){}       function declaration    myFunction()
// const myFunction = function(){} function expression    myFunction()
// const myFunction = ()=>{}  arrow function        myFunction()
 


function validateForm() {
 console.log(this)
   
  if (isUsername.value == "") {
    document.getElementById("userError").innerHTML = "User Name Is Empty";
    console.log("user name is empty")
    isPlaceHolderEmpty = false;
    console.log(isPlaceHolderEmpty)

  } else if (isUsername.value.length < 3) {
    console.log(isUsername)
    document.getElementById("userError").innerHTML =
      "User Name required min 3 character";
      console.log("User Name required min 3 character")
    isPlaceHolderEmpty = false;
    console.log(isPlaceHolderEmpty)

  } else {
    document.getElementById("userError").innerHTML = "";
    isPlaceHolderEmpty = true;
    console.log(isPlaceHolderEmpty)
  }

  if (isPassword.value == "") {
    console.log("{}")
    console.log(isPlaceHolderEmpty)

    isPlaceHolderEmpty = false;
    document.getElementById("passError").innerHTML = "Password Is Empty";
  } else {
    isPlaceHolderEmpty = true;
    document.getElementById("passError").innerHTML = "";
  }
  if (isPlaceHolderEmpty) {
    console.log(isPlaceHolderEmpty)

    return true;
  } else {
    console.log(isPlaceHolderEmpty)

    return false;
  }
}
