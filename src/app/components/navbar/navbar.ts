import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface NavLink {
  href: string;
  label: string;
}

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class NavbarComponent {
  links: NavLink[] = [
    {href: '#service', label: 'Servicios'},
    {href: '#portfolio', label: 'Portfolio'},
    {href: '#testimonials', label: 'Testimonios'},
    {href: '#contact', label: 'Contacto'}
  ];
 }
