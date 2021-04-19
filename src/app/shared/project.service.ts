import {Injectable} from '@angular/core';
import {Project} from './project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  getProjects(): Project[] {
    return [
      {
        name: 'Study Box',
        description: 'A mobile application designed for students that provides features such as document scanning, assignment tracking and schedule management while allowing community interactions through group sharing. The initial version of this app was developed during the 2020 Unihack hackathon in a team of 5, where I had the role of frontend developer and brand designer. Due to the praise received from the judges, we decided to continue development and are planning for a beta release in the near future. This experience allowed me to experiment with Flutter in a professional environment and improve my skills as a mobile developer.',
        teamSize: 6,
        startDate: 'Nov 2020',
        endDate: null,
        imagePaths: [
          'assets/previews/studybox_1.png',
        ],
        techLogoPaths: [
          'assets/technologies/flutter.svg',
          'assets/technologies/firebase.svg',
          'assets/technologies/graphql.svg',
          'assets/technologies/heroku.svg',
        ],
        lessons: [
          'Material UI design principles',
          'Front-end development using modern technologies',
          'Building responsive and fluid UI',
        ],
        links: [],
      },
      {
        name: 'Bank Transaction Management WebApp',
        description: 'A rather simple CRUD desktop application for managing monetary transfers from accounts developed in a team of 4 for a course in design and implementation systems. The focus of this project was to introduce me to working properly with git while also further improving my skills in high-level programming.',
        teamSize: 4,
        startDate: 'Feb 2021',
        endDate: 'Apr 2021',
        imagePaths: [
          'assets/previews/btm_1.png',
        ],
        techLogoPaths: [
          'assets/technologies/angular.svg',
          'assets/technologies/spring.svg',
          'assets/technologies/hibernate.svg',
        ],
        lessons: [
          'Pragmatic design and implementation methods',
          'Code generation and annotation processing',
          'Improved my ability to work in a team and to organize tasks for maximum team efficiency',
          'Familiarised myself with web client-server application tech stacks',
        ],
        links: [],
      },
      {
        name: 'Custom Language Interpreter',
        description: 'A desktop application developed for a course in advanced programming methods. It allows step-by-step execution of code written in a custom programming language. It includes features such as if statements, while loops and concurrent execution. This project taught me how to develop and design a desktop application using Java and introduced me to CSS styling. ',
        teamSize: 1,
        startDate: 'Oct 2020',
        endDate: 'Jan 2021',
        imagePaths: [
          'assets/previews/interpreter_1.png',
          'assets/previews/interpreter_2.png',
        ],
        techLogoPaths: [
          'assets/technologies/javafx.png',
        ],
        lessons: [
          'How a programming language is structured',
          'Functional & declarative programming',
          'Improved my knowledge about synchronization mechanisms',
        ],
        links: [
          'https://github.com/darius-calugar/toy-language-interpreter'
        ],
      },
      {
        name: 'Super-Pong',
        description: 'A fast-paced table-tennis video game in which the player uses different power-ups and techniques to defeat his opponent. This stands as my first complete project, having began development in the last year of high-school. It allowed me to experiment in the game development field and provided me with early insights in software design and high-level programming.',
        teamSize: 1,
        startDate: 'Jan 2019',
        endDate: 'May 2019',
        imagePaths: [
          'assets/previews/superpong_1.png',
          'assets/previews/superpong_2.png',
        ],
        techLogoPaths: [
          'assets/technologies/unity.svg',
          'assets/technologies/cs.svg',
        ],
        lessons: [
          'Developing an application for the end user',
          'Basic principles of game development & design',
        ],
        links: ['https://dariuscalugar.itch.io/superpong'],
      },
    ];
  }
}
