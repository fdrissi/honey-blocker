# Block Honey Affiliate Redirects
Block Honey Affiliate Redirects is a Chrome extension that prevents Honey from opening hidden tabs for affiliate code application while preserving its coupon functionality.

## Features
- Blocks Honey's hidden tab redirection for affiliate codes.
- Keeps Honey’s coupon feature working.

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/fdrissi/honey-blocker.git
2. Go to chrome://extensions in Chrome.
3. Enable Developer mode.
4. Click Load unpacked and select the project folder.

## How It Works
The extension blocks new tabs Honey opens to apply affiliate codes, while keeping its coupon feature intact. It listens for new tabs being created by Honey and checks if the URL matches known affiliate code URLs. If so, it closes the tab to prevent any unwanted affiliate tracking.

## Permissions
- **Tabs**: To monitor new tab creation.
- **Host Permissions**: To check and block Honey URLs (`https://o.honey.io/*`).

## Contributing
If you'd like to contribute to the project, follow these steps:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Commit your changes (`git commit -am 'Add new feature'`).
4. Push to the branch (`git push origin feature/your-feature`).
5. Open a pull request with a detailed description of the changes.

## License
MIT License
