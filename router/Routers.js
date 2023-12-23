const express = require('express');
const {
  financialResult,
  getAnnoucment,
  getAnnualGeneralMeeting,
  getAnualReports,
  getCodesPolicies,
  getExtraOrdinaryGeneraMeeting,
  getGeneralMeeting,
  getInvestorInformation,
  getNotice,
  getOutcome,
  getPostalBallot,
  getProcpectos,
  getProspectus,
  getUnclaimedDevident,
  getanualReturn,
  getboardCommiti,
  getshareHolding,
  getsheme
} = require('../controller/controler.js');

const Router = express.Router();

Router.get('/financial_results', financialResult);
Router.get('/share-holding', getshareHolding);
Router.get('/board-commiti', getboardCommiti);
Router.get('/investor-information', getInvestorInformation);
Router.get('/anual-return', getanualReturn);
Router.get('/anual-report', getAnualReports);
Router.get('/codes-police', getCodesPolicies);
Router.get('/general-meeting', getGeneralMeeting);
Router.get('/prospectus', getProspectus);
Router.get('/announcment', getAnnoucment);
Router.get('/unclaimed-devident', getUnclaimedDevident);
Router.get('/notice', getNotice);
Router.get('/outcome', getOutcome);
Router.get('/anual-general-meeting', getAnnualGeneralMeeting);
Router.get('/ordinary-general-meeting', getExtraOrdinaryGeneraMeeting);
Router.get('/postalballot', getPostalBallot);
Router.get('/procpectos', getProcpectos);

Router.get('/sheme', getsheme);

module.exports = Router;
