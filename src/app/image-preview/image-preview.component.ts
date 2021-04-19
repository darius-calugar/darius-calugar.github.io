import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-image-preview',
  templateUrl: './image-preview.component.html',
  styleUrls: ['./image-preview.component.scss']
})
// TODO: Allow multiple display images
export class ImagePreviewComponent implements OnInit {
  @Input()
  image: string;

  ngOnInit(): void {
  }
}
