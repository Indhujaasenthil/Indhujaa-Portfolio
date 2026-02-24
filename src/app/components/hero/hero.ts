import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrls: ['./hero.scss']
})
export class HeroComponent implements OnInit, OnDestroy {
  particles: Array<{ x: number; duration: number; delay: number }> = [];
  
  texts: string[] = [
    'I like to develop new things.',
    'I love learning new tech.',
    'I love meeting new people.'
  ];
  
  currentIndex = 0;
  isDeleting = false;
  displayText = '';
  
  // Typing speeds (ms)
  typingSpeed = 1;    // 100ms per character for readable typing
  deleteSpeed = 50;     // 50ms per character when deleting
  pauseTime = 1000;     // 2 seconds pause after a full sentence

  private typewriterTimeout: any;

  ngOnInit(): void {
    this.generateParticles();
    this.typeWriter();
  }

  ngOnDestroy(): void {
    if (this.typewriterTimeout) {
      clearTimeout(this.typewriterTimeout);
    }
  }

  typeWriter(): void {
    const currentText = this.texts[this.currentIndex];
    const currentLength = this.displayText.length;

    if (!this.isDeleting) {
      // TYPING MODE
      this.displayText = currentText.substring(0, currentLength + 1);

      if (this.displayText === currentText) {
        this.typewriterTimeout = setTimeout(() => {
          this.isDeleting = true;
          this.typeWriter();
        }, this.pauseTime);
        return;
      }
    } else {
      // DELETING MODE
      this.displayText = currentText.substring(0, currentLength - 1);

      if (this.displayText === '') {
        this.isDeleting = false;
        this.currentIndex = (this.currentIndex + 1) % this.texts.length;
      }
    }

    const speed = this.isDeleting ? this.deleteSpeed : this.typingSpeed;
    this.typewriterTimeout = setTimeout(() => this.typeWriter(), speed);
  }

  generateParticles(): void {
    for (let i = 0; i < 50; i++) {
      this.particles.push({
        x: Math.random() * 100,
        duration: 10 + Math.random() * 20,
        delay: Math.random() * 5
      });
    }
  }
}