import React, { useEffect, useState } from 'react';
import { fetchInfluencers, deleteInfluencer } from './api';

const InfluencerList = () => {
  const [influencers, setInfluencers] = useState([]);

  useEffect(() => {
    const getInfluencers = async () => {
      const { data } = await fetchInfluencers();
      setInfluencers(data);
    };
    getInfluencers();
  }, []);

  const handleDelete = async (id) => {
    await deleteInfluencer(id);
    setInfluencers(influencers.filter((inf) => inf._id !== id));
  };

  return (
    <div>
      <h1>Influencer List</h1>
      {influencers.map((inf) => (
        <div key={inf._id}>
          <h2>{inf.name}</h2>
          <p>{inf.socialMedia.platform}: {inf.socialMedia.handle} ({inf.socialMedia.followers} followers)</p>
          <button onClick={() => handleDelete(inf._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default InfluencerList;
