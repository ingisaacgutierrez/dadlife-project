import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ParentingDocListComponent } from './parenting-docs/parenting-docs-list/parenting-docs-list.component';
import { ProfessionalListComponent } from './professionals/professional-list/professional-list.component';
import { ParentingChatComponent } from './parenting-chat/parenting-chat.component';



const routes: Routes = [
    { path: '', redirectTo: '/parenting-docs', pathMatch: 'full' },
    {  path: 'parenting-docs', component: ParentingDocListComponent },
    { path: 'professionals', component: ProfessionalListComponent },
    { path: 'parenting-chat', component: ParentingChatComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
