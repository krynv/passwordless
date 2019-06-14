import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

@Component({
    selector: 'passwordless-auth',
    templateUrl: './passwordless-auth.component.html',
    styleUrls: ['./passwordless-auth.component.scss']
})
export class PasswordlessAuthComponent implements OnInit {
    user;
    email: string;
    emailSent = false;

    errorMessage: string;

    constructor(public afAuth: AngularFireAuth, private router: Router) { }

    ngOnInit() {
        this.user = this.afAuth.authState;

        const url = this.router.url;

        if (url.includes('signIn')) {
            this.confirmSignIn(url);
        }
    }

    async sendEmailLink() {
        const actionCodeSettings = {
            // redirect url
            url: 'http://localhost:4200/login',
            handleCodeInApp: true
        };

        try {
            await this.afAuth.auth.sendSignInLinkToEmail(
                this.email,
                actionCodeSettings
			  );
			
        window.localStorage.setItem('emailForSignIn', this.email);
			  this.emailSent = true;
			
        } catch (err) {
            this.errorMessage = err.message;
        }
    }

    async confirmSignIn(url) {
        try {
            if (this.afAuth.auth.isSignInWithEmailLink(url)) {
                let email = window.localStorage.getItem('emailForSignIn');

                // ask user for email if it doesn't exist
                if (!email) {
                    email = window.prompt('Please provide your email for confirmation');
                }

                // sign in and remove from local storage
                const result = await this.afAuth.auth.signInWithEmailLink(email, url);
				        window.localStorage.removeItem('emailForSignIn');
				
            }
        } catch (err) {
            this.errorMessage = err.message;
        }
    }

    logout() {
        return this.afAuth.auth.signOut();
    }
}
