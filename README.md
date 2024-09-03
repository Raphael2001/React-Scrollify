# React-Scrollify

React-Scrollify is a lightweight, easy-to-style scrollbar component for React applications. It supports RTL (right-to-left) languages and is compatible with all major browsers.

## Features

- **Easy to Style**: Customize the scrollbar to fit your application's design with ease.
- **Cross-Browser Support**: Works seamlessly across all modern browsers.
- **Lightweight**: Minimal footprint ensures fast loading times.
- **RTL Support**: Fully compatible with right-to-left languages.

## Installation

You can install react-scrollify using npm or yarn.

### Using npm

```bash
npm install react-scrollify
```

### Using yarn

```bash
yarn add react-scrollify
```

## Usage

Import React-Scrollify in your React component and use it as a wrapper around the content you want to apply custom scroll behavior to.

```javascript
import Scrollify from "react-scrollify";

function MyComponent() {
  return (
    <Scrollify>
      <div>Your content here</div>
    </Scrollify>
  );
}
```

### Styling

React-Scrollify allows you to style the scrollbar easily using standard CSS. For example:

```css
:root {
  --react-scrollify-thumb: blue;
  --react-scrollify-thumb-hover: lightblue;
  --react-scrollify-track: rgba(0, 0, 0, 0.1);
  --react-scrollify-width: 7px;
  --react-scrollify-side: 4px;
}
```

## Configuration

You can pass configuration options as props to the React-Scrollify component to customize its behavior.

```javascript
<ReactScrollify isRTL={true}>
  <div>Your content here</div>
</ReactScrollify>
```

- `rtl`: Set to `true` for right-to-left language support.

## Browser Support

React-Scrollify is compatible with all major browsers, including:

- Chrome
- Firefox
- Safari
- Edge

## Contributing

We welcome contributions to React-Scrollify! To contribute:

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
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE.md) file for details.

## Acknowledgments

Special thanks to all contributors and the React community for their support and inspiration.
