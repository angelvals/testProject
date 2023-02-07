import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AppStateModel } from '../share/app.model';
import { MainCallAction } from '../share/main/main.action';
import { Entries } from '../share/main/main.model';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  entries$: Observable<Entries[]>;

  constructor(
    private readonly store: Store,
  ) {
    this.entries$ = this.store.select((state: AppStateModel) => state.main.restData.entries);
    this.makeCall();
  }

  makeCall() {
    this.store.dispatch([
      new MainCallAction()
    ]).subscribe();
  }

}
