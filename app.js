const DB_USER = [
    {
        username: "andin", 
        password: "password"
    }
]

const inputUsername = document.querySelector("#username");
const inputPassword = document.querySelector("#password");
const buttonSubmit = document.querySelector("#submitForm");

buttonSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    const valueInputPassword = inputPassword.value;
    const valueInputUsername = inputUsername.value;
    console.log(inputUsername);
    console.log(inputPassword);

    let flag = 0; // valuenya bisa diubah
    DB_USER.map((data) => { //seperti for let = 0 i<db user length i++, db user 0
        if(data.username === valueInputUsername && data.password === valueInputPassword){
            flag = 1;
        }
    })

    const warningMsg = document.querySelector(".warning");

    if(flag === 0){
        warningMsg.className = "text-danger";
    }else{
        alert("Selamat anda masuk ke home");
    }
})

