# Secure Wallet

A PWA for password manager, works offline, uses local storage to store all data, built with react + redux + webpack.

Project was forked from [gauravchl/secure-wallet](https://github.com/gauravchl/secure-wallet) by Gaurav Chikhale.

Cryptography advices are from the book [Practical Cryptography for Developers](https://cryptobook.nakov.com/) by Svetlin Nakov.


**TODO**

 - [x] remove google analytics & google fonts
 - [x] Upgrade webpack & babel (output in build directory)
 - [ ] remove react-tap-event-plugin (deprecated)
 - [ ] check random generation (https://developer.mozilla.org/en-US/docs/Web/API/Crypto/getRandomValues)
 - [ ] change scrypt to argon2id and use it to derivate key for AES
 - [ ] add an argon2 salt and store it in localstorage
 - [ ] upgrade libraries (react, etc)
 - [ ] check AES cipher parameters (CTR mode, random IV stored in localStorage)
 - [ ] check if keys are emptied after logout
 - [ ] generate and increment a version in localstorage
 - [ ] generate an uuid stored in localstorage
 - [ ] allow user to display the uuid
 - [ ] save encrypted store to a server (by uuid and by version) on each change
 - [ ] load encrypted store from server (by uuid and last version) at startup
 - [ ] if no store, ask if create a new one or load from serveur by uuid
 - [ ] remove unused deps about asymetric crypto which seems not needed (like elliptic, asn1, diffie-hellman, etc)
 - [ ] reactive service worker
 - [ ] auto logout after X minutes
 - [ ] allow user to change master password
 - [ ] Toggle button to show password
 - [ ] Show confirmation box before removing item

**Specs**

- Encrypts all data using AES256 before saving it to storage.
- Uses master key to perform AES operation. Master key is also protected with [bcrypt](https://en.wikipedia.org/wiki/Bcrypt)

**Tech Stack**

- [Reactjs](https://facebook.github.io/react/), [redux](http://redux.js.org/),
- [Webpack](https://webpack.js.org/) for module bundler
- [Radium](http://formidable.com/open-source/radium/) for inline css
- [material-ui](http://www.material-ui.com/) for material design components
- [crypto-js](https://github.com/brix/crypto-js), [bcryptjs](https://github.com/dcodeIO/bcrypt.js) for data encryption
