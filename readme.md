# MVC (Models Views Controllers)
- it's all about separation of Concerns

1. Models:
- Represent your data in your code
- Work with your data (save, fetch)

2. Views
- What the users sees
- Decoupled from your application code

3. Controllers
- Connecting your models and your views
- Contains the "in-between" logic, like the middleware sort of
- Contollers are Split across multiple middleware functions
- Should only make sure that the two can communicate (in both directions)

3.1 Routes
- Routes which define upon which path for which http method which controller code should execute