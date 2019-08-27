var v = require("faker");
for(var i = 0; i < 5; i++)
{
    var randomName = v.name.firstName(); // Rowan Nikolaus
    console.log(randomName);
    var randomEmail = v.internet.email(); // Rowan Nikolaus
    console.log(randomEmail);
}
