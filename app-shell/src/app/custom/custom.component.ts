import { WebComponentWrapper, WebComponentWrapperOptions } from '@angular-architects/module-federation-tools';
import { Component } from '@angular/core';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.scss'],
})
export class CustomComponent {
  title = 'CustomerComponent';
  props = {
    message: 'Hello from Shell',
  };

  events = {
    saveRecord: (event: any) => {
      console.debug('saveRecord!', event);
    },
  };

  options: WebComponentWrapperOptions = {
    remoteEntry: 'http://localhost:4202/remoteEntry.js',
    exposedModule: './web-components',
    elementName: 'angular1',
    remoteName: 'angular1'
  };
}
