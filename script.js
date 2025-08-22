// Shining stars background effect

const canvas = document.getElementById('stars-bg');
const ctx = canvas.getContext('2d');

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

const STAR_COUNT = 120;
const stars = [];

function randomBetween(a, b) {
    return a + Math.random() * (b - a);
}

for (let i = 0; i < STAR_COUNT; i++) {
    stars.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        r: randomBetween(0.6, 2.2),
        alpha: randomBetween(0.5, 1),
        twinkle: Math.random() * Math.PI * 2,
        speed: randomBetween(0.002, 0.008)
    });
}

function drawStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (const star of stars) {
        // Twinkle effect
        const twinkle = Math.sin(Date.now() * star.speed + star.twinkle) * 0.4 + 0.6;
        ctx.save();
        ctx.globalAlpha = star.alpha * twinkle;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fillStyle = '#fff8e7';
        ctx.shadowColor = '#fff';
        ctx.shadowBlur