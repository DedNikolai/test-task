import React, {useEffect} from 'react';
import { useParams } from "react-router-dom";
import {connect} from "react-redux";
import {getUserById} from '../store/actions/actions';
import Preloader from '../components/Preloader';
import {getVisitedList} from '../utils/utils';
import { useCookies } from 'react-cookie';

function CurrentItem(props) {
    const {currentItem, currentItemLoading, getItem} = props;
    const [cookies, setCookie] = useCookies(['visited']);
    const {id} = useParams();

    useEffect(() => {
        const visited = cookies["visited"];
        getItem(id);
        if (visited) {
            setCookie('visited', getVisitedList(cookies, id))
        } else {
            setCookie('visited', id);
        }
    }, []);

    if (currentItemLoading) return <Preloader/>;

    return (
        <div>
            <h1>{currentItem.name}</h1>
            <div>{JSON.stringify(currentItem)}</div>
        </div>
    );
}

const mapStateToProps = (reducer) => {
    return {
        currentItem: reducer.itemById,
        currentItemLoading: reducer.itemByIdLoading,
    }
};

const mapDispatchToProps = dispatch => ({
    getItem: (id) => dispatch(getUserById(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CurrentItem);
