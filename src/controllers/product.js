const { product } = require("../../models");

exports.addPrduct = async (req, res) => {
  try {
    await product.create(req.body);
    res.send({
      status: "success",
    });
  } catch (error) {
    console.log(error)
    res.status(500).send({
      status: "failed",
    });
  }
};

exports.getProducts = async (req, res) => {
  try {
    const products = await product.findAll({
      attributes: {
        exclude: ["idUser", "createdAt", "updatedAt"],
      },
    });

    res.send({
      status: "success",
      data : { products,},
    });
  } catch (error) {
    res.status(500).send({
      status: "failed get resources",
    });
  }
};

exports.getProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const products = await product.findOne({
      where: {
        id,
      },
      attributes: {
        exclude: ["idUser", "createdAt", "updatedAt"],
      },
    });

    res.send({
      status: "success",
      data : {products},
    });
  } catch (error) {
    res.status(500).send({
      status: "failed",
    });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    const { id } = req.params;

    await product.update(req.body, {
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

exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    await product.destroy({
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
