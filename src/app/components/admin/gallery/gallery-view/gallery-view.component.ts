import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Gallery } from 'src/app/models/entities/gallery';
import { GalleryService } from 'src/app/services/gallery.service';

@Component({
  selector: 'app-gallery-view',
  templateUrl: './gallery-view.component.html',
  styleUrls: ['./gallery-view.component.css']
})
export class GalleryViewComponent implements OnInit {

  gallery: Gallery;

  constructor(private galleryService: GalleryService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["galleryId"]) {
        this.getGalleryById(params["galleryId"]);
      }
    });
  }

  getGalleryById(id: number): void {
    this.galleryService.getById(id).subscribe(response => {
      this.gallery = response.data;
    })
  }

}
