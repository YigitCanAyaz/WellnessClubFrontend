import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Collaboration } from 'src/app/models/entities/collaboration';
import { CollaborationService } from 'src/app/services/collaboration.service';

@Component({
  selector: 'app-collaboration-remove',
  templateUrl: './collaboration-remove.component.html',
  styleUrls: ['./collaboration-remove.component.css']
})
export class CollaborationRemoveComponent implements OnInit {

  constructor(private collaborationService: CollaborationService, private activatedRoute: ActivatedRoute, private toastrService: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["collaborationId"]) {
        this.getCollaborationById(params["collaborationId"]);
      }
    });
  }

  getCollaborationById(id: number): void {
    this.collaborationService.getById(id).subscribe(response => {
      this.removeCollaboration(response.data);
    })
  }

  removeCollaboration(collaboration: Collaboration): void {
    this.collaborationService.delete(collaboration).subscribe(response => {
      this.toastrService.warning(response.message);
      this.router.navigate(['/admin/collaborations/list']).then(() => {
        window.location.reload();
      });
    });
  }
}
