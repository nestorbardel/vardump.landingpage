import {Component, signal, WritableSignal} from '@angular/core';
import {Cloud, Code, LucideAngularModule, LucideIconData, Palette, Smartphone} from 'lucide-angular';

interface Service {
  icon: LucideIconData;
  title: string;
  description: string;
}

@Component({
  selector: 'app-services',
  imports: [
    LucideAngularModule
  ],
  templateUrl: './services.html',
  styleUrl: './services.scss'
})
export class Services {
  services: WritableSignal<Service[]> = signal([
    {
      icon: Code,
      title: 'Desarrollo Web',
      description: 'Sitios y aplicaciones modernas, rápidas y seguras.'
    },
    {
      icon: Smartphone,
      title: 'Apps Móviles',
      description: 'Experiencias nativas y multiplataforma con gran rendimiento.'
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      description: 'Infraestructura escalable, CI/CD y despliegues automatizados.'
    },
    {
      icon: Palette,
      title: 'Diseño UI/UX',
      description: 'Interfaces elegantes y funcionales con foco en el usuario.'
    }
  ]);
}
