import { bootstrap } from '@angular-architects/module-federation-tools';
// import { AppModule } from './app/app.module';
import { environment } from './environments/environment.prod';
import { TesteBModule } from './app/teste-b/teste-b.module';

bootstrap(TesteBModule, {
  production: environment.production,
  compilerOptions: {
    ngZone: 'noop'
  }
});
