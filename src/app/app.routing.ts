import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { AppComponent } from './app.component';

const routes: Routes = [
    { path: '', redirectTo: 'chart', pathMatch: 'full' },
    { path: 'chart', component: AppComponent },
    { path: 'list', component: ListComponent },
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [],
    declarations: [],
})
export class AppRoutingModule { }