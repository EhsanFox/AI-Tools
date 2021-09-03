const { existsSync, readdirSync } = require("fs");
const path = require("path")
module.exports = (app) => {
    if( existsSync( path.resolve(__dirname, "Routes") ) )
    {
        let Routes = readdirSync(path.resolve(__dirname, "Routes"));
        for (const Route of Routes) {
            
        }
    }
};