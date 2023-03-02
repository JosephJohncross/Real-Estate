import React from 'react'

const Button = ({shade, content}) => {
  return (
    <button
        className={shade=="white" ?
            "px-8 py-2 bg-transparent font-didact text-lg text-shade10 bg-white":
            "px-8 py-2 font-didact text-lg  text-shade3 bg-shade13 shadow-md hover:bg-shade12 hover:shadow-sm"
        }
    >
        {content}
    </button>
  )
}

export default Button