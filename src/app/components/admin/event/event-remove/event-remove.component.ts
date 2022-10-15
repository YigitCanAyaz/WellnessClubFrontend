import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Event } from 'src/app/models/entities/event';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-event-remove',
  templateUrl: './event-remove.component.html',
  styleUrls: ['./event-remove.component.css']
})
export class EventRemoveComponent implements OnInit {

  constructor(private eventService: EventService, private activatedRoute: ActivatedRoute, private toastrService: ToastrService, private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params["eventId"]) {
        this.getEventById(params["eventId"]);
      }
    });
  }

  getEventById(id: number): void {
    this.eventService.getById(id).subscribe(response => {
      this.removeEvent(response.data);
    })
  }

  removeEvent(event: Event): void {
    this.eventService.delete(event).subscribe(response => {
      this.toastrService.warning(response.message);
      this.router.navigate(['/admin/events/list']).then(() => {
        window.location.reload();
      });
    });
  }

}
