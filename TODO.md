When deploying for real, remember:
- AUTH_URL in .env needs to be replaced with the deployment URL instead of localhost
- GitHub App Auth's callback needs to be replaced with the deployment URL as well
- Configure Google OAuth when deployed properly (change callback url!)