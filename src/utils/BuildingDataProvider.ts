import { useState, useEffect } from 'react';

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

    const getData = async () => {
      const res = await fetch('../data/building.json')
      const data = await res.json()
      setBuildingData(data)
      return
    }

    getData()
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
