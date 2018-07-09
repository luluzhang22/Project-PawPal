const config = require('../config/config');

module.exports = {
    dogBreed: [
        {
            name: "Welsh Corgi", species: config.species.Dog, picUrl: './images/species/dog/welsh-corgi.png',
            realPicUrl: './images/breed/dog/welsh-corgi.jpg', backPicUrl: './images/breed/dog/welsh-corgi-back.jpg',

            information: { temperament: 'Outgoing, playful, active', lifeSpan: '12-15', price: '$600 - $1000', avgSize:'small', origin: 'United Kingdom', color: 'Black, Tan, Fawn, Red', weight: 'Male: 24-31 pounds; Female: 24-28 pounds'},
            characteristics: { affection: 4, inquisitive: 3, bark: 2.5, odour: 1, sheddingAmount: 3},
            temperament: 'You’ll find that Pembroke Welsh Corgis have a happy personality, are loyal to its masters, and quite tough. It plays well with children, as long as it’s not pestered and can even handle some rough play. Because this breed was made to herd livestock, it can be a little domineering at times, but proper training can take care of this problem. Pembroke Welsh Corgis are good problems solvers, but your dog may also have a stubborn and independent streak. Corgis are natural watchdogs and will bark at strangers and distrust people they do not know. If you want to correct this, start training and socializing is important. As long as it is socialized early, Pembroke Welsh Corgis are good companion animals for your other family pets.',
            diet: 'You should feed your Pembroke Welsh Corgi a premium quality dog kibble. As well, these Corgis do well with fish, lamb, poultry, potato, beets, carrots, and barley.',
            housing: 'As the Pembroke Welsh Corgi loves to herd, a regular herding session is an ideal form of exercise. If it is unable to herd, take it out for a moderate leash-led walk or play session.\n' +
            'The Pembroke is suited to live outdoors in temperate weather, but temperamentally it prefers to share its owner\'s home, while having access to the yard. Coat care comprises of a weekly brushing routine to ride the dog\'s coat of any dead hair.',
            toys: 'Exercise is important for the Pembroke Welsh Corgi, as it can develop back problems and needs to be kept at a healthy weight. If your dog is obese, its back problems will only get worse. As well, try to make sure your Corgi doesn’t jump. An active dog, the Pembroke Welsh Corgi loves to play and run. Regular exercise is mandatory, so a backyard is a great asset.  To wear your dog out, kids make excellent playmates – get them to play tug of war, hide and seek, and chase games. For outdoor activities to do with your Pembroke Welsh Corgi, go for a walk, jog or hike, or take your pooch to the dog park to play with other dogs.' ,
            clean: 'The Pembroke Welsh Corgi medium length coat is easy to maintain. Shedding seasons take place in the spring and summer, so weekly brushing with a wire brush will help. Brush both the outer and under coat to keep tangles at a minimum. Since its coat is naturally water resistant, the Pembroke Welsh Corgi does not need to be bathed regularly. But if you must give your dog a bath, use specially formulated shampoos with the correct skin and hair pH.',
            training: 'Smart and quick-witted, Pembroke Welsh Corgis learn quickly. But even though the breed is intelligent, you’ll still need to implement firm training methods and consistent training sessions to maintain good behavior and skills. As with most dog breeds, you shouldn’t use harsh or negative training methods on your Pembroke Welsh Corgi – it just won’t work and you’ll end up frustrated. Another thing to keep in mind is that Corgis don’t respond to repetitive training because it gets bored easily. Part of the training should include not to bark at strangers – socialization and obedience training can help this problem. And although the Pembroke Welsh Corgi probably will not respond to commands from strangers, it will respond commands from all family members. Once properly trained, the Pembroke Welsh Corgi makes good obedience and show dogs once they have been properly trained. This breed is natural herders, so herding trails are a good competition to get involved in.',
            health: 'Because it is a long-bodied purebred dog, one of the major problems with the Pembroke Welsh Corgi is intervertebral disc disease, which is a back problem. Other health issues include progressive retinal atrophy, glaucoma, Von Willebrand’s Disease and epilepsy.'
        },
        {
            name: "French Bulldog", species: config.species.Dog, picUrl: './images/species/dog/french-bulldog.png',
            realPicUrl: './images/breed/dog/french-bulldog.jpg', backPicUrl: './images/breed/dog/french-bulldog-back.jpg',
            information: { temperament: 'Easygoing, caring, loving', lifeSpan: '10-12', price: '$2000 - $4000', avgSize:'small', origin: 'France',
                color: 'Brindle, White, Cream, Fawn', weight: 'Male & Female: 22-28 pounds'},
            characteristics: { affection: 3, inquisitive: 4, bark: 1.5, odour: 1.5, sheddingAmount: 1},
            temperament: 'A wonderful friend and a good family member, the French Bulldog is playful and has a sweet and funny personality. Although it gets along with everyone, the French Bulldog usually forms a special bond with just one person. When introducing the French Bulldog to other dogs and young children, you should be careful, as it can occasionally be aggressive or play roughly. Neutering male dogs may decrease the chance of aggression.\n' +
            'When you are consistent and gentle, your French Bulldog will learn well. This breed doesn’t like being treated harshly or yelled at.\n' +
            'Because of its calm and happy-go-lucky personality, the French Bulldog is well suited for many different living environments, including apartment living. The Frenchie makes a good watchdog and will inform you of any visitors.\n',
            diet: 'French Bulldogs are known for its sensitive stomachs, so you must be careful what you feed your pet. Corn and wheat can make your Frenchie itchy, so go with premium dog foods. French Bulldogs love fruit, but only feed your pooch this treat in limited amounts.',
            housing: '',
            toys: 'Because French Bulldogs can put on extra weight, it’s important that your dog gets enough daily exercise. Be aware that French Bulldogs are susceptible to heat related problems and should play indoors when it is warm outside. Playing ball or running around in an air conditioned environment is fun and safe – as long as it is play, the Frenchie doesn’t care where it is.\n' +
            'When the weather is right, be sure to take your French Bulldog out for a walk. Stay away from water, as French Bulldogs are poor swimmers, thanks to its short and stout body.' ,
            clean: 'Sporting loose and wrinkled skin on its shoulders and head, the French Bulldog’s coat is soft and short. There is some shedding, which is more pronounced during the change of seasons. But since this is fine hair, the shedding may not be very noticeable\n' +
            'Regular bathing is not recommended for the French Bulldog, due to its dry skin, but it is important to brush your French Bulldog often. Use a wet cloth to clean your dog’s skin, ears and face (French Bulldogs tend to drool) and get in the habit of brushing its teeth.',
            training: 'Relatively easy to train dogs, you must be consistent and kind when working with your French Bulldog. This breed likes to please its owners, but it is known to have a stubborn streak. This means that if your French Bulldog thinks its pleasing you, it’s more likely to act obediently. You’ll find that negative reinforcement is not the way to train a French Bulldog.\n' +
            'When it comes to housebreaking, the easiest way to teach a French Bulldog is by using a crate. In this method, the dog is kept in the crate and let out to do its business. French Bulldogs want to always be near its owners, so it will pick up the housebreaking rules quickly in order to get out of the crate. Because accidents do happen, try redirecting and a kind reprimand.\n' +
            'French Bulldogs need proper socialization in order to be happy. Start introducing your Frenchie to people, dogs and other animals from an early age, otherwise your dog will prefer company of one person.',
            health: 'Since the French Bulldog is a smaller dog, it’s important to keep its weight regulated. Respiratory problems are common, and it worsens if it is overweight, as its abdomen swells and presses against its lungs.\n' +
            'In addition to breathing problems, French Bulldogs may suffer from snoring, wheezing and eye problems. And since puppies tend to have large heads, it could lead to caesarean births. Also watch out for dry skin that can result in bald spots on your Frenchie’s coat.'
        },
        {
            name: "Siberian Husky", species: config.species.Dog, picUrl: './images/species/dog/husky.png',
            realPicUrl: './images/breed/dog/siberian-husky.jpg', backPicUrl: './images/breed/dog/siberian-husky-back.jpg',
            information: { temperament: 'Adventurous, alert, clever', lifeSpan: '11-13', price: '$700 - $1200', avgSize:'medium', origin: 'Siberia',
                color: 'Agouti, White, Black, Gray', weight: 'Male: 35-60 pounds; Females: 35-50 pounds.'},
            characteristics: { affection: 3, inquisitive: 4, bark: 3, odour: 1, sheddingAmount: 4},
            temperament: 'You’ll find the Siberian Husky to be a happy dog that will become easily attached to its family. Energetic, fun and playful, the Husky is sociable and can be quite laid back. Even though it is smart and amenable to training, the Siberian Husky has a mind of its own.\n' +
            'Because the Siberian Husky can be laid back, it makes this breed a poor choice for a watchdog. You won’t really hear the Siberian Husky bark; rather, it chooses to communicate via a sound similar to that of a wolf, sort of like a howling noise.',
            diet: 'Fats and protein are the most important sources of energy to a Siberian Husky. You can feed your Husky a top quality dry dog food, but feel free to  is critical to supplement with ground chicken, fish, liver or other meat products.',
            housing: 'Since the Siberian Husky is active, it will need a home with a large yard. If you don’t have a yard, you must get your Husky out for vigorous exercise every day, otherwise it can become destructive in its boredom. Training is a great way to control some of this exuberance and must be started as a puppy in terms of socialization, getting along with other pets and even housebreaking.',
            toys: 'As the Siberian is happiest working, it needs a lot of physical activities. Take your dog for walks or hikes, or if you live in a cold climate, get your dog into sled pulling and mushing opportunities. If you live in a warmer climate, be sure not to overwork your Siberian Husky in order to avoid overheating. If you don’t live in a snowy climate, you may want to try urban or dryland mushing with your Siberian Husky. With this activity, you run on trails using specially designed scooters, with two wheels for one or two dogs, or three-wheeled rigs for three or more dogs.',
            clean: 'Expect this dog to shed regularly. Be prepared to vacuum often. Brushing will reduce shedding as well as make the coat softer and cleaner.',
            training: 'Smart and highly trainable, the Siberian Husky likes to push boundaries. This breed will try to assert itself as the leader of the pack, so you must step in right away to correct the dog. You must establish dominance as the alpha leader so the Husky knows what to expect and will respect your authority.\n' +
            'The Husky is an intuitive dog and will learn well in an obedience class, as this environment is set up for learning. When taking the lessons home, your dog may not obey you. Therefore, it’s important to start obedience training as a puppy and establish consistent boundaries at home. If you allow an exception just once, the Siberian Husky will take advantage of it and continue to push the issue.\n' +
            'When it comes to socialization, the Siberian Husky integrates well with other animals and humans. Try to keep your Siberian Husky busy with activities to keep it happy.',
            health: 'The Siberian Husky breed is generally a healthy one. There are still a few concerns to watch out for, including hip dysplasia, cataracts and corneal dystrophy.  The Siberian Husky also suffers from a skin condition called dermatitis, which is easily treated with zinc. Occasional bronchitis, asthma and gastric issues can also be a problem.'
        }
        /*{
            name: "Affenpinscher", species: config.species.Dog, picUrl: 'http://www.petguide.com/wp-content/uploads/2013/03/affenpinscher-main.jpg',
            information: { lifeSpan: '12-14', price: '$800 - $1200', avgSize: 'Small', origin: 'Germany' },
            characteristics: {  affection: 5, inquisitive: 5, bark: 5, odour: 0.5, sheddingAmount: 0.5},
            temperament: 'Active, Adventurous, Curious, Fun-loving, Playful, Stubborn\n' +
            'The affenpinscher lives up to his name,"monkey terrier", in both looks and actions. A terrier at heart, he is busy, inquisitive, bold and stubborn, but he also loves to monkey around, being playful and mischievous. He tends to bark and even climb. He is fairly good with other dogs and pets. This little dog is best with a family that likes entertainment and has a very good sense of humor.',
            diet: 'Because the Affenpinscher has dental issues, it’s important to feed your dog small, dry kibble from the very start. This will help the teeth grow stronger. Make sure any kibble you feed your dog features high-quality ingredients that are suitable for a smaller dog.',
            training: 'You’ll find that the Affenpinscher likes to please people, but it does have a stubborn streak. Start training early to curb this behavior and establish your dominant role in the household. Positive reinforcement works best, so be sure to use plenty of praise, affection and treats. Training should always be consistent – you’ll notice that gentle training tactics will ensure that your Affen minds its manners around other people and dogs.\n' +
            'The Affenpinscher also makes a good therapy dog. Thanks to its small size, this breed likes to travel and can adapt to new environments easily. And because it is such a people pleaser, the Affen enjoys making people happy, so feel free to bring your dog to senior residences and other therapy centers.',
            health: 'Since the Affenpinscher is so small, you’ll have to be extra careful with collars and leashes, as you don’t want them to suffer from tracheal damage. To avoid this problem, you can use a harness instead of a collar. Other health problems that may occur include heart issues, hip dysplasia, cataracts, hernias, Legg-Calve-Perthes Disease, hypothyroidism, Patellar Luxation, oligodontia, portosystemic shunts, sebaceous cysts and Von Willebrand Disease.'
        },
        {
            name: "Afghan Hound", species: config.species.Dog, picUrl: 'http://www.petguide.com/wp-content/uploads/2013/02/afghan-hound.jpg',
            information: { lifeSpan: '12-14', price: '$2000 - $2500', avgSize:'Large', origin: 'Afghanistan'},
            characteristics: { affection: 4, inquisitive: -1, bark: 0.5, odour: 1, sheddingAmount: 3},
            temperament: 'Aloof, Clownish, Dignified, Happy, Independent\n' +
                'The aristocratic air of the Afghan Hound is obvious, but before you chalk it off as an aloof breed, it’s important to realize this breed also can be very loyal and affectionate. One advantage of this more laid-back personality is that the Afghan Hound won’t try to challenge you for dominance, making them better-suited for the less-assertive types who simply want a nice companion that won’t try to run things.\n' +
                'They are generally peaceful dogs, though they can be a little suspicious of strangers if not properly socialized and used to the presence of strangers as well as other dogs.',
            diet: 'The food you give to your Afghan Hound will not be untypical for that of most dog breeds, but many people try different foods in order to “treat” the Afghan Hound’s coat – people who show their Afghan Hound, in particular. You don’t have to take any special precautions in your dog’s diet beyond assuring essential nutrition and a general food level that keeps the dog at a healthy weight.',
            housing: '',
            toys: '' ,
            clean: '',
            training: 'These dogs respond best to calm training. They can seem distant and aloof at times, which helps create that famous “aristocratic” air, but if you are able to demonstrate effective leadership there’s no reason the Afghan Hound can’t be a perfectly obedient and eager-to-please dog. Just be sure not to treat it too harshly, as it can be a little sensitive to over training and prefers a patient leader.',
            health: 'These dogs are considered generally healthy, which means your veterinarian probably won’t need to be consulted too much, though the normal precautions should always be taken.'
        },
        {
            name: "Airedale Terrier", species: config.species.Dog, picUrl: 'http://www.petguide.com/wp-content/uploads/2013/02/airedale-terrier1.jpg',
            information: { lifeSpan: '10-13', price: '$600 - $800', avgSize:'Medium', origin: 'United Kingdom'},
            characteristics: { affection: 3, inquisitive: -1, bark: 3, odour: 1, sheddingAmount: 2},
            temperament: 'Protective, intelligent, loyal, sensitive\n' +
            'Intelligent dogs prone to boredom, you’ll find that Airedale Terriers are great matches for you if you are similarly prone to boredom. If you like a lot of challenges and hate the idea of a routine, the temperament of an Airedale Terrier might be exactly the type of temperament for you. If, on the other hand, you’d prefer a lap dog that knows how to relax on the couch, this probably isn’t your breed.',
            diet: 'The Airedale Terrier can be deceptively light, which means their frame can put on the pounds if you’re not careful about their diet and exercise. Regular discipline with exercise and a steady diet of lean meats and good whole ingredients like vegetables will provide all the nutrition your Airedale Terrier needs.',
            housing: '',
            toys: '' ,
            clean: '',
            training: 'Airedale Terriers are known as quick learners, which mean they’re actually relatively smart. This is a good thing, of course, but it comes with easy boredom. If you’re the kind of person who wants a dog to lounge around the house with them, this probably isn’t the dog for you. Airedale Terriers like to be challenged and can handle a surprising amount of training. Making sure that these dogs learn obedience from a young age is a priority.',
            health: 'Like many medium-to-larger dogs, Airedale Terriers can experience hip dysplasia. The leading killer of Airedale Terriers is cancer.'
        },
        {
            name: "Akbash", species: config.species.Dog, picUrl: 'http://www.petguide.com/wp-content/uploads/2015/01/akbash-2.jpg',
            information: { lifeSpan: '9-11', price: '$500 - $700', avgSize:'Giant', origin: 'Turkey'},
            characteristics: { affection: 4, inquisitive: -1, bark: 4, odour: -1, sheddingAmount: 3},
            temperament: 'Gentle, calm, alert, protective\n' +
            'The Akbash Dog is not typically kept as a companion dog though, if properly socialized from a young age, this breed can get along with other dogs and pets. These dogs are calm and gentle by nature, they do have strong guarding and protective instincts. This breed is not aggressive or hostile, but it will respond to threats or intruders in its perceived territory by barking or growling a warning. These dogs tend to be independent and they prefer to have a great deal of space – if they do not have access to the outdoors they may develop problem behaviors such as trying to escape. These dogs do best when given a job to do, though they typically do not do well with obedience because they are so independent.',
            diet: 'As a large-breed dog, the Akbash Dog requires a high-quality commercial dog food diet that is formulated for large-breed dogs. Large-breed dog formulas are specially designed to meet the energy needs of large-breed dogs like the Akbash Dog to ensure that they do not become overweight.',
            housing: '',
            toys: '' ,
            clean: '',
            training: 'The Akbash Dog is an intelligent breed that was developed to work independently as a livestock protector. These dogs may not respond well to training because of their independent nature unless training is started early. Though obedience may not be this breed’s strong suit, these dogs do respond well when given a job to do or, at the very least, when given proper mental stimulation.',
            health: 'Because the Akbash Dog is such an old breed, it has a fairly large gene pool and is thus fairly healthy. This is not to say, however, that the Akbash Dog is immune to health problems – all breeds of dog are prone to developing certain conditions. Some of the most common conditions affecting the Akbash Dog breed include hip dysplasia, hypothyroidism, dilated cardiomyopathy, and gastric torsion. Responsible breeding practices can help to reduce the incidence of inherited conditions in this and other breeds.'
        },
        {
            name: "Akita", species: config.species.Dog, picUrl: 'http://www.petguide.com/wp-content/uploads/2013/02/akita-11.jpg',
            information: { lifeSpan: '10-12', price: '$800 - $1200', avgSize:'Large', origin: 'Japanese'},
            characteristics: { affection: 3, inquisitive: -1, bark: 1, odour: 2, sheddingAmount: 3},
            temperament: 'A real people-dog, the Akita is a social breed that prefers being part of a pack rather than being alone. A clean and intelligent dog, you will find the Akita easy to housebreak.\n' +
            'Akitas also have a tendency to take the alpha role over other animals. This breed doesn’t like to be alone, and if left on its own for too long, it will become bored. You may find that your dog will develop an intense owner attachment where it will not want to leave your side.\n' +
            'This breed likes children, and it is gentle and patient. However, the Akita may have a possessive attitude toward children in its family and may try to protect the child from other pets or animals. Socialization to other animals should start as soon as possible, which will prevent aggression.',
            diet: 'A real people-dog, the Akita is a social breed that prefers being part of a pack rather than being alone. A clean and intelligent dog, you will find the Akita easy to housebreak.\n' +
            'Akitas also have a tendency to take the alpha role over other animals. This breed doesn’t like to be alone, and if left on its own for too long, it will become bored. You may find that your dog will develop an intense owner attachment where it will not want to leave your side.\n' +
            'This breed likes children, and it is gentle and patient. However, the Akita may have a possessive attitude toward children in its family and may try to protect the child from other pets or animals. Socialization to other animals should start as soon as possible, which will prevent aggression.',
            housing: '',
            toys: '' ,
            clean: '',
            training: 'A real people-dog, the Akita is a social breed that prefers being part of a pack rather than being alone. A clean and intelligent dog, you will find the Akita easy to housebreak.\n' +
            'Akitas also have a tendency to take the alpha role over other animals. This breed doesn’t like to be alone, and if left on its own for too long, it will become bored. You may find that your dog will develop an intense owner attachment where it will not want to leave your side.\n' +
            'This breed likes children, and it is gentle and patient. However, the Akita may have a possessive attitude toward children in its family and may try to protect the child from other pets or animals. Socialization to other animals should start as soon as possible, which will prevent aggression.',
            health: 'Some health problems the Akita may suffer from are both viral and genetic. Before you take your puppy home, be sure its parents are clean and have passed all health testing.\n' +
            'The two major concerns of the Akita are CHD and PRA. CHD (canine hip dysplasia) is a condition where the hip socket does not operate well, which causes instability inside the hip joint. PRA (progressive retinal atrophy) is a gradual deterioration of the dog’s retina. It starts with night blindness and progresses to total blindness.'
        },*/
    ]
}
