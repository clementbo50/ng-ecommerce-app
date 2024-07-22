import { inject } from '@angular/core';
import { HttpRequest, HttpHandlerFn, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';


/**
 * Intercepteur d'authentification
 * Ajoute le token d'authentification à chaque requête HTTP
 */
export function AuthInterceptor(req: HttpRequest<any>, next: HttpHandlerFn): Observable<HttpEvent<any>> {
    const authService = inject(AuthService);
    const token = authService.getToken();

    const clonedRequest = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${token}`)
    });

    return next(clonedRequest);
}
