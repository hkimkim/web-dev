import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import TuitListItem from "./TuitListItem"
import { findAllTuits } from '../actions/tuits-actions'

const TuitList = () => {
    const tuits = useSelector(state => state.tuits);
    const dispatch = useDispatch();
    useEffect(() => findAllTuits(dispatch), []);
    return (
    <ul className="list-group mx-2">
      {
        tuits.map && tuits.map(tuit => <TuitListItem key={tuit._id} tuit={tuit}/>)
      }
    </ul>
  )
}

export default TuitList;