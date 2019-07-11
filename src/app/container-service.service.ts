import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Posts } from './container/container.component';
import 'rxjs/Rx';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContainerService {

  constructor(private http:HttpClient) { }

  getAllPosts() : Observable<Posts> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
}
