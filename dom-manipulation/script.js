const body = document.querySelector("body");
const p = document.createElement("p");

const redText = document.createElement("p");
redText.textContent = "Hey, I'm red!";
redText.setAttribute("style", "color: red;");
body.appendChild(redText);

const blueH3 = document.createElement("h3");
blueH3.textContent = "I'm a blue h3";
blueH3.setAttribute("style", "color: blue;");
body.appendChild(blueH3);

const pinkDiv = document.createElement("div");
pinkDiv.setAttribute("style", "background: pink; border: solid black");

const pinkDivH1 = document.createElement("h1");
pinkDivH1.textContent = "I'm in a div";
pinkDiv.appendChild(pinkDivH1);

const pinkDivP = document.createElement("p");
pinkDivP.textContent = "ME TOO!";
pinkDiv.appendChild(pinkDivP);

body.appendChild(pinkDiv);
