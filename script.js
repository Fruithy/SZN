// Gradient Wave Background
const canvas = document.getElementById('heroCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let waveOffset = 0;

function drawGradientWave(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    const gradient = ctx.createLinearGradient(0,0,canvas.width,canvas.height);
    gradient.addColorStop(0, '#ff9a9e');
    gradient.addColorStop(0.5, '#fad0c4');
    gradient.addColorStop(1, '#fad0c4');
    ctx.fillStyle = gradient;

    ctx.beginPath();
    ctx.moveTo(0, canvas.height/2);

    for(let x=0; x<=canvas.width; x++){
        const y = canvas.height/2 + Math.sin((x + waveOffset) * 0.01) * 50;
        ctx.lineTo(x, y);
    }
    ctx.lineTo(canvas.width, canvas.height);
    ctx.lineTo(0, canvas.height);
    ctx.closePath();
    ctx.fill();

    waveOffset += 2;
    requestAnimationFrame(drawGradientWave);
}
drawGradientWave();

// Testimonials Carousel with Fade
const testimonials = document.querySelectorAll('.testimonial');
let current = 0;

function showTestimonial(index){
    testimonials.forEach((t,i)=>{
        t.classList.toggle('active', i===index);
    });
}
showTestimonial(current);

setInterval(()=>{
    current = (current+1) % testimonials.length;
    showTestimonial(current);
}, 4000);

// Responsive Canvas
window.addEventListener('resize', ()=>{
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});
