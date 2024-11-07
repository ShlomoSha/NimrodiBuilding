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

  const getFloorByIndex = (floorIndex: number): Floor | undefined =>
  {
    //FILL HERE
  }
  const getListOfActivities = ():string[]=>{
    //FILL HERE
  }
  return {
    buildingData,
    getFloorByIndex,
    getListOfActivities
  };
};

export default useBuildingData;
