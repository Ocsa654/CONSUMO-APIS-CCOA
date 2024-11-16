import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: true,
  template: `
    <div class="profile-container">
      <div class="profile-header">
        <img class="profile-image" src="https://via.placeholder.com/150" alt="User Profile Picture">
        <div class="profile-info">
          <h2>John Doe</h2>
          <p class="profile-title">Web Developer & Designer</p>
          <p class="profile-email">johndoe&#64;example.com</p>
        </div>
      </div>
      <div class="profile-about">
        <h3>About Me</h3>
        <p>
          Hello! I'm John, a web developer with over 5 years of experience creating seamless, responsive, and modern web applications.
          I love coding, designing intuitive interfaces, and collaborating on innovative projects.
        </p>
      </div>
      <div class="profile-skills">
        <h3>Skills</h3>
        <ul>
          <li>JavaScript</li>
          <li>Angular</li>
          <li>CSS & Sass</li>
          <li>UI/UX Design</li>
        </ul>
      </div>
      <div class="profile-social">
        <h3>Find me on</h3>
        <a href="https://twitter.com" target="_blank" aria-label="Twitter">
          <img src="https://via.placeholder.com/30?text=T" alt="Twitter">
        </a>
        <a href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
          <img src="https://via.placeholder.com/30?text=L" alt="LinkedIn">
        </a>
        <a href="https://github.com" target="_blank" aria-label="GitHub">
          <img src="https://via.placeholder.com/30?text=G" alt="GitHub">
        </a>
      </div>
    </div>
  `,
  styles: [`
    .profile-container {
      max-width: 700px;
      margin: 40px auto;
      padding: 20px;
      border-radius: 12px;
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
      background: linear-gradient(to right, #f8fafc, #e0e7ff);
      color: #333;
      font-family: Arial, sans-serif;
    }

    .profile-header {
      display: flex;
      align-items: center;
      border-bottom: 2px solid #ddd;
      padding-bottom: 20px;
      margin-bottom: 20px;
    }

    .profile-image {
      border-radius: 50%;
      width: 120px;
      height: 120px;
      object-fit: cover;
      margin-right: 20px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }

    .profile-info h2 {
      margin: 0;
      font-size: 28px;
      color: #2b2b2b;
    }

    .profile-title {
      margin: 5px 0;
      font-size: 18px;
      color: #5a67d8;
    }

    .profile-email {
      color: #555;
      font-size: 14px;
    }

    .profile-about,
    .profile-skills,
    .profile-social {
      margin-bottom: 20px;
    }

    .profile-about h3,
    .profile-skills h3,
    .profile-social h3 {
      font-size: 22px;
      color: #333;
      margin-bottom: 10px;
    }

    .profile-about p {
      font-size: 16px;
      color: #444;
      line-height: 1.6;
    }

    .profile-skills ul {
      list-style: none;
      padding: 0;
      display: flex;
      gap: 10px;
    }

    .profile-skills li {
      background: #5a67d8;
      color: #fff;
      padding: 8px 12px;
      border-radius: 5px;
      font-size: 14px;
    }

    .profile-social a {
      margin-right: 15px;
      display: inline-block;
      transition: transform 0.3s ease;
    }

    .profile-social a:hover {
      transform: scale(1.1);
    }

    .profile-social img {
      width: 30px;
      height: 30px;
      border-radius: 50%;
    }
  `]
})
export class ProfileComponent {}
