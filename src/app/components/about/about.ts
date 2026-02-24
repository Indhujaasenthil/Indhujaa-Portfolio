import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { aboutMe } from '../../data/portfolio.data';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrls: ['./about.scss']
})
export class AboutComponent {
  aboutMe = aboutMe;
}