import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  searchPlayer: any = '';
  players: any;
  search: any;
  player: any;
  templatName: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    }
    
  findPlayer(){
    this.http
    .get('https://soccerstars-backend.herokuapp.com/api/players')
    .subscribe((response: any) => {
      this.players = response;
      
 });
  }

  
}
