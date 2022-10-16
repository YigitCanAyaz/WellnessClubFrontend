import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OperationClaim } from 'src/app/models/entities/operationClaim';
import { OperationClaimService } from 'src/app/services/operation-claim.service';

@Component({
  selector: 'app-operation-claim-view',
  templateUrl: './operation-claim-view.component.html',
  styleUrls: ['./operation-claim-view.component.css']
})
export class OperationClaimViewComponent implements OnInit {

  operationClaim: OperationClaim;

  constructor(private operationClaimService: OperationClaimService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["operationClaimId"]) {
        this.getOperationClaimById(params["operationClaimId"]);
      }
    });
  }

  getOperationClaimById(id: number): void {
    this.operationClaimService.getById(id).subscribe(response => {
      this.operationClaim = response.data;
    })
  }

}
