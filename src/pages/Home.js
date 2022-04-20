import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {getAllItems} from '../store/actions/actions';
import Preloader from '../components/Preloader';
import ItemsList from '../components/ItemsList';
import {getVsitedIyemsArr} from '../utils/utils';
import { useCookies } from 'react-cookie';

function Home(props) {
    const {allItems = [], itemsLoading, getItems} = props;
    const [cookies] = useCookies(['visited']);

    useEffect(() => {
        getItems();
    },[]);

    if (itemsLoading) return <Preloader/>;

    return (
        <section>
            <h1>Home</h1>
            <ItemsList items={allItems} name="All Items"/>
            <ItemsList items={getVsitedIyemsArr(cookies, allItems)} name="Visited"/>
        </section>
    );
}

const mapStateToProps = (reducer) => {
    return {
        allItems: reducer.itemsList,
        itemsLoading: reducer.itemsLoading,
    }
};

const mapDispatchToProps = dispatch => ({
    getItems: () => dispatch(getAllItems())
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);