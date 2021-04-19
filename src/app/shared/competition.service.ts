import {Injectable} from '@angular/core';
import {Competition} from './competition';

@Injectable({
  providedIn: 'root'
})
export class CompetitionService {
  getCompetitions(): Competition[] {
    return [
      {
        placement: 426,
        name: 'Reply Challenge',
        date: '2021',
        teamSize: 3,
        certificateLink: 'assets/files/certificate-reply.pdf'
      },
      {
        placement: 3456,
        name: 'Google Hash Code',
        date: '2021',
        teamSize: 3,
        certificateLink: 'https://codingcompetitions.withgoogle.com/hashcode/certificate/summary/0000000000435809'
      },
      {
        placement: 3463,
        name: 'Google Hash Code',
        date: '2020',
        teamSize: 3,
        certificateLink: 'https://codingcompetitions.withgoogle.com/hashcode/certificate/summary/00000000001a006b'
      },
      {
        placement: 27,
        name: 'Catalyst Coding Contest',
        date: '2020 Autumn',
        teamSize: 3,
        certificateLink: null
      },
      {
        placement: 92,
        name: 'Catalyst Coding Contest',
        date: '2020 Spring',
        teamSize: 3,
        certificateLink: null
      },
      {
        placement: null,
        name: 'Unihack',
        date: '2020',
        teamSize: 5,
        certificateLink: 'assets/files/certificate-unihack.pdf'
      },
    ];
  }
}
