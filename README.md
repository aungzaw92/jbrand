## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list



#JBrand E-Commerce Application
Welcome to JBrand, a stylish and user-friendly e-commerce application with a focus on high-quality food products. This application is built with a modern front-end design to provide a seamless shopping experience.

##Description
##Phase 1: Front-End Development
In this initial phase, we have developed a 4-page application to showcase the essence of JBrand and its offerings:

###Home Page:

- Introduces the company and its mission.
- Features a hero section with captivating text.
- Includes a downloadable product catalog for more details.

###Store Page:

- Displays a catalog of available products.
- Allows users to add products to their shopping cart.

###About Page:

- Provides information about the company.
- Shares details about JBrand's commitment to quality and customer satisfaction.
- Includes contact information.

###Signup Page:

- Allows users to sign up with personal information.

##Getting Started
Follow these simple steps to get the project up and running on your local machine:

###Clone the Repository:


git clone https://github.com/aungzaw92/jbrand.git

###Install Dependencies:


- npm install
- npm install sass

###Run the Application:


- npm run dev

Now you can access the application by navigating to http://localhost:3000 in your browser.

Feel free to explore the different pages and functionalities of the JBrand application.

##Feedback and Contributions
We welcome your feedback and contributions to enhance the user experience of JBrand. If you have any suggestions or find issues, please create an issue or submit a pull request.

Happy shopping with JBrand! 🛒🌟