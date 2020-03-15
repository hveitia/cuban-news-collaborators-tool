import React from 'react';
import Grid from "@material-ui/core/Grid";

import './style.scss';

const features = [
  {
    title: 'Worked Issue',
    value: '1,146',
    color: '#3B53DB'
  },
  {
    title: 'Worked Today',
    value: '5:32 Hr',
    color: '#BD20D3'
  },
  {
    title: 'Worked This Week',
    value: '38:27 Hr',
    color: '#F1682C'
  },
  {
    title: 'Income',
    value: '$4,6139',
    color: '#0EB7FE'
  },
];

const CampMonitorFeature = () => {
  return (
    <Grid container spacing={3}>
      {features.map((item, i) => {
        return (
          <Grid key={i} item lg={3} sm={6} xs={12}>
            <Grid className="cmfSignle" style={{background: item.color}}>
              <p>{item.title}</p>
              <h3>{item.value}</h3>
            </Grid>
          </Grid>
        )
      })}
    </Grid>
  )
};

export default CampMonitorFeature;
