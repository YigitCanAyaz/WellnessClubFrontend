import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserHeightDetail } from 'src/app/models/details/userHeightDetail';
import { UserHeightService } from 'src/app/services/user-height.service';

@Component({
  selector: 'app-user-height-list',
  templateUrl: './user-height-list.component.html',
  styleUrls: ['./user-height-list.component.css']
})
export class UserHeightListComponent implements OnInit {

  userHeightDetails: UserHeightDetail[] = [];
  filterText: string = "";

  constructor(private userHeightService: UserHeightService, private router: Router) { }

  ngOnInit(): void {
    this.getAllUserHeightDetails();
  }

  getAllUserHeightDetails(): void {
    this.userHeightService.getAllUserHeightDetails().subscribe(response => {
      this.userHeightDetails = response.data;
    })
  }

  getUserHeightDetailViewById(userHeightId: number): void {
    this.router.navigate(["/admin/userheights/view/" + userHeightId]);
  }

}
