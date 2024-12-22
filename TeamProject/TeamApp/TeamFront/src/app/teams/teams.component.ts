import { Component } from '@angular/core';
import { TeamService } from 'src/services/team.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent {
  teams: string[] = [];

  constructor(private teamService: TeamService) {}

  ngOnInit(): void {
    this.teamService.getTeams().subscribe(data => {
      this.teams = data;
    });
  }

}
