import { CanActivateFn } from '@angular/router';
import { LoginService } from '../login/login.service';
import { inject } from '@angular/core';

export const loadGuard: CanActivateFn = (route, state) => {
  let data=inject(LoginService)
  return data.isLoggedIn
};
