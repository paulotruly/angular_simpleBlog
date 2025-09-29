import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BlogPostCard } from './blog-post-card/blog-post-card';
import { NgFor } from '@angular/common';
import { AddPosts } from './add-posts/add-posts';
import { Main } from './main/main';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BlogPostCard, AddPosts, NgFor, Main],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  
}
