import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserWeight } from 'src/app/models/entities/userWeight';
import { UserWeightService } from 'src/app/services/user-weight.service';

@Component({
  selector: 'app-user-weight-remove',
  templateUrl: './user-weight-remove.component.html',
  styleUrls: ['./user-weight-remove.component.css']
})
export class UserWeightRemoveComponent implements OnInit {

  constructor(private userWeightService: UserWeightService, private activatedRoute: ActivatedRoute, private toastrService: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["userWeightId"]) {
        this.getUserWeightById(params["userWeightId"]);
      }
    });
  }

  getUserWeightById(id: number): void {
    this.userWeightService.getById(id).subscribe(response => {
      this.removeUserWeight(response.data);
    })
  }

  removeUserWeight(userWeight: UserWeight): void {
    this.userWeightService.delete(userWeight).subscribe(response => {
      this.toastrService.warning(response.message);
      this.router.navigate(['/admin/userweights/list']);
    });
  }

}
