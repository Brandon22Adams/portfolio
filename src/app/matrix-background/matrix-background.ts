import { AfterViewInit, Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-matrix-background',
  templateUrl: './matrix-background.html',
  styleUrls: ['./matrix-background.scss'],
})
export class MatrixBackground implements AfterViewInit {

  private fontSize = 16;
  private speed = 5;
  private chars = ['0', '1'];
  private color = 'rgba(107, 63, 160, .5)';

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) return;

    const canvas = document.getElementById('matrix-bg') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let columns = Math.floor(window.innerWidth / this.fontSize);
    let drops = Array(columns)
  .fill(0)
  .map(() => Math.floor(Math.random() * Math.floor(canvas.height / this.fontSize)));
    let frameCounters = Array(columns).fill(0);

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      columns = Math.floor(canvas.width / this.fontSize);

      const newDrops = Array(columns).fill(0);
      const newCounters = Array(columns).fill(0);

      for (let i = 0; i < Math.min(drops.length, newDrops.length); i++) {
        newDrops[i] = drops[i];
        newCounters[i] = frameCounters[i];
      }

      drops = newDrops;
      frameCounters = newCounters;

      ctx.fillStyle = 'black';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const draw = () => {
  // Fade previous frame
  ctx.fillStyle = `rgba(0,0,0,0.05)`;
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = this.color;
  ctx.font = `${this.fontSize}px monospace`;

  for (let i = 0; i < drops.length; i++) {
    frameCounters[i]++;

    // Only draw a new character when counter reaches speed
    if (frameCounters[i] >= this.speed) {
      const x = i * this.fontSize;
      const y = drops[i] * this.fontSize;

      ctx.fillStyle = 'black';
      ctx.fillRect(x, y - this.fontSize, this.fontSize, this.fontSize);

      ctx.fillStyle = this.color;
      const text = this.chars[Math.floor(Math.random() * this.chars.length)];
      ctx.fillText(text, x, y);

      drops[i]++;
      frameCounters[i] = 0;

      // Reset if offscreen
      if (y > canvas.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
    }
  }

  requestAnimationFrame(draw);
};

    draw();
  }
}
