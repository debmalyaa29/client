# Production Security Hardening Specification

## 1. Purpose

This document defines the security requirements for the premium rice
mill machinery website and its backend services.

Security must be treated as a core product requirement, not as a
final-stage feature.

The application must follow this principle:

> **Never trust the frontend. Authentication, authorization, validation,
> secrets, and security decisions must be enforced server-side.**

The implementation must be production-ready and must not expose
sensitive information through the browser, source code, logs, APIs,
database configuration, or deployment configuration.

------------------------------------------------------------------------

# 2. Security Principles

The implementation must follow:

-   Zero trust for client-side input.
-   Least privilege.
-   Server-side authorization.
-   Secure-by-default configuration.
-   Defense in depth.
-   No secrets in frontend code.
-   No sensitive information in logs.
-   Explicit authentication and authorization for protected operations.
-   Secure failure behavior.
-   Regular dependency updates.
-   Security testing before production deployment.

------------------------------------------------------------------------

# 3. Frontend Secret Protection

## Requirements

No private credentials may exist in frontend/browser code.

Never expose:

-   Database passwords.
-   Database service-role keys.
-   JWT signing secrets.
-   Private API keys.
-   Webhook secrets.
-   OAuth client secrets.
-   Encryption keys.
-   Administrative tokens.
-   Internal service credentials.
-   Cloud provider private credentials.

Public browser configuration must contain only values that are
explicitly safe to expose.

### Mandatory rule

If a credential gives privileged access to a database, API, storage
system, payment system, authentication system, or internal service, it
must remain server-side.

------------------------------------------------------------------------

# 4. Environment Variables and Secret Management

Use environment variables or the deployment platform's secret manager.

Example:

``` env
DATABASE_URL=
JWT_SECRET=
AUTH_SECRET=
WEBHOOK_SECRET=
PRIVATE_API_KEY=
```

Never commit real values to GitHub.

Use:

``` text
.env
.env.local
.env.production
```

in `.gitignore` when appropriate.

Commit only safe examples such as:

``` text
.env.example
```

with placeholder values.

If a real secret is ever committed to Git history:

1.  Assume it is compromised.
2.  Revoke it.
3.  Rotate it.
4.  Replace it.
5.  Remove it from repository history when appropriate.
6.  Check for other exposed credentials.

Deleting the file from the latest commit is not sufficient.

------------------------------------------------------------------------

# 5. Authentication

Use a proper production authentication provider rather than implementing
insecure authentication manually.

Authentication must include:

-   Secure login.
-   Secure logout.
-   Session expiration.
-   Session renewal.
-   Password reset.
-   Email verification where appropriate.
-   Multi-factor authentication.
-   Brute-force protection.
-   Rate limiting.
-   Secure session storage.
-   Server-side authentication checks.

The frontend must never be treated as proof that a user is
authenticated.

------------------------------------------------------------------------

# 6. Two-Factor / Multi-Factor Authentication

Enable MFA/2FA for supported accounts.

Prefer strong methods supported by the selected authentication provider.

Possible methods include:

-   Authenticator applications.
-   Passkeys/WebAuthn.
-   Security keys.
-   Other provider-supported MFA mechanisms.

Avoid relying exclusively on SMS when stronger authentication methods
are available.

For administrative accounts, MFA should be mandatory.

------------------------------------------------------------------------

# 7. Password Security

Never store plaintext passwords.

Passwords must be handled by the selected authentication provider or
securely hashed using a modern password-hashing algorithm.

Requirements:

-   Never log passwords.
-   Never return passwords through APIs.
-   Never store passwords in browser storage.
-   Never send passwords to analytics systems.
-   Never include passwords in error messages.
-   Secure password reset tokens.
-   Expire password reset tokens.
-   Prevent password-reset token reuse.

------------------------------------------------------------------------

# 8. Authentication Token Security

Do not store authentication tokens in `localStorage`.

Avoid exposing long-lived authentication tokens to JavaScript when a
safer session architecture is available.

Prefer:

-   HTTP-only cookies.
-   Secure cookies.
-   SameSite cookie protections.
-   Short-lived access sessions where appropriate.
-   Secure refresh-token handling.

Cookie settings should be appropriate for the deployment architecture:

``` text
HttpOnly
Secure
SameSite=Lax or Strict where possible
```

