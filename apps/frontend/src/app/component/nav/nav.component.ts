import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs'; 
import { map } from 'rxjs/operators';
import { AppState } from '../../store/app.state';
import * as AuthActions from '../../store/auth.actions';
import { selectAuthToken } from '../../store/auth.selectors';
import { AuthService } from '../../auth/auth.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  isLoggedIn = false;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isAuthenticated();
  }
  
  logout(): void {
    this.authService.logout().subscribe(() => {
      this.isLoggedIn = false; // veya isteğe bağlı olarak diğer gereklilikleri de güncelleyebilirsiniz
    });
  }

}
