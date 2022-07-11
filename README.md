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
      - **This command in my case did not pan out**
    - `angular.json`
      - append to `architect -> build -> options -> styles`
        - `node_modules/bootstrap/dist/css/bootstrap.min.css`
  - Use something re-written
    - `ng add ngx-bootstrap`
      - [In my case I face a weird behavior](https://github.com/valor-software/ngx-bootstrap/issues/6481). So I went with alternative way: `pnpm add ngx-bootstrap`
      - We still need to install, or add bootstrap css CDN manually.
  - IDK which one is better

# Steps before creating a new Angular app

- **If you are like me, A picky backend developer with dogmatic fervent belief that what you know is 100% transmutable to frontend I should say I am so sorry but unfortunately we have to adapt ourselves with a new realities\*. So please use a broom and clean sweep your mind. Be like a junior who accepts anything**
- Specify and identify your
  - [components](#what-are-components)
  - [modules]()
  - [models]()
- App Component should soly contains overall app

\* Reality is not a solid singular thing, They are meandering and flowing like water

# What are Components?

- `AppComponent`:
  - Root component
  - A wrapper which holds other components
- Why components
  - Reuse your code
  - Keep business logics in different places.
- Component parts:
  - HTML
  - CSS
  - TS
  - And test file
- Create new component:
  - `ng g c component-name`
  - A class annotated with `@Component`
    - `selector`
      - Should be unique.
      - It is a CSS selector
        - Id selector won't work
        - pseudo classes won't work too
  - A component is directive.
- Data binding
  - Passing data to the template
  - Types
    - String interpolation:
      - `{{ data }}`
      - Any expression that can be at the resolve to string
      - No multiline
      - You can imitate the property binding
        - `attribute="{{property}}"`
    - Property binding:
      - `[property]="data"`
      - Dynamically bind a property to an attribute
      - Do not use property binding and string interpolation in conjunction.
    - Event binding:
      - `(event)="expression"`
      - `$event` is the data emitted by that event.
        - Do type casting to be more type safe
          - `(<HTMLInputElement>event.target).value`
      - e.x. `(event)="methodName()"`
    - Two way data binding:
      - `[(ngModel)]="data"`
    - Data binding for our custom components
      - Mark those properties that you wanna to be accessible outside of the component as accessible via annotating them with `@Input()` decorator
        - `<app-component-selector [childPropertyName]="data"></app-component-selector>`
        - **Pass data from parent to the child**
      - Use `@Output()` decorator to return data from child component to parent component.
        - `<app-component-selector (childPropertyName)="methodDefinedInParent"></app-component-selector>`
        - **Pass data/event from child to the parent**
- Angular does emulates shadow DOM.

# Directives

- Instructions in DOM
- Typically use attribute selector
- `@Directive`
- Built-in directives
  - Structural directive
    - `[ngIf]`
      - Syntax sugar: `*ngIf`
      - Use local reference for else:
        ```html
        <div *ngIf="expression; else localReferenceToAnotherTag">
          If
        </div>
        <ng-template #localReferenceToAnotherTag>Else</ng-template>
        ```
        - It can be added to any HTML tag
        - **You can use it soly in the template**
          - `@ViewChild`
            - We can access to the local reference within our component class with a property annotated with this decorator
            - `@ViewChild() elementName: ElementRef`
            - **Do not touch DOM directly using `@ViewChild()`**
            - Instead of having two way data binding we can just use this feature to just get the data when we need to send it back to the parent component
          - `@ContentChild`
            - To access local references within component content
    - `[ngClass]`
      - Add or remove class dynamically
      - An object where the key is the class name and the value is the condition that specifies when the class should be added to the element.
      - e.x. `[ngClass]="{ 'class-name': expression }"`
    - `[ngFor]`
      - Loop
      - e.x. `<h3 *ngFor="let t of titles; let i = index">{{ i }}: {{ t }}</h3>`
- `<ng-content></ng-content>`
  - It is a hook
  - Since Angular prevent passing HTML between components to avoid any XSS attack this hook makes our code a lot more easier to read and maintain.
  - You can access the content between your component's call in the child component.
    ```html
    <app-child-component>
      <div *ngIf="someCondition === true">some data</div>
    </app-child-component>
    ```
- Create a custom directive
  - ` ng g d [name]`
    - Creates a new, generic directive definition in the given or default project
    - Depends on when it is a shared directive or restricted to a component I follow different approaches:
      - `ng g d shared/directives/[name]`
      - `ng g d [component/module]/directives/[name]`
    - Edit the generated directive:
      - Inject `ElementRef`, and `Renderer2`
      - Implement `OnInit` to follow Angular lifecycle
  - Use `@HostListener` decorator to react to events
    ```ts
    //...
    @HostListener('mouseenter') mouseenter(eventData: Event) {
      // Do something
    }
    //...
    ```
  - Use `@HostBinding` decorator to change element properties.
  - A good example written by me in [Stackoverflow](https://stackoverflow.com/a/72940921/8784518)
  - Use `@Input` decorator to pass value to the directive
