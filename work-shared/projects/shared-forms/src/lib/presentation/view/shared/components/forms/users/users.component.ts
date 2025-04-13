import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'lib-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {
  @Input() formulario: FormGroup = new FormGroup({});

  cuspir() {
    console.log('this = ', this);
  }
}
