import { loadRemoteModule } from '@angular-architects/module-federation';
import { Component, ComponentFactoryResolver, Injector, OnInit, ViewChild, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import './web-component-wrapper';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class AppComponent implements OnInit {
  title = 'app-shell';
  @ViewChild('webComponent', {read: ViewContainerRef})
  webComponent!: ViewContainerRef;

  constructor(private cfr: ComponentFactoryResolver, private injector: Injector) {}

  async ngOnInit() {

    // const { AppComponent } = await loadRemoteModule({
    //   remoteEntry: 'http://localhost:4202/remoteEntry.js',
    //   exposedModule: './component',
    //   remoteName: 'angular1'
    // })

    // console.log(AppComponent);

    // const componentFactory = this.cfr.resolveComponentFactory(AppComponent);

    // // const componentFactory = this.webComponent.injector
    // // .get(ComponentFactoryResolver)
    // // .resolveComponentFactory(AppComponent);

    // this.webComponent.clear();
    // this.webComponent.createComponent(componentFactory, 0, this.injector);

  }
}
