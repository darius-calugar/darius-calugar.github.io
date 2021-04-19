import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {AppRoutingModule} from './app-routing.module';
import {MainComponent} from './main/main.component';
import { ProjectViewComponent } from './main/project-view/project-view.component';
import { ImagePreviewComponent } from './image-preview/image-preview.component';
import { CompetitionViewComponent } from './main/competition-view/competition-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    ProjectViewComponent,
    ImagePreviewComponent,
    CompetitionViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
