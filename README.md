# MultipleStores

```sh
npx @angular/cli new multiple-stores
cd multiple-stores

npx ng add @ngrx/store --minimal
npx ng add @ngrx/effects --minimal
npx ng add @ngrx/schematics

npx ng g f products --module=app.module.ts --flat=false
npx ng g f carts --module=app.module.ts --flat=false

```
