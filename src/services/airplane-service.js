const { AirplaneRepository } = require("../repositories");
const AppError = require("../utils/errors/app-error");
const { StatusCodes } = require("http-status-codes");
 
const airplaneRepository = new AirplaneRepository();

async function createAirplane(data) {
    try {
        const airplane = await airplaneRepository.create(data);
        return airplane;    
    } catch (error) {
        if(error.name == 'SequelizeValidationError'){

            let explanation = [];

            error.errors.forEach(element => {
                explanation.push(element);
            });
            throw new AppError(explanation, StatusCodes.INTERNAL_SERVER_ERROR);
        }
        throw error;
    }
}

module.exports = { createAirplane } 