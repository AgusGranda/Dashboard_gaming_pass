import React, { Component } from 'react';
import TopBar from './TopBar';
import Category from './Category';
import Footer from './Footer';

/*  Cada set de datos es un objeto literal */

/* <!-- Movies in DB --> */
class Categories extends Component {
    constructor() {
        super()
        this.state = {
            categories: []
        }
    }
    async componentDidMount() {
        const products = await fetch("http://localhost:3000/api/product");
        const data = await products.json();
        this.setState({
            categories: data.countByCategory
        })

    }


    render() {
        let memoriesInDB = {
            title: 'Memorias en base de datos',
            color: 'primary',
            cuantity: this.state.categories.memorias,
            icon: "fa-duotone fa-memory"
        }

        let notebooksInDb = {
            title: ' Notebooks en base de datos',
            color: 'purple',
            cuantity: this.state.categories.notebooks,
            icon: "fa-solid fa-laptop"
        }

        let monitorsInDb = {
            title: 'Monitores en base de datos',
            color: 'warning',
            cuantity: this.state.categories.monitores,
            icon: "fa-solid fa-desktop"
        }
        let cartProps = [memoriesInDB, notebooksInDb, monitorsInDb];
        return (
            <React.Fragment>
                <div id="content-wrapper" className="d-flex flex-column" >
                    <div id="content" >
                        <TopBar />
                        <div className="row container-fluid ">
                            {cartProps.map((data, i) => {
                                return <Category {...data} key={i} />
                            })}
                        </div>
                       
                    </div>
                    <Footer/>
                </div>

            </React.Fragment>
        )
    }

}
export default Categories;