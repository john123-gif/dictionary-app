import React, {useEffect} from 'react';

const EmptyText:React.FC= () => {
  useEffect(() => {
    const loader = document.querySelector('.loader') as HTMLElement;
    if(loader){
      loader.style.display = 'none';
    }
  });

  return (
    <div className='validate'>
     <div className='responsiveValidate'>Whoops, can't be empty...</div>
    </div>
  )
}

export default EmptyText