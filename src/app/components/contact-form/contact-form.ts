import {Component, signal, WritableSignal} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  imports: [FormsModule],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.scss'
})
export class ContactForm {
  name: WritableSignal<string> = signal('');
  email: WritableSignal<string> = signal('');
  message: WritableSignal<string> = signal('');
  submitted: WritableSignal<boolean> = signal(false);

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

  onSubmit(){
    if(!this.name() || !this.email() || !this.message() ) return;
    this.submitted.set(true);

    console.log('Formulario enviado: ', {
      name: this.name(),
      email: this.email(),
      message: this.message()
    })
  }
}
