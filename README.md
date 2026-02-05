# Frontend Mentor - My implementatiuon of the Product preview card component

This is my solution to the [Product preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa). 
Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### Screenshot

![](./screenshot.png)

### Links

- Solution URL: https://github.com/FJSolutions/
- Live Site URL: 

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- `lightningcss`
- Custom `build` script

### What I learned

Being much more intentional about CSS media queries and reducing overriding in the cascade. 

Using a background image in a grid for the main image and adjusting the corners of the image
for mobile of desktop orientations.

```css
@media (width <= 375px ) {
  .product-card {
    grid-template-rows: 1fr 1fr;

    .product__image {
      border-radius: var(--radius) var(--radius) 0 0;
      background-image: url("/images/image-product-mobile.jpg");
    }
  }
}
```
### Continued development

The next steps would be to make this card fit nicely into a grid for displaying multiple products on a page.
The button on the card would also need to lik to a product details and order page.

## Author

- Frontend Mentor - [Francis Judge](https://www.frontendmentor.io/profile/FJSolutions)
