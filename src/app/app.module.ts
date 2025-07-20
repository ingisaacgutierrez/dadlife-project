import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { ProfessionalsComponent } from './professionals/professionals.component';
import { ProfessionalListComponent } from './professionals/professional-list/professional-list.component';
import { ProfessionalDetailComponent } from './professionals/professional-detail/professional-detail.component';
import { ParentingDocsComponent } from './parenting-docs/parenting-docs.component';
import { ParentingDocsListComponent } from './parenting-docs/parenting-docs-list/parenting-docs-list.component';
import { ParentingDocItemComponent } from './parenting-docs/parenting-doc-item/parenting-doc-item.component';
import { ParentingDocEditComponent } from './parenting-docs/parenting-doc-edit/parenting-doc-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfessionalsComponent,
    ProfessionalListComponent,
    ProfessionalDetailComponent,
    ParentingDocsComponent,
    ParentingDocsListComponent,
    ParentingDocItemComponent,
    ParentingDocEditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
