import { Component } from "@angular/core";
import { AuthService } from "../user/auth.service";
import { EventService, ISession } from "../events";


@Component ({
  selector: "nav-bar",
  templateUrl: "navbar.component.html",
  styles: [`
    .nav.navbar-nav {font-size:15px;}
    #searchForm {margin-right: 100px;}
    @media (max-width:1200px) {
      #searchForm {
        display:none;
      }
    }
    li > a.active {color:#f97924; }
  `]
})

export class NavbarComponent {
  searchTerm = "";
  foundSessions: ISession[];

  constructor( private auth: AuthService, private eventService: EventService) {

  }

  searchSessions(searchTerm) {
    this.eventService.searchSessions(searchTerm).subscribe(
      sessions => {
        this.foundSessions = sessions;
      });
  }
}
