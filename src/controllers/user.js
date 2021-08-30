const { user } = require("../../models");

exports.addUsers = async (req, res) => {
  try {
    await user.create(req.body);
    res.send({
      message: "success",
    });
  } catch (error) {
    res.status(500).send({
      message: "failed",
    });
  }
};

exports.getUsers = async (req, res) => {
  try {
    const users = await user.findAll({
      attributes: {
        exclude: ["password", "createdAt", "updatedAt"],
      },
    });

    res.send({
      status: "success",
      data : { users,},
    });
  } catch (error) {
    res.status(500).send({
      message: "failed get resources",
    });
  }
};

exports.getUser = async (req, res) => {
  const { id } = req.params;
  try {
    const users = await user.findOne({
      where: {
        id,
      },
      attributes: {
        exclude: ["password", "createdAt", "updatedAt"],
      },
    });

    res.send({
      status: "success",
      data : {users},
    });
  } catch (error) {
    res.status(500).send({
      message: "failed",
    });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;

    await user.update(req.body, {
      where: {
        id,
      },
    });

    res.send({
      message: 'success',
      id: id,
    });
  } catch (error) {
    console.log(error);
    res.send({
      message: "Server Error",
    });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    await user.destroy({
      where: {
        id,
      },
    });

    res.send({
      status: "success",
      id: id,
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
      message: "Server Error",
    });
  }
};
