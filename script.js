const projects = [
  "1 Active Texture Text Effects.zip",
  "2 Card Image Zoom on Hover Effects.zip",
  "3 Change Background Color Animation.zip",
  "4 Colorful Gradient Background Animation.zip",
  "5 CSS Only New Youtube Studio Logo.zip",
  "6 Focus Text Color Pattern.zip",
  "7 Hexagon Rounded Corners.zip",
  "8 Neon Light Indonesia Flag.zip",
  "9 Pure CSS Gradient Text Effects.zip",
  "10 Responsive Website Landing Page.zip",
  "11 Simple CSS Background Pattern.zip"
];

const base = "https://raw.githubusercontent.com/ibrohim617/ProjectHub/main/zips/";

const list = document.getElementById("list");

projects.forEach(name => {
  const div = document.createElement("div");
  div.className = "project";

  div.innerHTML = `
    <span>${name}</span>
    <button onclick="download('${name}')">Download</button>
  `;

  list.appendChild(div);
});

function download(file) {
  const url = base + encodeURIComponent(file);
  window.open(url, "_blank");
}
