import {Component, OnInit} from '@angular/core';
import {Project} from '../shared/project';
import {ProjectService} from '../shared/project.service';
import {Competition} from '../shared/competition';
import {CompetitionService} from '../shared/competition.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  projects: Project[] = [];
  competitions: Competition[] = [];

  constructor(private projectService: ProjectService, private competitionService: CompetitionService) {
  }

  ngOnInit(): void {
    this.projects = this.projectService.getProjects();
    this.competitions = this.competitionService.getCompetitions();
  }
}
