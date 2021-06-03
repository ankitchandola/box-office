import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { apiGet } from '../misc/Config';

const Show = () => {
  const { id } = useParams();

  const [show, setShow] = useState(null);

  useEffect(() => {
    apiGet(`/shows/${id}?embed[]=season&embed[]=cast`).then(results => {
      setShow(results);
    });
  }, [id]);

  return <div>show page</div>;
};

export default Show;
