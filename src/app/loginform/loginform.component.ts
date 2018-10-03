import { Component } from "@angular/core";
import {
  faUser,
  faCaretDown,
  faCaretUp
} from "@fortawesome/free-solid-svg-icons";
import { AuthServiceService } from "../auth-service.service";

@Component({
  selector: "app-loginform",
  templateUrl: "./loginform.component.html",
  styleUrls: ["./loginform.component.css"]
})
export class LoginformComponent {
  faUser = faUser;
  faArrow = faCaretDown;

  email = "";
  password = "";

  dropdown = false;

  constructor(private authService: AuthServiceService) {}

  onDropDownToggle() {
    this.dropdown = !this.dropdown;
    if (this.dropdown === true) {
      this.faArrow = faCaretUp;
    } else {
      this.faArrow = faCaretDown;
    }
  }

  async onSubmit() {
    const credentials = { email: this.email, password: this.password };

    let jwt;

    try {
      jwt = await this.authService.login(credentials);
      alert("Log in Successfully! Welcome " + this.email);
    } catch (ex) {
      alert("Invalid Email or Password");
    }
  }
}
