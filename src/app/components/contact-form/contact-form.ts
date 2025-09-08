import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import {Component, inject, signal, WritableSignal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import { firstValueFrom } from 'rxjs';
interface Feedback {
  type: 'success' | 'error';
  text: string;
}
@Component({
  selector: 'app-contact-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.scss'
})
export class ContactForm {
  http = inject(HttpClient);
  name: WritableSignal<string> = signal('');
  email: WritableSignal<string> = signal('');
  message: WritableSignal<string> = signal('');
  submitted: WritableSignal<boolean> = signal(false);
  feedback: WritableSignal<Feedback | null> = signal(null);

  onInputChangeName(event: Event){
    const target = event.target as HTMLInputElement;
    const value = target.value;
    this.name.set(value);
  }
  onInputChangeEmail(event: Event){
    const target = event.target as HTMLInputElement;
    const value = target.value;
    this.email.set(value);
  }
 onInputChangeMessage(event: Event){
    const target = event.target as HTMLInputElement;
    const value = target.value;
    this.message.set(value);
  }

  async onSubmit(){
if (!this.name() || !this.email() || !this.message()) {
      this.feedback.update(() => ({
        type: 'error',
        text: 'Por favor, completa todos los campos.'
      }));
      return;
    }
      this.submitted.set(true);
    try {
      await firstValueFrom(this.http.post('http://localhost:3000/send-email', {
        to: "nestorbardel@gmail.com",
        subject: "New message from contact form",
        body:`
        Name: ${this.name()}
        Email: ${this.email()}
        Message: ${this.message()}
        `,
    }));
    this.feedback.update(() => ({
        type: 'success',
        text: `Gracias ${this.name()}, tu mensaje fue enviado.`
      }));
      this.name.set('');
      this.email.set('');
      this.message.set('');
      this.submitted.set(false);
    } catch (error) {
      console.log(error);

    }


  }
}
