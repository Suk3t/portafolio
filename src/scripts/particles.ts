document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById(
    "particles-canvas",
  ) as HTMLCanvasElement | null;

  if (!canvas) return;

  const ctx = canvas.getContext("2d")!;

  let width = window.innerWidth;
  let height = window.innerHeight;

  canvas.width = width;
  canvas.height = height;

  interface Particle {
    x: number;
    y: number;
    radius: number;
    vx: number;
    vy: number;
  }

  const PARTICLE_COUNT = 40;

  const particles: Particle[] = Array.from({ length: PARTICLE_COUNT }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    radius: Math.random() * 2 + 2,
    vx: (Math.random() - 0.5) * 0.15,
    vy: (Math.random() - 0.5) * 0.15,
  }));

  function animate(): void {
    ctx.clearRect(0, 0, width, height);

    for (const particle of particles) {
      particle.x += particle.vx;
      particle.y += particle.vy;

      if (particle.x < 0) particle.x = width;
      if (particle.x > width) particle.x = 0;

      if (particle.y < 0) particle.y = height;
      if (particle.y > height) particle.y = 0;

      ctx.beginPath();

      ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);

      const isDark = document.documentElement.dataset.theme === "dark";

      ctx.fillStyle = isDark ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.25)";

      ctx.fill();
    }
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;

        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 150) {
          const opacity = ((150 - distance) / 150) * 0.08;

          ctx.beginPath();

          ctx.moveTo(particles[i].x, particles[i].y);

          ctx.lineTo(particles[j].x, particles[j].y);

          ctx.strokeStyle = `rgba(255,255,255,${opacity})`;

          const isDark = document.documentElement.dataset.theme === "dark";

          ctx.strokeStyle = isDark
            ? `rgba(255,255,255,${opacity})`
            : `rgba(0,0,0,${opacity})`;

          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(animate);
  }

  animate();

  window.addEventListener("resize", () => {
    width = window.innerWidth;
    height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;
  });
});
