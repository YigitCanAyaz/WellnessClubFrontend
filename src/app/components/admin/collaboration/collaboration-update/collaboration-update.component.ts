import { CollaborationService } from 'src/app/services/collaboration.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { Collaboration } from 'src/app/models/entities/collaboration';

@Component({
  selector: 'app-collaboration-update',
  templateUrl: './collaboration-update.component.html',
  styleUrls: ['./collaboration-update.component.css']
})
export class CollaborationUpdateComponent implements OnInit {

  collaborationUpdateForm: FormGroup;
  fileName: string = "";
  collaboration: Collaboration;

  constructor(private collaborationService: CollaborationService, private formBuilder: FormBuilder, private toastrService: ToastrService, private router: Router, private activatedRoute: ActivatedRoute) { }

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
      this.createCollaborationUpdateForm();
    })
  }

  createCollaborationUpdateForm(): void {
    this.collaborationUpdateForm = this.formBuilder.group({
      id: [this.collaboration ? this.collaboration.id : "", []],
      title: [this.collaboration ? this.collaboration.title : "", [Validators.required]],
      description: [this.collaboration ? this.collaboration.description : "", [Validators.required]],
      file: [this.collaboration ? this.collaboration.imagePath : {}, [Validators.required]]
    });
  }

  updateCollaboration(): void {
    console.log(this.collaborationUpdateForm.value);
    if (this.collaborationUpdateForm.valid) {
      var formData: any = new FormData();
      formData.append("file", this.collaborationUpdateForm.get('file')?.value);
      formData.append("id", this.collaborationUpdateForm.get('id')?.value);
      formData.append("title", this.collaborationUpdateForm.get('title')?.value);
      formData.append("description", this.collaborationUpdateForm.get('description')?.value);
      this.collaborationService.update(formData).subscribe(response => {
        this.toastrService.info(response.message);
        this.router.navigate(["/admin/collaborations/list"]);
      }, responseError => {
        this.toastrService.error(responseError.error);
      });
    }

    else {
      this.toastrService.error("Fill the form correctly");
    }
  }

  onFileChange(collaboration: any) {

    if (collaboration.target.files.length > 0) {
      const file = collaboration.target.files[0];
      console.log(file);
      this.collaborationUpdateForm.patchValue({
        file: file
      });
      this.fileName = file.name;
    }
  }


}
