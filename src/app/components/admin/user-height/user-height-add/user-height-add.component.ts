import { UserForInfoDetail } from './../../../../models/details/userForInfoDetail';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserHeightService } from 'src/app/services/user-height.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-height-add',
  templateUrl: './user-height-add.component.html',
  styleUrls: ['./user-height-add.component.css']
})
export class UserHeightAddComponent implements OnInit {

  userheightAddForm: FormGroup;
  users: UserForInfoDetail[] = [];

  constructor(private userHeightService: UserHeightService, private userService: UserService, private formBuilder: FormBuilder, private toastrService: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.createUserHeightAddForm();
    this.getAllUsers();
  }

  createUserHeightAddForm(): void {
    this.userheightAddForm = this.formBuilder.group({
      userId: ["", [Validators.required]],
      meter: ["", [Validators.required]]
    });
  }

  addUserHeight(): void {
    console.log(this.userheightAddForm.controls['userId'].value);
    console.log(this.userheightAddForm.value);
    if (this.userheightAddForm.valid) {
      this.userHeightService.add(this.userheightAddForm.value).subscribe(response => {
        this.toastrService.info(response.message);
        this.router.navigate(["/admin/userheights/list"]).then(() => {
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
