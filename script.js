function generatePassword() {
  const length = document.getElementById("length").value;
  const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]\:;?><,./-=";
  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }
  document.getElementById("password").value = password;
}

function copyPassword() {
  const passwordInput = document.getElementById("password");
  passwordInput.select();
  passwordInput.setSelectionRange(0, 99999);
  document.execCommand("copy");
  alert("Password copied to clipboard");
}
