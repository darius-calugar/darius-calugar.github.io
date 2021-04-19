import {Component, Input, OnInit} from '@angular/core';
import {Competition} from '../../shared/competition';

@Component({
  selector: 'app-competition-view',
  templateUrl: './competition-view.component.html',
  styleUrls: ['./competition-view.component.scss']
})
export class CompetitionViewComponent implements OnInit {
  @Input() competition: Competition;

  ngOnInit(): void {
  }
}
