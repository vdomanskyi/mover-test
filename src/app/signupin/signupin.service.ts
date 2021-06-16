import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface User {
  email: string;
  password: string | number;
}

@Injectable({ providedIn: 'root' })
export class SignupinService {
  constructor(private http: HttpClient) {}

  register(user: User): Observable<User> {
    return this.http.post<User>(
      'https://api-dev.moversmith.com/accounts/sign-up',
      user
    );
  }

  login(user: User): Observable<{ tokens: string }> {
    return this.http.post<{ tokens: string }>(
      'https://api-dev.moversmith.com/accounts/sign-in',
      user
    );
  }
}
