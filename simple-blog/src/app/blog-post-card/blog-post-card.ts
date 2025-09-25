import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-blog-post-card',
  imports: [],
  templateUrl: './blog-post-card.html',
  styleUrl: './blog-post-card.css'
})
export class BlogPostCard {
    @Input() title: string = '';
}