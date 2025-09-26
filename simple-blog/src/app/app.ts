import { Component, contentChild, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BlogPostCard } from './blog-post-card/blog-post-card';
import { NgFor } from '@angular/common';
import { AddPosts } from './add-posts/add-posts';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BlogPostCard, AddPosts, NgFor],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  posts = [
    {
      title: 'The revolution of independent sound taking over the music scene',
      content: 'Over the past few years, Indietronica has sparked a revolution in the way we perceive music. What started as a niche subgenre blending indie rock and electronic beats has now become the heartbeat of independent music. Artists are no longer confined by traditional genre boundaries; instead, they are merging organic sounds with digital innovation, creating an entirely new auditory experience. This article delves into how INDIETRONICA is shaping the future of music, how it’s breaking free from mainstream formulas, and why this genre is the perfect soundtrack for the modern, digitally-driven world.',
      img: 'https://is1-ssl.mzstatic.com/image/thumb/Music122/v4/8c/76/4e/8c764e2b-a24e-d48d-b225-8162fde772d5/191018258931.jpg/1200x630bb.jpg'
    },
    {
      title: 'My favorite albums of 2025',
      content: 'My favorite albums of 2025 include Eusexua by FKA twigs, which combines haunting production with raw emotion, exploring themes of desire and transformation; choke enough by Oklou, a dreamy and melancholic album balancing electronic minimalism and emotional depth; Coisas Naturais by Marina Sena, a vibrant mix of Brazilian pop, MPB, and funk that showcases her unique style; and Addison by Addison Rae, a surprising and introspective pop debut that blends playful energy with maturity. These albums have shaped my 2025 soundtrack and brought a lot of variety and feeling to the year.',
      img: 'https://images.impresa.pt/expresso/2025-02-17-jhe_240214_fka_twigs_promo_04_048r1_t.jpg-abde71bf/original'
    }
  ]
}
