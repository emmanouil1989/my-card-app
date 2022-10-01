This project use Mock card posts data. Tech stack: 
* NextJs
* Prisma
* Trpc
* Tailwind
* pa11y-ci for accessability checks
* Jest
* React Testing Library
* Playwright for e2e
* Configured Github Actions

To run this project locally you will need a MySql database. I use planetscale free service for this. To feed your database with mock card-post data run `npm run seed` command.

## Generic ToDo

- [x] trpc
- [x] store cards data into db
- [x] set up prisma with planetScale
- [x] integrate cards api
- [x] add github actions and run tests on push

## Card List Component Todo

- [x] responsive for cards list page
- [x] implement cards page
- [x] Test cards page
- [x] accessibility
- [x] improve card list styles   
- [x] bug with list  

## Card Details Component Todo
- [x] implement card details page
- [x] responsive for card Details page
- [x] Test card Details page
- [x] Accessiblity

## Add search feature to main page
- [x] implement search 
- [x] test search function
- [x] Accessiblity

## Implement pagination
- [x] implement pagination
- [x] fix search/pagination combo bug and styles on mobile
- [x] no results pagination bar bug


## Add playwright testing library

- [x] set up playwright
- [ ] add more playwright tests


## Possibly move card details page into a modal.
     
First, run the development server:

```bash
npm run dev
# or
yarn dev
```
