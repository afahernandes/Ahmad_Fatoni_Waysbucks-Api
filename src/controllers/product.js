const { product } = require("../../models");

exports.addPrduct = async (req, res) => {
  try {
    const { body } = req;
    const userId = req.user.id;

    const newProduct = await product.create({
      ...body,
      idUser: userId,
      image: req.file.filename,
    });

    res.send({
      status: "success",
      data: { newProduct },
    });
  } catch (error) {
    console.log(error);
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
      data: { products },
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
      data: { products },
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

    let products = await product.findOne({
      where: {
        id,
      },
      attributes: {
        exclude: ["idUser", "createdAt", "updatedAt"],
      },
    });
    res.send({
      status: "success",
      prduct: { products },
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
