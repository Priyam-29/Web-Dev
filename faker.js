var faker = require("faker");

for( var i = 0; i < 5; i++)
{
    console.log(faker.name.findName());
    console.log(faker.internet.email());
    console.log(faker.helpers.createCard());
}