import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { UpsertType } from '@utils';

import { Users, User } from '../../interfaces/user.interface';
import { UserUpsertComponent } from './user-upsert/user-upsert.component';
import { USERS } from './user.mock';

@Component({
  selector: 'frontend-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {
  public readonly displayedColumns: string[] = [
    'name',
    'id',
    'username',
    'email',
    'role',
    'lastActivity',
    'actions',
  ];
  public data: Users = USERS;
  public dataSource: MatTableDataSource<User> = new MatTableDataSource(
    this.data
  );

  constructor(private readonly dialog: MatDialog) {}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  addUser(): void {
    const dialog = this.dialog.open(UserUpsertComponent, {
      width: '500px',
      disableClose: true,
      data: {
        upsertType: UpsertType.New,
      },
    });

    dialog.afterClosed().subscribe(({ update, user }) => {
      if (update) {
        this.data.push(user);
        this.dataSource.data = this.data;
      }
    });
  }

  editUser(user: User): void {
    const dialog = this.dialog.open(UserUpsertComponent, {
      width: '500px',
      disableClose: true,
      data: {
        upsertType: UpsertType.Edit,
        user,
      },
    });

    dialog.afterClosed().subscribe(({ update, user }) => {
      if (update) {
        this.data = this.data.map((u) => (u.dni === user.dni ? user : u));

        this.dataSource.data = this.data;
      }
    });
  }

  deleteUser(user: User): void {
    this.data = this.data.filter((u) => u.dni !== user.dni);
    this.dataSource.data = this.data;
  }
}
