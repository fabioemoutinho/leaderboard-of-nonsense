import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
type UpdateProfile = { displayName:FormControl<string>, description:FormControl<string> }

@Component({
  selector: 'app-user',
  standalone:true,
  imports:[ReactiveFormsModule],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  fg:FormGroup<UpdateProfile> = new FormGroup({
    description:new FormControl('',{nonNullable:true}),
    displayName:new FormControl('',{nonNullable:true})
  })

  onUpdate(){
    console.log()
  }

}
