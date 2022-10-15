import { GalleryService } from 'src/app/services/gallery.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { Gallery } from 'src/app/models/entities/gallery';

@Component({
  selector: 'app-gallery-update',
  templateUrl: './gallery-update.component.html',
  styleUrls: ['./gallery-update.component.css']
})
export class GalleryUpdateComponent implements OnInit {

  galleryUpdateForm: FormGroup;
  fileName: string = "";
  gallery: Gallery;

  constructor(private galleryService: GalleryService, private formBuilder: FormBuilder, private toastrService: ToastrService, private router: Router, private activatedRoute: ActivatedRoute) { }

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
      this.createGalleryUpdateForm();
    })
  }

  createGalleryUpdateForm(): void {
    this.galleryUpdateForm = this.formBuilder.group({
      id: [this.gallery ? this.gallery.id : "", []],
      imageName: [this.gallery ? this.gallery.imageName : "", [Validators.required]],
      file: [this.gallery ? this.gallery.imagePath : {}, [Validators.required]]
    });
  }

  updateGallery(): void {
    console.log(this.galleryUpdateForm.value);
    if (this.galleryUpdateForm.valid) {
      var formData: any = new FormData();
      formData.append("file", this.galleryUpdateForm.get('file')?.value);
      formData.append("id", this.galleryUpdateForm.get('id')?.value);
      formData.append("imageName", this.galleryUpdateForm.get('imageName')?.value);
      this.galleryService.update(formData).subscribe(response => {
        this.toastrService.info(response.message);
        this.router.navigate(["/admin/galleries/list"]).then(() => {
          window.location.reload();
        });
      }, responseError => {
        this.toastrService.error(responseError.error);
      });
    }

    else {
      this.toastrService.error("Fill the form correctly");
    }
  }

  onFileChange(gallery: any) {

    if (gallery.target.files.length > 0) {
      const file = gallery.target.files[0];
      console.log(file);
      this.galleryUpdateForm.patchValue({
        file: file
      });
      this.fileName = file.name;
    }
  }


}
