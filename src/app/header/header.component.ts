import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Input() posts: any[] = [];
  showModal: boolean = false;

  toggleComponents() {
    this.showModal = !this.showModal;
    return this.showModal;
  }
  constructor() {}

  ngOnInit(): void {}
}
