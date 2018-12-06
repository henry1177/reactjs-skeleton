import React from 'react';
import {Route} from 'react-router-dom';
import PropTypes from 'prop-types'
import HomeContainer from "HomeContainer";
class MainView extends React.Component {
    constructor(props){

        super(props)

    }

    render(){
        return(
            <div id="page-container">
                <Route exact path="/" component={HomeContainer}/>
            </div>
        )
    }
}

MainView.proptypes = {
    children: PropTypes.element.isRequired
}

export default MainView;