import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  posts: any = [];

  constructor(private service: PostService) {}

  ngOnInit(): void {
    this.service.getPosts().subscribe((response) => {
      this.posts = response;
    });
  }

  createPost(input: HTMLInputElement) {
    let post: any = {
      title: input.value,
    };

    input.value = '';

    this.service.createPost(post).subscribe(
      (response: any) => {
        post.id = response.id;
        this.posts.splice(0, 0, post);
        // console.log(response);
      },
      (error: AppError) => {
        if (error instanceof BadInput) {
          alert('This post has already been deleted');
          //set error for form => this.form.setErrors(error.originalError)
        } else throw error; // this will be handle by global error handler, app-error-handler
      }
    );
  }

  updatePost(post: any) {
    this.service.updatePost(post).subscribe((response) => {
      console.log(response);
    });

    // Method 2
    // this.http.put(this.url, JSON.stringify(post));
  }

  deletePost(post: any) {
    this.service.deletePost(post.id).subscribe(
      (response) => {
        this.posts.splice(this.posts.indexOf(post), 1);
      },
      (error: AppError) => {
        if (error instanceof NotFoundError)
          alert('This post has already been deleted');
        else throw error;
      }
    );
  }
}
