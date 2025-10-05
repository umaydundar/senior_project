// Init animations
AOS.init({
  duration: 1000,
  once: true
});

// Smooth scroll for navbar links
document.querySelectorAll('.navbar a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});


const svg = document.getElementById("stock-graph");
const width = 500;
const height = 150;
const linesCount = 3; // number of trend lines
const pointsCount = 50; // number of points per line
const colors = ["#4e73df", "#1cc88a", "#e74a3b"];

function generateLine() {
  let points = [];
  let y = Math.random() * height * 0.6 + height * 0.2;
  for (let i = 0; i < pointsCount; i++) {
    const delta = (Math.random() - 0.5) * 20; // random up/down movement
    y = Math.min(Math.max(y + delta, 10), height - 10); // clamp to SVG height
    const x = (i / (pointsCount - 1)) * width;
    points.push([x, y]);
  }
  return points;
}

function pointsToPath(points) {
  return points.map((p, i) => (i === 0 ? "M" : "L") + p[0] + " " + p[1]).join(" ");
}

// Draw lines
for (let i = 0; i < linesCount; i++) {
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  const points = generateLine();
  path.setAttribute("d", pointsToPath(points));
  path.setAttribute("stroke", colors[i]);
  path.setAttribute("stroke-width", "2");
  path.setAttribute("fill", "none");
  path.setAttribute("stroke-dasharray", "1000");
  path.setAttribute("stroke-dashoffset", "1000");
  svg.appendChild(path);

  // Animate the line drawing
  path.animate([{ strokeDashoffset: 1000 }, { strokeDashoffset: 0 }], {
    duration: 4000 + i * 1000,
    iterations: Infinity,
    direction: "alternate",
  });
}

