import React from 'react'

const Button = ({shade, content}) => {

  const buttonStyle = (shade) => {
    var classStyle = ""

    switch(shade){
      case 'white':
        classStyle = "px-8 py-2 bg-transparent font-didact text-lg text-shade10 bg-white text-sm md:text-base "
        break;
      case 'black':
        classStyle ="px-8 py-2 font-didact text-lg  text-shade3 bg-shade13 shadow-md hover:bg-shade12 hover:shadow-sm text-sm md:text-base flex justify-center items-center"
        break;
      case 'bordered':
        classStyle = "px-8 py-2 font-didact text-lg border border-shade13 text-shade13 hover:text-shade3 hover:bg-shade12 hover:shadow-sm transition-colors text-sm md:text-base flex justify-center items-center"
        break;
      default:
        classStyle = ""
    }
    return classStyle
  }


  return (
    <button
        className={buttonStyle(shade)}
    >
        {content}
    </button>
  )
}

export default Button