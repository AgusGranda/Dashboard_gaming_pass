import React from 'react';
import LastProductDb from './LastProductDb';
import ProductsInDb from './ProductsInDb';

function ContentRowCenter() {
    return (
        <div className="row container-fluid">
            <LastProductDb />
            <ProductsInDb />
        </div>
    )
}

export default ContentRowCenter;