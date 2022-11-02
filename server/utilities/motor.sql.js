const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
    'btp',
    'root',
    '#Sunil@123',
    {
        host: 'localhost',
        dialect: 'mysql'
    }
);

const Motor = sequelize.define('motor', {
    motorId : {
        type: DataTypes.STRING,
        allowNull: false
    },
    motorName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    geoLocation: {
        type: DataTypes.STRING,
        allowNull: false
    },
    powerRating: {
        type: DataTypes.STRING,
        allowNull: false
    },
    operatingSchedule: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Temperature: {
        type: DataTypes.STRING,
        allowNull: false
    },
    installmentDate: {
        type: DataTypes.STRING,
        allowNull: false
    },
    emergencyContact: {
        type: DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false
    },
    insulationQuality: {
        type: DataTypes.STRING,
        allowNull: false
    },

});

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch((error) => {
    console.error('Unable to connect to the database: ', error);
});

const registerMotor = async(motorDetails) => {
    console.log(motorDetails)
    const motor = await Motor.create({
        motorId : motorDetails["motorId"],
        motorName: motorDetails["motorName"],
        geoLocation : motorDetails["geoLocation"],
        powerRating : motorDetails["powerRating"],
        operatingSchedule : motorDetails["operatingSchedule"],
        Temperature : motorDetails["Temperature"],
        installmentDate : motorDetails["installmentDate"],
        emergencyContact : motorDetails["emergencyContact"],
        status : "good",
        insulationQuality : motorDetails["insulationQuality"],
    })
    console.log(motor.motorId);
}

module.exports =  registerMotor ;