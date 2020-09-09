const db = require("../models")

const Csv = db.csv;
const Op = db.sequelize.Op;



exports.findId = async (req,res) =>{
    const sensor_id = req.params.sensor_id;
    console.log(sensor_id)
    Csv.findAll({where:{sensor_id}})
    .then(data => {
        res.json(data)
    }).catch(err =>{
        res.status(500).send({
            message:
            err.message || "Some error occurred while retrieving csv."
        }
        )
    })
}
exports.findData = (req,res)=>{
    const id = req.query.id;
    let condition = id ? { id: { [Op.like]: `%${id}%` } } : null;


    Csv.findAll({ where: condition  })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving csv."
            });
        });

};