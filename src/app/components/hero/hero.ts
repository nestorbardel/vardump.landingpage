import {Component, HostBinding, OnDestroy, OnInit, signal, WritableSignal} from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-hero',
  providers: [],
  imports: [ CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class Hero implements OnInit, OnDestroy{
  showProduct: WritableSignal<boolean> = signal(true);
  private intervalId?: number;

  ngOnInit() {
    this.intervalId = window.setInterval(() => {
      this.showProduct.update(value => !value);
    }, 6000);
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}
