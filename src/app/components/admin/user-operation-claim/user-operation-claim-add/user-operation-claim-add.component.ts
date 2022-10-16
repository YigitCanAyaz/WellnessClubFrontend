import { UserForInfoDetail } from './../../../../models/details/userForInfoDetail';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { OperationClaim } from 'src/app/models/entities/operationClaim';
import { OperationClaimService } from 'src/app/services/operation-claim.service';
import { UserOperationClaimService } from 'src/app/services/user-operation-claim.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-operation-claim-add',
  templateUrl: './user-operation-claim-add.component.html',
  styleUrls: ['./user-operation-claim-add.component.css']
})
export class UserOperationClaimAddComponent implements OnInit {

  userOperationClaimAddForm: FormGroup;
  users: UserForInfoDetail[] = [];
  operationClaims: OperationClaim[] = [];

  constructor(private userOperationClaimService: UserOperationClaimService, private userService: UserService, private operationClaimService: OperationClaimService, private formBuilder: FormBuilder, private toastrService: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.createUserOperationClaimAddForm();
    this.getAllUsers();
    this.getAllOperationClaims();
  }

  createUserOperationClaimAddForm(): void {
    this.userOperationClaimAddForm = this.formBuilder.group({
      userId: ["", [Validators.required]],
      operationClaimId: ["", [Validators.required]]
    });
  }

  addUserOperationClaim(): void {
    console.log(this.userOperationClaimAddForm.value);
    if (this.userOperationClaimAddForm.valid) {
      this.userOperationClaimService.add(this.userOperationClaimAddForm.value).subscribe(response => {
        this.toastrService.info(response.message);
        this.router.navigate(["/admin/useroperationclaims/list"]);
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

  getAllOperationClaims(): void {
    this.operationClaimService.getAll().subscribe(response => {
      this.operationClaims = response.data;
    })
  }

}
