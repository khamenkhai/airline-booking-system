const CRUDRepository = require("../repositories/crud-repo");
const Airplane = require("../models/airplane");

class AirplaneRepository extends CRUDRepository{
    constructor(){
        super(Airplane);
    }
}

module.exports = AirplaneRepository;