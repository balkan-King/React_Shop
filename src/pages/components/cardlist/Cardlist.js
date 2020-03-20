import React, {useEffect, useState} from 'react'
import axios from 'axios';

const Cardlist = () => {

    const [cardData, setCardData] = useState([]);
    const [[minPrice, maxPrice], setFilters] = useState([0, 100]);
    const [search, setSearch] = useState([]);

    useEffect(() => {
        //BaseURL
        axios.get('http://localhost:8080/products')
        .then(res => {
            setCardData(res.data.sort(function(a, b){
                let x = a.title.toLowerCase();
                let y = b.title.toLowerCase();
                if(x < y) { return -1;}
                if(y < x) { return 1;}
                return 0;
            }));
        });

    }, [])

    function reverse(){
        setCardData([...cardData.reverse()])
        console.log(cardData);
    };

    function myFilter(array){
        console.log(minPrice)
        return array.filter(
            element => {
                return minPrice < element.price;
            }
        ).filter(
            element => {
                return element.price < maxPrice;
            }
        ).filter(
            element => {
                return element.title.includes(search);
            }
        )
    }

    return (
        <div>
            <div className="container">
                <div className="row " id="demo">
                    <div className="col-sm-1 col-md-2">
                        <form>
                            <label>
                                <p>Min Price:</p>
                                <input className="filterFieldShop" type="text" name="minPrice" onChange={e => setFilters([e.target.value, maxPrice])}></input>
                            </label>
                        </form>
                    </div>
                    <div className="col-sm-2"></div>
                    <div className="col-sm-1 col-md-2">
                        <form>
                            <label>
                                <p>Max Price:</p>
                                <input type="text" name="maxPrice" onChange={e => setFilters([minPrice, e.target.value])}></input>
                            </label>
                        </form>
                    </div>
                    <div className="col-sm-2"></div>
                    <div className="col-sm-1 col-md-2">
                        <form>
                            <label>
                                <p>Searchfield:</p>
                                <input type="text" name="search" onChange={e => setSearch([e.target.value])} ></input>
                            </label>
                        </form>
                    </div>
                    <div className="col-sm-2 col-md-1"></div>
                    <div className="col-sm-1">
                        <br></br>
                        <button className="shopSortingButton" onClick={reverse}>Reverse</button>
                    </div>
                    {myFilter(cardData).map((card, index) => (
                        <div key = {"Card" + index} className="col-lg-4 col-md-6 d-flex">
                            <div className="card imageContainer ">
                                <img src={card.img} alt={card.title}></img>
                                <div className="card-body myBody">
                                    <h3 className="card-title myCardTitle">{card.title}</h3>
                                    <p className="card-text">{card.description}</p>
                                    <div className = "myCardFooter">
                                        <p>Cost: {card.price} CHF <button>Buy</button></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        )
                    )}
                </div>
            </div>
        </div>
    )
}

export default Cardlist
