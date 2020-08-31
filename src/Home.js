import React from "react";
import Product from "./Product";
import "./Home.css";

function Home() {
    return (
        <div className="home">
            <img 
                className="home__image" 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS_xpttDum-Fs1DFZijFecGCoKvVSV_6OIM1g&usqp=CAU"
                alt="amazon prime background"
            />

            {/* Product id, title, price, rating, image*/}
            <div className="home__row">
                <Product 
                    id="98765"
                    title="Microsoft - Xbox One S 1TB All-Digital Edition Console with Xbox One Wireless Controller"
                    price={470.98}
                    rating={4}
                    image="https://m.media-amazon.com/images/I/51VQXsQ9P6L._AC_UY218_.jpg" 
                />
                <Product 
                    id="48375"
                    title="SAMSUNG 55-Inch Class Crystal UHD TU-8000 Series - 4K UHD HDR Smart TV with Alexa Built-in (UN55TU8000FXZA, 2020 Model)"
                    price={497.99}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/71RiQZ0J2SL._AC_SL1000_.jpg" 
                />
            </div>
            <div className="home__row">
                <Product 
                    id="345678"
                    title="Sony PS5"
                    price={499.99}
                    rating={5}
                    image="https://www.psu.com/wp/wp-content/uploads/2020/07/PS5-5-4-1024x576.jpg" 
                />
                <Product 
                    id="1232343"
                    title="NexiGo 2020 Playstation 4 PS4 Slim 1TB Console Holiday Bundle Charging Dock Bundle"
                    price={479.00}
                    rating={5}
                    image="https://m.media-amazon.com/images/I/61W0a8kxbML._AC_UY218_.jpg" 
                />
                <Product 
                    id="1232343"
                    title="Lib Tech TRS HP Snowboard Mens"
                    price={419.95}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/71kHW-r%2BSGL._AC_SL1500_.jpg" 
                />
            </div>
            <div className="home__row">
                <Product 
                    id="123234"
                    title="Sceptre 30-inch Curved Gaming Monitor 21:9 2560x1080 Ultra Wide Ultra Slim HDMI DisplayPort up to 200Hz Build-in Speakers, Metal Black (C305B-200UN)"
                    price={486.00}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/81Wt3h7-V2L._AC_SL1500_.jpg" 
                />
            </div>
        </div>
    )
}

export default Home;