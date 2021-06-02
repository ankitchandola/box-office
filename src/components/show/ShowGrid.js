import React from 'react';
import ShowCard from './ShowCard';
import IMAGE_NOTE_FOUND from '../..images/not-found.png';

const Showgrid = ({ data }) => {
  return (
    <div>
      {data.map(({ show }) => (
        <ShowCard
          key={show.id}
          id={show.id}
          name={show.name}
          image={show.image ? show.image.medium : IMAGE_NOTE_FOUND}
          summary={show.summary}
        />
      ))}
    </div>
  );
};

export default Showgrid;
