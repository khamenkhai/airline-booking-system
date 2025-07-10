const { StatusCodes } = require("http-status-codes");
const { AirplaneService } = require("../services");

/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
async function createAirplane(req, res) {
    try {

        console.log(`model number : ${req.body.modelNumber}`);
        console.log(`capacity : ${req.body.capacity}`);

        const response = await AirplaneService.createAirplane({
            modelNumber: req.body.modelNumber,
            capacity: req.body.capacity,
        });

        return res.status(StatusCodes.CREATED).json({
            success: true,
            message: "Successfully created an airplane",
            data: response,
            err: {}
        });

    } catch (error) {
        console.log(error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            success: false,
            message: "Something went wrong on creating airplane!",
            data: {},
            err: error
        })
    }
}

module.exports = { createAirplane }