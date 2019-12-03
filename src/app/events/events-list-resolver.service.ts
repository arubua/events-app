import { Injectable } from "@angular/core";
import { EventService } from "./shared/event.service";
import { Resolve } from "@angular/router";


@Injectable ()

export class EventListResolver implements Resolve<any> {

constructor (private eventService: EventService) {}

resolve() {
  return this.eventService.getEvents();
}

}
