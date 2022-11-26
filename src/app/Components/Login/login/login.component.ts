import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private Router: Router) { }
  ngOnInit(): void {
  }

  Login(form: any) {
    localStorage.setItem('user', form.value.email)
    this.Router.navigateByUrl('')
  }
}
