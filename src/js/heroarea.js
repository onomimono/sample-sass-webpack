const heroTitle = document.getElementById("heroarea_title");
const splitArray = heroTitle.innerText.split("");

heroTitle.textContent = "";

splitArray.forEach((char, index) => {
  const newEL = document.createElement("span");
  newEL.style.opacity = 0;
  newEL.appendChild(document.createTextNode(char));
  newEL.animate(
    {
      opacity: [0, 1],
      top: ["30px", "-10px", "0px"],
      easing: ["ease-out"],
    },
    {
      duration: 500,
      delay: 100 * index,
      fill: "forwards",
    }
  );
  heroTitle.appendChild(newEL);
});
