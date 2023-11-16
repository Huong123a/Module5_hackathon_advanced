import { getData } from "../utils/db.util.js";

class LoginController {
  async login(req, res) {
    const dataUsers = await getData("users");
    const user = dataUsers.find(
      (user) =>
        user.username === req.body.name && user.password === req.body.password
    );

    if (user) {
      return {
        status: true,
        message: "Login sucessfully!",
        data: { ...user },
      };
    } else {
      return {
        status: false,
        message: "Login failed!",
        data: null,
      };
    }
  }
}

export default LoginController;
