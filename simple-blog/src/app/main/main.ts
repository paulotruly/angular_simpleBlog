import { Component, signal } from '@angular/core';
import { BlogPostCard } from '../blog-post-card/blog-post-card';
import { AddPosts } from '../add-posts/add-posts';
import { NgFor, CommonModule } from '@angular/common';
import { AuthorCard } from '../author-card/author-card';
import { LastpostsCard } from '../lastposts-card/lastposts-card';
import { LastpostContainer } from '../lastpost-container/lastpost-container';

interface Post {
  title: string;
  content: string;
  img: string;
  postDate: Date;
}

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [BlogPostCard, AddPosts, AuthorCard, LastpostsCard, LastpostContainer, CommonModule, NgFor],
  templateUrl: './main.html',
  styleUrl: './main.css'
})

export class Main {

  isAddingPost = signal<boolean>(false);

  posts = signal<Post[]>([
    {
      title: 'The revolution of independent sound taking over the music scene',
      content: 'Over the past few years, Indietronica has sparked a revolution in the way we perceive music. What started as a niche subgenre blending indie rock and electronic beats has now become the heartbeat of independent music. Artists are no longer confined by traditional genre boundaries; instead, they are merging organic sounds with digital innovation, creating an entirely new auditory experience. This article delves into how INDIETRONICA is shaping the future of music, how it’s breaking free from mainstream formulas, and why this genre is the perfect soundtrack for the modern, digitally-driven world.',
      img: 'https://i-d.co/wp-content/uploads/2024/05/1690283272698-pc-music3.png?quality=90&w=1920',
      postDate: new Date('2025-09-29T10:00:00')
    },
    {
      title: 'My favorite albums of 2025',
      content: 'My favorite albums of 2025 include Eusexua by FKA twigs, which combines haunting production with raw emotion, exploring themes of desire and transformation; choke enough by Oklou, a dreamy and melancholic album balancing electronic minimalism and emotional depth; Coisas Naturais by Marina Sena, a vibrant mix of Brazilian pop, MPB, and funk that showcases her unique style; and Addison by Addison Rae, a surprising and introspective pop debut that blends playful energy with maturity. These albums have shaped my 2025 soundtrack and brought a lot of variety and feeling to the year.',
      img: 'https://www.nme.com/wp-content/uploads/2025/06/nme-best-albums-of-2025-so-far.jpg',
      postDate: new Date('2025-09-28T18:30:00')
    }
  ]);

  openAddPostModal() {
    this.isAddingPost.set(true);
  }

  closeAddPostModal() {
    this.isAddingPost.set(false);
  }

  // método pra adicionar uma postagem que recebe o evento do addposts
  addNewPost(newPostData: {title: string, img: string, content: string}) {
    const newPost: Post = {
      ...newPostData,
      postDate: new Date()
    }

    this.posts.update(currentPosts => [newPost, ...currentPosts])
    this.closeAddPostModal();
  }
}

