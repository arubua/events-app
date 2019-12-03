import { TestBed, ComponentFixture, async} from "@angular/core/testing";
import { DebugElement } from "@angular/core";
import {SessionListComponent} from "./session-list.component";
import { UpvoteComponent } from "./upvote.component";
import { DurationPipe } from "../shared/duration.pipe";
import { CollapsibleWellComponent } from "../../common/collapsible-well.component";
import { AuthService } from "../../user/auth.service";
import { VoterService } from "./voter.service";
import { ISession } from "../shared/event.model";
import { By } from "@angular/platform-browser";

describe("SessionListComponent", () => {
  let fixture: ComponentFixture<SessionListComponent>,
  component: SessionListComponent,
  element: HTMLElement,
  debugEl: DebugElement;

  beforeEach(async( () => {
    const mockAuthService = {
      isAuthenticated: () => true,
      currentUser: {userName: "Joe"}
    };
    const mockVoterService = {
      userHasVoted: () => true
    };

    TestBed.configureTestingModule({
      imports: [],
      declarations: [
        SessionListComponent,
        UpvoteComponent,
        DurationPipe,
        CollapsibleWellComponent
      ],
      providers: [
        { provide: AuthService, useValue: mockAuthService},
        { provide: VoterService, useValue: mockVoterService},
      ],
      schemas: []
    }); // end TestBed
  })); // end beforeEach

  beforeEach( () => {
    fixture = TestBed.createComponent(SessionListComponent);
    component = fixture.componentInstance;
    debugEl = fixture.debugElement;
    element = fixture.nativeElement;
  }); // end beforeEach

  describe("initial display", () => {

    it("should have the correct session title", () => {
      component.sessions = [{ id: 3, name: "Session 1",
        presenter: "Joe", duration: 1, level: "beginner",
        abstract: "abstract", voters: ["john", "bob"]}];
      component.filterBy = "all";
      component.sortBy = "name";
      component.eventId = 4;

      component.ngOnChanges();
      fixture.detectChanges();

      expect(element.querySelector("[well-title").textContent).toContain("Session 1");
      // expect(debugEl.query(By.css("[well-title")).nativeElement.textContent).toContain('Session 1'); //method 2
    }); // end it
  }); // end describe
}); // end describe
