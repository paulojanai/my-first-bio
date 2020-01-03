import React from 'react'

import { Bio, Form } from 'my-first-bio'

export default function App() {
  return (
    <div>
      <Bio
        name="Paulo Janai"
        age={22}
        work="Developer Frontend and UX/UI Design"
      />
      <Form />
    </div>
  )
}
