import { inject, Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, user } from '@angular/fire/auth';
import { map, Observable } from 'rxjs';

import { SignInDto, SignUpDto, User } from './user.model';

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

  async signUp(signUpDto: SignUpDto): Promise<User> {
    return createUserWithEmailAndPassword(this.auth, signUpDto.email, signUpDto.password).then(userCredential => {
      return {
        uid: userCredential.user.uid,
        email: userCredential.user.uid
      } as User;
    });
  }

  async signIn(signInDto: SignInDto): Promise<User> {
    return signInWithEmailAndPassword(this.auth, signInDto.email, signInDto.password).then(userCredential => {
      return {
        uid: userCredential.user.uid,
        email: userCredential.user.email
      } as User;
    });
  }

  signOut(): Promise<void> {
    return signOut(this.auth);
  }
}
