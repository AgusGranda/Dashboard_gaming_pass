import React,{Component} from 'react';
import Product  from './Product';


class ProductsInDb extends Component{
    constructor(){
        super()
        this.state = {
            categories: []
        }
    }
    async componentDidMount(){
        const respuesta = await fetch("http://localhost:3000/api/product");
        const datos = await respuesta.json();
        this.setState({
            categories: datos.products
        })
    }
    render(){
        return (
            <React.Fragment>
                    {/*<!-- Categories in DB -->*/}
                    <div className="col-lg-6 mb-4">						
                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h6 className="m-0 font-weight-bold text-gray-800">Productos en Stock</h6>
                            </div>
                            <div className="card-body tarjeta">
                                <div className="row">
                                    {
                                        this.state.categories.map((category,index)=>{
                                            return  <Product  {...category}  key={category + index} />
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
               
            </React.Fragment>
        )
    }
    

}
export default ProductsInDb;
