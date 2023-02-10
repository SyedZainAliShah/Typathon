import { Component } from '@angular/core';
import { lorem } from 'faker';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {


  st = false;
  randomText = '';
  enteredText = '';

  start(){
    this.st = true;
    this.randomTextGenerator()
  }

  onInput(event: Event) {
    console.log((event.target as HTMLInputElement).value);
    this.enteredText = (event.target as HTMLInputElement).value;
  }
  clear(){
    this.enteredText = '';
  }

  randomTextGenerator(){
    this.randomText = lorem.paragraph();
    console.log(this.enteredText);
    this.clear();
    return this.randomText;
  }

  compare(randomLetter: string, enteredLetter: string) {
    if (!enteredLetter) {
      return 'pending';
    }
    return randomLetter === enteredLetter ? 'correct' : 'incorrect';
  }
}