Never place JWT signing secrets in frontend code.

------------------------------------------------------------------------

# 9. Server-Side Login Verification

Every protected backend endpoint must verify authentication server-side.

Do not trust:

``` text
isLoggedIn
userId
role
admin
permissions
```

values supplied by the frontend.

The server must derive the authenticated identity from a verified
session/token.

Example conceptual flow:

``` text
Browser
   |
   | authenticated request
   v
Server
   |
   | verify session/token
   v
Authenticated User
   |
   | check permissions
   v
Database/API
```

------------------------------------------------------------------------

# 10. Authorization

Authentication answers:

> Who is the user?

Authorization answers:

> What is the user allowed to access?

Both must be implemented.

Every protected operation must perform server-side authorization.

Never rely only on:

-   Hidden buttons.
-   Disabled UI controls.
-   Frontend route guards.
-   React state.
-   Client-side role checks.
-   URL obfuscation.

------------------------------------------------------------------------

# 11. Broken Object-Level Authorization / IDOR Protection

Protect every resource by ownership or explicit permission.

Unsafe example:

``` text
GET /api/orders/123
```

The server must not assume that because a user is logged in, they may
access order `123`.

The server must verify:

``` text
authenticated user
        +
resource ownership/permission
        =
authorized request
```

Users must not be able to change an ID in a URL or request body to
access another user's:

-   Profile.
-   Files.
-   Orders.
-   Datasets.
-   Projects.
-   Messages.
-   Documents.
-   Invoices.
-   Settings.
-   Other private resources.

------------------------------------------------------------------------

# 12. Row-Level Security

Enable database Row-Level Security where supported, especially for
user-owned data.

Core requirement:

> **A user must only be able to see and modify data they are authorized
> to access.**

RLS policies should be based on the authenticated database
identity/session rather than a user ID supplied by the frontend.

Example conceptual rule:

``` text
user A -> can access user A data
user B -> can access user B data
user A -> cannot access user B data
```

Do not disable RLS simply to make frontend queries work.

Administrative/service-role credentials must remain server-side.

------------------------------------------------------------------------

# 13. Database Security

Apply least privilege.

Separate:

-   Public/client access.
-   Authenticated user access.
-   Server application access.
-   Administrative access.

Never expose a database directly to an untrusted public client unless
the database security model explicitly supports it and RLS/policies are
correctly configured.

Protect:

-   Database URLs.
-   Passwords.
-   Service-role keys.
-   Admin credentials.
-   Migration credentials.

------------------------------------------------------------------------

# 14. Server-Side Input Validation

Validate every user-controlled input on the server.

This includes:

-   Form fields.
-   Query parameters.
-   URL parameters.
-   Request bodies.
-   Headers when user-controlled.
-   File names.
-   Uploaded files.
-   Search queries.
-   IDs.
-   JSON payloads.
-   Webhook payloads.
-   External API data when treated as untrusted.

Use strict schemas.

Example conceptual validation:

``` text
Request
  ↓
Schema validation
  ↓
Authorization
  ↓
Business logic
  ↓
Database
```

Never assume frontend validation is sufficient.

------------------------------------------------------------------------

# 15. Cross-Site Scripting Protection

Protect against:

-   Stored XSS.
-   Reflected XSS.
-   DOM-based XSS.

Requirements:

-   Avoid unsafe HTML injection.
-   Do not use raw HTML rendering unless necessary.
-   Sanitize user-controlled HTML.
-   Escape output appropriately.
-   Validate input.
-   Configure a Content Security Policy where practical.

Avoid unsafe patterns such as arbitrary:

``` javascript
innerHTML
```

with untrusted data.

------------------------------------------------------------------------

# 16. CSRF Protection

If authentication uses cookies, protect state-changing operations
against CSRF.

Use appropriate combinations of:

-   SameSite cookies.
-   CSRF tokens.
-   Origin/Referer validation where appropriate.
-   Secure request handling.

State-changing methods such as:

``` text
POST
PUT
PATCH
DELETE
```

must not blindly trust cross-site requests.

------------------------------------------------------------------------

# 17. CORS

Use a strict CORS allowlist.

Do not use:

``` text
Access-Control-Allow-Origin: *
```

for credentialed authenticated APIs.

Allow only trusted production origins.

Example conceptual configuration:

``` text
https://example.com
https://www.example.com
```

