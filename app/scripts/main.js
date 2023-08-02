/**
 * The Initial React Setup file
 * ...
 * 
 * === CSS
 * The stylesheets are handled seperately using the gulp sass rather than importing them directly into React.
 * You can find these in the ./app/sass/ folder
 * 
 * == JS
 * All files in here start from this init point for the React Components.
 *  
 * 
 * Firstly we need to import the React JS Library
 */
import React from 'react';
import { createRoot } from 'react-dom/client';

import Menu from './components/menu';
import Home from './components/home';


/**
 * We can start our initial App here in the main.js file
 */
class App extends React.Component {
    state = {
        data : []
    }

    /**
     * Renders the default app in the window, we have assigned this to an element called root.
     * 
     * @returns JSX
     * @memberof App
    */

   searchProducts = value => {
        const url = `http://localhost:3035/search-products?search=${value}`;
        fetch(url)
        .then(res => res.json())
        .then(data => {
            this.setState({data})
        })
    }
    render() {
        const {data} = this.state;
        return (
            <div className="App">
                <Menu handleSearch={this.searchProducts} />
                <Home data={data} />
            </div>
        );
    }

}

// Render this out
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App/>);
