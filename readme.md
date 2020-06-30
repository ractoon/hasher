# Hasher

Node.js script to generate a hash of a file or string.

## Installation

```
npm install
```

## Running Hasher

```
./hasher.js
```

Make sure the `hasher.js` file has executable permissions.


## Arguments

### --algo {algorithm}

Default `md5` but can be any valid hashing algorithm.

> The algorithm is dependent on the available algorithms supported by the version of OpenSSL on the platform. Examples are `sha256`, `sha512`, etc. On recent releases of OpenSSL, `openssl list -digest-algorithms` (`openssl list-message-digest-algorithms` for older versions of OpenSSL) will display the available digest algorithms.
>
> [Read more](https://nodejs.org/api/crypto.html#crypto_crypto_createhash_algorithm_options)


### --file {filepath}

If a file is specified the contents of the file will be converted to a hash using the specified algorithm.

If no file is specified the contents of the clipboard will be used.

## Output

The resulting hash will be displayed in the console, and the hashed string will also be copied to the clipboard.
