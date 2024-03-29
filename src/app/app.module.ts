import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DialogComponent } from './dialog/dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideDatabase, getDatabase } from '@angular/fire/database';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { DetailCardComponent } from './detail-card/detail-card.component';
import { MatMenuModule } from '@angular/material/menu';
import { UserDetailEditDialogComponent } from './user-detail-edit-dialog/user-detail-edit-dialog.component';
import { EditUserAdressDialogComponent } from './edit-user-adress-dialog/edit-user-adress-dialog.component';
import { NoteComponentComponent } from './note-component/note-component.component';
import { AddNoteDialogComponent } from './add-note-dialog/add-note-dialog.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TotalUserComponent } from './total-user/total-user.component';
import { UserDiagrammComponent } from './user-diagramm/user-diagramm.component';
import { HttpClientModule } from '@angular/common/http'
import { AgGridModule } from 'ag-grid-angular';


import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import * as PlotlyJS from 'plotly.js-dist-min';
import { PlotlyModule } from 'angular-plotly.js';
import { IncomeDiagrammComponent } from './income-diagramm/income-diagramm.component';
import { UserLocationDiagrammComponent } from './user-location-diagramm/user-location-diagramm.component';
import { LoginWindowComponent } from './login-window/login-window.component';
import { MainSiteComponent } from './main-site/main-site.component';
import { SingInComponent } from './sing-in/sing-in.component';
import { SingUpComponent } from './sing-up/sing-up.component';
import { ForgottPasswordComponent } from './forgott-password/forgott-password.component';
import { WrongPasswordOrEmailComponent } from './wrong-password-or-email/wrong-password-or-email.component';
import { AreYouSureComponent } from './are-you-sure/are-you-sure.component';
import { DayAndTimeComponent } from './day-and-time/day-and-time.component';
import { AgeDiagrammComponent } from './age-diagramm/age-diagramm.component';
import { FooterComponent } from './footer/footer.component';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';
import { ImprintComponent } from './imprint/imprint.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';


PlotlyModule.plotlyjs = PlotlyJS;



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserComponent,
    DialogComponent,
    DetailCardComponent,
    UserDetailEditDialogComponent,
    EditUserAdressDialogComponent,
    NoteComponentComponent,
    AddNoteDialogComponent,
    TotalUserComponent,
    UserDiagrammComponent,
    IncomeDiagrammComponent,
    UserLocationDiagrammComponent,
    LoginWindowComponent,
    MainSiteComponent,
    SingInComponent,
    SingUpComponent,
    ForgottPasswordComponent,
    WrongPasswordOrEmailComponent,
    AreYouSureComponent,
    DayAndTimeComponent,
    AgeDiagrammComponent,
    FooterComponent,
    DisclaimerComponent,
    ImprintComponent,
  ],
  imports: [
    PlotlyModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatTooltipModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    MatProgressBarModule,
    MatCardModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    BrowserModule,
    HttpClientModule,
    AgGridModule,
    MatButtonToggleModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore())
  ],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
