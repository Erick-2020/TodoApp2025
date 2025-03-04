import { Component, signal } from '@angular/core';
import { SIGNAL } from '@angular/core/primitives/signals';
import Swal from 'sweetalert2';
import {FormControl, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-labs',
  imports: [ReactiveFormsModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.scss'
})
export class LabsComponent {
  title = 'Todo App';
  myName = signal('Erick');
  tasks = signal([
    "Instalar angular",
    "Crear proyecto",
    "Crear componente",
    "Crear servicio",
  ])

  //property binding
  imgAngular = 'https://media.licdn.com/dms/image/D4E12AQGx_XxlH8rHLw/article-cover_image-shrink_600_2000/0/1699328092463?e=2147483647&v=beta&t=ZZi_XzY235cTKt324objag2rEP0wyrQDB2XCHUNW3cA';

  //objetos
  person = {
    name: 'Erick',
    age: 22,
    avatar: 'https://avatars0.githubusercontent.com/u/22588967?s=460&v=4'
  }

  //event bindind
  showAlert(){
    Swal.fire('Hello world!', 'This is a sweet alert', 'info')
  };


  //keydown
  keydownEvent(event: KeyboardEvent){
  const input = event.target as HTMLInputElement;
  console.log(input.value);
  }

  // SIGNALS -> reactividad granular en angular, ya no se recorre todo el arbol del DOM
  // para saber que cambio, solo se actualiza el componente que cambio y el directamente ya sabe que cambio
  // y se actualiza esa vista

  // const myName = signal('Erick');
  // console.log(myName());

  changeSignal(event:Event){
    const input = event.target as HTMLInputElement;
    const newName = input.value;
    this.myName.set(newName);
  }

  //Formularios reactivos
  colorControl = new FormControl('');

  constructor(){
    //Nos subscribimos para estar pendientes del cambio del color
    this.colorControl.valueChanges.subscribe(color => {
      console.log(color);
    })
  }




}
