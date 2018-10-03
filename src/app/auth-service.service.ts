import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import axios from "axios";

@Injectable({
  providedIn: "root"
})
export class AuthServiceService {
  constructor(private http: HttpClient) {}

  login(credentials) {
    return axios.post("http://localhost:3000/api/auth", {
      email: credentials.email,
      password: credentials.password
    });
  }
}
