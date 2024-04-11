import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProjectComponent } from './components/project/project.component';
import { SpectrogramComponent } from './components/spectrogram/spectrogram.component';
import { TeamComponent } from './components/team/team.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: 'home',  component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'explore',  component: SpectrogramComponent },
  { path: 'team',  component: TeamComponent },
  { path: 'project',  component: ProjectComponent },
  { path: 'contact',  component: ContactComponent},
  { path: 'about',  component: AboutComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
