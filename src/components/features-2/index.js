import React from 'react';
import {Feature2Item} from './style'
import feature1 from '../../assets/img/feature2-img-1.png'
import feature2 from '../../assets/img/feature2-img-2.png'
import feature3 from '../../assets/img/feature2-img-3.png'

const Features2 = () =>{

    return(
        <section style={{ margin: '10rem 0', position: 'relative' }}>
            <div style={{ margin: '0 10vw', display: 'flex', justifyContent: 'space-between' }}>
                <Feature2Item img={feature2}>
                    <p className='p-area-f2' style={{paddingTop: '5rem'}}>os melhores</p>
                    <h3 className='h3-area-f2'>sneakers</h3>
                    <button className='features-button'>confira</button>
                </Feature2Item>

                <Feature2Item mid img={feature3}>
                    <h3 className='h3-area-f2'>ofertas  </h3>
                   <h4 className='h4-area-f2'>imperdíveis  </h4>

                    <button className='features-button'>confira</button>
                </Feature2Item>

                <Feature2Item img={feature1}>
                    <p style={{color: 'white', fontWeight: '700', paddingTop: '5rem'}} className='p-area-f2'>nova</p>
                    <h3 className='h3-area-f2-last'>coleção</h3>
                    <button className='features-button'>confira</button>
                </Feature2Item >


        </div>

        </section>
    )
}

export default Features2