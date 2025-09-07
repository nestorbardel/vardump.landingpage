import { Component } from '@angular/core';
import {LucideAngularModule} from 'lucide-angular';
import { SiGithubIcon } from '@semantic-icons/simple-icons';

@Component({
  selector: 'app-footer',
  imports: [
    LucideAngularModule,
    SiGithubIcon,
  ],
  templateUrl: './footer.html',
  styleUrl: './footer.scss'
})
export class Footer {
  year = new Date().getFullYear();
}
