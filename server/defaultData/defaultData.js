const Species = require('../models/Species');
const Breed = require('../models/Breed');
const User = require ('../models/UserData');
const UserPets = require('../models/UserPetsData');

const defaultBreedData = [
    require('./catBreedData').catBreed,
    require('./dogBreedData').dogBreed,
    require('./birdBreedData').birdBreed,
    require('./fishBreedData').fishBreed,
    require('./rabbitBreedData').rabbitBreed
];

const userInfo = require('./userData').userInfo;
const userPets = require('./userPetsDate').userPets;

const config = require('../config/config');

module.exports = () => {
    Species.count().exec((err, count) => {
        if (count > 0) {
            return;
        }

        const species = [
            new Species({ name: config.species.Cat, picUrl: './images/species/cat/cat.png'}),
            new Species({ name: config.species.Dog, picUrl: './images/species/dog/dog.png'}),
            new Species({ name: config.species.Fish, picUrl: './images/species/fish/fish.png'}),
            new Species({ name: config.species.Rabbit, picUrl: './images/species/rabbit/rabbit.png'}),
            new Species({ name: config.species.Bird, picUrl: './images/species/bird/bird.png'}),
            new Species({ name: config.species.Rodent, picUrl: './images/species/rodent/rodent.png'})
        ];

        Species.create(species, (error) => {
            if (!error) {
                console.log('Insert species data successfully!');
            }else{
                console.log('Insert species data error:' + error);
            }
        });
    });

    Breed.count().exec((err, count) => {
        if(count > 0)
            return;

        const breeds = [];

        for(const breedData of defaultBreedData){
            for(const breed of breedData){
                breeds.push(new Breed(breed));
            }
        }

        Breed.create(breeds, (error) => {
            if (!error) {
                console.log('Insert breed data successfully!');
            }else{
                console.log('Insert breed data error:' + error);
            }
        });
    });

    User.count().exec((err, count) => {
        if(count > 0)
            return;

        const users = [];

        for (const user of userInfo) {
            users.push(new User(user));
        }


        User.create(users, (error) => {
            if (!error) {
                console.log('Insert user data successfully!');
            }else{
                console.log('Insert user data error:' + error);
            }
        });
    });

    UserPets.count().exec((err, count) => {
        if(count > 0)
            return;

        const pets = [];

        for (const pet of userPets) {
            pets.push(new UserPets(pet));
        }

        UserPets.create(pets, (error) => {
            if (!error) {
                console.log('Insert pets data successfully!');
            }else{
                console.log('Insert pets data error:' + error);
            }
        });
    });
};
