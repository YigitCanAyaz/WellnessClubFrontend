import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserWeightDetail } from 'src/app/models/details/userWeightDetail';
import { UserWeightService } from 'src/app/services/user-weight.service';

@Component({
  selector: 'app-user-weight-list',
  templateUrl: './user-weight-list.component.html',
  styleUrls: ['./user-weight-list.component.css']
})
export class UserWeightListComponent implements OnInit {

  userWeightDetails: UserWeightDetail[] = [];
  filterText: string = "";

  constructor(private userWeightService: UserWeightService, private router: Router) { }

  ngOnInit(): void {
    this.getAllUserWeightDetails();
  }

  getAllUserWeightDetails(): void {
    this.userWeightService.getAllUserWeightDetails().subscribe(response => {
      this.userWeightDetails = response.data;
    })
  }

  getUserWeightDetailViewById(userWeightId: number): void {
    this.router.navigate(["/admin/userweights/view/" + userWeightId]).then(() => {
      window.location.reload();
    });
  }

}
