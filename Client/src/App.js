import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header'
import Layout from './components/fullpage/Layout'
import {loadPosts} from './react-redux/actions/postActions'
import store from './react-redux/store/store'


export const App = () => {

        useEffect( () => {
        store.dispatch(loadPosts())
},[])




        return (



                <React.Fragment>
                        <Header />
                        <Layout/>
                </React.Fragment>

        )

}


export default App
