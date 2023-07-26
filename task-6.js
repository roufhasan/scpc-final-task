const allCharacter =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|<>/?,.`~";

function generatePass(length) {
  let password = "";
  for (let i = 0; i < length; i++) {
    const random = Math.floor(Math.random() * allCharacter.length);
    password += allCharacter[random];
  }
  return password;
}

console.log(generatePass(10));
