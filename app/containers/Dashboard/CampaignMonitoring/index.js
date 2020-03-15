/**
 *
 * CampaignMonitoring
 *
 */

import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Helmet} from 'react-helmet';
import {FormattedMessage} from 'react-intl';
import {createStructuredSelector} from 'reselect';
import {compose} from 'redux';

import {useInjectSaga} from 'utils/injectSaga';
import {useInjectReducer} from 'utils/injectReducer';
import makeSelectCampaignMonitoring from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import Grid from "@material-ui/core/Grid";
import Card from "../../../components/Card";
import CampMonitorFeature from "../../../components/Dashboard/CampaignMonitoring/CampMonitorFeature";
import Summary from "../../../components/Dashboard/CampaignMonitoring/Summary";
import Progress from "../../../components/Dashboard/CampaignMonitoring/Progress";
import Report from "../../../components/Dashboard/CampaignMonitoring/Report";
import Review from "../../../components/Dashboard/CampaignMonitoring/Review";
import ReviewOverTime from "../../../components/Dashboard/CampaignMonitoring/ReviewOverTime";

export function CampaignMonitoring() {
  useInjectReducer({key: 'campaignMonitoring', reducer});
  useInjectSaga({key: 'campaignMonitoring', saga});

  return (
    <Fragment>
      <h2 className="breadcumbTitle">Dashboard > Campaign Monitoring</h2>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <CampMonitorFeature/>
        </Grid>
        <Grid item lg={4} xs={12}>
          <Summary/>
        </Grid>
        <Grid item lg={8} xs={12}>
          <Progress/>
        </Grid>
        <Grid item xs={12}>
          <Report/>
        </Grid>
        <Grid item md={4} xs={12}>
          <Review/>
        </Grid>
        <Grid item md={8} xs={12}>
          <ReviewOverTime/>
        </Grid>
      </Grid>
    </Fragment>
  );
}

CampaignMonitoring.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  campaignMonitoring: makeSelectCampaignMonitoring(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(CampaignMonitoring);
