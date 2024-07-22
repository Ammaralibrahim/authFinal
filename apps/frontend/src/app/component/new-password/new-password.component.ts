import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Validators eklendi
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthState } from '../../store/auth.state';
import * as AuthActions from '../../store/auth.actions';
import { selectAuthMessage, selectAuthError } from '../../store/auth.selectors';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.css'],
})
export class NewPasswordComponent {
  form: FormGroup;
  message$: Observable<string | null>;
  error$: Observable<string | null>;

  constructor(private fb: FormBuilder, private store: Store<{ auth: AuthState }>) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      verificationCode: ['', [Validators.required]],
      newPassword: ['', [Validators.required, Validators.minLength(8), Validators.pattern(/(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/)]]
    });

    this.message$ = this.store.select(selectAuthMessage);
    this.error$ = this.store.select(selectAuthError);
  }

  get newPassword() {
    return this.form.get('newPassword');
  }

  onSubmit() {
    if (this.form.valid) {
      const { email, verificationCode, newPassword } = this.form.value;
      this.store.dispatch(AuthActions.resetPassword({
        email,
        verificationCode,
        newPassword
      }));
    } else {
      this.error$ = this.store.select(selectAuthError);
    }
  }
}
