import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilesComponent } from './components/profiles/profiles.component';
import { SettingsComponent } from './components/settings/settings.component';

const routes:Routes=[
    // {path:'', component: ToolbarComponent},
    {path: 'profiles', component:ProfilesComponent},
    {path:'settings', component: SettingsComponent}
];
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class appRoutingModule{}