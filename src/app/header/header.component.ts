import {Component, OnInit} from '@angular/core';

class Link {
  path?: string;
  fragment?: string;
  name?: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  links: Array<Link> = [
    {path: '/', fragment: 'projects', name: 'Projects'},
    {path: '/', fragment: 'contact', name: 'Contact'},
    {path: '', fragment: '', name: 'Blog'},
  ];

  constructor() {
  }

  ngOnInit(): void {
  }
}
