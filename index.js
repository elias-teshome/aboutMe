
const inquirer = require("inquirer");
const cfonts = require("cfonts");
const opn = require("opn");

const actions = {
  
 
  GitHub() {
    opn("https://github.com/elias-teshome");
  },
  Linkedin() {
    opn("www.linkedin.com/in/elias-girma");
  },
  Quit() {
    process.exit(1);
  }
};

cfonts.say("Elias Teshome", {
  font: "chrome",
  colors: ["red", "white", "red"]
});

console.log(`Hey, my name is Elias Teshome.
I am full stack developer.
`);

inquirer
  .prompt([
    {
      type: "list",
      name: "choice",
      message: "Where would you like to go?",
      choices: [
        "GitHub",
        "Linkedin",
        "Quit"
      ]
    }
  ])
  .then(answer => {
    actions[answer.choice]();
    setTimeout(() => process.exit(1), 2000);
  });