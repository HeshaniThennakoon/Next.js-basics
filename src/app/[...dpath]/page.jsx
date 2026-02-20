import React from 'react'

async function page({params}) {
    const { dpath } = await params
    console.log(dpath)

  return (
    <>
    <div>Catch All Routing</div>
    <ul>
        {dpath?.map((item) => {
            return (
                <li key={item}>{item}</li>
            )
        })}
    </ul>
    </>
  )
}

export default page
