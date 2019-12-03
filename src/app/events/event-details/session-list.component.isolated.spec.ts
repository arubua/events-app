import {SessionListComponent} from "./session-list.component";
import {ISession} from "../shared/event.model";

describe("SessionListComponent", () => {
  let component: SessionListComponent;
  let mockAuthSservice, mockVoterService;

  beforeEach(() => {
    component = new SessionListComponent(mockAuthSservice, mockVoterService);
  });

  describe("ngOnChanges", () => {

    it ("should filter the sesions correctly", () => {
      component.sessions = <ISession[]>[{name: "session 1", level: "intermediate"},
      {name: "session 2", level: "intermediate"},
      {name: "session 3", level: "beginner"}];
      component.filterBy = "intermediate";
      component.sortBy = "name";
      component.eventId = 3;

      component.ngOnChanges();

      expect(component.visibleSessions.length).toBe(2);
    });

    it ("should sort the sesions correctly", () => {
      component.sessions = <ISession[]>[{name: "session 1", level: "intermediate"},
      {name: "session 3", level: "intermediate"},
      {name: "session 2", level: "beginner"}];
      component.filterBy = "all";
      component.sortBy = "name";
      component.eventId = 3;

      component.ngOnChanges();

      expect(component.visibleSessions[2].name).toBe("session 3");
    });
  });
});

