import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import Header from './Header';
import AircraftRow from './AircraftRow';

export default function FleetMonitor() {
  const [aircrafts, setAircrafts] = useState([]);
  const [updatedAt, setUpdatedAt] = useState('');

  useEffect(() => fetchData(), []);

  async function fetchData() {
    const { data, error } = await supabase
      .from('aircraft')
      .select('id, registration, manufacturer, model, status');
    if (error) console.error(error);
    else {
      setAircrafts(data);
      setUpdatedAt(new Date().toLocaleString());
    }
  }

  // Maneja edición de estado
  async function handleEdit(aircraft) {
    const oldStatus = aircraft.status;
    const newStatus = prompt(`Nuevo estado para ${aircraft.registration} (operational, maintenance, out_of_service):`, oldStatus);
    if (!newStatus || newStatus === oldStatus) return;
    const notes = prompt('Notas adicionales:', '');
    const userName = prompt('Tu nombre:', '');

    // Actualiza tabla aircraft
    const { error: errUpdate } = await supabase
      .from('aircraft')
      .update({ status: newStatus })
      .eq('id', aircraft.id);
    if (errUpdate) {
      console.error(errUpdate);
      alert('Error al actualizar estado');
      return;
    }

    // Inserta en activity_log
    const { error: errLog } = await supabase
      .from('activity_log')
      .insert({
        registration: aircraft.registration,
        old_status: oldStatus,
        new_status: newStatus,
        notes,
        user_name: userName,
        timestamp: new Date().toISOString()
      });
    if (errLog) console.error(errLog);

    // Refresca datos
    fetchData();
  }

  return (
    <div>
      <Header lastUpdated={updatedAt} />
      <div className="pt-24 px-4 max-w-4xl mx-auto">
        {aircrafts.map(ac => (
          <AircraftRow key={ac.id} aircraft={ac} onEdit={handleEdit} />
        ))}
      </div>
    </div>
  );
}
