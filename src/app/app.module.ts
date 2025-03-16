import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';  // Importation du module RouterModule
import { routes } from './app.routes';  // Corrected import from 'appRoutes' to 'routes'
import { CommonModule } from '@angular/common'; 
import { HttpClientModule, HttpClient } from '@angular/common/http';
// Importation des composants nécessaires (standalone)
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { ContactsTableComponent } from './contacts/contacts-table/contacts-table.component';
import { MessagesListComponent } from './messages/messages-list/messages-list.component';
import { SentMessagesComponent } from './messages/sent-messages/sent-messages.component';
import { ReceivedMessagesComponent } from './messages/received-messages/received-messages.component';
import { FavoritesComponent } from './messages/favorites/favorites.component';
import { TrashComponent } from './messages/trash/trash.component';
import { SettingsComponent } from './profile/settings/settings.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MessageFormComponent } from './messages/message-form/message-form.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { MonCompteComponent } from './profile/mon-compte/mon-compte.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ForgotPasswordComponent } from './auth/forgot-password/forgot-password.component';
import { FormsModule } from '@angular/forms';  // Ajoute FormsModule ici
import { VerificationComponent } from './auth/verifey/verifey.component';
import { NewPasswordComponent } from './auth/new-password/new-password.component';

// Importation du module SharedModule
import { SharedModule } from './shared/shared.module';

// Ne déclarez pas le composant AppComponent ici car il est standalone
@NgModule({
  imports: [
    BrowserModule,  // Module de base pour une application Angular
    RouterModule.forRoot(routes),  // Use 'routes' here instead of 'appRoutes'
    SharedModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule // Ajout de l'importation manquante pour HttpClientModule
  ],
  // Aucune déclaration de composants dans ce fichier puisque tout est standalone
  providers: [],
})
export class AppModule { }

// Ensuite, dans un fichier séparé ou à la fin de ce fichier, utilisez bootstrapApplication() pour démarrer l'application :
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app.component';  // Assurez-vous que AppComponent est standalone

bootstrapApplication(AppComponent);  // Démarre l'application avec le composant AppComponent
