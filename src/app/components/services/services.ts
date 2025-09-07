import {Component, signal, WritableSignal} from '@angular/core';

interface Service {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-services',
  imports: [],
  templateUrl: './services.html',
  styleUrl: './services.scss'
})
export class Services {
  services: WritableSignal<Service[]> = signal([
    { icon: '💻', title: 'Desarrollo Web', description: 'Sitios y aplicaciones modernas, rápidas y seguras.' },
    { icon: '📱', title: 'Apps Móviles', description: 'Experiencias nativas y multiplataforma con gran rendimiento.' },
    { icon: '☁️', title: 'Cloud & DevOps', description: 'Infraestructura escalable, CI/CD y despliegues automatizados.' },
    { icon: '🎨', title: 'Diseño UI/UX', description: 'Interfaces elegantes y funcionales con foco en el usuario.' },
  ]);
}
