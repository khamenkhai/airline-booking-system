const CRUDRepository = require("../repositories/crud-repo");
const { Airplane } = require("../models"); // ✅ Correctly gets initialized model

class AirplaneRepository extends CRUDRepository {
    constructor() {
        super(Airplane);
    }
}

module.exports = AirplaneRepository;
