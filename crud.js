let fname = document.getElementById("form1");
let lname = document.getElementById("form2");
let age = document.getElementById("form3");
let gender = document.getElementById("form4");
let edita = null;
let btn = document.getElementById('form5')

let datas = []
function myfunction() {
    if (fname.value == '' ) {
        window.alert("Your Firstname Is Empty")
        fname.focus();
        return;
    }
    if(age.value==''){
        window.alert("Your Age Is Empty");
        age.focus();
        return;
    }
    if (age.value < 18){
        window.alert("You are not eligible.");
        age.focus();
        return
    }
    if(gender.value==''){
        window.alert("Your Gender Is Empty");
        gender.focus();
        return;
    }
    let user = {
        fullname: fname.value + " " + lname.value,
        age: Number(age.value),
        gender: gender.value
    };

    if (edita !== null) {
        localStorage.clear()
        datas[edita] = user; // Edit existing
        edita = null; // Reset after editing
        localStorage.setItem('data',JSON.stringify(datas))
    } else {
        datas.unshift(user); // Add new at the top
        localStorage.setItem('data',JSON.stringify(datas))  //localstorage
    }

    fname.value = ''
    lname.value = ''
    age.value = ''
    gender.value = ''
    if (btn.value == 'Update') {
        btn.value = 'Save'
    }
    showtable(); 
}

function showtable() {
    let local_data = localStorage.getItem('data'|| '[]'); //store data at local disk by using localstorage
    local_data = JSON.parse(local_data)
    if(local_data){
       datas = local_data
    }
    let tbody = document.getElementById("tbody");
    let row = ``
    for (let i = 0; i < datas.length; i++) {
        let parts = datas[i].fullname.split(" ");
        let firstname = parts[0];
        let lastname = parts.slice(1).join(" ");

        row += `
        <tr>
            <td>${firstname} ${lastname}</td>
                <td>${datas[i].age}</td>
                <td>${datas[i].gender}</td>
                <td>
                <button onclick="Edit1(${i})" class="text-yellow-500 cursor-pointer">Edit</button>
                <button onclick="delete1(${i})" class="text-red-500 cursor-pointer">Delete</button>
                </td>
            </tr>    
        `
    }
    tbody.innerHTML = row

}

function delete1(index) {
    // localStorage.clear()
    datas.splice(index, 1)
    localStorage.setItem('data',JSON.stringify(datas))
    showtable()

}
showtable()
function Edit1(index) {

    btn.value = 'Update'
    let parts = datas[index].fullname.split(" ");
    fname.value = parts[0];
    lname.value = parts.slice(1).join(" ");
    age.value = datas[index].age;
    gender.value = datas[index].gender;
    edita = index
}

