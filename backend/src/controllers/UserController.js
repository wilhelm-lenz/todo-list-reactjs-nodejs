const { OK, INTERNAL_SERVER_ERROR } = require("../data-access/httpStatusCodes");

exports.postRegisterUserCtrl = async (req, res) => {
  try {
    const registratedUser = await UserService.registerUser(req.body);
    res.status(OK).json({ status: "success", data: { user: registratedUser } });
  } catch (error) {
    console.log(error);
    res.status(INTERNAL_SERVER_ERROR).json({
      status: "fail",
      error,
      message: error.message || "Could not register user",
    });
  }
};

exports.postLoginUserCtrl = async (req, res) => {
  try {
    const loggedInUser = await UserService.loginUser();
  } catch (error) {
    console.log(error);
    res.status(INTERNAL_SERVER_ERROR).json({
      status: "fail",
      error,
      message: error.message || "Could not login user",
    });
  }
};
