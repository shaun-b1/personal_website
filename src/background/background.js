export function background() {
  const canvas = document.getElementById('background__canvas');
  const ctx = canvas.getContext('2d', { alpha: false });

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const colours = [
    'rgba(87, 72, 173, 0.1)',
    'rgba(87, 72, 173, 0.2)',
    'rgba(87, 72, 173, 0.3)',
    'rgba(87, 72, 173, 0.4)',
    'rgba(87, 72, 173, 0.5)',
    'rgba(87, 72, 173, 0.6)',
    'rgba(87, 72, 173, 0.7)',
    'rgba(13, 31, 45, 0.1)',
    'rgba(13, 31, 45, 0.2)',
    'rgba(13, 31, 45, 0.3)',
    'rgba(13, 31, 45, 0.4)',
    'rgba(13, 31, 45, 0.5)',
    'rgba(13, 31, 45, 0.6)',
    'rgba(13, 31, 45, 0.7)',
    'rgba(96, 132, 120, 0.1)',
    'rgba(96, 132, 120, 0.2)',
    'rgba(96, 132, 120, 0.3)',
    'rgba(96, 132, 120, 0.4)',
    'rgba(96, 132, 120, 0.5)',
    'rgba(96, 132, 120, 0.6)',
    'rgba(96, 132, 120, 0.7)',
    'rgba(255, 255, 255, 0.1)',
    'rgba(255, 255, 255, 0.2)',
    'rgba(255, 255, 255, 0.3)',
    'rgba(255, 255, 255, 0.4)',
    'rgba(255, 255, 255, 0.5)',
    'rgba(255, 255, 255, 0.6)',
    'rgba(255, 255, 255, 0.7)',
  ];

  function randomColour(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
  }

  function randomIntFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function fadeInCanvas() {
    canvas.style.opacity = '1';
  }

  function Particle(x, y, r, colour) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.colour = colour;
    this.radians = Math.random() * Math.PI * 2;
    this.velocity = Math.random() * 0.0008 + 0.0003;
    this.distanceToCentre = {
      // x: randomIntFromRange(canvas.width * 0.2, canvas.width * 0.4),
      // y: randomIntFromRange(canvas.height * 0.2, canvas.height * 0.4),
      x: randomIntFromRange(0, canvas.width * 1.3),
      y: randomIntFromRange(0, canvas.height * 1.1),
    };

    this.update = () => {
      const lastPoint = { x: this.x, y: this.y };
      this.radians += this.velocity;
      this.x = x + Math.cos(this.radians) * this.distanceToCentre.x;
      this.y = y + Math.sin(this.radians) * this.distanceToCentre.y;
      this.draw(lastPoint);
    };

    this.draw = (lastPoint) => {
      ctx.beginPath();
      ctx.strokeStyle = this.colour;
      ctx.lineWidth = this.r;
      ctx.lineCap = 'round';
      ctx.moveTo(lastPoint.x, lastPoint.y);
      ctx.lineTo(this.x, this.y);
      ctx.stroke();
      ctx.closePath();
    };
  }

  let particles;
  function init() {
    particles = [];

    for (let i = 0; i < 200; i++) {
      const radius = Math.random() * 15 + 5;
      particles.push(
        new Particle(
          canvas.width / 2,
          canvas.height / 2,
          radius,
          randomColour(colours),
        ),
      );
    }
  }

  function animate() {
    requestAnimationFrame(animate);
    ctx.fillStyle = 'rgba(46, 52, 64)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    particles.forEach((particle) => {
      particle.update();
    });
  }

  init();
  animate();
  fadeInCanvas(); // Adjust delay as needed
}
