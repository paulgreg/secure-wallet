# secure wallet

A PWA for password manager, works offline, uses local storage to store all data, built with react + redux + webpack.
Forked from [gauravchl](https://github.com/gauravchl/secure-wallet) (thanks !)

**TODO**

[x] remove google analytics & google fonts
[x] Upgrade webpack & babel (output in build directory)
[] remove react-tap-event-plugin (deprecated)
[] upgrade libraries
[] remove unused deps about asymetric crypto which seems not needed (like elliptic, asn1, diffie-hellman, etc)
[] save / load encrypted store to a server
[] reactive service worker
[] auto logout after X minutes
[] allow user to change master password
[] Toggle button to show password
[] Show confirmation box before removing item

**Specs**

- Encrypts all data using AES256 before saving it to storage.
- Uses master key to perform AES operation. Master key is also protected with [bcrypt](https://en.wikipedia.org/wiki/Bcrypt)

**Tech Stack**

- [Reactjs](https://facebook.github.io/react/), [redux](http://redux.js.org/),
- [Webpack](https://webpack.js.org/) for module bundler
- [Radium](http://formidable.com/open-source/radium/) for inline css
- [material-ui](http://www.material-ui.com/) for material design components
- [crypto-js](https://github.com/brix/crypto-js), [bcryptjs](https://github.com/dcodeIO/bcrypt.js) for data encryption
