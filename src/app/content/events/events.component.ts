import { Component, OnInit } from '@angular/core';
import { Modal } from 'ngx-modialog/plugins/bootstrap';

import { EventService } from '../../services/event.service';
import { EventModel } from "./event.model";


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  events: EventModel[] = [];
  constructor(public modal: Modal, private eventService: EventService) { }

  ngOnInit() {
    this.events = this.eventService.getData();
  }

  openModal(event: EventModel) {
    this.modal.alert()
        .size('lg')
        .title(event.title)
        .body(`
            <div>
              <img src="${event.imageUrl}" width="70%" alt="image"/>
              <h4>${event.description}</h4>
            </div>
        `)
        .open();
      }
  }




