import { Component, Input } from "@angular/core";
import { IEvent } from "./shared";

@Component ({
  selector: "<event-thumbnail>",
  template: `
  <div  [routerLink]= "['/events',event.id]" class="well hoverwell thumbnail">
  <h2>{{event.name | uppercase}}</h2>
  <div>Date: {{event.date |date:"shortDate"}}</div>
  <div  [ngClass]="getStartTimeClass()"

      [ngSwitch]="event?.time">
      Time: {{event?.time}}
      <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
      <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
      <span *ngSwitchDefault >(Normal Start)</span>
  </div>
  <div>Price: {{event.price | currency:"USD" }}</div>
  <div [hidden]="!event?.location">
    <span>Location: {{event?.location?.address}}</span>
    <span>&nbsp;</span>
    <span class="pad-left">{{event?.location?.city}}, {{event?.location?.country}}</span>
  </div>
  <div [hidden]="!event?.onlineUrl">Online Url: {{event?.onlineUrl}}</div>
  </div>
  `,
  styles: [`
    .bold {font-weight:bold;}
    .green {color:#003300 !important;}
    .thumbnail {min-height:210px; }
    .pad-left {margin-left:10px; }
    .well div {color:#bbb; }`
  ]
})

export class EventThumbnailComponent {
  @Input() event: IEvent;

  getStartTimeClass() {
    if (this.event && this.event.time === "8:00 am")
      return ["green", "bold"];
    return [];
  }

}
