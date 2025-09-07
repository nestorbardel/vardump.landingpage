import { Component } from '@angular/core';
import { NavbarComponent } from "./components/navbar/navbar";
import {Hero} from './components/hero/hero';
import {Services} from './components/services/services';
import {ContactForm} from './components/contact-form/contact-form';
import {Footer} from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, Hero, Services, ContactForm, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'var-dump-landing';
}
