import { Component } from "@angular/core";
import {
  faPiggyBank,
  faTimesCircle,
  faExclamationTriangle
} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent {
  faPiggyBank = faPiggyBank;
  faTimesCircle = faTimesCircle;
  faExclamationTriangle = faExclamationTriangle;

  showDemoAlert = localStorage.getItem("showDemoAlert")
    ? localStorage.getItem("showDemoAlert")
    : true;

  onCloseDemoAlert() {
    this.showDemoAlert = false;
    localStorage.setItem("showDemoAlert", "false");
  }
}
