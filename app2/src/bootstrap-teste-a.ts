import { bootstrap } from '@angular-architects/module-federation-tools';
import { environment } from './environments/environment.prod';
import { TesteAModule } from './app/teste-a/teste-a.module';

bootstrap(TesteAModule, {
  production: environment.production,
  compilerOptions: {
    ngZone: 'noop'
  }
});
