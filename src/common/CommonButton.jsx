import { Button } from '@/components/ui/button'
import React, { Children } from 'react'

const CommonButton = ({className}) => {
  return (
    <Button 
        // translateZ={20}
        as="button"
        className={`${className}  w-full px-4  rounded-xl border-2 border-pink-500 bg-white hover:bg-pink-500 hover:text-white transition-all text-pink-500 text-xs font-bold`}
        >
        {Children}
    </Button>
  )
}

export default CommonButton