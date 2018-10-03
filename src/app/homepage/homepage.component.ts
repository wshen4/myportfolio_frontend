import { Component, OnInit } from "@angular/core";
import { faGrinBeam } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-homepage",
  templateUrl: "./homepage.component.html",
  styleUrls: ["./homepage.component.css"]
})
export class HomepageComponent {
  faGrinBeam = faGrinBeam;
}
