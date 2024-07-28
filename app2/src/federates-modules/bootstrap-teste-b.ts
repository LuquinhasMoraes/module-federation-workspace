import { bootstrap } from '@angular-architects/module-federation-tools';
// import { AppModule } from './app/app.module';
import { environment } from '../environments/environment.prod';
import { WrapperTesteBModule } from '../app/wrapper-modules/wrapper-teste-b-module.module';

bootstrap(WrapperTesteBModule, {
  production: environment.production,
  compilerOptions: {
    ngZone: 'noop'
  }
});
