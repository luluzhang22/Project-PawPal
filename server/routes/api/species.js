const Species = require('../../models/Species');

module.exports = (app) => {
    app.get('/api/species', (req, res, next) => {
        Species.find()
            .sort({name: 1})
            .exec()
            .then((species) => res.json(species))
            .catch((err) => next(err));
    });
};
