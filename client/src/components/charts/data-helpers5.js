import Axios from 'axios';
let y=0

export const createDataPoint = (time = Date.now(), magnitude = 1000, offset = 19800) => {
  
    const log1 = () => { 
       Axios.get("/acstatmotor")
      .then( response => {y= response.data;
       })
    }
    var x=  log1()
   console.log(parseInt(y))
      return [
        time + offset * magnitude,
        parseInt(y)    ];
  
    
      
    };
    export const createRandomData = (time, magnitude, points = 0) => {
        const data = [];
        let i = (points * -1) + 1;
        for (i; i <= 0; i++) {
          data.push(createDataPoint(time, magnitude, i));
        }
        return data;
      };

      export const addDataPoint = (data, toAdd) => {
        if (!toAdd) toAdd = createDataPoint();
        const newData = data.slice(0); // Clone
        newData.push(toAdd);
        return newData;
      };