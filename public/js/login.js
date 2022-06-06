const loginFormHandler = async function (event) {
  event.preventDefault();
  
  const usernameEl = document.querySelector("#usrnm-input");
  const passwordEl = document.querySelector("#pwd-input");

  fetch("/api/user/login", {
    method: "post",
    body: JSON.stringify({
      username: usernameEl.value,
      password: passwordEl.value
    }),
    headers: { "Content-Type": "application/json" }
  })
  .then(function() {
      document.location.replace("/dashboard");
  })
  .catch(err => console.log(err));
} 

document
  .querySelector("#login-form")
  .addEventListener("submit", loginFormHandler);