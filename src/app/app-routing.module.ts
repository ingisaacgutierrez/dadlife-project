import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ParentingDocsListComponent } from './parenting-docs/parenting-docs-list/parenting-docs-list.component';
import { ProfessionalListComponent } from './professionals/professional-list/professional-list.component';


const routes: Routes = [
    { path: '', redirectTo: '/parenting-docs', pathMatch: 'full' },
    { path: 'parenting-docs', component: ParentingDocsListComponent },
    { path: 'professionals', component: ProfessionalListComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
