import { EventService } from 'src/app/services/event.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { Event } from 'src/app/models/entities/event';

@Component({
  selector: 'app-event-update',
  templateUrl: './event-update.component.html',
  styleUrls: ['./event-update.component.css']
})
export class EventUpdateComponent implements OnInit {

  eventUpdateForm: FormGroup;
  fileName: string = "";
  event: Event;

  constructor(private eventService: EventService, private formBuilder: FormBuilder, private toastrService: ToastrService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["eventId"]) {
        this.getEventById(params["eventId"]);
      }
    });
  }

  getEventById(id: number): void {
    this.eventService.getById(id).subscribe(response => {
      this.event = response.data;
      this.createEventUpdateForm();
    })
  }

  createEventUpdateForm(): void {
    this.eventUpdateForm = this.formBuilder.group({
      id: [this.event ? this.event.id : "", []],
      title: [this.event ? this.event.title : "", [Validators.required]],
      description: [this.event ? this.event.description : "", [Validators.required]],
      date: [this.event ? this.event.date : "", [Validators.required]],
      file: [this.event ? this.event.imagePath : {}, [Validators.required]]
    });
  }

  updateEvent(): void {
    console.log(this.eventUpdateForm.value);
    if (this.eventUpdateForm.valid) {
      var formData: any = new FormData();
      formData.append("file", this.eventUpdateForm.get('file')?.value);
      formData.append("id", this.eventUpdateForm.get('id')?.value);
      formData.append("title", this.eventUpdateForm.get('title')?.value);
      formData.append("description", this.eventUpdateForm.get('description')?.value);
      formData.append("date", this.eventUpdateForm.get('date')?.value);
      this.eventService.update(formData).subscribe(response => {
        this.toastrService.info(response.message);
        this.router.navigate(["/admin/events/list"]);
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
      this.eventUpdateForm.patchValue({
        file: file
      });
      this.fileName = file.name;
    }
  }


}
