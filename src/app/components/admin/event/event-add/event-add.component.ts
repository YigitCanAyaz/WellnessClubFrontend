import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-event-add',
  templateUrl: './event-add.component.html',
  styleUrls: ['./event-add.component.css']
})
export class EventAddComponent implements OnInit {

  eventAddForm: FormGroup;
  fileName: string = "";

  constructor(private eventService: EventService,  private formBuilder: FormBuilder, private toastrService: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.createEventAddForm();
  }

  createEventAddForm(): void {
    this.eventAddForm = this.formBuilder.group({
      title: ["", [Validators.required]],
      description: ["", [Validators.required]],
      date: ["", [Validators.required]],
      file: ["", [Validators.required]]
    });
  }

  addEvent(): void {
    console.log(this.eventAddForm.value);
    if (this.eventAddForm.valid) {
      var formData: any = new FormData();
      formData.append("file", this.eventAddForm.get('file')?.value);
      formData.append("title", this.eventAddForm.get('title')?.value);
      formData.append("description", this.eventAddForm.get('description')?.value);
      formData.append("date", this.eventAddForm.get('date')?.value);
      this.eventService.add(formData).subscribe(response => {
        this.toastrService.info(response.message);
        this.router.navigate(["/admin/events/list"]).then(() => {
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

  onFileChange(event: any) {

    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      console.log(file);
      this.eventAddForm.patchValue({
        file: file
      });
      this.fileName = file.name;
    }
  }

}
