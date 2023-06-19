import React from 'react';
import './brand.css';
import {google, slack, atlassign, drophox, shopify} from './imports'

const Brand = () => {
    return (
        <div className='gpt3__brand section__padding'>
            <div>
                <img src={google} alt="google" />
            </div>
            <div>
                <img src={slack} alt="slack" />
            </div>
            <div>
                <img src={atlassign} alt="atlassign" />
            </div>
            <div>
                <img src={drophox} alt="drophox" />
            </div>
            <div>
                <img src={shopify} alt="shopify" />
            </div>
        </div>
    )
}

export default Brand