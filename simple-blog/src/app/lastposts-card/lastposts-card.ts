import { Component, Input } from '@angular/core';
import { LastpostContainer } from '../lastpost-container/lastpost-container';

interface Post {
  title: string,
  content: string,
  img: string,
  postDate: Date;
}

@Component({
  selector: 'app-lastposts-card',
  imports: [LastpostContainer],
  templateUrl: './lastposts-card.html',
  styleUrl: './lastposts-card.css'
})

export class LastpostsCard {
  @Input() posts: Post[] = [];
}
