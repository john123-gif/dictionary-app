import React from 'react'

const WordNotFound:React.FC = () => {
  return (
    <div className='wordNotFound'>
        <div className='emoji'>😕 </div>
        <h2> No definition Found</h2>
        <p> Sorry pal, we couldn't find definitions for the word
         you were looking for. You can try the search again at later time
          or head to the web instead.</p>
    </div>
  )
}

export default WordNotFound