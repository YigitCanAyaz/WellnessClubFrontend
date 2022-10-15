import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Gallery } from 'src/app/models/entities/gallery';
import { GalleryService } from 'src/app/services/gallery.service';

@Component({
  selector: 'app-gallery-list',
  templateUrl: './gallery-list.component.html',
  styleUrls: ['./gallery-list.component.css']
})
export class GalleryListComponent implements OnInit {

  galleries: Gallery[] = [];
  filterText: string = "";

  constructor(private galleryService: GalleryService, private router: Router) { }

  ngOnInit(): void {
    this.getAllGalleries();
  }

  getAllGalleries(): void {
    this.galleryService.getAll().subscribe(response => {
      this.galleries = response.data;
    })
  }

  getGalleryViewById(galleryId: number): void {
    this.router.navigate(["/admin/galleries/view/" + galleryId]).then(() => {
      window.location.reload();
    });
  }

}
