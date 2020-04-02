//libraries
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ImageCropperModule } from 'ngx-image-cropper';
import { HttpClientModule } from '@angular/common/http';

//components
import { AppComponent } from './app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { BannerComponent } from './components/banner/banner.component';
import { SettingsComponent } from './components/settings/settings.component';
import { appRoutingModule } from './app-routing.module';
import { ProfilesComponent } from './components/profiles/profiles.component';
import { ActionBarComponent } from './components/action-bar/action-bar.component';
import { SectionsComponent } from './components/sections/sections.component';
import { AboutSectionComponent } from './components/sections/about-section/about-section.component';
import { ProfileBoxesComponent } from './components/sections/profile-boxes/profile-boxes.component';

//modals
import { ModalbackComponent } from './modals/modal-back/modalback.component';
import { ModalBioComponent } from './modals/modal-bio/modal-bio.component';
import { ModalSkillsComponent } from './modals/modal-skills/modal-skills.component';
import { ModalAffiliationsComponent } from './modals/modal-affiliations/modal-affiliations.component';
import { ModalEducationComponent } from './modals/modal-education/modal-education.component';
import { ModalGearComponent } from './modals/modal-gear/modal-gear.component';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    BannerComponent,
    SettingsComponent,
    ProfilesComponent,    
    ModalbackComponent,
    ActionBarComponent,
    SectionsComponent,
    AboutSectionComponent,
    ProfileBoxesComponent,
    ModalBioComponent,
    ModalSkillsComponent,
    ModalAffiliationsComponent,
    ModalEducationComponent,
    ModalGearComponent
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
