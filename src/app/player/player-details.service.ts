import {Injectable} from '@angular/core';
import {PlayerDataService} from './player-data.service';
import {Player} from './player';

@Injectable({providedIn: 'root'})
export class PlayerDetailsService {
  private currentPlayer: Player;
  private originalPlayer: Player;

  constructor(private playerService: PlayerDataService) {
  }

  get player(): Player {
    return this.currentPlayer;
  }

  set player(plr: Player) {
    this.originalPlayer = plr;
    this.currentPlayer = Object.assign({}, this.originalPlayer);
  }

  restorePlayer() {
    this.player = this.originalPlayer;
  }

  savePlayer() {
    this.player = this.currentPlayer;
    this.playerService.save(this.currentPlayer).subscribe();
  }
}
