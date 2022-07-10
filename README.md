# What is Angular

- A JS framework to Create reactive SPA
- SPA is an application that page does not refresh constantly
  - All the changes done by JS, JS change DOM
- Angular versioning:
  - AngularJS had some fundamental flaws
  - Angular2+ is a completely new written framework
    - From version 2 most of the versions has a very good backward compatibility
- Angular CLI
  - Angular projects are very elaborate
  - Optimize our code
  - Scaffold a pre-written boilerplate
  - `pnpm add -g @angular/cli`
    - [Learn more about awesome `pnpm`](https://pnpm.io/)
  - `ng new app-name`
    - `app-name` cannot have white space, or name it test
    - Add `--no-strict` to make it a bit easier to start but I do not think it would be necessary
  - `pnpm start`
    - Or use `ng serve`
    - Start your Angular app
      - ### **How Angular bootstrap our app**:
        1. Bundle codes into multiple JS files
        2. Add those scripts link in the `index.html` automatically while stating app
        3. Now `main.ts` codes will be executed
        4. From `main.ts` we go into `app.module.ts`
        5. From `app.module.ts` rest of the components would be read and handled
- App Module
  - App Component
    - template/html
      - Directives
    - css
    - typescript
  - `imports` should contains which part of the Angular you need.
- Configure bootstrap for styling
  - Use native bootstrap
    - `pnpm add bootstrap`
    - `ng add bootstrap`
    - `angular.json`
      - append to `architect -> build -> styles`
        - `node_modules/bootstrap/dist/css/bootstrap.min.css`
  - Use something re-written
    - `ng add ngx-bootstrap`
  - IDK which one is better
