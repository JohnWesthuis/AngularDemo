import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  names = ['Jan', 'Leta', 'Angela', 'Doreen'];
  constructor() { }
  child: string;

  onLiked(value) {
    this.child = value;
  }

  ngOnInit() {
  }

}
