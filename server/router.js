const  express = require('express');
const axios = require('axios');
const router = express.Router();

const { Sequelize, DataTypes, DATE } = require("sequelize");

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
        primaryKey:true
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

},{
    timestamps: false
});

const Parameters = sequelize.define('parameters', {
    current: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    RPM: {
        type: DataTypes.DECIMAL,
        allowNull: true
    }
})

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch((error) => {
    console.error('Unable to connect to the database: ', error);
});

const registerMotor = async(data) => {
    const obj = JSON.parse(JSON.stringify(data));
    var motorDetails;
    for(key in obj) motorDetails = JSON.parse(key)
    const motor = await Motor.create({
        motorId : motorDetails["motorID"],
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

const getData = async() =>{
    var current = 74.0, RPM = 0.0;
    axios.get('http://localhost:5000/voltage')
    .then(res=> RPM = res.data)

    axios.get('http://localhost:5000/current')
    .then(res=> current = res.data)

    const parameter = await Parameters.create({
        current : current,
        RPM : RPM
    })
}

// const interval = setInterval(getData, 2000);

router.get('/api', (req , res) =>{
    res.send({text : "server is up and running"});
});

router.post('/api/motors', (req, res)=>{
    registerMotor(req.body);
    res.send('Success');
})

router.get('/api/motors',async(req,res)=>{
    await Promise.resolve(
        await Motor.findAll({
            attributes : ['motorId','status', 'emergencyContact']
        })
    )
    .then((data) => res.send(data));
})

router.get('/api/motor/:id', async(req, res) => {
    const motorID = req.params.id;
    await Promise.resolve(
        await Motor.findByPk(motorID)
    )
    .then(motorDetails => res.send(motorDetails))
})

module.exports = router;