import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Event } from 'src/app/models/entities/event';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-event-view',
  templateUrl: './event-view.component.html',
  styleUrls: ['./event-view.component.css']
})
export class EventViewComponent implements OnInit {

  event: Event;

  constructor(private eventService: EventService, private activatedRoute: ActivatedRoute) { }

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
    })
  }

}
