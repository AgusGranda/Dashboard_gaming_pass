import React, { Component } from 'react';


class LastProductDb extends Component {
    constructor() {
        super()
        this.state = {
            product: []
        }
    }
    async componentDidMount() {
        const products = await fetch("http://localhost:3000/api/product");
        const data = await products.json();
        const url = data.products.length - 1;
        const productUrl = data.products[url].detail
        const produtDetail = await fetch(`http://localhost:3000${productUrl}`)
        const dataProdutDetail = await produtDetail.json();
        this.setState({
            product: dataProdutDetail
        })
    }

    render() {
        
        return (
            <React.Fragment>
                {/*<!-- Categories in DB -->*/}
                <div >
                    <div className="col-lg-6 mb-4" >
                        <div className="card shadow mb-4" style={{ width: 25 + 'rem' }} >
                            <div className="card-header py-3" >
                                <h5 className="m-0 font-weight-bold text-gray-800"> Ultimo producto agregado</h5>
                            </div>
                            <div className="card-body">
                                <div className="text-center" >
                                    <img className="img-fluid px-3 px-sm-4 mt-3 mb-4"  src={this.state.product.image} alt=" Star Wars - Mandalorian " />
                                </div>
                                <p className="m-0 font-weight-bold text-gray-800">{this.state.product.name}</p>
                                <ul>
                                    <li><p>{this.state.product.description}</p></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }

}

export default LastProductDb;


