function editMenu() {
    let left = document.getElementById("leftHH");
    let right = document.getElementById("rightHH");
    if (left.style.display == 'none') {
        left.style.display = 'unset';
        right.className = 'col-lg-10';
    } else {
        left.style.display = 'none';
        right.className = 'col-lg-12';
    }
}

let tabAddHH = document.getElementsByClassName("tabAddHH");
let headAddHH = document.getElementsByClassName("menuTab");
for (let i = 1; i < tabAddHH.length; i++) {
    tabAddHH[i].style.display = 'none';
}
function onTabAddHH(index) {
    for (let i = 0; i < tabAddHH.length; i++) {
        if (i == index) {
            headAddHH[i].style.borderBottom = '2px solid #564ab1'
            tabAddHH[i].style.display = 'unset';
        } else {
            headAddHH[i].style.borderBottom = '0px'
            tabAddHH[i].style.display = 'none';
        }
    }
}

let tabTTKH = document.getElementsByClassName("tabTTKH");
let headTTKH = document.getElementsByClassName("menuTabKH");
for (let i = 1; i < tabTTKH.length; i++) {
    tabTTKH[i].style.display = 'none';
}





const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});

function uuid() {
    var temp_url = URL.createObjectURL(new Blob());
    var uuid = temp_url.toString();
    URL.revokeObjectURL(temp_url);
    return uuid.substr(uuid.lastIndexOf('/') + 1);
}

function closeModalAddHH() {
    document.getElementById('modalAddHH').style.display = 'none'
}
function onModalAddHH() {
    document.getElementById('modalAddHH').style.display = 'unset'
}













$(function () {
    $('*').keyup(function (e) {
        if (e.keyCode == '27') {
            document.getElementById('modalAddHH').style.display = 'none'
        }
    })
})
if (document.getElementById("rightHH") != null) {
    document.getElementById("rightHH").className = 'col-lg-10';
}

