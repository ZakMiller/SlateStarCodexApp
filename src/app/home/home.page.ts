import { Component } from '@angular/core';
import {PostsService} from '../services/posts.service';
import {Post} from '../models/post';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  entries: Promise<Post[]>;
  constructor(postService: PostsService) {
    this.entries = postService.getPostsNew();
  }
}
