import React, { Component } from 'react'
import SHOP_DATA from '../components/shopData';
import CollectionPreview from '../components/collection-preview/CollectionPreview';

class ShopPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collections: SHOP_DATA
        };
    }

    render() {
        return (
            <div>
                {this.state.collections.map(({id, ...otherData}) => 
                    {return <CollectionPreview 
                        key={id} 
                        {...otherData}
                    />})}
            </div>
        )
    }
}

export default ShopPage;