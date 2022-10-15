import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Gallery } from 'src/app/models/entities/gallery';
import { GalleryService } from 'src/app/services/gallery.service';

@Component({
  selector: 'app-gallery-remove',
  templateUrl: './gallery-remove.component.html',
  styleUrls: ['./gallery-remove.component.css']
})
export class GalleryRemoveComponent implements OnInit {

  constructor(private galleryService: GalleryService, private activatedRoute: ActivatedRoute, private toastrService: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["galleryId"]) {
        this.getGalleryById(params["galleryId"]);
      }
    });
  }

  getGalleryById(id: number): void {
    this.galleryService.getById(id).subscribe(response => {
      this.removeGallery(response.data);
    })
  }

  removeGallery(gallery: Gallery): void {
    this.galleryService.delete(gallery).subscribe(response => {
      this.toastrService.warning(response.message);
      this.router.navigate(['/admin/galleries/list']).then(() => {
        window.location.reload();
      });
    });
  }
}
