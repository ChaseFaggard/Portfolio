import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path:'', component: AboutComponent },
  { path:'about', component:AboutComponent },
  { path:'skills', component:SkillsComponent} ,
  { path:'portfolio', component:PortfolioComponent },
  { path:'education', component:EducationComponent },
  { path:'contact', component: ContactComponent},
  { path:'**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    onSameUrlNavigation: 'reload'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
