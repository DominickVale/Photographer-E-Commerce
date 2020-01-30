import React from 'react'
import Link from '../Link'

import {StyledProductDescription, StyledReadMore} from 'styles/productShowcase'

const ProductDescription = ({children, readMoreLink, styleProduct}) => {

  return (
    <>
    <StyledProductDescription styleProduct={styleProduct}>
      <p>{children || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam'}
      {readMoreLink && (
      <StyledReadMore>
        ...&nbsp;
        <Link href={readMoreLink.URL || ''} as={readMoreLink.asURL || ''}>
          <strong>Read&nbsp;more</strong>
        </Link>
      </StyledReadMore>
      )
    }
    </p>
    </StyledProductDescription>
    </>
  )
}

export default ProductDescription
