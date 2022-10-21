import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserForInfoDetail } from 'src/app/models/details/userForInfoDetail';
import { UserWeightDetail } from 'src/app/models/details/userWeightDetail';
import { UserWeightService } from 'src/app/services/user-weight.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-weight-update',
  templateUrl: './user-weight-update.component.html',
  styleUrls: ['./user-weight-update.component.css']
})
export class UserWeightUpdateComponent implements OnInit {

  userWeightUpdateForm: FormGroup;
  users: UserForInfoDetail[] = [];
  userWeightDetail: UserWeightDetail;

  constructor(private userWeightService: UserWeightService, private userService: UserService, private formBuilder: FormBuilder, private toastrService: ToastrService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["userWeightId"]) {
        this.getUserWeightDetailsById(params["userWeightId"]);
      }
    });
  }

  getUserWeightDetailsById(id: number): void {
    this.userWeightService.getUserWeightDetailsById(id).subscribe(response => {
      this.userWeightDetail = response.data;
      this.getAllUsers();
    })
  }

  createUserWeightUpdateForm(): void {
    this.userWeightUpdateForm = this.formBuilder.group({
      id: [this.userWeightDetail ? this.userWeightDetail.id : "", []],
      userId: [this.userWeightDetail ? this.userWeightDetail.userId : "", [Validators.required]],
      kilogram: [this.userWeightDetail ? this.userWeightDetail.kilogram : "", [Validators.required]]
    });
  }

  updateUserWeight(): void {
    console.log(this.userWeightUpdateForm.value);
    if (this.userWeightUpdateForm.valid) {
      this.userWeightService.update(this.userWeightUpdateForm.value).subscribe(response => {
        this.toastrService.info(response.message);
        this.router.navigate(["/admin/userweights/list"]);
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
      this.createUserWeightUpdateForm();
    })
  }

}
