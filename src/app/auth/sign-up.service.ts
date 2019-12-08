import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {StorageService} from '../services/storage.service';
import {SignupModel} from '../model/signup-model';
import {Observable} from 'rxjs';
import {Properties} from '../config/properties';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  headers = {
    'Content-Type': 'application/json',
  };

  constructor(private http: HttpClient, private storageService: StorageService) {

  }

  signUp(user: SignupModel): Observable<any> {
    debugger;
    return this.http.post(Properties.SIGN_UP_API_ENDPOINT, JSON.stringify(user), {
      headers: this.headers
    }).pipe(
      map((response: Response) => {
        const result: any = response;
        console.log(result);
      })
    );
  }
}
