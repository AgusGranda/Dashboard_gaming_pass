import React from 'react';

function Product(props){
    return(
        <React.Fragment>
            <div className="col-lg-6 mb-4">
                <div className="card text-white bg-dark  shadow">
                    <div className="card-body" style={{height: 80 }}  >
                        {props.name}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Product;