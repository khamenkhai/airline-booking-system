'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Airplanes', [
      { modelNumber: 'Boeing 737', capacity: 189 },
      { modelNumber: 'Airbus A320', capacity: 180 },
      { modelNumber: 'Boeing 747', capacity: 416 },
      { modelNumber: 'Airbus A380', capacity: 555 },
      { modelNumber: 'Embraer E190', capacity: 114 },
      { modelNumber: 'Bombardier Q400', capacity: 78 },
      { modelNumber: 'Cessna 208 Caravan', capacity: 9 },
      { modelNumber: 'Boeing 767', capacity: 269 },
      { modelNumber: 'Airbus A310', capacity: 280 },
      { modelNumber: 'McDonnell Douglas MD-11', capacity: 293 },
      { modelNumber: 'Concorde', capacity: 92 },
      { modelNumber: 'Lockheed L-1011 TriStar', capacity: 250 },
      { modelNumber: 'Antonov An-225 Mriya', capacity: 250 },
      { modelNumber: 'Sukhoi Superjet 100', capacity: 98 },
      { modelNumber: 'Mitsubishi SpaceJet', capacity: 88 },
      { modelNumber: 'Tupolev Tu-154', capacity: 180 },
      { modelNumber: 'Boeing 787 Dreamliner', capacity: 296 },
      { modelNumber: 'Airbus A350', capacity: 315 },
      { modelNumber: 'Dassault Falcon 8X', capacity: 19 },
      { modelNumber: 'Gulfstream G650', capacity: 19 }
    ])
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Airplanes', null, {});
  }
};
