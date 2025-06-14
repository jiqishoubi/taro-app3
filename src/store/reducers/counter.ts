const INITIAL_STATE = {
  num: 0,
};

// reducer
export default function counter(
  state = INITIAL_STATE,
  action: {
    type: string;
    payload?: any;
  }
) {
  const { type, payload } = action;
  switch (type) {
    case "add":
      const addNum = payload || 1; // 默认加1
      return {
        ...state,
        num: state.num + addNum,
      };
    case "minus":
      return {
        ...state,
        num: state.num - 1,
      };
    default:
      return state;
  }
}

// actions
export const actions_counter: Record<string, (payload?: any) => any> = {
  add: (payload) => {
    return {
      type: "add",
      payload,
    };
  },
  minus: (payload) => {
    return {
      type: "minus",
      payload,
    };
  },
  asyncAdd: (payload) => {
    return (dispatch) => {
      setTimeout(() => {
        dispatch(actions_counter.add(payload));
      }, 2000);
    };
  },
};
