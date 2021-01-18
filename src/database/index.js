import { auth } from "./firebase";
import { errors } from "./constants";

const getErrorMessage = ({ code }) => ({ email: "", password: "", ...errors[code] });

const forgotPassword = async (email) => auth.sendPasswordResetEmail(email);

const signup = async (email, password) => {
  try {
    const { user } = await auth.createUserWithEmailAndPassword(email, password);
    localStorage.setItem("exists", true);
    return user;
  } catch (error) {
    throw getErrorMessage(error);
  }
};

const signin = async (email, password) => {
  try {
    const { user } = await auth.signInWithEmailAndPassword(email, password);
    localStorage.setItem("exists", true);
    return user;
  } catch (error) {
    throw getErrorMessage(error);
  }
};

const signout = async () => auth.signOut();

// ========================== PASSWORD UPDATES ========================== //

const resetPassword = async (actionCode, password) => {
  try {
    const email = await auth.verifyPasswordResetCode(actionCode);
    await auth.confirmPasswordReset(actionCode, password);
    return signin(email, password);
  } catch (error) {
    throw getErrorMessage(error);
  }
};

export {
  // DATA //
  forgotPassword,
  resetPassword,
  // AUTH //
  signin,
  signup,
  signout,
};
