import axios from "axios";

export const createNewUser = async ({ username, secret }) => {
  const config = {
    method: "POST",
    url: "https://api.chatengine.io/users/",
    headers: {
      "private-key": process.env.REACT_APP_PROJECT_SECRET,
    },
    data: {
      username,
      secret,
    },
  };

  const newUser = await axios(config).catch((err) => err);
  if (newUser) {
    return newUser;
  }
};

export const signUpWithChatEngine = async (user) => {
  // check whether user exists
  const doesUserExists = await axios
    .get("https://api.chatengine.io/users/me", {
      headers: {
        "project-id": process.env.REACT_APP_PROJECT_ID,
        "user-name": user.email,
        "user-secret": user.uid,
      },
    })
    .catch(async (err) => {
      if (!(err.response.status >= 400)) {
        return err;
      }
      //  creating new user
      const newUser = await createNewUser({
        username: user.email,
        secret: user.uid,
      });
      console.log(newUser);
      return newUser;
    });

  if (doesUserExists) {
    return doesUserExists;
  }
};
