import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar";
import {Hero} from './components/hero/hero/hero';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, Hero],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'var-dump-landing';
}
