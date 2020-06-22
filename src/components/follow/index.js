import React from 'react';
import {FollowHeader, FollowImages} from './style';
import follow1 from '../../assets/img/follow-1.png';
import follow2 from '../../assets/img/follow-2.png';
import follow3 from '../../assets/img/follow-3.png';
import follow4 from '../../assets/img/follow-4.png';

const Follow = () =>{
    return(
       <section>
        <FollowHeader>
            follow us
        </FollowHeader>
        <p style={{display:'flex', justifyContent: 'center', fontSize: '.9rem', textTransform:'uppercase'}}>@eurico_oficial</p>
       <FollowImages>
        <img src={follow1} />
        <img src={follow2} />
        <img src={follow1} />

        <img src={follow3} />
        <img src={follow4} />

       </FollowImages>
      
       </section>
    ) 
}


export default Follow;