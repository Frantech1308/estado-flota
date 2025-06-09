import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import Header from './Header';
import AircraftRow from './AircraftRow';

export default function FleetMonitor() {
  const [aircrafts, setAircrafts] = useState([]);
  const [updatedAt, setUpdatedAt] = useState('');

  useEffect(() => {
    async function fetchData() {
      const { data, error } = await supabase.from('aircrafts').select('*');
      if (error) console.error(error);
      else {
        setAircrafts(data);
        setUpdatedAt(new Date().toLocaleString());
      }
    }
    fetchData();
    const interval = setInterval(fetchData, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Header lastUpdated={updatedAt} />
      <div className="pt-24 px-4 max-w-4xl mx-auto">
        {aircrafts.map(ac => <AircraftRow key={ac.id} aircraft={ac} />)}
      </div>
    </div>
  );
}
