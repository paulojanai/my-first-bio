# my-first-bio

> My Bio

[![NPM](https://img.shields.io/npm/v/my-first-bio.svg)](https://www.npmjs.com/package/my-first-bio) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save my-first-bio
```

## Usage

```jsx
import React from 'react'

import { Bio, Form } from 'my-first-bio'

export default function App() {
  return (
    <div>
      <Bio
        name="Paulo Janai"
        age={22}
        work="Developer Frontend and UX/UI Designer"
      />
      <Form />
    </div>
  )
}
```

## License

MIT © [paulojanai](https://github.com/paulojanai)
