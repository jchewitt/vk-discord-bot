import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private http: HttpClient) {}

  sendMessage(user: any, message: any) {
    console.log('sending message');
    return this.http.post('/api/v1/sendMessage', {user, message});
  }
}
