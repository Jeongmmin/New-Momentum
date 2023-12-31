const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector(".greeting");
const listUserName = document.querySelector(".list-header__user")
const logoutBtn = document.querySelector("#logoutBtn");
const firstWindow = document.querySelector("#first_window");

const HIDDEN_CLASSNAME = "hidden";
const BEFORE_LOGIN = "beforeLogin";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  firstWindow.classList.add(HIDDEN_CLASSNAME);
  logoutBtn.classList.remove(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(`${username}`);
}

function paintGreetings(username) {
  greeting.innerText = `Hey there, ${username}!`;
  listUserName.innerText = `${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

function userLogout() {
  logoutBtn.classList.add(HIDDEN_CLASSNAME);
  localStorage.clear();
  window.location.reload();
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  
  logoutBtn.classList.add(HIDDEN_CLASSNAME);
  loginForm.classList.add(BEFORE_LOGIN);
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  firstWindow.classList.add(HIDDEN_CLASSNAME);
  logoutBtn.addEventListener("click", userLogout);
  paintGreetings(`${savedUsername}`);
}