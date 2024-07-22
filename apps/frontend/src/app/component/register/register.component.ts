import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Validators eklendi
import { Store } from '@ngrx/store';
import { AuthState } from '../../store/auth.state';
import * as AuthActions from '../../store/auth.actions';
import { Observable } from 'rxjs';
import { selectAuthError } from '../../store/auth.selectors';
import { SweetalertService } from '../../sweetalert.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  form: FormGroup;
  error$: Observable<string | null>;

  constructor(private fb: FormBuilder, private store: Store<AuthState>, private sweetAlertService: SweetalertService) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.pattern(/(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/)]]
    });
    this.error$ = this.store.select(selectAuthError);
  }

  get password() {
    return this.form.get('password');
  }

  submit() {
    if (this.form.valid) {
      const { email, password } = this.form.value;
      this.store.dispatch(AuthActions.register({ email, password }));
    } else {
      this.sweetAlertService.showError('Form is not valid. Please check the requirements.');
    }
  }
}
