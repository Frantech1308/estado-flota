import React from 'react';
import { HiOutlinePaperAirplane, HiOutlinePencil } from 'react-icons/hi';

const statusStyles = {
  operational: ['bg-green-500', 'bg-green-600', 'text-white'],
  maintenance: ['bg-yellow-500', 'bg-yellow-600', 'text-black'],
  out_of_service: ['bg-red-500', 'bg-red-600', 'text-white'],
};

export default function AircraftRow({ aircraft }) {
  const { registration, model, status } = aircraft;
  const [bg, pillBg, pillText] = statusStyles[status] || statusStyles.operational;

  return (
    <div className={`flex justify-between items-center ${bg} rounded-lg my-2 py-4 px-6 hover:shadow-xl hover:-translate-y-1 transition transform`}>
      <div className="flex items-center space-x-2">
        <HiOutlinePaperAirplane className="text-white" />
        <div>
          <p className="text-xl font-bold text-white">{registration}</p>
          <p className="text-sm text-gray-200">{model}</p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <span className={`${pillBg} px-4 py-2 rounded-full font-semibold ${pillText} shadow-lg uppercase`}>{status.replace('_', ' ')}</span>
        <HiOutlinePencil className="text-white opacity-0 hover:opacity-100 transition" />
      </div>
    </div>
  );
}
