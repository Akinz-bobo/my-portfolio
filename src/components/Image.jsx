import React, { useEffect } from 'react'
import { useStateContext } from '../context/Context'

function Image() {
    const { currentColor } = useStateContext()
    return (
        <div
            className={`
      ${Styles.me} w-[40%]  absolute hidden lg:bottom-10 ltr:right-32 rtl:left-32
      `}
        >
            <img src={`./src/assets/images/${currentColor.slice(1,)}.png`} alt="me" className="rounded-md" />
        </div>
    )
}

export default Image