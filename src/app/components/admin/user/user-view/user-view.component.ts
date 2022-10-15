import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserForInfoDetail } from 'src/app/models/details/userForInfoDetail';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {

  user: UserForInfoDetail;

  constructor(private userService: UserService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["userId"]) {
        this.getUserById(params["userId"]);
      }
    });
  }

  getUserById(id: number): void {
    this.userService.getById(id).subscribe(response => {
      this.user = response.data;
    })
  }

}
