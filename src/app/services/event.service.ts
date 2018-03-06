import { Injectable } from '@angular/core';
import { EventModel } from '../content/events/event.model'

@Injectable()
export class EventService {
  events: EventModel[] = [
    {
      id: 1, title: "Douglas  Pace", imageUrl: "https://i.imgur.com/Oz4fVc6.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..."
    },
    {
      id: 2, title: "Mcleod  Mueller", imageUrl: "https://i.imgur.com/Oz4fVc6.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..."
    },
    {
      id: 3, title: "Day  dMeyers", imageUrl: "https://i.imgur.com/Oz4fVc6.jpg", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua..."
    },
  ];

  getData(): EventModel[] {
    return this.events;
  }
}