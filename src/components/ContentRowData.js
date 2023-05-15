import React,{Component} from 'react';

import SmallCard from './SmallCard';

/*  Cada set de datos es un objeto literal */

/* <!-- Movies in DB --> */
class ContentRowData extends Component{
    constructor(){
        super()
        this.state = {
            products: [],
            categories: [],
            users:[]
        }
    }
    async componentDidMount(){
        const products = await fetch("http://localhost:3000/api/product");
        const users = await fetch("http://localhost:3000/api/user");
        const productsDatos = await products.json();
        const usersDatos = await users.json();

        this.setState({
            products: productsDatos.products,
            categories: productsDatos.countByCategory,
            users: usersDatos.users
        })
        
    }

    
    render(){
        var length = Object.keys(this.state.categories).length
        let productsInDB = {
            title: 'Productos en base de datos',
            color: 'primary', 
            cuantity: this.state.products.length,
            icon: 'fa-clipboard-list'
            }
        
        let totalCategories = {
            title:' Categorias totales', 
            color:'success', 
            cuantity:length,
            icon:'fa-award'
        }
        
        let usersQuantity = {
            title:'Cantidad de usuarios' ,
            color:'warning',
            cuantity:this.state.users.length,
            icon:'fa-user-check'
        }
        let cartProps = [productsInDB, totalCategories, usersQuantity];
        return (
            <React.Fragment>
                    {/*<!-- Categories in DB -->*/}

              <div className="row"> 
               { cartProps.map( (data, i) => {
                return <SmallCard {...data} key={i}/>
                })}

             </div>
               
            </React.Fragment>
        )
    }
    
}
export default ContentRowData;

// let moviesInDB = {
//     title: 'Movies in Data Base',
//     color: 'primary', 
//     cuantity: 21,
//     icon: 'fa-clipboard-list'
// }

// /* <!-- Total awards --> */

// let totalAwards = {
//     title:' Total awards', 
//     color:'success', 
//     cuantity: '79',
//     icon:'fa-award'
// }

// /* <!-- Actors quantity --> */

// let actorsQuantity = {
//     title:'Actors quantity' ,
//     color:'warning',
//     cuantity:'49',
//     icon:'fa-user-check'
// }

// let cartProps = [moviesInDB, totalAwards, actorsQuantity];

// function ContentRowMovies(){
//     return (
    
//         <div className="row">
            
//             {cartProps.map( (movie, i) => {

//                 return <SmallCard {...movie} key={i}/>
            
//             })}

//         </div>
//     )
// }

// export default ContentRowMovies;