import { UserForInfoDetail } from './../../../../models/details/userForInfoDetail';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserWeightService } from 'src/app/services/user-weight.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-weight-add',
  templateUrl: './user-weight-add.component.html',
  styleUrls: ['./user-weight-add.component.css']
})
export class UserWeightAddComponent implements OnInit {

  userweightAddForm: FormGroup;
  users: UserForInfoDetail[] = [];

  constructor(private userWeightService: UserWeightService, private userService: UserService, private formBuilder: FormBuilder, private toastrService: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.createUserWeightAddForm();
    this.getAllUsers();
  }

  createUserWeightAddForm(): void {
    this.userweightAddForm = this.formBuilder.group({
      userId: ["", [Validators.required]],
      kilogram: ["", [Validators.required]]
    });
  }

  addUserWeight(): void {
    console.log(this.userweightAddForm.controls['userId'].value);
    console.log(this.userweightAddForm.value);
    if (this.userweightAddForm.valid) {
      this.userWeightService.add(this.userweightAddForm.value).subscribe(response => {
        this.toastrService.info(response.message);
        this.router.navigate(["/admin/userweights/list"]).then(() => {
          window.location.reload();
        });
      }, responseError => {
        this.toastrService.error(responseError.error);
      });
    }

    else {
      this.toastrService.error("Fill the form correctly");
    }
  }

  getAllUsers(): void {
    this.userService.getAll().subscribe(response => {
      this.users = response.data;
    })
  }

}
