const { pdgDataModel } = require("../model/investor.model.js");

const financialResult = async (req, res) => {
    try {
        const result = await pdgDataModel.find({ pagename: "financial-result" });
        if (result) return res.status(200).json({ result, message: "All data are loaded" });
        else return res.status(501).json({ message: "Can't find" });
    } catch (err) {
        res.status(404).json({ message: "Something went wrong" });
    }
};

const getshareHolding = async (req, res) => {
    try {
        const result = await pdgDataModel.find({ pagename: "share-holding" });
        if (result) return res.status(200).json({ result, message: "All data are loaded" });
        else return res.status(501).json({ message: "Can't find" });
    } catch (err) {
        res.status(404).json({ message: "Something went wrong" });
    }
};

const getboardCommiti = async (req, res) => {
    try {
        const result = await pdgDataModel.find({ pagename: "commities-of-board" });
        if (result) return res.status(200).json({ result, message: "All data are loaded" });
        else return res.status(501).json({ message: "Can't find" });
    } catch (err) {
        res.status(404).json({ message: "Something went wrong" });
    }
};

const getInvestorInformation = async (req, res) => {
    try {
        const result = await pdgDataModel.find({ pagename: "investor-information" });
        if (result) return res.status(200).json({ result, message: "All data are loaded" });
        else return res.status(501).json({ message: "Can't find" });
    } catch (err) {
        res.status(404).json({ message: "Something went wrong" });
    }
};

const getanualReturn = async (req, res) => {
    try {
        const result = await pdgDataModel.find({ pagename: "anual-return" });
        if (result) return res.status(200).json({ result, message: "All data are loaded" });
        else return res.status(501).json({ message: "Can't find" });
    } catch (err) {
        res.status(404).json({ message: "Something went wrong" });
    }
};

const getsheme = async (req, res) => {
    try {
        const result = await pdgDataModel.find({ pagename: "sheme" });
        if (result) return res.status(200).json({ result, message: "All data are loaded" });
        else return res.status(501).json({ message: "Can't find" });
    } catch (err) {
        res.status(404).json({ message: "Something went wrong" });
    }
};

const getAnualReports = async (req, res) => {
    try {
        const result = await pdgDataModel.find({ pagename: "anual-report" });
        if (result) return res.status(200).json({ result, message: "All data are loaded" });
        else return res.status(501).json({ message: "Can't find" });
    } catch (err) {
        res.status(404).json({ message: "Something went wrong" });
    }
};

const getCodesPolicies = async (req, res) => {
    try {
        const result = await pdgDataModel.find({ pagename: "codes-police" });
        if (result) return res.status(200).json({ result, message: "All data are loaded" });
        else return res.status(501).json({ message: "Can't find" });
    } catch (err) {
        res.status(404).json({ message: "Something went wrong" });
    }
};

const getGeneralMeeting = async (req, res) => {
    try {
        const result = await pdgDataModel.find({ pagename: "general-meeting" });
        if (result) return res.status(200).json({ result, message: "All data are loaded" });
        else return res.status(501).json({ message: "Can't find" });
    } catch (err) {
        res.status(404).json({ message: "Something went wrong" });
    }
};

const getProspectus = async (req, res) => {
    try {
        const result = await pdgDataModel.find({ pagename: "prospectus" });
        if (result) return res.status(200).json({ result, message: "All data are loaded" });
        else return res.status(501).json({ message: "Can't find" });
    } catch (err) {
        res.status(404).json({ message: "Something went wrong" });
    }
};

const getAnnoucment = async (req, res) => {
    try {
        const result = await pdgDataModel.find({ pagename: "annoucment" });
        if (result) return res.status(200).json({ result, message: "All data are loaded" });
        else return res.status(501).json({ message: "Can't find" });
    } catch (err) {
        res.status(404).json({ message: "Something went wrong" });
    }
};

const getUnclaimedDevident = async (req, res) => {
    try {
        const result = await pdgDataModel.find({ pagename: "unclaimed-devident" });
        if (result) return res.status(200).json({ result, message: "All data are loaded" });
        else return res.status(501).json({ message: "Can't find" });
    } catch (err) {
        res.status(404).json({ message: "Something went wrong" });
    }
};

const getNotice = async (req, res) => {
    try {
        const result = await pdgDataModel.find({ pagename: "notice" });
        if (result) return res.status(200).json({ result, message: "All data are loaded" });
        else return res.status(501).json({ message: "Can't find" });
    } catch (err) {
        res.status(404).json({ message: "Something went wrong" });
    }
};

const getOutcome = async (req, res) => {
    try {
        const result = await pdgDataModel.find({ pagename: "outcome" });
        if (result) return res.status(200).json({ result, message: "All data are loaded" });
        else return res.status(501).json({ message: "Can't find" });
    } catch (err) {
        res.status(404).json({ message: "Something went wrong" });
    }
};

const getAnnualGeneralMeeting = async (req, res) => {
    try {
        const result = await pdgDataModel.find({ pagename: "anual-general-meeting" });
        if (result) return res.status(200).json({ result, message: "All data are loaded" });
        else return res.status(501).json({ message: "Can't find" });
    } catch (err) {
        res.status(404).json({ message: "Something went wrong" });
    }
};

const getExtraOrdinaryGeneraMeeting = async (req, res) => {
    try {
        const result = await pdgDataModel.find({ pagename: "extra-ordinary-meeting" });
        if (result) return res.status(200).json({ result, message: "All data are loaded" });
        else return res.status(501).json({ message: "Can't find" });
    } catch (err) {
        res.status(404).json({ message: "Something went wrong" });
    }
};

const getPostalBallot = async (req, res) => {
    try {
        const result = await pdgDataModel.find({ pagename: "postal-ballot" });
        if (result) return res.status(200).json({ result, message: "All data are loaded" });
        else return res.status(501).json({ message: "Can't find" });
    } catch (err) {
        res.status(404).json({ message: "Something went wrong" });
    }
};

const getProcpectos = async (req, res) => {
    try {
        const result = await pdgDataModel.find({ pagename: "procpectos" });
        if (result) return res.status(200).json({ result, message: "All data are loaded" });
        else return res.status(501).json({ message: "Can't find" });
    } catch (err) {
        res.status(404).json({ message: "Something went wrong" });
    }
};

module.exports = {
    financialResult,
    getshareHolding,
    getboardCommiti,
    getInvestorInformation,
    getanualReturn,
    getsheme,
    getAnualReports,
    getCodesPolicies,
    getGeneralMeeting,
    getProspectus,
    getAnnoucment,
    getUnclaimedDevident,
    getNotice,
    getOutcome,
    getAnnualGeneralMeeting,
    getExtraOrdinaryGeneraMeeting,
    getPostalBallot,
    getProcpectos
};
