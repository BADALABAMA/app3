import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modalwindow',
  templateUrl: './modalwindow.component.html',
  styleUrls: ['./modalwindow.component.css'],
})
export class ModalwindowComponent implements OnInit {
  @Input() posts: {}[] = [];
  postTitle: string = '';
  postDesc: string = '';

  passwordValue: string = '';
  newPost: { title: string; description: string } = {
    title: '',
    description: '',
  };

  ngOnInit(): void {}

  createNewPost() {
    this.newPost = { title: this.postTitle, description: this.postDesc };
    this.posts.push(this.newPost);

    console.log(this.posts);
  }
}
