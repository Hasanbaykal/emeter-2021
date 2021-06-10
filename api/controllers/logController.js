const Log = require('../models/Log');

function logValid(req) {
    let errors = {};

    if (!req.body.emoji) errors.emoji = "Emoji is empty."
    if (!req.body.emoji_power) errors.emoji_power = "Emoji power is empty."
    if (!req.body.description) errors.description = "Description is empty."

    return Object.keys(errors).length
};

exports.create = (req, res) => {

    if (logValid(req)) res.status(404).send(errors);

    const log = new Log({
        emoji: req.body.emoji,
        emoji_power: req.body.emoji_power,
        description: req.body.description
    });

    log.save().then(data => {
            res.status(201).send(data);
        }).catch(err => {
            res.status(500).send({
                message: err
            })
        })
};

exports.findOne = (req, res) => {
    Log.findById(req.params.logId)
        .then(log => {
            if (!log) {
                return res.status(404).send({
                    message: "Unable to find log with id " + req.params.logId
                });
            }

            res.set('Access-Control-Allow-Origin', '*')
            res.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')

            res.status(200).send(log);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Unable to find log with id " + req.params.logId
                })
            }
            return res.status(500).send({
                message: "Error retrieving log with id " + req.params.logId
            })
        })
}

exports.update = (req, res) => {
    if (logValid(req)) res.status(404).send(errors);
   
    Log.findByIdAndUpdate(req.params.logId, {
            emoji: req.body.emoji,
            emoji_power: req.body.emoji_power,
            description: req.body.description
        }, {
            new: true
        })
        .then(log => {
            if (!log) {
                return res.status(404).send({
                    message: "Unable to find log with id " + req.params.log
                })
            }
            res.send(log);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Unable to find log with id " + req.params.logId
                })
            }
            return res.status(500).send({
                message: "Error occured while retrieving log with id  " + req.params.logId
            })
        })
   };
   
   exports.delete = (req, res) => {
       Log.findByIdAndRemove(req.params.logId)
           .then(log => {
               if (!log) {
                   return res.status(404).send({
                       message: "Unable to find log with id " + req.params.logId
                   })
               }
               res.status(204).send({
                   message: "Log deleted!"
               })
           }).catch(err => {
               if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                   return res.status(404).send({
                       message: "Unable to delete log with id " + req.params.logId
                   })
               }
               return res.status(500).send({
                   message: "Unable to delete log with id " + req.params.logId
               })
           })
   }