import React, { useReducer, useState } from "react";
const initialStateOne = 80;
const initialStateTwo = 100;
const initialStateThree = 120;

const reduce = (initial) => (state, action) => {
  switch (action.type) {
    case "monthly":
      return initial;
    case "yearly":
      return initial * 12;
    default:
      return state;
  }
};
const Member = () => {
  const [count, dispatch] = useReducer(
    reduce(initialStateOne),
    initialStateOne
  );
  const [countTwo, dispatchTwo] = useReducer(
    reduce(initialStateTwo),
    initialStateTwo
  );
  const [countThree, dispatchThree] = useReducer(
    reduce(initialStateThree),
    initialStateThree
  );
  var [lastAction, setLastAction] = useState(""); // <-- Add this
  lastAction = lastAction || "monthly"; //

  const dispatchAll = (action) => {
    dispatch(action);
    dispatchTwo(action);
    dispatchThree(action);
    setLastAction(action.type);
  };

  return (
    <div>
      <button
        type="button"
        onClick={() =>
          dispatchAll({
            type: "monthly",
          })
        }
      >
        monthly
      </button>
      <button
        type="button"
        onClick={() =>
          dispatchAll({
            type: "yearly",
          })
        }
      >
        yearly
      </button>
      <div>
        <h2>
          member one {count} $ {lastAction}{" "}
        </h2>
        <h2>
          member Two {countTwo} $ {lastAction}{" "}
        </h2>
        <h2>
          member Three {countThree} $ {lastAction}
        </h2>
        <h2></h2>
      </div>
    </div>
  );
};

export default Member;
