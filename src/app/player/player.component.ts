import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  playerName: string = '';
  player: any;

  findPlayer(playerName: string) : void {
    this.http
    .get(`https://soccerstars-backend.herokuapp.com/api/players`)
    .subscribe((response) => {
      console.log(response);
      this.player = response;
    });
   
   
  }

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

}
