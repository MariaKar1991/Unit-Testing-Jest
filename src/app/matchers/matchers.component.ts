import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matchers',
  standalone: true,
  imports: [],
  templateUrl: './matchers.component.html',
  styleUrl: './matchers.component.css',
})
export class MatchersComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  compileAndroidCode() {
    throw new Error('you are using Old Angular');
  }
}
