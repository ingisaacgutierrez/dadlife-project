import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { ProfessionalsComponent } from './professionals/professionals.component';
import { ProfessionalListComponent } from './professionals/professional-list/professional-list.component';
import { ProfessionalDetailComponent } from './professionals/professional-detail/professional-detail.component';
import { ParentingDocsComponent } from './parenting-docs/parenting-docs.component';
import { ParentingDocListComponent } from './parenting-docs/parenting-docs-list/parenting-docs-list.component';
import { ParentingDocItemComponent } from './parenting-docs/parenting-doc-item/parenting-doc-item.component';
import { ParentingDocEditComponent } from './parenting-docs/parenting-doc-edit/parenting-doc-edit.component';
import { ParentingChatComponent } from './parenting-chat/parenting-chat.component';
import { ParentingChatListComponent } from './parenting-chat/parenting-chat-list/parenting-chat-list.component';
import { ParentingChatItemComponent } from './parenting-chat/parenting-chat-item/parenting-chat-item.component';
import { ParentingChatEditComponent } from './parenting-chat/parenting-chat-edit/parenting-chat-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfessionalsComponent,
    ProfessionalListComponent,
    ProfessionalDetailComponent,
    ParentingDocsComponent,
    ParentingDocListComponent,
    ParentingDocItemComponent,
    ParentingDocEditComponent,
    ParentingChatComponent,
    ParentingChatListComponent,
    ParentingChatItemComponent,
    ParentingChatEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
