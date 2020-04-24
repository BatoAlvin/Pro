function formval() {
var uid = document.form.pay
var ucar = document.form.car
var ujob = document.form.job
var clients = JSON.parse(localStorage.getItem('clients')) || [];
if (userid_validation(uid, 7, 25)) {
    if (passid_validation(ucar,6,12)){
        if (passidvalidation(ujob,6,12)){
        }
         }
}
return false
}

function addClient(e){
    e.preventDefault();
    const name = this.querySelector("[name=name]").value;
    const number = this.querySelector("[name=number]").value; 
    const payment = this.querySelector("[name=payment]").value; 
    const vehicle = this.querySelector("[name=vehicle]").value; 
    
    const clientData = {
        name,
        number,
        payment,
        vehicle
    };






function userid_validation(uid, mx, my) {
    //Accessing form element
    var uid_len = uid.value.length;
    if (uid_len == 0 || uid_len >= my || uid_len < mx) {
      alert(
        "Username should not be empty / length be between " + mx + " to " + my
      );
      uid.focus();
      return false;
    }
    return true;
  }

  function passid_validation(ucar, mx, my) {
    //Accessing form element
    var ucar_len = ucar.value.length;
    if (ucar_len == 0 || ucar_len >= my || ucar_len < mx) {
      alert(
        "Username should not be empty / length be between " + mx + " to " + my
      );
      ucar.focus();
      return false;
    }
    return true;
  }

  function passidvalidation(ujob, mx, my) {
    //Accessing form element
    var ujob_len = ujob.value.length;
    if (ujob_len == 0 || ujob_len >= my || ujob_len < mx) {
      alert(
        "Username should not be empty / length be between " + mx + " to " + my
      );
      ujob.focus();
      return false;
    }
    return true;
  }