let nameError = document.getElementById("name-error");
let phoneError = document.getElementById("phone-error");
let emailError = document.getElementById("email-error");
let massageError = document.getElementById("massage-error")
let submitError = document.getElementById("submit-error")

function validateName(){
    let name = document.getElementById("contact-name").value;

    if(name.length == 0){
        nameError.innerHTML = "Nama tidak boleh kosong";
        return false;
    }

    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = "Nama tidak valid";
        return false;
    }

// ! : Operator negasi, artinya "tidak". Jadi, kode ini akan menghasilkan true jika nama tidak cocok dengan pola yang ditentukan.
// name.match(...) : Fungsi untuk memeriksa apakah string name cocok dengan pola tertentu (regular expression).
// /^[A-Za-z]*\s{1}[A-Za-z]*$/ : Pola (regular expression) yang mendefinisikan format nama yang valid. Mari kita uraikan:
// ^ : Menandakan awal dari string.
// [A-Za-z]* : Mencocokkan nol atau lebih huruf (baik huruf besar maupun kecil).
// \s{1} : Mencocokkan tepat satu spasi.
// [A-Za-z]* : Mencocokkan nol atau lebih huruf lagi.
// $ : Menandakan akhir dari string.

    nameError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function validatePhone(){
    let phone = document.getElementById("contact-phone").value;

    if(phone.length == 0){
        phoneError.innerHTML = "Nomor telepon tidak boleh kosong";
        return false;
    }

    if(phone.length !==12){
        phoneError.innerHTML = "Nomor telepon 12 digit";
        return false;
    }

    if(!phone.match(/^[0-9]{12}$/)){
        phoneError.innerHTML = "Nomor telepon tidak valid";
        return false;
    }

    // /^[0-9]{12}$/ : Pola (regular expression) yang mendefinisikan format nomor telepon yang valid. Mari kita uraikan:
    // ^ : Menandakan awal dari string.
    // [0-9] : Mencocokkan satu digit angka (0 sampai 9).
    // {12} : Menentukan bahwa digit angka sebelumnya ([0-9]) harus muncul tepat 12 kali.
    // $ : Menandakan akhir dari string.

    phoneError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}


function validateEmail(){
    let email = document.getElementById("contact-email").value;

    if(email.length == 0){
        emailError.innerHTML = "Email tidak boleh kosong";
        return false;
    }

    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = "Email tidak valid";
        return false;
    }

    emailError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

// /^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/: Pola (regular expression) yang mendefinisikan format alamat email yang valid. Mari kita uraikan:
// ^: Menandakan awal dari string.
// [A-Za-z\._\-[0-9]*: Mencocokkan nol atau lebih karakter yang terdiri dari huruf (besar atau kecil), titik (.), garis bawah (_), tanda hubung (-), atau angka (0-9). Ini adalah bagian sebelum simbol "@".
// [@]: Mencocokkan simbol "@".
// [A-Za-z]*: Mencocokkan nol atau lebih huruf (besar atau kecil). Ini adalah bagian domain setelah simbol "@".
// [\.]: Mencocokkan titik (.).
// [a-z]{2,4}: Mencocokkan 2 hingga 4 huruf kecil. Ini adalah bagian ekstensi domain (seperti .com, .net, .org, dll.).
// $: Menandakan akhir dari string.


function validateMassage(){
    let massage = document.getElementById("contact-massage").value;
    let required = 30; // Perbaiki typo
    let left = required - massage.length;


    if(left > 0){
        massageError.innerHTML = left + " karakter diperlukan"; 
        return false;
    }

    massageError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
}

function vallidateFrom(){
    if(!validateName() || !validatePhone() || !validateEmail() ||  !validateMassage()){
        submitError.style.display = "block";
        submitError.innerHTML = "Tolong perbaiki lagi";
        setTimeout(function(){
            submitError.style.display = "none";
        }, 3000)
        return false;
    }
}
