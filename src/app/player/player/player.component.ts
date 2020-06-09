import {Component, OnInit} from '@angular/core';
import {PlayerDetailsService} from '../player-details.service';
import {Player} from '../player';

@Component({
  selector: 'app-player-new',
  templateUrl: './player.component.html',
})
export class PlayerComponent implements OnInit {
  player: Player;

  constructor() {
  }

  ngOnInit() {
  }

  closeDetails() {
    this.player = null;
  }

  add() {
    this.player = {firstname: 'firstname', lastname: 'lastname', college: 'college', position: null, team: 'team'};
  }
}
