import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {Player} from '../player';
import {Position} from '../position';
import {PlayerDetailsService} from '../player-details.service';
import {loggerInjectionToken} from '../../app.module';
import {Logger} from '../../core/logger';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.scss'],
  providers: [PlayerDetailsService]
})
export class PlayerDetailComponent implements OnInit {
  keys = Object.keys;
  message = '';

  @Output() closeDetails = new EventEmitter<void>();

  @Output() saveDetails = new EventEmitter<void>();

  constructor(private playerDetailService: PlayerDetailsService,
              @Inject(loggerInjectionToken) private log: Logger) {
  }

  get player(): Player {
    return this.playerDetailService.player;
  }

  @Input()
  set player(player: Player) {
    this.playerDetailService.player = player;
  }

  get positions() {
    return Position;
  }

  ngOnInit() {
    this.log.log(this.playerDetailService.player);
  }

  onCancelClicked() {
    this.flashMessage('Canceled');
    this.playerDetailService.restorePlayer();
  }

  onCloseClicked() {
    this.closeDetails.emit();
  }

  onSaveClicked() {
    this.flashMessage('Saved');
    this.playerDetailService.savePlayer();
  }

  flashMessage(msg: string) {
    this.message = msg;
    setTimeout(() => this.message = '', 500);
  }
}
