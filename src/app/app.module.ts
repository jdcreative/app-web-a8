import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ImageCropperModule } from 'ngx-image-cropper';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { BannerComponent } from './components/banner/banner.component';
import { SettingsComponent } from './components/settings/settings.component';
import { appRoutingModule } from './app-routing.module';
import { ProfilesComponent } from './components/profiles/profiles.component';
import { ModalComponent } from './components/modal/modal.component';
import { ActionBarComponent } from './components/action-bar/action-bar.component';
import { SectionsComponent } from './components/sections/sections.component';
import { AboutSectionComponent } from './components/sections/about-section/about-section.component';
import { ProfileBoxesComponent } from './components/sections/profile-boxes/profile-boxes.component';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    BannerComponent,
    SettingsComponent,
    ProfilesComponent,
    ModalComponent,
    ActionBarComponent,
    SectionsComponent,
    AboutSectionComponent,
    ProfileBoxesComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RouterModule,
    appRoutingModule,
    ImageCropperModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
