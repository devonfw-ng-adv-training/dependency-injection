import {NgModule} from '@angular/core';
import {NavComponent} from './nav/nav.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [NavComponent],
  imports: [RouterModule],
  exports: [NavComponent]
})
export class CoreModule {
}
