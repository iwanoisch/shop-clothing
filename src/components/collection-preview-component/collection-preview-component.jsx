import React from 'react';

import './collection-preview-component.scss'
import CollectionItem from "../collection-item/collection-item";

const CollectionPreview = ({title, items}) => (
    <div className='collection-preview'>
        <h1 className='title'>{title}</h1>
        <div className='preview'>
            {items && items
                .filter((item, idx) => idx < 4) // mostra solo i primi 4 elementi
                .map( ({id, ...otherItemProps}) => (
                <CollectionItem key={id} {...otherItemProps} />
            ))}
        </div>
    </div>
);

export default CollectionPreview;
