function generateRandomMessage() {
  var messages = [
    "Salut, tu vas bien?",
    "Heureux de te revoir!",
    "Bienvenu!",
    "Hello!"
  ];
  var randomMessage = messages[Math.floor(Mathrandom() * messages.length)]
  return randomMessage;
}

console.log(RandomMessage);