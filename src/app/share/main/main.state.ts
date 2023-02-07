import { MainStateModel } from "./main.model";
import { Injectable } from '@angular/core';
import { Action, StateContext, State, Selector } from '@ngxs/store';
import { MainCallAction } from "./main.action";
import { ApiService } from "src/app/service/api.service";
import { tap } from "rxjs";

@State<MainStateModel>({
  name: 'main',
  defaults: {
    initialized: false,
    restData: {}
  },
})
@Injectable()
export class MainState {
  constructor(
    private readonly api: ApiService
  ) {
    
  }

  @Selector()
  static getEntries(state: MainStateModel) {
    return state.restData.entries;
  }

  @Action(MainCallAction)
  fetchData({ patchState }: StateContext<MainStateModel>) {
    patchState({ initialized: false });
    return this.api.makeRequest("entries", {}, "GET").pipe(
      tap((response) => {
        patchState({ initialized: true, restData: response })
      })
    );
  }
}