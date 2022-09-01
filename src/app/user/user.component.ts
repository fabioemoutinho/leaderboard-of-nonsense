import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { from } from 'rxjs';
import { tap } from 'rxjs/operators';
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
  readonly user$ = this.userService.getUser().pipe(
    tap((user) => {
      this.fg.controls.description.setValue(user.description);
      this.fg.controls.displayName.setValue(user.displayName);
    })
  );

  constructor(private userService: UserService) {}

  onUpdate(id: string): void {
    from(
      this.userService.updateUser({
        id,
        description: this.fg.controls.description.value,
        displayName: this.fg.controls.displayName.value,
      })
    )
      .pipe(tap(() => console.log('success')))
      .subscribe();
  }
}
