let fname = document.getElementById("form1");
let lname =document.getElementById("form2");
let age = document.getElementById("form3");
let gender = document.getElementById("form4");
let frm = document.getElementById("frm");

let details =document.getElementById("details");
function myfunction(event){
    event.preventDefault();
    let user = {
        full_name:fname.value+" "+lname.value,
        age:Number(age.value),
        gender:gender.value
    }
    console.log(user);
let tbody = document.getElementById("tbody");
tbody.insertAdjacentHTML(
    "beforeend",
    `<tr>
       <td>${user.full_name}</td>
       <td>${user.age}</td>
       <td>${user.gender}</td>
     </tr>`
  );
  frm.reset();
 fname.focus();
}

