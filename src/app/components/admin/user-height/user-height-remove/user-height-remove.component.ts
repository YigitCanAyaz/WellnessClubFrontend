import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserHeight } from 'src/app/models/entities/userHeight';
import { UserHeightService } from 'src/app/services/user-height.service';

@Component({
  selector: 'app-user-height-remove',
  templateUrl: './user-height-remove.component.html',
  styleUrls: ['./user-height-remove.component.css']
})
export class UserHeightRemoveComponent implements OnInit {

  constructor(private userHeightService: UserHeightService, private activatedRoute: ActivatedRoute, private toastrService: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["userHeightId"]) {
        this.getUserHeightById(params["userHeightId"]);
      }
    });
  }

  getUserHeightById(id: number): void {
    this.userHeightService.getById(id).subscribe(response => {
      this.removeUserHeight(response.data);
    })
  }

  removeUserHeight(userHeight: UserHeight): void {
    this.userHeightService.delete(userHeight).subscribe(response => {
      this.toastrService.warning(response.message);
      this.router.navigate(['/admin/userheights/list']).then(() => {
        window.location.reload();
      });
    });
  }

}
