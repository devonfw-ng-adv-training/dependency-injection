import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Logger} from './logger';

@Injectable({
  providedIn: 'root'
})
export class UploadLoggerService implements Logger {

  constructor(private http: HttpClient) {
  }

  log(obj) {
    console.log(`this.http.post('someUrl', obj).subscribe()`);
  }
}
