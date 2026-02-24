import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { experiences } from '../../data/portfolio.data';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.html',
  styleUrls: ['./experience.scss']
})
export class ExperienceComponent {
  experiences = experiences;
}