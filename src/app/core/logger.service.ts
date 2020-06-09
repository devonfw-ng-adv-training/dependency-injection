import {Injectable} from '@angular/core';
import {Logger} from './logger';

@Injectable({
  providedIn: 'root'
})
export class LoggerService implements Logger {

  constructor() {
  }

  log(obj) {
    console.log(obj);
  }
}
