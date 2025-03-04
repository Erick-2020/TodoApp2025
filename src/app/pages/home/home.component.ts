import { Component, signal } from '@angular/core';
import { Task } from '../../modules/task.module';
import { Validators, FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  tasks = signal<Task[]>([
      {
        id: Date.now(),
        title: 'Estudiar en Platzi',
        completed: false
      },
      {
        id: Date.now(),
        title: 'Estudiar en Duolingo',
        completed: false
      }
    ]);

    newTaskControl = new FormControl('', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.pattern(/^(?!\s*$).+/)
      ]
    });

    newTask() {
      if(this.newTaskControl.valid) {
        const value = this.newTaskControl.value;
      this.addTask(value);
      this.newTaskControl.setValue('');
      }
    }

    addTask(title: string) {
      //se agrega una nueva tarea a la lista de tareas
      const newTask = {
        id: Date.now(),
        title,
        completed: false
      };
      //se actualiza el valor de las tareas que ya estan en la lista, y se agrega la nueva tarea
      //mediante ...tasks se obtiene el valor actual de las tareas y se agrega la nueva tarea
      this.tasks.update((tasks) => [...tasks, newTask]);
    }

    uptateTask(index: number) {
      //se actualiza el estado de la tarea que se desea actualizar
      //se recibe el index de la tarea que se desea actualizar mediente el update con el array existente
      // y se mapea el array con la posicion y se pregunta si la posicion es igual al index
      this.tasks.update((tasks) => tasks.filter((task, position) => position !== index ? {...task, completed: !task.completed} : task));
      console.log(index);
    }

    deleyTask(index: number) {
      //se elimina la tarea que se desea eliminar
      //se recibe el index de la tarea que se desea eliminar mediente el update con el array existente
      // y se filtra el array con la posicion y se pregunte si la posicion es diferente al index
      this.tasks.update((tasks) => tasks.filter((task, position) => position !== index));
    }

}
// Removed incorrect FormControl function definition

