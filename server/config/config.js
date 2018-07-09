require('env2')('.env');
module.exports = {
    db_dev: process.env.MONGO_URL || 'mongodb://localhost:27017/pet-handbook',
    port: process.env.PORT || 8080,
    species : {
        Cat: 'Cat',
        Dog: 'Dog',
        Bird: 'Bird',
        Rodent: 'Rodent',
        Rabbit: 'Rabbit',
        Fish: 'Fish'}
};
