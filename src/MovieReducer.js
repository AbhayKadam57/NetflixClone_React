export const INITIAL_STATE = {
  click: false,
  videoID: null,
};

export const MovieReducer = (state, action) => {
  switch (action.type) {
    case "OPEN": {
      return {
        click: action.payload.click,
        videoID: action.payload.videoID,
      };
    }

    case "CLOSE": {
      return {
        click: false,
        videoID: null,
      };
    }
    default: {
      return state;
    }
  }
};
