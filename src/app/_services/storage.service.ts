import { Injectable } from '@angular/core';
import { Member } from '../models/member.model';

const TOKEN_KEY = 'auth-user';
const USER_KEY = 'memberId';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  clean(): void {
    window.sessionStorage.clear();
  }

  public saveToken(user: any): void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, JSON.stringify(user));
  }

  public saveUser(userId: Member): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(userId));
  }

  public getToken(): any {
    const user = window.sessionStorage.getItem(TOKEN_KEY) !== 'undefined' ? window.sessionStorage.getItem(TOKEN_KEY) : null;
    console.log('*** getToken ***', user);
    if (user)
      return JSON.parse(user);

    return {};
  }

  public getMemberId(): any {
    const user = window.sessionStorage.getItem(USER_KEY) !== 'undefined' ? window.sessionStorage.getItem(USER_KEY) : null;
    console.log('*** getUser ***', user);
    if (user)
      return JSON.parse(user);

    return {};
  }

  public isLoggedIn(): boolean {
    const user = window.sessionStorage.getItem(TOKEN_KEY);
    if (user)
        return true;

    return false;
  }
}
