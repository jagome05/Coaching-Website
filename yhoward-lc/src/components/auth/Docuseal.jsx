import React, { useState, useEffect } from "react"
import { DocusealForm } from '@docuseal/react'

export default function Docuseal({ email }) {

  const [slug, setSlug] = useState('');

  useEffect(() => {
    async function grabTemplate() {
      try {
        let response = await fetch('http://localhost:4000/api/reg-consent')
        let data = await response.json()
        console.log(data)
        setSlug(data.slug)
      } catch(err) {
        console.log(err)
      }
    }
    grabTemplate()
  }
    ,[]);
  console.log(slug)

  return (

    <div className="app">
      {/* {slug && <DocusealForm src={`https://docuseal.co/s/${slug}`} />} */}
      <DocusealForm
        src={`https://docuseal.co/d/${slug}`}
        email={email}
      />`
    </div>
  );
}
