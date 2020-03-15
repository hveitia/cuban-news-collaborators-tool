import React from 'react';
import Grid from "@material-ui/core/Grid";

import img1 from '../../../../images/featured/img1.png';
import img2 from '../../../../images/featured/img2.png';
import img3 from '../../../../images/featured/img3.png';
import img4 from '../../../../images/featured/img4.png';

import './style.scss';

const features = [
  {
    icon: img1,
    coin_type: 'BTC',
    percentage: 0.91,
    value: '392',
    description: 'Coin Purchase',
  },
  {
    icon: img2,
    coin_type: 'ETH',
    percentage: 4.67,
    value: '412',
    description: 'Coin Hold',
  },
  {
    icon: img3,
    coin_type: 'LTC',
    percentage: -2.34,
    value: '963',
    description: 'Coin Sold',
  },
  {
    icon: img4,
    coin_type: 'XRP',
    percentage: 6.89,
    value: '645',
    description: 'Coin Back',
  },
];

const CryptocurrencyFeatured = () => {
  return (
    <Grid container spacing={3}>
      {features.map((item, i) => {
        return (
          <Grid key={i} item lg={3} sm={6} xs={12}>
            <Grid className="crypFeatureItem">
              <Grid className="crypftop">
                <Grid className="icon">
                  <img src={item.icon} alt="icon"/>
                </Grid>
                <h4>{item.coin_type}</h4>
                <span className={`right ${item.percentage > 0 ? '' : 'danger'}`}><i
                  className={`fa fa-long-arrow-${item.percentage > 0 ? 'up' : 'down'}`}></i>{item.percentage.toString().replace(`-`, '')}%</span>
              </Grid>
              <h2>{item.value}</h2>
              <p>{item.description}</p>
            </Grid>
          </Grid>
        )
      })}
    </Grid>
  )
};

export default CryptocurrencyFeatured;
