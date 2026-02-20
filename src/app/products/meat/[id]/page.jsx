import React from 'react'

async function page({params}) {
    const { id } = await params

  return (
    <div>Meat items {id} </div>
  )
}

export default page
