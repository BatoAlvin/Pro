function formvalidation() {
  var uid = document.customerform.fullname;
  var uphone = document.customerform.tel;
  var unation = document.customerform.origin;
  var uninn = document.customerform.nin;
  var ucar = document.customerform.vehicle;
  var uref = document.customerform.refna;
  var ureff = document.customerform.refno;
  var uwork = document.customerform.refoc;
  var upay = document.customerform.payment;
  var ustage = document.customerform.stage;
  var ulc = document.customerform.lc;
  var ulccc = document.customerform.lcc;
  var uother = document.customerform.other;
  var udate = document.customerform.confirm;

  /**Invoking functions with arguments */
  if (fullnamevalidation(uid)) {
    if (phonevalidation(uphone)) {
      if (nationvalidation(unation)) {
        if (ninvalidation(uninn, 13)) {
          if (carvalidation(ucar)) {
            if (refvalidation(uref)) {
              if (refnovalidation(ureff)) {
                if (refocvalidation(uwork)) {
                  if (upayvalidation(upay, 6, 7)) {
                    if (ustagevalidation(ustage)) {
                      if (ucouncilvalidation(ulc, ulccc)) {
                        if (loanvalidation(uother, 5, 6)) {
                          if (checkvalidation(udate)) {
                            
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  return false;
}

// //Defining method fullnamevalidation with parameter
// function fullnamevalidation(uid) {
//   var letters = /^[A-Za-z]+$/;
//   if (uid.value.match(letters)) {
//     uid.style.border = "2px solid red;"
//     return true;
//   } else {
//     alert("Full names must have alphabet characters only");
//    uid.style.border="2px solid yellow;"
//     uid.focus();
//     return false;
//   }
// }

function fullnamevalidation(uid, mx, my) {
  //Accessing form element
  var uid_len = uid.value.length;
  if (uid_len == 0 || uid_len >= my || uid_len < mx) {
    alert(
      "IDs should not be empty / length be between " + mx + " to " + my,
    );
    uid.style.border = "2px solid red";
    uid.focus();
    return false;
  }
  else{
      uid.style.border = "2px solid green";
    }
  return true;
};


//Defining method phonevalidation with parameter
function phonevalidation(uphone) {
  // var numbers = /^[0-9]+$/;
  var numbers = /^\d{10}$/;
  if (uphone.value.match(numbers)) {
    return true;
  } else {
    alert("Telephone code must have 10 numeric characters only");
    uphone.style.border = "2px solid red;"
    uphone.focus();
    return false;
  }
}

//Defining method nationvalidation with parameter
function nationvalidation(unation) {
  if (unation.value == "Default") {
    alert("Please select your Nationality");
    unation.focus();
    return false;
  } else {
    return true;
  }
}

//Defining method ninvalidation with parameters
function ninvalidation(uninn, mx, my) {
  //Accessing form element
  var uninn_len = uninn.value.length;
  if (uninn_len == 0 || uninn_len >= my || uninn_len < mx) {
    alert("NIN should not be empty / length be between " + mx + " to " + my);
    uninn.focus();
    return false;
  }
  return true;
}

//Defining method carvalidation with parameter
function carvalidation(ucar) {
  if (ucar.value == "Default") {
    alert("Please select your Vehicle");
    ucar.focus();
    return false;
  } else {
    return true;
  }
}

//Defining method refvalidation with parameter
function refvalidation(uref) {
  var letterrs = /^[A-Za-z]+$/;
  if (uref.value.match(letterrs)) {
    return true;
  } else {
    alert("Refrees Names must have alphabet characters only");
    uref.focus();
    return false;
  }
}

//Defining method refnovalidation with parameter
function refnovalidation(ureff) {
  // var numbers = /^[0-9]+$/;
  var numbers = /^\d{10}$/;
  if (ureff.value.match(numbers)) {
    return true;
  } else {
    alert("Refrees phone number must have 10 digits");
    ureff.focus();
    return false;
  }
}

//Defining method refocvalidation with parameter
function refocvalidation(refoc) {
  var letters = /^[A-Za-z]+$/;
  if (refoc.value.match(letters)) {
    return true;
  } else {
    alert("Refrees Occupation must have alphabet characters only");
    refoc.focus();
    return false;
  }
}

//Defining method upayvaliadtion with parameters
function upayvalidation(upay, mx, my) {
  //Accessing form element
  var upay_len = upay.value.length;
  if (upay_len == 850000 || upay_len >= my || upay_len < mx) {
    alert("Downpayment should not be less than 850000shs");
    upay.focus();
    return false;
  }
  return true;
}

//Defining method  ustagevalidation with parameter
function ustagevalidation(ustage) {
  var letters = /^[A-Za-z]+$/;
  if (ustage.value.match(letters)) {
    return true;
  } else {
    alert("Stage name must have alphabet characters only");
    ustage.focus();
    return false;
  }
}

//Defining method ucouncilvalidation with parameters
function ucouncilvalidation(ulc, ulccc) {
  x = 0;

  if (ulc.checked) {
    x++;
  }
  if (ulccc.checked) {
    x++;
  }
  if (x == 0) {
    alert("Select LC1/LC3");
    ulc.focus();
    return false;
  } else {
    return true;
  }
}

//Defining method loanvalidation with parameters
function loanvalidation(uother, mx, my) {
  //Accessing form element
  var uother_len = uother.value.length;
  if (uother_len == 50000 || uother_len >= my || uother_len < mx) {
    alert("Specific loan amount must have 5 to 8 numeric digits only ");

    uother.focus();

    return false;
  }
  return true;
}

function checkvalidation(udate){
  if(!udate.checked)
  {
      alert('You must agree to the terms first.');
      return false;
  }
  else{
    alert("Form Succesfully Submitted");
                            window.location.reload()
  }
}
