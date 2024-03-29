getEl = (e) => {
  return document.getElementById(e);
};
const container = document.getElementById("container_register");
const registerBtn = document.getElementById("register");
const loginBtn = document.getElementById("login");
const createUser = getEl("createUser");
const signin = getEl("signin");
registerBtn.addEventListener("click", () => {
  container.classList.add("active");
});

loginBtn.addEventListener("click", () => {
  container.classList.remove("active");
});

createUser.onclick = (evt) => {
  evt.preventDefault();
  let name = getEl("name").value;
  let email = getEl("email").value;
  let phone = getEl("phone").value;
  let password = getEl("password").value;
  let confirmPass = getEl("confirmPass").value;
  let gender = document.querySelector('input[name="gender"]:checked').value;
  gender = gender == "male" ? true : false;

  let User_new = new User();
  User_new = { ...User_new, name, password, phone, gender, email };
  console.log(User_new);
  let promise = axios({
    url: "https://shop.cyberlearn.vn/api/Users/signup",
    method: "POST",
    data: User_new,
  });
  promise.then((res) => {
    console.log("thanh cong", res);
    openToast(res.data.message);


  });
  promise.catch((err) => {
    console.log(err);
    openToast("Đăng ký thất bại");

  });
};

function openToast(string) {
  // gọi tới layout toast
  const toastLiveExample = document.getElementById("liveToast");
  //   thêm toastBootstrap để có thể sử dụng phương thức show và mở toast lên
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
  document.querySelector(".toast-body").innerHTML = string;
  toastBootstrap.show();
}

signin.onclick = (evt) => {
  evt.preventDefault();
  let email = getEl("emailSignIn").value;
  let password = getEl("passSignIn").value;

  let User_new = new User();
  User_new = { ...User_new, password, email };
  console.log(User_new);

  let promise = axios({
    url: "https://shop.cyberlearn.vn/api/Users/signin",
    method: "POST",
    data: User_new,
  });
  promise
    .then((result) => {
      console.log(result.data);
      openToast(result.data.message);

      let saveAccessToken = result.data;
    })
    .catch((err) => {
      console.log(err);
      openToast(err.message);
    });
};
