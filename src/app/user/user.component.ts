import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UserService } from './user.service';
type UpdateProfile = {
  displayName: FormControl<string>;
  description: FormControl<string>;
};

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  fg: FormGroup<UpdateProfile> = new FormGroup({
    description: new FormControl('', { nonNullable: true }),
    displayName: new FormControl('', { nonNullable: true }),
  });
  readonly user$ = this.userService.getUser();

  constructor(private userService: UserService) {}

  onUpdate(id: string): void {
    this.userService.updateUser({
      id,
      description: this.fg.controls.description.value,
      displayName: this.fg.controls.displayName.value,
    });
  }
}
