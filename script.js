const formEle = document.getElementById("signup");
const formEle2 = document.getElementById("login");

if (formEle) {
  formEle.addEventListener("submit", e => {
    let username = document.getElementById("uname");
    let pwd = document.getElementById("password");
    let cpwd = document.getElementById("confirm-password");
    const uname = username.value;
    const pass = pwd.value;
    const cpass = cpwd.value;
    console.log(localStorage);
    if (localStorage.getItem(uname) !== null) {
      alert("username already exist");
      e.preventDefault();
    } else {
      if (pass != cpass) {
        alert("Password Mismatch!!!");
        e.preventDefault();
      } else {
        localStorage.setItem(uname, pass);
        alert("Successfully Signed in.... Thank you!");
      }
    }
  });
}

if (formEle2) {
  formEle2.addEventListener("submit", e => {
    let username = document.getElementById("uname");
    let pwd = document.getElementById("password");
    const uname = username.value;
    const temppass = pwd.value;
    const pass = localStorage.getItem(uname);
    if (localStorage.getItem(uname) === null) {
      alert("username doesn't exist");
      username.value = "";
      pwd.value = "";
      e.preventDefault();
    } else {
      if (pass !== temppass) {
        alert("check password");
        pwd.value = "";
        e.preventDefault();
      } else if (pass && temppass === pass) {
        username.value = "";
        pwd.value = "";
      }
    }
  });
}
