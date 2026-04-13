import React from 'react';

const Activities = () => {
  const [activities, setActivities] = React.useState([]);

  React.useEffect(() => {
    const endpoint = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/activities/`;
    console.log('Fetching Activities from:', endpoint);
    fetch(endpoint)
      .then(res => res.json())
      .then(data => {
        const results = Array.isArray(data) ? data : data.results || [];
        setActivities(results);
        console.log('Fetched Activities:', data);
      })
      .catch(err => console.error('Error fetching activities:', err));
  }, []);

  return (
    <div>
      <h2>Activities</h2>
      <ul>
        {activities.map((activity, idx) => (
          <li key={activity.id || idx}>{JSON.stringify(activity)}</li>
        ))}
      </ul>
    </div>
  );
};

export default Activities;
