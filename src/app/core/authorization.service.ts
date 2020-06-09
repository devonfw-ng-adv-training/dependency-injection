import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})
export class AuthorizationService {
  isAuthorized() {
    return (Math.random() * 1000) % 2 === 0;
  }
}
