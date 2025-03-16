import { Component } from '@angular/core'; 
import { RouterLink, RouterLinkActive } from '@angular/router'; 
import { CommonModule } from '@angular/common'; // Ajoute CommonModule ici

@Component({ 
  selector: 'app-sidebar', 
  templateUrl: './sidebar.component.html', 
  imports: [CommonModule, RouterLink, RouterLinkActive], // Ajoute CommonModule dans les imports 
  styleUrls: ['./sidebar.component.css'] 
}) 
export class SidebarComponent { 
  isSidebarClosed = false;
  isMessagesOpen = false;

  toggleSidebar() {
    this.isSidebarClosed = !this.isSidebarClosed;
  }

  toggleMessages() {
    this.isMessagesOpen = !this.isMessagesOpen;
  }
} 