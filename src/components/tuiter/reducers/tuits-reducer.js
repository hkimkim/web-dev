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
    default:
      return tuits
  }
} 
export default tuitsReducer;