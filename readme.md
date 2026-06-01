# From "Classic" to REST API
- Minimal Logic Changes: Most server-side code remains the same; the primary changes are in how request and response data are handled.
- Expanded HTTP Methods: A wider variety of HTTP methods become available for use.
- Statelessness: The REST API server does not track client state. Requests are handled in isolation, meaning no sessions are used.

# Authentication
- Stateless Auth: Because sessions aren't used, authentication must function differently than in "classic" setups.
- Per-Request Proof: Every individual request must include data that proves the user is authenticated.
- JSON Web Tokens (JWT):
1. A common method for storing auth info on the client side.
2. Used to prove authentication status to the server.
3. Security: Tokens are signed by the server and can only be validated by the server.   