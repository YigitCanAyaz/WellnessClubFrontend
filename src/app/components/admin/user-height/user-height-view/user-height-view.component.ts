import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserHeightDetail } from 'src/app/models/details/userHeightDetail';
import { UserHeightService } from 'src/app/services/user-height.service';

@Component({
  selector: 'app-user-height-view',
  templateUrl: './user-height-view.component.html',
  styleUrls: ['./user-height-view.component.css']
})
export class UserHeightViewComponent implements OnInit {

  userHeightDetail: UserHeightDetail;

  constructor(private userHeightService: UserHeightService, private activatedRoute: ActivatedRoute) { }

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
    })
  }

}
