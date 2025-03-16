import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacts-table',
  standalone: true,
  templateUrl: './contacts-table.component.html',
  styleUrls: ['./contacts-table.component.css'],
  imports: [CommonModule, FormsModule]
})
export class ContactsTableComponent {
  contacts = [
    { 
      nom: 'John Doe', 
      email: 'john@example.com', 
      telephone: '1234567890', 
      isEditing: false,
      isFavorite: false
    },
    { 
      nom: 'Jane Smith', 
      email: 'jane@example.com', 
      telephone: '0987654321', 
      isEditing: false,
      isFavorite: false
    }
  ];

  ajouterContact() {
    this.contacts.push({ 
      nom: '', email: '', telephone: '', 
      isEditing: true, isFavorite: false 
    });
  }

  consulterContact(contact: any) {
    alert(`Voir les détails du contact:\nNom: ${contact.nom}\nEmail: ${contact.email}\nTéléphone: ${contact.telephone}`);
  }

  modifierContact(contact: any) {
    contact.isEditing = true;
  }

  sauvegarderContact(contact: any) {
    contact.isEditing = false;
    alert(`Les modifications ont été sauvegardées pour ${contact.nom}`);
  }

  supprimerContact(contact: any) {
    if (confirm(`Êtes-vous sûr de vouloir supprimer ${contact.nom} ?`)) {
      this.contacts = this.contacts.filter(c => c !== contact);
    }
  }

  ajouterFavoris(contact: any) {
    contact.isFavorite = !contact.isFavorite;
  }
}
