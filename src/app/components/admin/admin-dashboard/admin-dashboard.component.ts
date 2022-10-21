import { UserHeightService } from 'src/app/services/user-height.service';
import { RecipeService } from 'src/app/services/recipe.service';
import { CollaborationService } from 'src/app/services/collaboration.service';
import { GalleryService } from 'src/app/services/gallery.service';
import { EventService } from 'src/app/services/event.service';
import { Component, OnInit } from '@angular/core';
import { UserWeightService } from 'src/app/services/user-weight.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  eventLength: number;
  galleryLength: number;
  collaborationLength: number;
  recipeLength: number;
  userHeightLength: number;
  userWeightLength: number;

  constructor(private eventService: EventService, private galleryService: GalleryService, private collaborationService: CollaborationService,
    private recipeService: RecipeService, private userHeightService: UserHeightService, private userWeightService: UserWeightService) { }

  ngOnInit(): void {
    this.getAllEventLength();
    this.getAllGalleryLength();
    this.getAllCollaborationLength();
    this.getAllRecipeLength();
    this.getAllUserHeightLength();
    this.getAllUserWeightLength();
  }

  getAllEventLength(): void {
    this.eventService.getAllEventLength().subscribe(response => {
      this.eventLength = response.data;
    })
  }

  getAllGalleryLength(): void {
    this.galleryService.getAllGalleryLength().subscribe(response => {
      this.galleryLength = response.data;
    })
  }

  getAllCollaborationLength(): void {
    this.collaborationService.getAllCollaborationLength().subscribe(response => {
      this.collaborationLength = response.data;
    })
  }

  getAllRecipeLength(): void {
    this.recipeService.getAllRecipeLength().subscribe(response => {
      this.recipeLength = response.data;
    })
  }

  getAllUserHeightLength(): void {
    this.userHeightService.getAllUserHeightLength().subscribe(response => {
      this.userHeightLength = response.data;
    })
  }

  getAllUserWeightLength(): void {
    this.userWeightService.getAllUserWeightLength().subscribe(response => {
      this.userWeightLength = response.data;
    })
  }
}
