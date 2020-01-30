import React from 'react'
import Link from 'next/link'


export default (props) => (
  <>
    <Link href={props.href} as={props.as}>
      <a>{props.children}</a>
    </Link>
  </>
  )
