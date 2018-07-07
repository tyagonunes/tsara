import { RouterModule, Routes} from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewsComponent } from './news/news.component';
import { ArticlesComponent } from './articles/articles.component';

const appRoutes: Routes = [
  
    { path: '', component: DashboardComponent},
    { path: 'dashboard', component: DashboardComponent},
    { path: 'news', component: NewsComponent},
    { path: 'articles', component: ArticlesComponent},
    { path: '**', redirectTo: '' },
  
  ]


export const routing = RouterModule.forRoot(appRoutes);