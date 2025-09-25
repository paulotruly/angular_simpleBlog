import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BlogPostCard } from './blog-post-card/blog-post-card';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BlogPostCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('simple-blog');
}
