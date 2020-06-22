import React from 'react';
import './style.css';

const Features = ()=>{

    return(
        <section className='features'>

<div className='grid-features'>

<div className='area-1'> 
    <p className='p-area-small'>casual</p>
    <h3 className='h3-area-small'>tênis</h3>
    <button className='features-button'>confira</button>

</div>

<div className='area-2'>
    <p className='p-area-big'>new collection</p>
    <h3  className='h3-area-big'>man</h3>
    <button className='features-button'>confira</button>
</div>

<div className='area-3'>
    <p className='p-area-big'>new collection</p>
    <h3 className='h3-area-big'>woman</h3>
    <button className='features-button'>confira</button>

</div>

<div className='area-4'>

<p className='p-area-small'>esportivo</p>
    <h3 className='h3-area-small'>tênis</h3>
    <button className='features-button'>confira</button>

</div>

</div>

        </section>
    )
}


export default Features