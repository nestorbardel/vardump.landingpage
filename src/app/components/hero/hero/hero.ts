import { Component, HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common';
import {trigger, style, animate, transition} from '@angular/animations';
import { provideAnimations } from '@angular/platform-browser/animations';


@Component({
  selector: 'app-hero',
  providers: [],
  imports: [ CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
  animations:[
    trigger('fadeInUp', [
      transition(':enter', [
        style({opacity: 0, transform: 'translateY(24px)'}),
        animate('650ms 80ms ease-out', style({opacity: 1, transform: 'translateY(0)'}))
      ])
    ])
  ]
})
export class Hero {
}
