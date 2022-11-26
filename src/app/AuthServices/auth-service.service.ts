import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  auth = false
  constructor() { }

  isLoggedIn() {
    return localStorage.getItem('user')
  }
}
