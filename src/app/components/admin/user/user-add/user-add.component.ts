import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  userAddForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private toastrService: ToastrService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.createUserAddForm();
  }

  createUserAddForm(): void {
    this.userAddForm = this.formBuilder.group({
      firstName: ["", [Validators.required]],
      lastName: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(5)]],
    });
  }

  addUser(): void {
    if (this.userAddForm.valid) {
      this.authService.register(this.userAddForm.value).subscribe(response => {
        this.toastrService.info("Başarıyla kullanıcı oluşturuldu");
        this.router.navigate(["/admin/users/list"]);
      }, responseError => {
        this.toastrService.error(responseError.error);
      });
    }
  }

}
