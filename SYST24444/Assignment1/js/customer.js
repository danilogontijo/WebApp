// localStorage.js
/* Later we will be using Classes and loading student data from external data file */

function saveData(){
   
   let fname = document.getElementById('fname').value;
   let lname = document.getElementById('lname').value;
   let email = document.getElementById('email').value;

   localStorage.setItem("fname", fname);
   localStorage.setItem("lname", lname );
   localStorage.setItem("email", email );

   alert('Data Save Successfully!');
}
function makeReport(){
    
    let fname = localStorage.getItem("fname");
    let lname = localStorage.getItem("lname");
    let email = localStorage.getItem("email");

    document.getElementById('outfname').value = fname;
    document.getElementById('outlname').value = lname;
    document.getElementById('outemail').value = email;

    alert('Report Created Successfully!');
}
function clearData(){
    localStorage.clear();
    alert('Data Created Successfully!');
}