const Breed = require('../../models/Breed');
const config = require('../../config/config');

module.exports = (app) => {
    app.get('/api/breeds/all/:page/:sort', (req, res, next) => {
        const sort = req.params.sort;
        const page = !req.params.page ? 1 : req.params.page;
        if (!sort || sort === 'name') {
            Breed.find().skip((page - 1) * 6).limit(6).sort({name: 1})
                .exec().then((breeds) => res.json(breeds))
                .catch((err) => next(err));
        } else {
            Breed.find().skip((page - 1) * 6).limit(6).sort({species: 1}).sort({name: 1})
                .exec().then((breeds) => res.json(breeds))
                .catch((err) => next(err));
        }
    });

    app.get('/api/breeds/species/:species/:page', (req, res, next) => {
        Breed.find({'species': req.params.species})
            .skip((req.params.page - 1) * 6).limit(6).sort({'name': 1})
            .exec().then((breeds) => res.json(breeds))
            .catch((err) => next(err));
    });

    app.get('/api/breed/id/:id', (req, res, next) => {
        Breed.findById(req.params.id).exec()
            .then((breed) => res.json(breed))
            .catch((err) => next(err));
    });

    app.get('/api/breed/name/:name', (req, res, next) => {
        Breed.findOne({name: req.params.name}).exec()
            .then((breed) => res.json(breed))
            .catch((err) => next(err));
    });

    app.get('/api/breeds/total-page/:species', (req, res, next) => {
        const species = req.params.species;
        if (species && Object.keys(config.species).includes(species)) {
            Breed.count({'species': species}).exec()
                .then((count) => res.json(Math.ceil(count / 6)))
                .catch((err) => next(err));
        } else {
            Breed.count().exec()
                .then((count) => res.json(Math.ceil(count / 6)))
                .catch((err) => next(err));
        }
    });

    app.get('/api/breeds/breed-names/:species', (req, res, next) => {
        const species = req.params.species;
        if (species && Object.keys(config.species).includes(species)) {
            Breed.find({'species': species}, 'name').exec()
                .then((names) => res.json(names))
                .catch((err) => next(err));
        } else {
            Breed.find({}, 'name').exec()
                .then((names) => res.json(names))
                .catch((err) => next(err));
        }
    });
};
