import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the campaignMonitoring state domain
 */

const selectCampaignMonitoringDomain = state =>
  state.campaignMonitoring || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by CampaignMonitoring
 */

const makeSelectCampaignMonitoring = () =>
  createSelector(
    selectCampaignMonitoringDomain,
    substate => substate,
  );

export default makeSelectCampaignMonitoring;
export { selectCampaignMonitoringDomain };
