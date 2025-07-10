const { Logger } = require("../config");

class CRUDRepository {
    constructor(model) {
        this.model = model;
    }

    async create(data) {
        try {
            const response = await this.model.create(data);
            return response;
        } catch (error) {
            Logger.error("Something went wrong in the CRUD repo! : create");
            throw error;
        }
    }

    async delete(id) {
        try {
            const response = await this.model.destroy({
                where: {
                    id: id
                }
            });
            return response;
        } catch (error) {
            Logger.error("Something went wrong in the CRUD repo! : delete");
            throw error;
        }
    }

    async getAll() {
        try {
            const response = await this.model.findAll();
            return response;
        } catch (error) {
            Logger.error("Something went wrong in the CRUD repo! : getAll");
            throw error;
        }
    }

    async get(data) {
        try {
            const response = await this.model.findByPk(data);
            return response;
        } catch (error) {
            Logger.error("Something went wrong in the CRUD repo! : get");
            throw error;
        }
    }


    async update(id, data) {
        try {
            const response = await this.model.update({
                where: {
                    id: id
                }
            });
            return response;
        } catch (error) {
            Logger.error("Something went wrong in the CRUD repo! : update");
            throw error;
        }
    }


}

module.exports = CRUDRepository;
