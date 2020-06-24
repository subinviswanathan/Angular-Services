import { Component, OnInit } from '@angular/core';
import { PostsService } from './posts.service';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts;
  constructor(private _postSrevice: PostsService) { }
  ngOnInit() {
    this._postSrevice.getAll()
      .subscribe(posts => this.posts = posts,
        (error: AppError) => {
          if (error instanceof NotFoundError)
            alert('');
          else throw error;
        })
  }

}
