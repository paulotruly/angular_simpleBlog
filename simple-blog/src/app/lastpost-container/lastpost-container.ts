import { DatePipe, NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';

interface Post {
  title: string,
  content: string,
  img: string,
  postDate: Date;
}

@Component({
  selector: 'app-lastpost-container',
  imports: [NgFor, DatePipe],
  standalone: true,
  templateUrl: './lastpost-container.html',
  styleUrl: './lastpost-container.css'
})

export class LastpostContainer {
  @Input() posts: Post[] = [];

  get lastFivePosts() {
    return this.posts.slice(0, 5)
  }
}
