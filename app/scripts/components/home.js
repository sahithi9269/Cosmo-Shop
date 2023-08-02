/**
 * This file will hold the Main content that lives in the main body of the site
 * 
 */
import React from 'react';


class Home extends React.Component {

    /**
     * Renders the default app in the window, we have assigned this to an element called root.
     * 
     * @returns JSX
     * @memberof Home
    */
    render() {
        return (
            <section id="home">
                <div className="content">
                    {this.props.data.map(item => {
                        return <div className={`product-wrapper ${item.isActive === 'true' ? 'active' : 'inactive'}`}>
                            <img src={item.picture} alt={item.name} />
                            <div className="content-card">
                                <h4>{item.name}</h4>
                                <p>{item.about}</p>
                                <div className="additional-info">
                                    <div className="buy-price">Price <b>${item.price}</b></div>
                                    <div className={item.isActive === 'true' ? 'in-stock' : 'out-of-stock'}>
                                        {item.isActive === 'true' ? 'Available' : 'Out of Stock'}
                                    </div>
                                </div>
                            </div>
                        </div>
                    })}

                </div>
            </section>
        );
    }


}

// Export out the React Component
export default Home;