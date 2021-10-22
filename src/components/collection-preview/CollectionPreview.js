import React from 'react'
import CollectionItem from '../CollectionItem';
import './collection-preview-style.css'

const CollectionPreview = ({title, items}) => {
    return (
        <div className="collection-preview">
            <h1 className='title'>{title.toUpperCase()}</h1>
            <div className='preview'>
                {
                    items
                    .filter(({id}) => {return id<5})
                    .map(({id, ...otherItemProps}) => {
                        return <CollectionItem key={id} {...otherItemProps}/>
                    })
                }
            </div>
        </div>
    );
}

export default CollectionPreview;