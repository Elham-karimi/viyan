import { Component } from '@angular/core';
import { User } from './models/user.model';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public userRes: User | undefined; // default
  private userResPrivate: string | undefined;

  constructor(private http: HttpClient, private fb: FormBuilder) {
  }

  userFg = this.fb.group({ // formGroup
    nameCtrl: ['', [Validators.minLength(3)]], // formControl
    emailCtrl: ['', [Validators.required]],
    passwordCtrl: [],
    ageCtrl: [],
    isAdminCtrl: []
  });

  registerUser(): void {

    console.log(this.userFg.value);

    this.http.post<User>('http://localhost:5000/api/user/register', this.userFg.value).subscribe(
      { next: (res: User) => this.userRes = res },
    );
  }
}
