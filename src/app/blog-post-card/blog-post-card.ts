import { DatePipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-blog-post-card',
  imports: [DatePipe],
  templateUrl: './blog-post-card.html',
  styleUrl: './blog-post-card.css'
})
export class BlogPostCard {
    @Input() title: string = '';
    @Input() content: string = '';
    @Input () img: string = '';
    postDate: Date = new Date(); 
}