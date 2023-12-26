'use client'

import { PRODUCT_CATEGORIES } from '@/config'
import { useRef, useState } from 'react'
import NavItem from './NavItem'

const NavItems = () => {
  const [activeIndex, setActiveIndex] = useState<null | number>(null)
  const isAnyOpen = activeIndex !== null

  const navRef = useRef<HTMLDivElement | null>(null)

  return (
    <div className="flex gap-4 h-full">
      {PRODUCT_CATEGORIES.map((category, index) => {
        const handleOpen = () => {
          if (activeIndex === index) {
            setActiveIndex(null)
          } else {
            setActiveIndex(index)
          }
        }

        const isOPen = index === activeIndex

        return (
          <NavItem
            key={category.value}
            category={category}
            isOpen={isOPen}
            handleOpen={handleOpen}
            isAnyOpen={isAnyOpen}
          />
        )
      })}
    </div>
  )
}

export default NavItems
