# Rainbow Text

Rainbow Text is a simple Node.js module that produces a string formatted with ANSI color codes to create a rainbow gradient effect when printed to the console.

## Installation

Using npm:

```bash
npm install rainbow-text
```

## Usage

const rainbowText = require('rainbow-text');

// rainbowText takes four arguments: the input string, saturation, lightness, and repetitions per string.
// saturation and lightness should be values between 0 and 100.
// repetitions per string determines how many times the rainbow gradient repeats across the string.

// Print the output to the console
console.log(rainbowText('Hello, world!', 100, 50, 2));

This will print "Hello, world!" to the console with a rainbow gradient effect.

Please note that the color effects will only display in environments that support ANSI color codes, such as most terminal applications.

## Contributing
If you have any ideas on how this module could be improved, feel free to make a pull request!

## License

MIT
