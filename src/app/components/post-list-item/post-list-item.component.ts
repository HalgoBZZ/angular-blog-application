import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../models/post';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  constructor() { }

  @Input() item:Post;

  ngOnInit() {
  }

  loveIt(){
    this.item.loveIts += 1;
  }
  dontLoveIt(){
    this.item.loveIts -= 1;
  }

}
