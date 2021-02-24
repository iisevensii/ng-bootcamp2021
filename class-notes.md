https://gifyu.com/image/ZxDG (hehe)

Check package version example:
-g for global, set depth, use Select-String (powershell version of grep) to filter:
npm list -g --depth=0 | Select-String angular

https://oasisdigital.zoom.us/j/86484336073?pwd=ZFdjYVREY0s3VEdWeW9TSnhlUEN0Zz09

https://gifyu.com/image/ZxDG

appModule (or other module - ngModule decorator)
declearation is a list of components used by the module
bootstrap is starting point of the module

for a selector to be used in a template it must be in the declearations

native html elments do not have a dash in the selector, all angular selectors have a dash 

x is not a module:
https://stackoverflow.com/questions/34629517/file-app-hero-ts-is-not-a-module-error-in-the-console-where-to-store-interfac

Review routing in 105

Routing
Lazy-Loading (loadChildren - contains an import (always?))
routerLink, can be used to add things like an ID
routerLinkActive (apply CSS Class)

Day 2
¯¯¯¯¯
Research <router-outlet></router-outlet>

--dry-run

Research ng-container (never makes it into dom, only their contents e.g. ngFor)

<pre> tag (preformated text)

conitionally apply a class [class.name]="condition"

[style.width.%]="expression"

HttpClientModule goes in the module's imports array instead of the providers array

async pipe can be used to consume an observable in the template instead of subscribing in the TS

json pipe shows contents of object instead of just `Object object`

private access modifier when used on an obect injected in a component constructor is the same as creating a private field and allows the object to be used outside of the constructor.

lifecycle hook methods are called even if they aren't implemented!