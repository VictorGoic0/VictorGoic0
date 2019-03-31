const form = document.getElementById("contactform");
const formName = document.getElementById("name");
const formEmail = document.getElementById("email");
const formMessage = document.getElementById("message");

form.addEventListener("submit", e => {
  e.preventDefault();
  const email = {
    name: formName.value,
    email: formEmail.value,
    message: formMessage.value
  };
  axios
    .post("https://goicocontactform.herokuapp.com/api/v1", email)
    .then(res => {
      alert("Email successfuly sent.");
      location.reload();
    })
    .catch(err => {
      alert(`Request failed with error ${err}`);
    });
});
