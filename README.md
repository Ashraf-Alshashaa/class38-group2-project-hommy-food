# Hommy Food

## 1. Description

This app helps the freelance chefs to post them meals and sale them online.
Our registered clients can order the meals they want or choosing a specific chef to order from according to his rate or cuisine.
The guest user can have overview about our app also but with a limited permissions.

## 2. Usage

- User (guest) can overview the app.
- User can create an account and choose between a chef or client.
- Ability to search for a meal according to the meal name, ingredients, category or cuisine.
- Adding a specific chef to a favorite.
- Finding the top 10 rated chefs.
- Viewing the chef details, the service his offering (Delivery or Pickup), rating him and see his meal list.
- Users (chef, customer) can edit thier personal profile.
- The user can request several different meals from the same chef for one order.
- In Delivery service, the user can change his default address at the checkout page to a different address.
- In the Pickup service it will be showing the contact and the address of the chef.
- Apple to pay online or cash.
- User can check his order history.
- Order to prepare page helps the chef to organize the orders he has.

## 3. Link and Preview

![App view](./client/public/images/Laptop-and-mobile.jpg)
Project link is available at [Hommy food App](https://hyf-c38-grou-last-work--94cjrp.herokuapp.com/)

### Color guide

![App color guide](./client/public/images/Project-color.jpg)

## 4. Setup

First, to setup all the directories run the following in the main directory:

`npm install`

`npm run setup`

The first command will install `cypress` and some small libraries needed for running the rest of the commands. The second will go into the `client` and `server` directories and set those up to be ran.

In the `client` and `server` directory there are two `.env.example` files. Create a copy and rename that to `.env`. Then follow the instructions in those files to fill in the right values.

To run the app in dev mode you can run the following command in the main directory:

`npm run dev`

## 5. Built with

- ![React](https://camo.githubusercontent.com/67a01fa7cf337616274f39c070a11638f2e65720e414ef55b8dd3f9c2a803b2a/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f7374796c653d666f722d7468652d6261646765266d6573736167653d526561637426636f6c6f723d323232323232266c6f676f3d5265616374266c6f676f436f6c6f723d363144414642266c6162656c3d)
- ![Mongoose](https://camo.githubusercontent.com/eb3676422a9e186ce18237e6c1ffee703068f7850c2a513b9a261f33ee335ed6/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f7374796c653d666f722d7468652d6261646765266d6573736167653d4d6f6e676f444226636f6c6f723d343741323438266c6f676f3d4d6f6e676f4442266c6f676f436f6c6f723d464646464646266c6162656c3d)
- ![css3](https://camo.githubusercontent.com/e6b67b27998fca3bccf4c0ee479fc8f9de09d91f389cccfbe6cb1e29c10cfbd7/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f637373332d2532333135373242362e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d63737333266c6f676f436f6c6f723d7768697465)
- <img src="https://github.com/richnologies/richnologies/raw/master/stripe_partner_badge_community_blurple.png" width="150" />
- ![Express](https://camo.githubusercontent.com/0a95585d6b3a07028298a45d60b85a1331358bc336549d64dbbc27977f1495f3/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f7374796c653d666f722d7468652d6261646765266d6573736167653d4578707265737326636f6c6f723d303030303030266c6f676f3d45787072657373266c6f676f436f6c6f723d464646464646266c6162656c3d)
- <img src="https://camo.githubusercontent.com/451061eb9714c2135705a1ad757017cc943627ca474d8a20e78209214469bf72/68747470733a2f2f6437756d7169637069373236332e636c6f756466726f6e742e6e65742f696d672f70726f647563742f65306364363161372d316336352d343561302d393765652d3737363364646335313533612f39383834313664302d323562632d346264322d623864622d6633343764306131393335642e706e67" width="140">
- ![Nodejs](https://camo.githubusercontent.com/faec9d89bd2c7d47b91d988dcd0f27011c27e8191d45836cfa36bf2b3c2a92bd/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f7374796c653d666f722d7468652d6261646765266d6573736167653d4e6f64652e6a7326636f6c6f723d333339393333266c6f676f3d4e6f64652e6a73266c6f676f436f6c6f723d464646464646266c6162656c3d)

## 6. Code structure

```
client
├── public
    └── images
    └── index.html
└── src
    └── __tests__
    └── __testUtils__
    └── components
        └── __tests__
        └── Banner
        └── CategoryListCards
        └── chefsSlider
        └── CuisineListButtons
        └── CustomerPersonalInfo
        └── Dropdown
        └── EditFromPopUp
        └── FavoriteChefCard
        └── Footer
        └── Header
        └── InputForm
        └── LoginForm
        └── mealCard
        └── MealList
        └── MsgPopUp
        └── OrderDetailsCards
        └── OrderHistoryCard
        └── OrdersHistory
        └── OrderToPrepareCard
        └── OrderToPrepareItem
        └── OrderToPreparePopup
        └── PersonalInfo
        └── ProfileHeader
        └── RateOfChef
        └── RatingStar
        └── SearchField
        └── ShoppingCart
        └── ShoppingCartCard
        └── UploadImgWidget
    └── contexts
        └── authentication.js
        └── msgPopup.js
    └── hooks
        └── __tests__
        └── fetchOptions.js
        └── postLoginInfo.js
        └── useFetch.js
        └── useWindowSize.js
    └── pages
        └── CheckoutPage
        └── CreateMeal
        └── EditMeal
        └── FavoritesPage
        └── Home
        └── Login
        └── MealDetailPage
        └── OrdersHistoryPage
        └── OrderToPrepare
        └── Payment
        └── ProfilePage
        └── resultPage
        └── ShoppingCart
        └── SignUp
        └── User
    └── util
    App.jsx
    App.css
    AppWrapper.jsx
    index.jsx
cypress
    └── fixtures
    └── integration
    └── plugins
    └── support
server
└── src
    └── __tests__
    └── __testUtils__
    └── controllers
        └── category.js
        └── cuisine.js
        └── favorites.js
        └── meal.js
        └── orders.js
        └── payment.js
        └── rate.js
        └── shoppingCart.js
        └── user.js
    └── db
        └── connectDB.js
    └── models
        └── Category.js
        └── Cuisine.js
        └── Meal.js
        └── User.js
    └── routes
        └── category.js
        └── cuisine.js
        └── favorites.js
        └── meal.js
        └── orders.js
        └── payment.js
        └── rate.js
        └── shoppingCart.js
        └── user.js
    └── util
        └── __tests__
        └── logging.js
        └── validateAllowedFields.js
        └── validationErrorMessage.js
    app.js
    index.js
    testRouter.js
README.md
```

## 7. Nice to have

- [ ] Customer comments in the chef page.
- [ ] Video about the chef.
- [ ] Chef biography.
- [ ] Extra filtering in result page.
