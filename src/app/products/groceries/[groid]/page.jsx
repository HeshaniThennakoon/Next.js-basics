import React from 'react'

async function page({params}) {
  const { groid } = await params

  return (
    <div>Groceries items {groid}</div>
  )
}

export default page
