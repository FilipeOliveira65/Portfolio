import { Component } from '@angular/core';
import { NgFor } from "@angular/common";

@Component({
  standalone: true,
  selector: 'app-hard-skills',
  imports: [NgFor],
  templateUrl: './hard-skills.component.html',
  styleUrl: './hard-skills.component.scss',
})
export class HardSkillsComponent {
  front_skills: string[] = [];
  back_skills: string[] = [];
  database_skills: string[] = [];
  others_skills: string[] = [];

  ngOnInit() {
    this.skillsList();
  }

  skillsList() {
    this.front_skills = [
      'Angular', 'Typescript', 'React js', 'JavaScript', 'SASS'
    ]

    this.back_skills = [
      'C#', 'Golang', 'Python'
    ]

    this.database_skills = [
      'PostgreSQL', 'MongoDB', 'Blockchain', 'MINIO', 'Seaweed'
    ]

    this.others_skills = [
      'OCR', 'Docker', 'NATS'
    ]
  }
}
