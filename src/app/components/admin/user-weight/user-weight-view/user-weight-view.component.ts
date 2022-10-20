import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserWeightDetail } from 'src/app/models/details/userWeightDetail';
import { UserWeightService } from 'src/app/services/user-weight.service';

@Component({
  selector: 'app-user-weight-view',
  templateUrl: './user-weight-view.component.html',
  styleUrls: ['./user-weight-view.component.css']
})
export class UserWeightViewComponent implements OnInit {

  userWeightDetail: UserWeightDetail;

  constructor(private userWeightService: UserWeightService, private activatedRoute: ActivatedRoute) { }

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
    })
  }

}