Do not allow arbitrary origins in production.

------------------------------------------------------------------------

# 18. HTTPS

Force HTTPS in production.

Requirements:

-   Redirect HTTP to HTTPS.
-   Use secure cookies.
-   Enable HSTS where appropriate.
-   Do not transmit credentials over HTTP.
-   Do not allow mixed-content resources.
-   Ensure production API requests use HTTPS.

------------------------------------------------------------------------

# 19. Rate Limiting

Implement rate limits for abuse-prone endpoints.

At minimum consider:

-   Login.
-   Signup.
-   Password reset.
-   MFA verification.
-   OTP requests.
-   API endpoints.
-   File uploads.
-   Contact forms.
-   Search endpoints.
-   Expensive AI operations.
-   Webhook endpoints.

Use stronger limits for authentication and security-sensitive
operations.

Return appropriate responses such as:

``` text
429 Too Many Requests
```

Do not reveal internal rate-limit implementation details.

------------------------------------------------------------------------

# 20. Request Size and Resource Limits

Protect backend services from resource exhaustion.

Configure:

-   Request body limits.
-   File upload limits.
-   JSON payload limits.
-   Timeout limits.
-   Pagination limits.
-   Query complexity limits where applicable.
-   Maximum processing duration for expensive operations.

Never allow unlimited uploads or unlimited expensive requests.

------------------------------------------------------------------------

# 21. Webhook Security

All incoming webhooks must be treated as untrusted.

Requirements:

1.  Verify the provider's webhook signature.
2.  Use the correct secret.
3.  Validate timestamp/replay protections where supported.
4.  Reject invalid signatures.
5.  Reject malformed payloads.
6.  Prevent webhook replay.
7.  Process only verified events.

Never trust a webhook merely because it came from a public endpoint.

Webhook secrets must remain server-side.

------------------------------------------------------------------------

# 22. SSRF Protection

If the backend fetches URLs supplied by users or external data:

Protect against Server-Side Request Forgery.

Block or restrict access to:

-   localhost.
-   `127.0.0.1`.
-   Private IP ranges.
-   Internal services.
-   Cloud metadata endpoints.
-   Internal DNS targets.
-   Untrusted protocols.
-   Unexpected redirects.

Prefer an explicit URL/domain allowlist whenever possible.

Do not blindly perform:

``` text
fetch(userProvidedUrl)
```

on the server.

------------------------------------------------------------------------

# 23. Prompt Injection Protection

Any AI functionality must treat external content as untrusted.

Potential untrusted sources include:

-   User prompts.
-   Uploaded files.
-   Websites.
-   Emails.
-   Documents.
-   Database content.
-   API responses.
-   Search results.

Requirements:

-   Test against prompt injection.
-   Separate system instructions from untrusted data.
-   Never allow user content to override security rules.
-   Apply least-privilege tool access.
-   Require server-side authorization before sensitive actions.
-   Do not allow model output to directly execute privileged operations.
-   Validate tool arguments server-side.
-   Log security-relevant events without exposing sensitive content.

Example:

``` text
User input
   ↓
Untrusted content
   ↓
AI processing
   ↓
Validated tool request
   ↓
Server authorization
   ↓
Allowed action
```

------------------------------------------------------------------------

# 24. Error Handling

Production responses must not expose internal implementation details.

Do not return:

-   Stack traces.
-   Database errors.
-   SQL queries.
-   File-system paths.
-   Environment variables.
-   Secret values.
-   Internal service names.
-   Authentication internals.
-   Framework debugging information.

Instead return safe messages such as:

``` text
Something went wrong. Please try again later.
```

Detailed diagnostic information should remain in protected server-side
logging.

------------------------------------------------------------------------

# 25. Security Logging

Implement structured server-side logging.

Log useful security events such as:

-   Login failures.
-   Successful authentication events where appropriate.
-   Password reset attempts.
-   MFA failures.
-   Authorization failures.
-   Rate-limit violations.
-   Suspicious requests.
-   Webhook verification failures.
-   Prompt-injection attempts.
-   SSRF blocks.
-   Administrative actions.
-   Security configuration failures.

------------------------------------------------------------------------

# 26. Sensitive Data Must Never Be Logged

Never log:

