import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { AppError } from '../common/app-error';
import { NotFoundError } from '../common/not-found-error';
import { BadInput } from '../common/bad-input';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private url: string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  getPosts() {
    return this.http.get(this.url);
  }

  createPost(post: any) {
    return this.http.post(this.url, JSON.stringify(post)).pipe(
      catchError((error: Response) => {
        if (error.status === 400)
          return throwError(() => new BadInput(error.json()));

        return throwError(() => new AppError(error.json()));
      })
    );
  }

  updatePost(post: any) {
    return this.http.patch(
      this.url + post.id,
      JSON.stringify({ isRead: true })
    );

    // Method 2
    // this.http.put(this.url, JSON.stringify(post));
  }

  deletePost(id: string) {
    return this.http.delete(this.url + '/' + id).pipe(
      catchError((error: Response) => {
        if (error.status === 404)
          return throwError(() => new NotFoundError(error));

        return throwError(() => new AppError(error));
      })
    );
  }
}
