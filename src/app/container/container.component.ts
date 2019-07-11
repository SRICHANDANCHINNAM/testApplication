import { Component, OnInit } from '@angular/core';
import { ContainerService } from '../container-service.service';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  posts: Posts[];

  headers: any[];

  constructor(private http:HttpClient,private containerService: ContainerService) { }

  ngOnInit() {
    //Gettings Posts From Container Service
    this.containerService.getAllPosts().subscribe(data => {
      this.posts = data as Posts[];
    })

    //Table Headers and It's fields
      this.headers = [
          { field: 'userId', header: 'User Id' },
          { field: 'id', header: 'Id' },
          { field: 'title', header: 'Title' },
          { field: 'body', header: 'Body' }
      ];
  }

}


//Model Interface of Posts
export interface Posts {
  userId?;
  id?;
  title?;
  body?;
}