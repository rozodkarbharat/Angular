import { InjectionToken } from "@angular/core";


export const localSrtorageToken = new InjectionToken('local storage',{
  providedIn:'root',
  factory() {
      return localStorage
  },
})
