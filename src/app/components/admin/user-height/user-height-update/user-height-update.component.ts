import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserForInfoDetail } from 'src/app/models/details/userForInfoDetail';
import { UserHeightDetail } from 'src/app/models/details/userHeightDetail';
import { UserHeightService } from 'src/app/services/user-height.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-height-update',
  templateUrl: './user-height-update.component.html',
  styleUrls: ['./user-height-update.component.css']
})
export class UserHeightUpdateComponent implements OnInit {

  userHeightUpdateForm: FormGroup;
  users: UserForInfoDetail[] = [];
  userHeightDetail: UserHeightDetail;

  constructor(private userHeightService: UserHeightService, private userService: UserService, private formBuilder: FormBuilder, private toastrService: ToastrService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["userHeightId"]) {
        this.getUserHeightDetailsById(params["userHeightId"]);
      }
    });
  }

  getUserHeightDetailsById(id: number): void {
    this.userHeightService.getUserHeightDetailsById(id).subscribe(response => {
      this.userHeightDetail = response.data;
      this.getAllUsers();
    })
  }

  createUserHeightUpdateForm(): void {
    this.userHeightUpdateForm = this.formBuilder.group({
      id: [this.userHeightDetail ? this.userHeightDetail.id : "", []],
      userId: [this.userHeightDetail ? this.userHeightDetail.userId : "", [Validators.required]],
      meter: [this.userHeightDetail ? this.userHeightDetail.meter : "", [Validators.required]]
    });
  }

  updateUserHeight(): void {
    console.log(this.userHeightUpdateForm.value);
    if (this.userHeightUpdateForm.valid) {
      this.userHeightService.update(this.userHeightUpdateForm.value).subscribe(response => {
        this.toastrService.info(response.message);
        this.router.navigate(["/admin/userheights/list"]);
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
      this.createUserHeightUpdateForm();
    })
  }

}
