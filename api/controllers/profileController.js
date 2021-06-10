const Profile = require('../models/Log');

function profileValid(req) {
    let errors = {};

    if (!req.body.first_name) errors.first_name = "First name is empty."
    if (!req.body.last_name) errors.last_name = "Last name is empty."
    if (!req.body.age) errors.age = "Age is empty."

    return Object.keys(errors).length
};

exports.create = (req, res) => {

    if (profileValid(req)) res.status(404).send(errors);

    const profile = new Profile({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        age: req.body.age
    });

    profile.save().then(data => {
            res.status(201).send(data);
        }).catch(err => {
            res.status(500).send({
                message: err
            })
        })
};

exports.findOne = (req, res) => {
    Profile.findById(req.params.profileId)
        .then(profile => {
            if (!profile) {
                return res.status(404).send({
                    message: "Unable to find profile with id " + req.params.profileId
                });
            }

            res.set('Access-Control-Allow-Origin', '*')
            res.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')

            res.status(200).send(profile);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Unable to find profile with id " + req.params.profileId
                })
            }
            return res.status(500).send({
                message: "Error retrieving profile with id " + req.params.profileId
            })
        })
}

exports.update = (req, res) => {
    if (profileValid(req)) res.status(404).send(errors);
   
    Profile.findByIdAndUpdate(req.params.profileId, {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            age: req.body.age
        }, {
            new: true
        })
        .then(profile => {
            if (!profile) {
                return res.status(404).send({
                    message: "Unable to find profile with id " + req.params.profile
                })
            }
            res.send(profile);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Unable to find profile with id " + req.params.profileId
                })
            }
            return res.status(500).send({
                message: "Error occured while retrieving profile with id  " + req.params.profileId
            })
        })
   }
   
   exports.delete = (req, res) => {
       Profile.findByIdAndRemove(req.params.profileId)
           .then(profile => {
               if (!profile) {
                   return res.status(404).send({
                       message: "Unable to find profile with id " + req.params.profileId
                   })
               }
               res.status(204).send({
                   message: "Profile deleted!"
               })
           }).catch(err => {
               if (err.kind === 'ObjectId' || err.name === 'NotFound') {
                   return res.status(404).send({
                       message: "Unable to delete profile with id " + req.params.profileId
                   })
               }
               return res.status(500).send({
                   message: "Unable to delete profile with id " + req.params.profileId
               })
           })
   }