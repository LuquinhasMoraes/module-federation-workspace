import { bootstrap } from '@angular-architects/module-federation-tools';
import { environment } from '../environments/environment.prod';
// import { TesteAModule } from './app/teste-a/teste-a.module';
import { WrapperModuleModule } from '../app/wrapper-modules/wrapper-module.module';

bootstrap(WrapperModuleModule, {
  production: environment.production,
  compilerOptions: {
    ngZone: 'noop'
  }
});
