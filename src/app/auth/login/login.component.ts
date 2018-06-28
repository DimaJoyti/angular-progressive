import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../auth.service";

@Component({
  selector: "login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent {
  constructor(public auth: AuthService, private router: Router) {}

  async signInWithGithub() {
    await this.auth.githubLogin();
    return await this.afterSignIn();
  }

  async signInWithGoogle() {
    await this.auth.googleLogin();
    return await this.afterSignIn();
  }

  async signInWithFacebook() {
    await this.auth.facebookLogin();
    await this.afterSignIn();
  }

  async signInWithTwitter() {
    await this.auth.twitterLogin();
    return await this.afterSignIn();
  }

  async signInAnonymously() {
    await this.auth.anonymousLogin();
    return await this.afterSignIn();
  }

  private afterSignIn() {
    // Do after login stuff here, such router redirects, toast messages, etc.
    return this.router.navigate(["/"]);
  }
}
