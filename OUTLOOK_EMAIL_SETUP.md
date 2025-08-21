# Outlook Email Configuration for admin@intelligatesolution.com

## Current Issue

The Outlook email `admin@intelligatesolution.com` is failing authentication with error:

```
535 5.7.139 Authentication unsuccessful, the request did not meet the criteria to be authenticated successfully
```

## Solutions to Try

### Option 1: Enable App Password (Recommended)

1. Go to [Microsoft Account Security](https://account.microsoft.com/security)
2. Sign in with `admin@intelligatesolution.com`
3. Under **Sign-in options**, find **App passwords**
4. Generate a new app password for "Mail App"
5. Use this app password instead of the regular password

### Option 2: Enable Less Secure Apps

1. Go to [Microsoft 365 Admin Center](https://admin.microsoft.com)
2. Navigate to **Settings** > **Org settings** > **Modern authentication**
3. Ensure modern authentication is enabled
4. Or try enabling SMTP AUTH in Exchange Online

### Option 3: Use OAuth2 (Most Secure)

```javascript
const transporter = nodemailer.createTransporter({
  service: "outlook",
  auth: {
    type: "OAuth2",
    user: "admin@intelligatesolution.com",
    clientId: "YOUR_CLIENT_ID",
    clientSecret: "YOUR_CLIENT_SECRET",
    refreshToken: "YOUR_REFRESH_TOKEN",
  },
});
```

### Option 4: Correct SMTP Settings

```javascript
const transporter = nodemailer.createTransporter({
  host: "smtp.office365.com", // Try this instead of smtp-mail.outlook.com
  port: 587,
  secure: false,
  auth: {
    user: "admin@intelligatesolution.com",
    pass: "qnztrxfqhpxgrlff",
  },
  tls: {
    rejectUnauthorized: false,
  },
});
```

## Current Final Solution

- **Sender**: `admin@intelligatesolution.com` (Outlook SMTP)
- **Recipient**: `admin@intelligatesolution.com` (all notifications)
- **SMTP Host**: `smtp.office365.com`
- All emails are sent from and delivered to the admin email

## Next Steps

1. Try Option 1 (App Password) first
2. If that doesn't work, try Option 4 (Different SMTP host)
3. Contact your email administrator for proper SMTP credentials
