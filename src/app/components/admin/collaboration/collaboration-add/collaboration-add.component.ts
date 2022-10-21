import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CollaborationService } from 'src/app/services/collaboration.service';

@Component({
  selector: 'app-collaboration-add',
  templateUrl: './collaboration-add.component.html',
  styleUrls: ['./collaboration-add.component.css']
})
export class CollaborationAddComponent implements OnInit {

  collaborationAddForm: FormGroup;
  fileName: string = "";

  constructor(private collaborationService: CollaborationService,  private formBuilder: FormBuilder, private toastrService: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.createCollaborationAddForm();
  }

  createCollaborationAddForm(): void {
    this.collaborationAddForm = this.formBuilder.group({
      title: ["", [Validators.required]],
      description: ["", [Validators.required]],
      file: ["", [Validators.required]]
    });
  }

  addCollaboration(): void {
    console.log(this.collaborationAddForm.value);
    if (this.collaborationAddForm.valid) {
      var formData: any = new FormData();
      formData.append("file", this.collaborationAddForm.get('file')?.value);
      formData.append("title", this.collaborationAddForm.get('title')?.value);
      formData.append("description", this.collaborationAddForm.get('description')?.value);
      this.collaborationService.add(formData).subscribe(response => {
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
      this.collaborationAddForm.patchValue({
        file: file
      });
      this.fileName = file.name;
    }
  }

}
