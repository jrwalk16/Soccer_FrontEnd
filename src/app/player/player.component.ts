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


  constructor(private http: HttpClient) { }

  ngOnInit(): void { 
    //    .subscribe(params => {
    //     this.player = PLAYERS.find(player => {
    //     let paramId: string = params.get('id') || '';
    //     return distributor.id === parseInt(paramId);
    }

  findPlayer(){
    this.http
    .get('https://soccerstars-backend.herokuapp.com/api/players')
    .subscribe((response: any) => {
      this.players = response;
      console.log(this.players);
      console.log(this.searchPlayer);


    // .subscribe((response) => {
      
    //   console.log(response);
    //   this.player = response;
    //   console.log(searchPlayer);
      
      
      
      
      

    });
   
   
  }


  

}
