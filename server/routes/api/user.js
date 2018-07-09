const User = require('../../models/UserData');
const UserPets = require('../../models/UserPetsData');
const Breed = require('../../models/Breed');
const xss = require('xss');
const getUserWithPets = (user, email, res) => {
    User.findOne({'email': email}).exec().then(
        result => {
            user.userInfo = result;
            UserPets.find({'email': email}).exec().then(
                result => {
                    user.userPets = result;
                    res.json(user);
                }
            );
        }
    );
};

const addUserPet = (userPet, res, next) => {
    const pet = new UserPets(userPet);
    pet.save()
        .then(() => {
            getUserWithPets({}, userPet.email, res);
        })
        .catch((err) => next(err));
};

const EditUserPet = (userPet, res, next) => {
    const pet = new UserPets({email, petName, breed, gender, birthday, color} = userPet);
    UserPets.update({_id: userPet._id}, {$set: pet}).exec()
        .then(() => {
            getUserWithPets({}, userPet.email, res);
        }).catch((err) => next(err));
};

const checkRegisterEmail = (newUser, body, res, next) => {
    if (body) {
        const errMessage = 'User email: ' + newUser.email + ' is already taken';
        return res.status(400).send({message: errMessage});
    } else {
        const user = new User(newUser);
        user.save()
            .then(res.json({}))
            .catch((err) => next(err));
    }
};

const checkLoginPassword = (result, res, loginUser) => {
    if (result) {
        if (result.password === loginUser.password) {
            const user = {};
            Breed.find({_id: {$in: result.favorites}}).exec()
                .then((favorites) => {
                    user.favorPets = favorites;
                    getUserWithPets(user, result.email, res);
                });
        } else {
            res.status(400).send({message: 'Email or Password is wrong!'});
        }
    } else {
        res.status(400).send({message: 'Email or Password is wrong!'});
    }
};

const getUserWithFavorPet = (favoriteId, email, res) => {
    const result = {};
    Breed.findById(favoriteId).exec().then(
        pet => {
            result.pet = pet;
            User.findOne({email: email}).exec().then(
                user => {
                    result.user = {};
                    result.user.userInfo = user;
                    Breed.find({_id: {$in: user.favorites}}).exec()
                        .then((favorites) => {
                            result.user.favorPets = favorites;
                            res.json(result);
                        });
                }
            )
        }
    )
};

const checkUserFavorite = (user, favoriteId, res, next, onlike) => {
    if (user) {
        if (onlike) {
            addLike(user, favoriteId, res, next);
        } else {
            removeLike(user, favoriteId, res, next);
        }
    } else {
        res.status(400).send({message: 'Email is wrong!'});
    }
};

const addLike = (user, favoriteId, res, next) => {
    if (!user.favorites.includes(favoriteId)) {
        Breed.update({_id: favoriteId}, {$inc: {likes: 1}}).exec()
            .then(() => User.update({email: user.email}, {$push: {favorites: favoriteId}}).exec().then(() => {
                getUserWithFavorPet(favoriteId, user.email, res);
            })).catch((err) => next(err));
    } else {
        res.status(400).send({message: 'User has already like this pet!'});
    }
};

const removeLike = (user, favoriteId, res, next) => {
    if (user.favorites.includes(favoriteId)) {
        Breed.update({_id: favoriteId}, {$inc: {likes: -1}}).exec()
            .then(() => User.update({email: user.email}, {$pull: {favorites: favoriteId}}).exec().then(() => {
                getUserWithFavorPet(favoriteId, user.email, res);
            })).catch((err) => next(err));
    } else {
        res.status(400).send({message: 'User does not like this pet!'});
    }
};

module.exports = (app) => {
    app.post('/api/user/register', (req, res, next) => {
        const newUser = {email: xss(req.body.email), name: xss(req.body.name), password: req.body.password};

        if (!newUser.email) {
            return res.status(400).send({message: 'User email is empty'});
        } else if (!newUser.name) {
            return res.status(400).send({message: 'User message is empty'});
        } else if (!newUser.password) {
            return res.status(400).send({message: 'User password is empty'});
        } else {
            User.findOne({'email': newUser.email}).exec()
                .then(body => checkRegisterEmail(newUser, body, res, next))
                .catch((err) => next(err));
        }
    });

    app.post('/api/user/login', (req, res, next) => {
        const loginUser = {email: xss(req.body.email), password: req.body.password};

        User.findOne({'email': loginUser.email})
            .exec().then((result) => checkLoginPassword(result, res, loginUser))
            .catch((err) => next(err));


    });

    app.post('/api/user/addPet', (req, res, next) => {
        const userPet = {...req.body.petInfo, email: xss(req.body.petInfo.email), petName: xss(req.body.petInfo.petName), color: xss(req.body.petInfo.color)};
        userPet.email = xss(req.body.userEmail);
        // xss(userPet);
        if (!userPet.email) {
            return res.status(400).send({message: 'User email is empty'});
        } else if (!userPet.petName || !userPet.breed) {
            return res.status(400).send({message: 'Pet info is empty'});
        } else {
            if (userPet._id) {
                EditUserPet(userPet, res, next);
            } else {
                addUserPet(userPet, res, next);
            }
        }
    });

    app.post('/api/user/delPet', (req, res, next) => {
        const petId = req.body.petId;
        const email = req.body.email;
        if (!email) {
            return res.status(400).send({message: 'User email is empty'});
        } else {
            UserPets.findById(petId).exec().then((userPet) => {
                if (userPet) {
                    if (userPet.email === email) {
                        UserPets.deleteOne({_id: petId}).exec().then(() => getUserWithPets({}, email, res));
                    } else {
                        return res.status(400).send({message: 'User does not have this pet.'});
                    }
                } else {
                    return res.status(400).send({message: 'Pet is not exist.'});
                }
            }).catch((err) => next(err));
        }
    });

    app.post('/api/user/addFavorite', (req, res, next) => {
        const favoriteId = req.body.petId;
        const email = req.body.email;
        if (!email) {
            return res.status(400).send({message: 'User email is empty'});
        } else if (!favoriteId) {
            return res.status(400).send({message: 'Pet id is empty'});
        } else {
            User.findOne({'email': email}).exec().then((user) => checkUserFavorite(user, favoriteId, res, next, true)).catch((err) => next(err));
        }
    });

    app.post('/api/user/removeFavorite', (req, res, next) => {
        const favoriteId = req.body.petId;
        const email = req.body.email;
        if (!email) {
            return res.status(400).send({message: 'User email is empty'});
        } else if (!favoriteId) {
            return res.status(400).send({message: 'Pet id is empty'});
        } else {
            User.findOne({'email': email}).exec().then((user) => checkUserFavorite(user, favoriteId, res, next, false)).catch((err) => next(err));
        }
    });

};
