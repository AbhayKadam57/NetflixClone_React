export const InitiState = {
  avatar: [],
  open: false,
  selected: JSON.parse(localStorage.getItem("selected")) || {},
};

export const AvatarReducer = (state, action) => {
  switch (action.type) {
    case "OPEN_MODAL": {
      return {
        ...state,
        open: true,
      };
    }
    case "CLOSE_MODAL": {
      return {
        ...state,
        open: false,
      };
    }
    case "CHOOSE": {
      localStorage.setItem("selected", JSON.stringify(action.payload));
      return {
        ...state,
        selected: action.payload,
      };
    }

    case "ADD_PROFILES": {
      console.log(action.payload);
      return {
        ...state,
        avatar: [...state.avatar, action.payload],
      };
    }

    case "LOAD_PROFILES": {
      localStorage.setItem("selected", JSON.stringify(action.payload));
      return {
        ...state,
        avatar: action.payload.avatar,
        selected: action.payload.selected,
      };
    }
  }
};
