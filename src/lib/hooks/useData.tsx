"use client";
import React, { useEffect, useState } from 'react'

type DataLocation = URL | `/path/to/file.json` | string;


const useData = (dataLocation: DataLocation) => {
     const [data, setData] = React.useState([]);


      useEffect(() => {
    const fetchData = async (dataLocation: DataLocation) => {
      try {
        const response = await fetch(dataLocation);
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData(dataLocation);
  }, [dataLocation]);

  return data

}

export default useData