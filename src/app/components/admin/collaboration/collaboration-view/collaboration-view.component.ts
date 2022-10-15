import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Collaboration } from 'src/app/models/entities/collaboration';
import { CollaborationService } from 'src/app/services/collaboration.service';

@Component({
  selector: 'app-collaboration-view',
  templateUrl: './collaboration-view.component.html',
  styleUrls: ['./collaboration-view.component.css']
})
export class CollaborationViewComponent implements OnInit {

  collaboration: Collaboration;

  constructor(private collaborationService: CollaborationService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["collaborationId"]) {
        this.getCollaborationById(params["collaborationId"]);
      }
    });
  }

  getCollaborationById(id: number): void {
    this.collaborationService.getById(id).subscribe(response => {
      this.collaboration = response.data;
    })
  }

}
