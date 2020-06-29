import React, { useEffect, useState } from 'react';
import { db } from './Firebase';
import TableContainer from './tables/TableContainer';

const engagementMeta = [
  {
    name: 'id',
    label: 'View',
    display: false,
    sortable: false,
    link: id => `/engagement/view/${id}`,
  },
  {
    name: 'participantId',
    label: 'Participant',
    display: false,
    sortable: false,
    link: id => `/participant/view/${id}`,
  },
  { name: 'firstName', label: 'First Name' },
  { name: 'lastName', label: 'Last Name' },
  {
    name: 'associatedIncident',
    label: 'Associated Incident',
    display: false,
    sortable: false,
    link: id => `/incident/view/${id}`,
  },
  { name: 'dateEngaged', label: 'Date Engaged', type: 'date' },
  { name: 'pointPerson', label: 'Point Person' },
  { name: 'stateOfChange', label: 'State of Change' },
  { name: 'needsIdentified', label: 'Needs Identified' },
  { name: 'narcanEnrollment', label: 'Narcan Enrollment', type: 'boolean' },
  { name: 'followUpDate', label: 'Follow Up Date', type: 'date' },
  { name: 'firstPerson', label: 'First Person' },
  { name: 'notes', label: 'Notes' },
];

export default () => {
  const [engagements, setEngagements] = useState([]);

  useEffect(
    () =>
      db.collection('engagements').onSnapshot(snapshot => {
        const engagements = [];
        snapshot.forEach(doc => {
          engagements.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        setEngagements(engagements);
      }),
    []
  );

  return (
    <TableContainer
      columns={engagementMeta}
      rows={engagements}
      collectionName="engagement"
    />
  );
};
