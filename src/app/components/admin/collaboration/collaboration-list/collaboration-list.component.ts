import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Collaboration } from 'src/app/models/entities/collaboration';
import { CollaborationService } from 'src/app/services/collaboration.service';

@Component({
  selector: 'app-collaboration-list',
  templateUrl: './collaboration-list.component.html',
  styleUrls: ['./collaboration-list.component.css']
})
export class CollaborationListComponent implements OnInit {

  collaborations: Collaboration[] = [];
  filterText: string = "";

  constructor(private collaborationService: CollaborationService, private router: Router) { }

  ngOnInit(): void {
    this.getAllCollaborations();
  }

  getAllCollaborations(): void {
    this.collaborationService.getAll().subscribe(response => {
      this.collaborations = response.data;
    })
  }

  getCollaborationViewById(collaborationId: number): void {
    this.router.navigate(["/admin/collaborations/view/" + collaborationId]).then(() => {
      window.location.reload();
    });
  }

}
