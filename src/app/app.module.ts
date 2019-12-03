import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import {
  EventsListComponent ,
  EventThumbnailComponent,
  EventService,
  EventDetailsComponent,
  CreateEventComponent,
  EventListResolver,
  SessionListComponent,
  UpvoteComponent,
  DurationPipe,
  VoterService,
  LocationValidator,
  EventResolver
} from "./events/index";
import { EventsAppComponent } from "./events-app.component";
import { NavbarComponent } from "./nav/navbar.component";
import { JQ_TOKEN, TOASTR_TOKEN, Toastr, CollapsibleWellComponent, SimpleModalComponet, ModalTriggerDirective } from "./common/index";

import { RouterModule } from "@angular/router";
import { appRoutes } from "./routes";
import { Error404Component } from "./errors/404.component";
import { AuthService } from "./user/auth.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CreateSessionComponent } from "./events/event-details/create-session.component";



const toastr: Toastr = window["toastr"];
const jQuery = window["$"];

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    CreateSessionComponent,
    SessionListComponent,
    Error404Component,
    CollapsibleWellComponent,
    SimpleModalComponet,
    ModalTriggerDirective,
    UpvoteComponent,
    LocationValidator,
    DurationPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [
    EventService,
    {
      provide: TOASTR_TOKEN,
      useValue: toastr
    },
    {
      provide: JQ_TOKEN,
      useValue: jQuery
    },
    EventResolver,
    EventListResolver,
    VoterService,
    AuthService,
    {
      provide: "canDeactivateCreateEvent",
      useValue: checkDirtyState
    }
  ],
  bootstrap: [EventsAppComponent]
})


export class AppModule { }

export function checkDirtyState (component: CreateEventComponent) {
  if (component.isDirty)
    return window.confirm("You have not saved this event.Do you realy want to Cancel? ");
   return true ;
}
