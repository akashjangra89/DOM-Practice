const container = document.querySelector(".container");
const btn = document.querySelector(".btn");
const maxBoxes = 30;

const randomPalette = () => {
  let html = "";
  for (let i = 0; i < maxBoxes; i++) {
    // Generate Random Hex Color
    let randomHex = Math.floor(Math.random() * 0xffffff).toString(16);
    randomHex = `#${randomHex.padStart(6, "0")}`;

    html += `<ul class='list'>
        <li class="color">
            <div class="box" style ='background:${randomHex}'></div>
            <span class="hexValue">${randomHex}</span>
        </li>
        </ul>`;
  }
  container.innerHTML = html;
};
randomPalette();

btn.addEventListener("click", randomPalette);
container.addEventListener("click", function (event) {
  if (event.target.className === "hexValue") {
    const text = event.target.textContent;
    navigator.clipboard.writeText(text).then(
      function () {
        event.target.innerHTML = `Copied`;
        setTimeout(function () {
          event.target.innerHTML = text;
        }, 1000);
      },
      function (err) {
        console.error("Could not copy text: ", err);
      }
    );
  }
});
