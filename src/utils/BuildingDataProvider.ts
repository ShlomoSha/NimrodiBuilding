import { useState, useEffect } from 'react';
import data from '../data/building.json'

interface Floor {
  name: string;
  soldiers: number;
  purpose: string;
  description: string;
  activity:string
}

const useBuildingData = () => {
  const [buildingData, setBuildingData] = useState<Floor[]>([]);

  useEffect(() => {    
    setBuildingData(data)
  }, []) 

  const getFloorByIndex = (floorIndex: number): Floor | undefined => {
    if (floorIndex < buildingData.length && floorIndex >= 0) {
      return buildingData[floorIndex]
    } else {
      return undefined
    }
  }  

  const getListOfActivities = ():string[]=>{
    const activities = buildingData.map(b => b.activity)
    return activities
  }
  
  return {
    buildingData,
    getFloorByIndex,
    getListOfActivities
  };
};

export default useBuildingData;
