import { store } from "src/stores";
import { setUsername } from "src/stores/user-slice";

/**
 * This contains all the actions as fuctions, organized by the slice they belong to.
 */
const Actions = {
  user: {
    setUsername: (name) => store.dispatch(setUsername(name)),
    clearUsername: () => store.dispatch(setUsername("")),
  },
};

export default Actions;
