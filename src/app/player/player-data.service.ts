import {Injectable} from '@angular/core';
import {Player} from './player';
import {Position} from './position';
import {Observable, Observer} from 'rxjs';

@Injectable({providedIn: 'root'})
export class PlayerDataService {
  players: Player[] = [
    {
      id: 0,
      college: 'Stanford',
      firstname: 'Christian',
      lastname: 'McCaffrey',
      position: Position.RB,
      team: 'Carolina Panthers',
      number: 22
    },
    {
      id: 1,
      college: 'Clemson',
      firstname: 'DeAndre ',
      lastname: 'Hopkins',
      position: Position.WR,
      team: 'Houston Texans'
    },
    {
      id: 2,
      college: 'Texas Tech',
      firstname: 'Patrick',
      lastname: 'Mahomes',
      position: Position.QB,
      team: 'Kansas City Chiefs'
    },
  ];

  get(): Observable<Player[]> {
    return new Observable<Player[]>((observer: Observer<Player[]>) => {
      observer.next(this.players);
      observer.complete();
    });
  }

  save(player: Player): Observable<Player> {
    return new Observable<Player>((observer: Observer<Player>) => {
      const plr = this.players.find(p => p.id === player.id);
      if (plr) {
        player = Object.assign(plr, player);
      } else {
        player.id = this.players.map(entity => entity.id).reduce((m, x) => m > x ? m : x) + 1;
        this.players.push(player);
      }
      observer.next(player);
      observer.complete();
    });
  }
}
