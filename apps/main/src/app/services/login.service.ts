import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {
  constructor(private readonly http: HttpClient) {}

  login(email: string, password: string) {
    return this.http.post('/api/login', { email, password });
  }
}
