1. Authentication
- Definition: Authentication ensures that not every visitor can view and interact with all parts of a page.
- Implementation: It must occur on the server-side and is typically built using sessions.
- Route Protection: Routes are protected by checking the (session-controlled) login status immediately before accessing a controller action.

2. Security & UX
- Passwords: Should always be stored in a hashed form.
- CSRF Protection: CSRF attacks are a significant threat; therefore, CSRF protection should be included in any application you build.
- User Experience (UX): To improve UX, you can flash data or messages into the session, which can then be displayed within your views.
