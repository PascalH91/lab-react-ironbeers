import React from "react"
import { Link } from "react-router-dom"

const HomePage = props => {
    return(
        <div className="container">
           <div className="row">
           <section className="col-12 col-md-4">
                <img src="./images/beers.png" className="img-fluid" alt=""/>
                <Link className="h2" to={"/beers"}>All Beers</Link>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A adipisci velit voluptatem doloremque id architecto numquam. Commodi atque aperiam non, tempora, repellendus voluptatibus provident veritatis, omnis ex ipsam ullam rem.</p>
            </section>
            <section className="col-12 col-md-4">
                <img src="./images/random-beer.png" className="img-fluid" alt=""/>
                <Link className="h2" to={"/random-beer"}>Random Beer</Link>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A adipisci velit voluptatem doloremque id architecto numquam. Commodi atque aperiam non, tempora, repellendus voluptatibus provident veritatis, omnis ex ipsam ullam rem.</p>
            </section>
            <section className="col-12 col-md-4">
                <img src="./images/new-beer.png" className="img-fluid" alt=""/>
                <Link className="h2" to={"/new-beer"}>New Beer</Link>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. A adipisci velit voluptatem doloremque id architecto numquam. Commodi atque aperiam non, tempora, repellendus voluptatibus provident veritatis, omnis ex ipsam ullam rem.</p>
            </section>
           </div>

        </div>
    )
}


export default HomePage