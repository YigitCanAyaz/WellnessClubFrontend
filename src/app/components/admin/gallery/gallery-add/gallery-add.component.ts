import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { GalleryService } from 'src/app/services/gallery.service';

@Component({
  selector: 'app-gallery-add',
  templateUrl: './gallery-add.component.html',
  styleUrls: ['./gallery-add.component.css']
})
export class GalleryAddComponent implements OnInit {

  galleryAddForm: FormGroup;
  fileName: string = "";

  constructor(private galleryService: GalleryService,  private formBuilder: FormBuilder, private toastrService: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.createGalleryAddForm();
  }

  createGalleryAddForm(): void {
    this.galleryAddForm = this.formBuilder.group({
      imageName: ["", [Validators.required]],
      file: ["", [Validators.required]],
    });
  }

  addGallery(): void {
    console.log(this.galleryAddForm.value);
    if (this.galleryAddForm.valid) {
      var formData: any = new FormData();
      formData.append("file", this.galleryAddForm.get('file')?.value);
      formData.append("imageName", this.galleryAddForm.get('imageName')?.value);
      this.galleryService.add(formData).subscribe(response => {
        this.toastrService.info(response.message);
        this.router.navigate(["/admin/galleries/list"]);
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
      this.galleryAddForm.patchValue({
        file: file
      });
      this.fileName = file.name;
    }
  }

}
