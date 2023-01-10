import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { ProjectcomponentComponent } from './projectcomponent/projectcomponent.component';
import { ResourcecomponentComponent } from './resourcecomponent/resourcecomponent.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { MatTableExporterModule } from 'mat-table-exporter';
import {
  GanttAllModule,
  GanttModule,
  EditService,
} from '@syncfusion/ej2-angular-gantt';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FileuploadComponent } from './fileupload/fileupload.component';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { ResfileuploadComponent } from './resfileupload/resfileupload.component';
import { DialogComponent } from './dialog/dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogresourceComponent } from './dialogresource/dialogresource.component';
import { SubdialogComponent } from './subdialog/subdialog.component';
import { SrcollService } from './resourcecomponent/srcoll.service';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    ProjectcomponentComponent,
    ResourcecomponentComponent,
    HeaderComponent,
    HomeComponent,
    FileuploadComponent,
    ResfileuploadComponent,
    DialogComponent,
    DialogresourceComponent,
    SubdialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GanttModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatTableExporterModule
  ],
  providers: [DatePipe, SrcollService],
  bootstrap: [AppComponent],
})
export class AppModule {}
