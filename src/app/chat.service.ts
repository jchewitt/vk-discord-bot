import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private p = window.location.port === '4200' ? 'http://localhost:3000' : '';
  constructor(private http: HttpClient) {}

  sendMessage(id: any, message: any) {
    console.log('sending message');
    return this.http.post(`${this.p}/api/v1/sendMessage/${id}`, {message});
  }

  getMembers(): Observable<any> {
    return this.http.get(`${this.p}/api/v1/members`);
  }

  getBanMembers(): Observable<any> {
    return this.http.get(`${this.p}/api/v1/bans`);
  }

  banMember(id: any) {
    return this.http.post(`${this.p}/api/v1/banMember/${id}`, {});
  }

  unbanMember(id: any) {
    return this.http.post(`${this.p}/api/v1/unbanMember/${id}`, {});
  }
}
