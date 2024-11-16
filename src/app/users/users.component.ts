import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="table-container">
      <div class="card">
        <div class="card-header">
          <h2 class="card-title">USUARIOS</h2>
          <p class="card-subtitle">MANEJA A TUS USUARIOS</p>
        </div>
        <div class="card-content">
          <ng-container *ngIf="loading; else loadedContent">
            <div class="skeleton-container">
              <div *ngFor="let item of [1,2,3,4,5]" class="skeleton"></div>
            </div>
          </ng-container>
          <ng-template #loadedContent>
            <div class="table-responsive">
              <table class="user-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Password</th>
                    <th>Avatar</th>
                  </tr>
                </thead>
                <tbody>
                  <tr *ngFor="let user of displayedUsers; trackBy: trackByUserId">
                    <td>{{ user.id }}</td>
                    <td>{{ user.name }}</td>
                    <td>{{ user.email }}</td>
                    <td>{{ user.role }}</td>
                    <td>{{ user.password }}</td>
                    <td>
                      <img [src]="user.avatar" [alt]="user.name" width="50" class="avatar-img">
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="pagination">
              <span>Showing {{ startIndex + 1 }} to {{ endIndex }} of {{ users.length }} entries</span>
              <div class="pagination-buttons">
                <button (click)="previousPage()" [disabled]="currentPage === 1" class="btn">Previous</button>
                <button (click)="nextPage()" [disabled]="endIndex >= users.length" class="btn">Next</button>
              </div>
            </div>
          </ng-template>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .table-container {
        padding: 20px;
        margin: 0 auto;
        max-width: 1200px;
        font-family: 'Arial', sans-serif;
        background-color: #f9fafb;
      }

      .card {
        border-radius: 12px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        background-color: #ffffff;
        overflow: hidden;
      }

      .card-header {
        background-color: #007bff;
        color: #ffffff;
        padding: 20px;
        text-align: center;
      }

      .card-title {
        margin: 0;
        font-size: 1.75rem;
        font-weight: bold;
      }

      .card-subtitle {
        margin-top: 8px;
        font-size: 1rem;
        opacity: 0.9;
      }

      .card-content {
        padding: 20px;
      }

      .table-responsive {
        overflow-x: auto;
      }

      .user-table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 20px;
        font-size: 0.95rem;
      }

      .user-table th, .user-table td {
        text-align: left;
        padding: 12px;
        border-bottom: 1px solid #ddd;
      }

      .user-table th {
        background-color: #e9ecef;
        text-transform: uppercase;
        font-weight: bold;
        font-size: 0.85rem;
        color: #495057;
      }

      .user-table td {
        color: #212529;
      }

      .user-table tr:hover {
        background-color: #f8f9fa;
      }

      .avatar-img {
        border-radius: 50%;
        border: 2px solid #007bff;
      }

      .pagination {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 20px;
        font-size: 0.95rem;
      }

      .pagination-buttons {
        display: flex;
        gap: 8px;
      }

      .btn {
        padding: 10px 20px;
        border: none;
        background-color: #007bff;
        color: white;
        font-size: 14px;
        cursor: pointer;
        border-radius: 6px;
        transition: background-color 0.3s ease;
      }

      .btn:hover {
        background-color: #0056b3;
      }

      .btn:disabled {
        background-color: #d6d6d6;
        cursor: not-allowed;
      }

      .skeleton-container {
        display: flex;
        flex-direction: column;
        gap: 10px;
      }

      .skeleton {
        height: 20px;
        background-color: #e0e0e0;
        border-radius: 6px;
        width: 100%;
      }

      .skeleton:nth-child(1) {
        width: 60%;
      }

      .skeleton:nth-child(2) {
        width: 80%;
      }

      .skeleton:nth-child(3) {
        width: 70%;
      }

      .skeleton:nth-child(4) {
        width: 50%;
      }

      .skeleton:nth-child(5) {
        width: 90%;
      }
    `
  ]
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  displayedUsers: User[] = [];
  loading = true;
  currentPage = 1;
  pageSize = 10;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.loading = true;
    this.userService.getUsers().subscribe({
      next: (data) => {
        this.users = data;
        this.updateDisplayedUsers();
        this.loading = false;
      },
      error: (error) => {
        console.error('Error fetching users:', error);
        this.loading = false;
      }
    });
  }

  updateDisplayedUsers() {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.displayedUsers = this.users.slice(start, end);
  }

  nextPage() {
    if (this.endIndex < this.users.length) {
      this.currentPage++;
      this.updateDisplayedUsers();
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updateDisplayedUsers();
    }
  }

  get startIndex(): number {
    return (this.currentPage - 1) * this.pageSize;
  }

  get endIndex(): number {
    return Math.min(this.startIndex + this.pageSize, this.users.length);
  }

  trackByUserId(index: number, user: User): number {
    return user.id;
  }
}
