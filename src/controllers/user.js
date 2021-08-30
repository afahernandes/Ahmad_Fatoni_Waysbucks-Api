const {user} =require('../../models');

exports.addUsers =async(req,res) => {
    try {
        await users.create(req.body)
        res.send({
            message :'success insert data'
        })
    } catch (error) {
      res.status(500).send({
          message:'failed insert data'
      }) 
    }
}