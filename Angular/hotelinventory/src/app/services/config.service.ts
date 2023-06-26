import { RouteConfigToken } from './routeConfig.service';
import { RouteConfig } from './routeConfig';
import{Inject, Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(@Inject(RouteConfigToken) private configToken:RouteConfig) {
    console.log('config service')
    console.log(this.configToken)
   }
}
