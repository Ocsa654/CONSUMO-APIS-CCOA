import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NgFor } from '@angular/common';
import { UsersComponent } from '../users/users.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink, RouterOutlet, NgFor,UsersComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  menuItems = [
    { name: 'PERFIL', link: '/dashboard/profile' },
    { name: 'CONFIGURACION', link: '/dashboard/settings' },
    { name: 'PRIVACIDAD', link: '/dashboard/privacy' },
    { name: 'ANUNCIOS', link: '/dashboard/ads' },
    { name: 'Usuarios', link: '/dashboard/users' }

  ];
}