var check = document.querySelector('.check');
check.addEventListener('click', idioma, false);

function idioma(){;
    let id = check.checked;
    if (id === true){
        location.href="../lang/es/index.html";
    }
    else{
        location.href="/";
    }
}