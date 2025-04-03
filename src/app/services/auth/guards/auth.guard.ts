import { inject } from "@angular/core";
import { UserService } from "../../user/user.service";
import { Router } from "@angular/router";

export const authGuard = () => {
    const userService = inject(UserService);
    const router = inject(Router);
    
    if(userService.isTokenExpired()) {
        userService.logout()
        router.navigate(['/admin']);
    }
    
    if(userService.isLoggedIn()) {
        return true
    }else {
        router.navigate(['/admin']);
        return false
    }
}

