// import tuits from "../data/tuits.json"
import { DELETE_TUIT, FIND_ALL_TUITS, UPDATE_TUIT } from "../actions/tuits-actions";

const tuitsReducer = (state = [], action) => {
  switch (action.type) {
    case FIND_ALL_TUITS:
      return action.tuits;
    
    case DELETE_TUIT:
      return state.filter(
        tuit => tuit._id !== action.tuit._id
      );

    case UPDATE_TUIT:
      return state.map(
        tuit => tuit._id === action.tuit._id ? action.tuit : tuit
      );

    case 'create-tuit':
      const newTuit = {
        tuit: action.tuit,
        _id: (new Date()).getTime() + '',
        postedBy: {
          username: "ReactJS"
        },
        handle: "ReactJS",
        stats: {
          retuits: 111,
          likes: 222,
          comments: 333
        },
        logo_image: "https://www.pngitem.com/pimgs/m/664-6644509_icon-react-js-logo-hd-png-download.png",

      }
      return [
        newTuit,
        ...state,
      ];
    
    case 'delete-tuit':
      return state.filter(
        tuit => tuit._id !== action.tuit._id);

    case 'like-tuit':
      return state.map(tuit => {
        if (tuit._id === action.tuit._id) {
          if (tuit.liked === true) {
            tuit.liked = false;
            // tuit.stats.likes--;
          } else {
            tuit.liked = true;
            // tuit.stats.likes++;
          }
          return tuit;
        } else {
          return tuit;
        }
      });
    default:
      return state;
  }
} 
export default tuitsReducer;