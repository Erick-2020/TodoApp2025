import { Component } from '@angular/core';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-no-found',
  imports: [],
  templateUrl: './no-found.component.html',
  styleUrl: './no-found.component.scss'
})
export class NoFoundComponent {
  inicio = Swal.fire('404!', 'No encontramos lo que buscas', 'error');

}
