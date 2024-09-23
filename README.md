[![GitHub release](https://img.shields.io/github/release/Raphael2001/Sleek-Scroll?include_prereleases=&sort=semver&color=blue)](https://github.com/Raphael2001/Sleek-Scroll/releases/)
[![License](https://img.shields.io/badge/License-MIT-blue)](#license)
[![issues - Sleek-Scroll](https://img.shields.io/github/issues/Raphael2001/Sleek-Scroll)](https://github.com/Raphael2001/Sleek-Scroll/issues)

# Sleek-Scroll

Sleek-Scroll is a lightweight, easy-to-style scrollbar component for React applications. It supports RTL (right-to-left) languages and is compatible with all major browsers.

## Features

- **Easy to Style**: Customize the scrollbar to fit your application's design with ease.
- **Cross-Browser Support**: Works seamlessly across all modern browsers.
- **Full Support for Content Size Change**: Automatically adjusts the scrollbar when the content size changes, ensuring a smooth user experience.
- **Lightweight**: Minimal footprint ensures fast loading times.
- **Zero Dependencies**: Sleek-Scroll has no external dependencies, ensuring optimal performance.
- **RTL Support**: Fully compatible with right-to-left languages.

## Installation

You can install sleek-scroll using npm or yarn.

### Using npm

```bash
npm install sleek-scroll
```

### Using yarn

```bash
yarn add sleek-scroll
```

## Usage

Import Sleek-Scroll in your React component and use it as a wrapper around the content you want to apply custom scroll behavior to.

```javascript
import SleekScrollbar from "sleek-scroll";

function MyComponent() {
  return (
    <SleekScrollbar>
      <div>Your content here</div>
    </SleekScrollbar>
  );
}
```

### Styling

Sleek-Scroll allows you to style the scrollbar easily using standard CSS. For example:

```css
:root {
  --sleek-scroll-thumb: blue;
  --sleek-scroll-thumb-hover: lightblue;
  --sleek-scroll-track: rgba(0, 0, 0, 0.1);
  --sleek-scroll-width: 7px;
  --sleek-scroll-side: 4px;
}
```

## Configuration

You can pass configuration options as props to the Sleek-Scroll component to customize its behavior.

```javascript
<SleekScrollbar isRTL={true}>
  <div>Your content here</div>
</SleekScrollbar>
```

- `rtl`: Set to `true` for right-to-left language support.

## Browser Support

Sleek-Scroll is compatible with all major browsers, including:

- Chrome
- Firefox
- Safari
- Edge

## Contributing

We welcome contributions to Sleek-Scroll! To contribute:

1. Fork the repository.
2. Create your feature branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m 'Add some feature'
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request **to the `dev` branch**.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE.md) file for details.

## Acknowledgments

Special thanks to all contributors and the React community for their support and inspiration.
