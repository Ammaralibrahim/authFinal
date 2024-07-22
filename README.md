<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
   
</head>
<body>
    <header>
        <a href="https://nx.dev" target="_blank" rel="noreferrer">
            <img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45" alt="Nx logo">
        </a>
      <a href="https://nx.dev" target="_blank" rel="noreferrer">
            <img src="https://seeklogo.com/images/A/angular-icon-logo-5FC0C40EAC-seeklogo.com.png" width="45" alt="Nx logo">
        </a>
      <a href="https://nx.dev" target="_blank" rel="noreferrer">
            <img src="https://static-00.iconduck.com/assets.00/nestjs-icon-512x510-9nvpcyc3.png" width="45" alt="Nx logo">
        </a>
       <a href="https://nx.dev" target="_blank" rel="noreferrer">
            <img src="https://cdn.worldvectorlogo.com/logos/ngrx.svg" width="45" alt="Nx logo">
        </a>
        <h1>MEAN Stack Web Application with Nx.dev</h1>
    </header>
    <div class="container">
        <section>
            <h2>📦 Project Overview</h2>
            <p>This project leverages the power of the <strong>MEAN stack</strong> (MongoDB, Express.js, Angular, Node.js, Nest.js) and utilizes <strong>Nx.dev</strong> for efficient monorepo management. Experience a seamless integration of frontend and backend technologies with state-of-the-art development practices.</p>
        </section>
        <section>
            <h2>🛠️ Features</h2>
            <ul>
                <li><strong>User Authentication</strong>: Secure user registration and login with JWT.</li>
                <li><strong>Password Reset</strong>: Easy password reset via email verification codes.</li>
                <li><strong>Token Management</strong>: Robust JWT token handling.</li>
                <li><strong>Nx.dev Integration</strong>: Unified monorepo setup for frontend and backend.</li>
            </ul>
        </section>
        <section>
            <h2>📚 Installation and Setup</h2>
            <h3>Required Software</h3>
            <ul>
                <li><strong>Node.js</strong>: Version 14.x or higher. Download from <a href="https://nodejs.org" target="_blank">nodejs.org</a></li>
                <li><strong>Angular CLI</strong>: Install globally using <code>npm install -g @angular/cli</code></li>
                <li><strong>Nx CLI</strong>: Install globally using <code>npm install -g nx</code></li>
            </ul>
            <h3>Install Dependencies</h3>
            <p>Run the following command in the root directory to install both frontend and backend dependencies:</p>
            <pre><code>npm install</code></pre>
            <h3>Start Development Servers</h3>
            <p>Frontend: Launch the Angular application with:</p>
            <pre><code>npx nx serve frontend</code></pre>
            <p>Backend: Start the Nest.js server with:</p>
            <pre><code>npx nx serve backend</code></pre>
            <h3>🏗️ Build for Production</h3>
            <p>Build the application for production with:</p>
            <pre><code>npx nx build frontend</code></pre>
            <p>The build artifacts will be stored in the output directory (dist/ or build/), ready for deployment.</p>
            <h3>🌐 Continuous Integration (CI)</h3>
            <p>Nx supports local caching out-of-the-box. For enhanced CI, consider:</p>
            <ul>
                <li>Remote Caching</li>
                <li>Task Distribution Across Machines</li>
                <li><a href="https://nx.dev/guides/ci" class="button">CI Setup Guide</a></li>
            </ul>
            <h3>📈 Explore the Project Graph</h3>
            <p>Visualize the workspace graph with:</p>
            <pre><code>npx nx graph</code></pre>
            <p>Discover tasks and dependencies with the Project Graph.</p>
        </section>
        <section>
            <h2>💻 Backend Overview</h2>
            <h3>AuthController</h3>
            <p>The AuthController handles authentication-related endpoints:</p>
            <ul>
                <li><strong>POST /auth/register</strong>: Register a new user and log them in.</li>
                <li><strong>POST /auth/login</strong>: Authenticate a user and return a JWT token.</li>
                <li><strong>POST /auth/verify</strong>: Verify a JWT token.</li>
                <li><strong>PUT /auth/send-verification-code</strong>: Send a verification code for password reset.</li>
                <li><strong>PUT /auth/verify-and-reset-password</strong>: Verify the code and reset the password.</li>
            </ul>
            <h3>AuthService</h3>
            <p>The AuthService contains business logic for:</p>
            <ul>
                <li><strong>User Registration and Login</strong>: Hashes passwords and generates JWT tokens.</li>
                <li><strong>Token Verification</strong>: Validates JWT tokens.</li>
                <li><strong>Password Reset</strong>: Manages password reset functionality and verification codes.</li>
            </ul>
        </section>
        <section>
            <h2>🖥️ Frontend Overview</h2>
            <h3>AuthService</h3>
            <p>The AuthService in Angular manages:</p>
            <ul>
                <li><strong>Authentication</strong>: Handles login, registration, and token management.</li>
                <li><strong>Password Reset</strong>: Calls backend API for password reset and verification code requests.</li>
            </ul>
            <h3>AppModule</h3>
            <p>The AppModule sets up Angular modules and NgRx for state management:</p>
            <ul>
                <li><strong>NgRx</strong>: Manages authentication state with authReducer and AuthEffects.</li>
                <li><strong>Components</strong>: Includes LoginComponent, RegisterComponent, ResetComponent, NewPasswordComponent, and HomeComponent.</li>
            </ul>
        </section>
    </div>
    <footer>
        <p>Happy Coding! 💻🚀 If you have any questions or feedback, feel free to reach out.</p>
    </footer>
</body>
</html>
