export const intiState = {
  Language: "English",
};

export const LanguageReducer = (state, action) => {
  switch (action.type) {
    case "Change": {
      return {
        Language: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
