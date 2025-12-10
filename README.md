# Appliance Repair Group - Static Website

A GitHub Pages-ready static website template for appliance repair services in Brooklyn, Queens, and Manhattan.

## Quick Deploy to GitHub Pages

1. Create a new GitHub repository
2. Upload all files from this folder to the repository
3. Go to Settings → Pages
4. Set Source to "main" branch and "/ (root)" folder
5. Click Save - your site will be live at `https://yourusername.github.io/repository-name/`

## File Structure

```
appliance-repair-site/
├── index.html              # Homepage
├── css/
│   └── style.css          # Main stylesheet
├── js/
│   └── main.js            # JavaScript functionality
├── images/
│   ├── logo.svg           # Site logo
│   ├── image-decor.svg    # Decorative element
│   ├── usa-flag-vertical.svg
│   ├── best-appliance-repair.svg
│   ├── nyc-appliance-repair.svg
│   ├── convenient-appliance-repair.svg
│   ├── icons/             # Icon files
│   ├── services/          # Service images
│   ├── brands/            # Brand logos
│   ├── backgrounds/       # Background images
│   └── reviews/           # Review avatars
├── README.md              # This file
└── IMAGES.md              # Image download URLs
```

## Customization

### Replace Placeholder Images

The site includes SVG placeholder images. To use real images:

1. See `IMAGES.md` for original image URLs
2. Download images from those URLs
3. Replace the `.svg` files with `.jpg` or `.png` versions
4. Update the file extensions in `index.html`

### Update Content

1. Open `index.html` in a text editor
2. Replace phone number: Search for `(646) 453-5353` and `6464535353`
3. Replace business name: Search for `Appliance Repair Group`
4. Replace address: Search for `2617 Coney Island Avenue`
5. Update service areas and content as needed

### Update Colors

Edit `css/style.css` and change the CSS variables at the top:

```css
:root {
    --primary-color: #d80027;     /* Red - buttons, accents */
    --secondary-color: #002472;   /* Navy - headers, CTA backgrounds */
    --text-color: #545454;        /* Gray - body text */
    --heading-color: #0e0e0e;     /* Dark - headings */
}
```

## Features

- ✅ Fully responsive design
- ✅ Mobile-first approach
- ✅ Sticky header navigation
- ✅ Mobile hamburger menu
- ✅ Back-to-top button
- ✅ Contact form with validation
- ✅ Google Maps embed
- ✅ SEO optimized with meta tags
- ✅ Schema.org structured data
- ✅ Clean URL structure (no .html extensions)
- ✅ No external JavaScript frameworks
- ✅ Vanilla HTML/CSS/JS only

## Clean URLs

Links in this template don't include `.html` extensions. To make this work on GitHub Pages:

**Option 1: Add .html extension**
Change all internal links to include `.html`:
```html
<a href="about.html">About</a>
```

**Option 2: Create folders with index.html files**
Create a folder for each page with an `index.html` inside:
```
about/index.html
contact-us/index.html
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Credits

Template extracted and optimized for static deployment from WordPress theme.

## License

This template is provided for personal/commercial use. Replace all content and images before deploying for your own business.
