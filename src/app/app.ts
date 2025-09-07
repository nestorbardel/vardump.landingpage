import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar";
import {Hero} from './components/hero/hero';
import {Services} from './components/services/services';
import {ContactForm} from './components/contact-form/contact-form';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, Hero, Services, ContactForm],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'var-dump-landing';
}