-   Passwords.
-   Access tokens.
-   Refresh tokens.
-   JWTs.
-   API keys.
-   Database credentials.
-   Session cookies.
-   MFA secrets.
-   Password reset tokens.
-   Webhook secrets.
-   Private encryption keys.

Minimize personally identifiable or sensitive data in logs.

Use identifiers that are safe and necessary for debugging.

------------------------------------------------------------------------

# 27. Security Alerts

Configure alerts for important security events.

Potential alerts:

-   Repeated failed login attempts.
-   Brute-force patterns.
-   Large authorization-failure spikes.
-   Repeated webhook signature failures.
-   Suspicious SSRF attempts.
-   Rate-limit abuse.
-   Prompt-injection attacks.
-   Unexpected administrative activity.
-   Authentication configuration failures.
-   Critical dependency vulnerabilities.

Alerts should be actionable and avoid exposing sensitive information.

------------------------------------------------------------------------

# 28. Production Source Maps

Do not publicly expose production source maps by default.

If source maps are required for error monitoring:

-   Upload them to a protected monitoring service.
-   Restrict public access.
-   Do not expose internal source code unnecessarily.

Production builds should not accidentally publish:

``` text
*.map
```

files publicly.

------------------------------------------------------------------------

# 29. Dependency Security

Keep all dependencies updated.

Regularly run:

``` bash
npm audit
```

and appropriate dependency/security scanning tools.

Requirements:

-   Update vulnerable dependencies.
-   Prioritize critical and high-severity vulnerabilities.
-   Remove unused packages.
-   Avoid abandoned dependencies.
-   Review dependency changes.
-   Keep lockfiles committed.
-   Do not blindly install packages without reviewing their purpose.

Before production deployment:

``` text
No known unresolved critical vulnerabilities
```

should remain without an explicit security decision.

------------------------------------------------------------------------

# 30. Default Credentials

Never deploy production systems with:

-   Default passwords.
-   Default admin accounts.
-   Demo credentials.
-   Hardcoded test accounts.
-   Public development credentials.

All default credentials must be removed or changed before production.

------------------------------------------------------------------------

# 31. Secure Headers

Configure appropriate security headers.

Consider:

``` text
Strict-Transport-Security
Content-Security-Policy
X-Content-Type-Options
Referrer-Policy
Permissions-Policy
```

Use headers appropriate to the application architecture.

Avoid unnecessary permissive policies.

------------------------------------------------------------------------

# 32. File Upload Security

If file uploads exist:

-   Validate file type.
-   Validate file size.
-   Do not trust file extensions.
-   Inspect MIME type.
-   Rename uploaded files.
-   Store uploads outside executable paths.
-   Restrict dangerous file types.
-   Scan files where appropriate.
-   Do not expose private uploads publicly.
-   Authorize every download.
-   Prevent path traversal.

Never trust a filename supplied by the client.

------------------------------------------------------------------------

# 33. Path Traversal Protection

Never directly construct filesystem paths from user input.

Reject suspicious path patterns such as:

``` text
../
..\ 
absolute paths
unexpected encoded traversal
```

Use safe path resolution and allowlists.

------------------------------------------------------------------------

# 34. API Security

Every API endpoint must define:

-   Authentication requirement.
-   Authorization requirement.
-   Input schema.
-   Output schema.
-   Rate limit where appropriate.
-   Error behavior.
-   Maximum request size.
-   Logging requirements.

Do not create undocumented privileged endpoints.

------------------------------------------------------------------------

# 35. Server-Only Operations

The following must remain server-side:

-   Database administration.
-   Service-role database access.
-   Private API calls.
-   Secret-bearing API calls.
-   Payment operations.
-   Webhook verification.
-   JWT signing.
-   Sensitive AI tool execution.
-   Administrative operations.
-   Secret management.

The frontend should communicate with a controlled server API.

------------------------------------------------------------------------

# 36. Frontend Security Rules

The frontend must:

-   Assume all browser state can be modified.
-   Never enforce authorization by itself.
-   Never contain private secrets.
-   Never contain service-role credentials.
-   Never trust user IDs from local state.
-   Never trust role values from local storage.
-   Never trust hidden fields for security decisions.
-   Avoid storing sensitive tokens in localStorage.
-   Use safe rendering practices.

Frontend checks are for UX.

Server checks are for security.

------------------------------------------------------------------------

# 37. Security Testing

