import { inject, Injectable } from '@angular/core';
import { Auth, user } from '@angular/fire/auth';
import { map, Observable } from 'rxjs';

import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  auth: Auth = inject(Auth);

  getUser(): Observable<User | null> {
    return user(this.auth).pipe(map(user => {
      if(user) {
        return {
          uid: user.uid,
          email: user.email
        } as User;
      }
      else {
        return null;
      }
    }));
  }
}
