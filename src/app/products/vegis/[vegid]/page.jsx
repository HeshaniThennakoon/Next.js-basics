import React from 'react'

async function page({params}) {
  const { vegid } = await params

  return (
    <div>Vegi items {vegid}</div>
  )
}

export default page
