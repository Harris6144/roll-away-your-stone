import { inject, Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, user } from '@angular/fire/auth';
import { map, Observable } from 'rxjs';

import { SignUpDto, User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  auth: Auth = inject(Auth);

  getUser(): Observable<User | null> {
    return user(this.auth).pipe(map(user => {
      if(user) {
        return { ...user } as User;
      }
      else {
        return null;
      }
    }));
  }

  async signUp(signUpDto: SignUpDto): Promise<User> {
    return createUserWithEmailAndPassword(this.auth, signUpDto.email, signUpDto.password).then(userCredential => {
      return { ...userCredential.user } as User;
    });
  }
}
