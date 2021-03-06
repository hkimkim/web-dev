import tuits from "../data/tuits.json"

const tuitsReducer = (state = tuits, action) => {
  switch (action.type) {
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
            tuit.stats.likes--;
          } else {
            tuit.liked = true;
            tuit.stats.likes++;
          }
          return tuit;
        } else {
          return tuit;
        }
      });
    default:
      return tuits
  }
} 
export default tuitsReducer;