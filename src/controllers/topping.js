const { topping } = require("../../models");

exports.addTopping = async (req, res) => {
  try {
    await topping.create(req.body);
    res.send({
      status: "success",
    });
  } catch (error) {
    res.status(500).send({
      status: "failed",
    });
  }
};

exports.getToppings = async (req, res) => {
  try {
    const toppings = await topping.findAll({
      attributes: {
        exclude: ["idUser", "createdAt", "updatedAt"],
      },
    });

    res.send({
      status: "success",
      data : { toppings,},
    });
  } catch (error) {
    res.status(500).send({
      status: "failed get resources",
    });
  }
};

exports.getTopping = async (req, res) => {
  const { id } = req.params;
  try {
    const toppings = await topping.findOne({
      where: {
        id,
      },
      attributes: {
        exclude: ["idUser", "createdAt", "updatedAt"],
      },
    });

    res.send({
      status: "success",
      data : {toppings},
    });
  } catch (error) {
    res.status(500).send({
      status: "failed",
    });
  }
};

exports.updateTopping = async (req, res) => {
  try {
    const { id } = req.params;

    await topping.update(req.body, {
      where: {
        id,
      },
    });

    res.send({
      status: 'success',
      id: id,
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "Server Error",
    });
  }
};

exports.deleteTopping = async (req, res) => {
  try {
    const { id } = req.params;

    await topping.destroy({
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
    });
  }
};