Before production, test at minimum:

## Authentication

-   Invalid login.
-   Brute-force attempts.
-   Expired session.
-   Invalid session.
-   Logout behavior.
-   Password reset.
-   MFA bypass attempts.
-   Token replay.

## Authorization

-   User A attempting to access User B data.
-   Modified resource IDs.
-   Modified role values.
-   Unauthorized admin routes.
-   Unauthorized API calls.

## Input

-   XSS payloads.
-   Injection attempts.
-   Oversized requests.
-   Malformed JSON.
-   Invalid IDs.
-   Unexpected data types.

## API

-   Missing authentication.
-   Invalid authentication.
-   Missing authorization.
-   Rate-limit bypass attempts.
-   CORS testing.
-   CSRF testing.

## Webhooks

-   Invalid signature.
-   Missing signature.
-   Replay attempts.
-   Modified payload.

## SSRF

-   Localhost URLs.
-   Private IP addresses.
-   Cloud metadata addresses.
-   Redirect-based SSRF.
-   Internal hostnames.

## AI

-   Prompt injection.
-   Tool manipulation.
-   Privilege escalation through model output.
-   Untrusted document instructions.
-   Attempts to reveal system instructions or secrets.

------------------------------------------------------------------------

# 38. Security Acceptance Checklist

Before production release, verify:

-   [ ] No private keys in frontend.
-   [ ] No database service-role keys in frontend.
-   [ ] No JWT secrets in frontend.
-   [ ] No API secrets in GitHub.
-   [ ] `.env` files are protected.
-   [ ] Production secrets are stored in deployment secret management.
-   [ ] Proper authentication provider is configured.
-   [ ] Server-side login verification is enabled.
-   [ ] MFA/2FA is enabled.
-   [ ] Passwords are securely handled.
-   [ ] Authentication tokens are not stored in localStorage.
-   [ ] Secure sessions/cookies are configured.
-   [ ] Server-side authorization is implemented.
-   [ ] Object-level authorization is tested.
-   [ ] RLS is enabled where applicable.
-   [ ] Users can only access authorized data.
-   [ ] Every input is validated server-side.
-   [ ] Rate limiting is configured.
-   [ ] HTTPS is enforced.
-   [ ] HSTS is considered/configured.
-   [ ] CORS is restricted.
-   [ ] CSRF protection is implemented where required.
-   [ ] XSS protections are implemented.
-   [ ] CSP is configured where practical.
-   [ ] Webhook signatures are verified.
-   [ ] SSRF protections are implemented.
-   [ ] Prompt injection defenses are tested.
-   [ ] Production errors do not expose internals.
-   [ ] Sensitive data is excluded from logs.
-   [ ] Security alerts are configured.
-   [ ] Production source maps are not publicly exposed.
-   [ ] Default credentials are removed.
-   [ ] Dependencies are updated.
-   [ ] Vulnerable dependencies are addressed.
-   [ ] File uploads are secured where applicable.
-   [ ] Security headers are configured.
-   [ ] Authorization tests pass.
-   [ ] Authentication tests pass.
-   [ ] Security regression tests are included.

------------------------------------------------------------------------

# 39. Antigravity Implementation Rule

When implementing this project, do not mark a feature as complete simply
because it works from the browser.

For every protected feature:

``` text
Frontend
   ↓
Input validation
   ↓
Authenticated request
   ↓
Server authentication
   ↓
Server authorization
   ↓
Object ownership / permission check
   ↓
Database RLS / least privilege
   ↓
Operation
   ↓
Safe response
   ↓
Security-aware logging
```

The frontend is never the final security boundary.

------------------------------------------------------------------------

# 40. Final Security Principle

> **Build the application so that a malicious user controlling the
> browser cannot bypass authentication, authorization, data ownership
> rules, rate limits, input validation, or server-side security
> controls.**

The website must remain secure even if a user:

-   Modifies JavaScript.
-   Changes API requests.
-   Changes resource IDs.
-   Manipulates browser storage.
-   Calls APIs directly.
-   Removes frontend restrictions.
-   Sends malformed input.
-   Replays requests.
-   Attempts prompt injection.
-   Attempts XSS.
-   Attempts CSRF.
-   Attempts SSRF.
-   Attempts privilege escalation.

**Security must be enforced at the server and database layers, not
merely represented in the UI.**
