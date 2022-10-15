import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  events: Event[] = [];
  filterText: string = "";

  constructor(private eventService: EventService, private router: Router) { }

  ngOnInit(): void {
    this.getAllEvents();
  }

  getAllEvents(): void {
    this.eventService.getAll().subscribe(response => {
      this.events = response.data;
    })
  }

  getEventViewById(eventId: number): void {
    this.router.navigate(["/admin/events/view/" + eventId]);
  }

}
