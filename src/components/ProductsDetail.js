import React, { Component } from 'react';
import Detail from './Detail';
import TopBar from './TopBar'


class ProductsDetail extends Component {
    constructor() {
        super()
        this.state = {
            product: []
        }
    }
    async componentDidMount() {
        const respuesta = await fetch("http://localhost:3000/api/product");
        const data = await respuesta.json();
        this.setState({
            product: data.products
        })
    }
    render() {
        
        return (
            <React.Fragment>
                <div id="content-wrapper" className="d-flex flex-column" >
                    <div  >
                        <TopBar />
                        <div className="row card-body tarjeta" >
                            {
                                this.state.product.map((p, index) => {
                                    return <Detail  {...p} key={p + index} />
                                })
                            }
                            
                        </div>
                    </div>
                </div>

            </React.Fragment>
        )
    }


}
export default ProductsDetail;
