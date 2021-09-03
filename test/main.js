const { AITools } = require("../index");
const AIClient = new AITools();
AIClient.NSFW("A_URL_HERE")
.then(console.log);