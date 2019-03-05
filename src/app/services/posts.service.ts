import { Injectable } from '@angular/core';
import {Post} from '../models/post';
import { HttpClient } from  '@angular/common/http';
import {forEach} from '@angular-devkit/schematics';
import {map} from 'rxjs/operators';
import {from, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private httpClient: HttpClient) {
  }

  getPosts(): Post[] {
    return [
      {
        title: 'one'
      },
      {
        title: 'two'
      },
      {
        title: 'three'
      },
    ];
  }

  getPostsNew(): Promise<Post[]> {
    return this.httpClient.get('https://cors-anywhere.herokuapp.com/https://slatestarcodex.com/feed/'
        ,
    {
      responseType: 'text'
    }
    ).toPromise().then((data: string) => {
      const domParser = new DOMParser();
      const doc = domParser.parseFromString(data, 'text/xml');
      const items = Array.from(doc.querySelectorAll('item'));
      return items.map(item => {
        return {
          title: item.querySelector('title').textContent
        };
      });
    });
  }
}
