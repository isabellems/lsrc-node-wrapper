const express = require("express");
const config = require("../config");
const request = require("request-promise");

const router = express.Router();

//limesurvey API config
var lsrcSessionKey = "";
const lsrcOptions = {
  url: config.lsrc.url,
  method: "POST",
  headers: {
    "user-agent": config.lsrc.userAgent,
    host: config.lsrc.host,
    path: config.lsrc.path,
    connection: "keep-alive",
    "content-type": "application/json"
  }
};

//Middleware for aquiring the session key before every lsrc call
const lsrcAuthenticate = async (req, res, next) => {
  console.log("lsrc");
  if (lsrcSessionKey === "") {
    lsrcOptions.body = JSON.stringify({
      method: "get_session_key",
      params: [config.lsrc.username, config.lsrc.password],
      id: 1
    });
    let res;
    try {
      res = await request(lsrcOptions);
    } catch (err) {
      console.log("Error " + err);
      // return false;
    }
    res = JSON.parse(res);
    lsrcSessionKey = res.result;
  }
  next();
};

//API calls

exports.activateSurvey = async surveyId => {
  lsrcOptions.body = JSON.stringify({
    method: "activate_survey",
    params: [lsrcSessionKey, surveyId],
    id: 1
  });
  let res;
  try {
    res = await request(lsrcOptions);
  } catch (err) {
    console.log(err);
  }
  res = JSON.parse(res);
  return res.result;
};

exports.activateTokens = async (surveyId, attributeFields) => {
  lsrcOptions.body = JSON.stringify({
    method: "activate_tokens",
    params: [lsrcSessionKey, surveyId, attributeFields],
    id: 1
  });
  let res;
  try {
    res = await request(lsrcOptions);
  } catch (err) {
    console.log(err);
  }
  res = JSON.parse(res);
  return res.result;
};

exports.addGroup = async (surveyId, groupTitle, groupDescription) => {
  lsrcOptions.body = JSON.stringify({
    method: "add_group",
    params: [lsrcSessionKey, surveyId, attributeFields],
    id: 1
  });
  let res;
  try {
    res = await request(lsrcOptions);
  } catch (err) {
    console.log(err);
  }
  res = JSON.parse(res);
  return res.result;
};

exports.addLanguage = async (surveyId, language) => {
  lsrcOptions.body = JSON.stringify({
    method: "add_language",
    params: [lsrcSessionKey, surveyId, language],
    id: 1
  });
  let res;
  try {
    res = await request(lsrcOptions);
  } catch (err) {
    console.log(err);
  }
  res = JSON.parse(res);
  return res.result;
};

//participantsData: array, createToken: bool
exports.addParticipants = async (surveyId, participantsData, createToken) => {
  lsrcOptions.body = JSON.stringify({
    method: "add_participants",
    params: [lsrcSessionKey, participantsData, createToken],
    id: 1
  });
  let res;
  try {
    res = await request(lsrcOptions);
  } catch (err) {
    console.log(err);
  }
  res = JSON.parse(res);
  return res.result;
};

//Response Data:array
exports.addResponse = async (surveyId, responseData) => {
  lsrcOptions.body = JSON.stringify({
    method: "add_response",
    params: [lsrcSessionKey, surveyId, responseData],
    id: 1
  });
  let res;
  try {
    res = await request(lsrcOptions);
  } catch (err) {
    console.log(err);
  }
  res = JSON.parse(res);
  return res.result;
};

exports.addSurvey = async (surveyId, surveyTitle, surveyLanguage, format) => {
  lsrcOptions.body = JSON.stringify({
    method: "add_survey",
    params: [lsrcSessionKey, surveyId, surveyTitle, surveyLanguage, format],
    id: 1
  });
  let res;
  try {
    res = await request(lsrcOptions);
  } catch (err) {
    console.log(err);
  }
  res = JSON.parse(res);
  return res.result;
};

exports.copySurvey = async (surveyId, newName) => {
  lsrcOptions.body = JSON.stringify({
    method: "copy_survey",
    params: [lsrcSessionKey, surveyId, newName],
    id: 1
  });
  let res;
  try {
    res = await request(lsrcOptions);
  } catch (err) {
    console.log(err);
  }
  res = JSON.parse(res);
  return res.result;
};

exports.cpdImportParticipants = async () => {
  //CHECK_LATER
  lsrcOptions.body = JSON.stringify({
    method: "cpd_importParticipants",
    params: [lsrcSessionKey, surveyId],
    id: 1
  });
  let res;
  try {
    res = await request(lsrcOptions);
  } catch (err) {
    console.log(err);
  }
  res = JSON.parse(res);
  return res.result;
};

exports.deleteGroup = async (surveyId, groupId) => {
  lsrcOptions.body = JSON.stringify({
    method: "delete_group",
    params: [lsrcSessionKey, surveyId, groupId],
    id: 1
  });
  let res;
  try {
    res = await request(lsrcOptions);
  } catch (err) {
    console.log(err);
  }
  res = JSON.parse(res);
  return res.result;
};

exports.deleteLanguage = async (surveyId, language) => {
  lsrcOptions.body = JSON.stringify({
    method: "delete_language",
    params: [lsrcSessionKey, surveyId, language],
    id: 1
  });
  let res;
  try {
    res = await request(lsrcOptions);
  } catch (err) {
    console.log(err);
  }
  res = JSON.parse(res);
  return res.result;
};

exports.deleteParticipants = async (surveyId, tokenIds) => {
  lsrcOptions.body = JSON.stringify({
    method: "delete_participants",
    params: [lsrcSessionKey, surveyId, tokenIds],
    id: 1
  });
  let res;
  try {
    res = await request(lsrcOptions);
  } catch (err) {
    console.log(err);
  }
  res = JSON.parse(res);
  return res.result;
};

exports.deleteQuestion = async questionId => {
  lsrcOptions.body = JSON.stringify({
    method: "delete_question",
    params: [lsrcSessionKey, questionId],
    id: 1
  });
  let res;
  try {
    res = await request(lsrcOptions);
  } catch (err) {
    console.log(err);
  }
  res = JSON.parse(res);
  return res.result;
};

exports.deleteSurvey = async surveyId => {
  lsrcOptions.body = JSON.stringify({
    method: "delete_survey",
    params: [lsrcSessionKey, surveyId],
    id: 1
  });
  let res;
  try {
    res = await request(lsrcOptions);
  } catch (err) {
    console.log(err);
  }
  res = JSON.parse(res);
  return res.result;
};

exports.exportResponses = async (
  surveyId,
  documentType,
  languageCode,
  completionStatus,
  headingType,
  responseType,
  fromResponseId,
  toResponseId,
  fields
) => {
  lsrcOptions.body = JSON.stringify({
    method: "export_responses",
    params: [
      lsrcSessionKey,
      surveyId,
      documentType,
      languageCode,
      completionStatus,
      headingType,
      responseType,
      fromResponseId,
      toResponseId,
      fields
    ],
    id: 1
  });
  let res;
  try {
    res = await request(lsrcOptions);
  } catch (err) {
    console.log(err);
  }
  res = JSON.parse(res);
  return res.result;
};

exports.exportResponsesByToken = async (
  surveyId,
  documentType,
  token,
  languageCode,
  completionStatus,
  headingType,
  responseType,
  fields
) => {
  lsrcOptions.body = JSON.stringify({
    method: "export_responses_by_token",
    params: [
      lsrcSessionKey,
      surveyId,
      documentType,
      token,
      languageCode,
      completionStatus,
      headingType,
      responseType,
      fields
    ],
    id: 1
  });
  let res;
  try {
    res = await request(lsrcOptions);
  } catch (err) {
    console.log(err);
  }
  res = JSON.parse(res);
  return res.result;
};

exports.exportStatistics = async (
  surveyId,
  documentType,
  language,
  graph,
  groupIds
) => {
  lsrcOptions.body = JSON.stringify({
    method: "export_statistics",
    params: [lsrcSessionKey, surveyId, documentType, language, graph, groupIds],
    id: 1
  });
  let res;
  try {
    res = await request(lsrcOptions);
  } catch (err) {
    console.log(err);
  }
  res = JSON.parse(res);
  return res.result;
};

exports.exportTimeline = async (surveyId, type, start, end) => {
  lsrcOptions.body = JSON.stringify({
    method: "export_timeline",
    params: [lsrcSessionKey, surveyId, type, start, end],
    id: 1
  });
  let res;
  try {
    res = await request(lsrcOptions);
  } catch (err) {
    console.log(err);
  }
  res = JSON.parse(res);
  return res.result;
};

exports.getGroupProperties = async (groupId, groupSettings) => {
  lsrcOptions.body = JSON.stringify({
    method: "get_group_properties",
    params: [lsrcSessionKey, groupId, groupSettings],
    id: 1
  });
  let res;
  try {
    res = await request(lsrcOptions);
  } catch (err) {
    console.log(err);
  }
  res = JSON.parse(res);
  return res.result;
};

exports.getLanguageProperties = async (surveyId, surveyLocaleSettings) => {
  lsrcOptions.body = JSON.stringify({
    method: "get_language_properties",
    params: [lsrcSessionKey, surveyId, surveyLocaleSettings],
    id: 1
  });
  let res;
  try {
    res = await request(lsrcOptions);
  } catch (err) {
    console.log(err);
  }
  res = JSON.parse(res);
  return res.result;
};

exports.getParticipantProperties = async (
  surveyId,
  tokenQueryProperties,
  tokenProperties
) => {
  lsrcOptions.body = JSON.stringify({
    method: "get_participant_properties",
    params: [lsrcSessionKey, surveyId, tokenQueryProperties, tokenProperties],
    id: 1
  });
  let res;
  try {
    res = await request(lsrcOptions);
  } catch (err) {
    console.log(err);
  }
  res = JSON.parse(res);
  return res.result;
};

exports.getQuestionProperties = async (
  questionId,
  questionSettings,
  language
) => {
  lsrcOptions.body = JSON.stringify({
    method: "get_question_properties",
    params: [lsrcSessionKey, questionId, questionSettings, language],
    id: 1
  });
  let res;
  try {
    res = await request(lsrcOptions);
  } catch (err) {
    console.log(err);
  }
  res = JSON.parse(res);
  return res.result;
};

exports.getResponseIds = async (surveyId, token) => {
  lsrcOptions.body = JSON.stringify({
    method: "get_response_ids",
    params: [lsrcSessionKey, surveyId, token],
    id: 1
  });
  let res;
  try {
    res = await request(lsrcOptions);
  } catch (err) {
    console.log(err);
  }
  res = JSON.parse(res);
  return res.result;
};

exports.getSiteSettings = async settingName => {
  lsrcOptions.body = JSON.stringify({
    method: "get_site_settings",
    params: [lsrcSessionKey, settingName],
    id: 1
  });
  let res;
  try {
    res = await request(lsrcOptions);
  } catch (err) {
    console.log(err);
  }
  res = JSON.parse(res);
  return res.result;
};

exports.getSummary = async (surveyId, statName) => {
  lsrcOptions.body = JSON.stringify({
    method: "get_summary",
    params: [lsrcSessionKey, surveyId, statName],
    id: 1
  });
  let res;
  try {
    res = await request(lsrcOptions);
  } catch (err) {
    console.log(err);
  }
  res = JSON.parse(res);
  return res.result;
};

exports.getSurveyProperties = async (surveyId, surveySettings) => {
  lsrcOptions.body = JSON.stringify({
    method: "get_survey_properties",
    params: [lsrcSessionKey, surveyId, surveySettings],
    id: 1
  });
  let res;
  try {
    res = await request(lsrcOptions);
  } catch (err) {
    console.log(err);
  }
  res = JSON.parse(res);
  return res.result;
};

exports.getUploadedFiles = async (surveyId, token) => {
  lsrcOptions.body = JSON.stringify({
    method: "get_uploaded_files",
    params: [lsrcSessionKey, surveyId, token],
    id: 1
  });
  let res;
  try {
    res = await request(lsrcOptions);
  } catch (err) {
    console.log(err);
  }
  res = JSON.parse(res);
  return res.result;
};

exports.importGroup = async (
  surveyId,
  importData,
  importDataType,
  newGroupName,
  newGroupDescription
) => {
  lsrcOptions.body = JSON.stringify({
    method: "import_group",
    params: [
      lsrcSessionKey,
      surveyId,
      importData,
      importDataType,
      newGroupName,
      newGroupDescription
    ],
    id: 1
  });
  let res;
  try {
    res = await request(lsrcOptions);
  } catch (err) {
    console.log(err);
  }
  res = JSON.parse(res);
  return res.result;
};

exports.importQuestion = async (
  surveyId,
  groupId,
  importData,
  importDataType,
  mandatory,
  newQuestionTitle,
  newQuestionText,
  newQuestionHelp
) => {
  lsrcOptions.body = JSON.stringify({
    method: "import_question",
    params: [
      lsrcSessionKey,
      surveyId,
      groupId,
      importData,
      importDataType,
      mandatory,
      newQuestionTitle,
      newQuestionText,
      newQuestionHelp
    ],
    id: 1
  });
  let res;
  try {
    res = await request(lsrcOptions);
  } catch (err) {
    console.log(err);
  }
  res = JSON.parse(res);
  return res.result;
};

exports.getSurveyProperties = async (surveyId, surveySettings) => {
  lsrcOptions.body = JSON.stringify({
    method: "get_survey_properties",
    params: [lsrcSessionKey, surveyId, surveySettings],
    id: 1
  });
  let res;
  try {
    res = await request(lsrcOptions);
  } catch (err) {
    console.log(err);
  }
  res = JSON.parse(res);
  return res.result;
};

exports.getSurveyProperties = async (surveyId, surveySettings) => {
  lsrcOptions.body = JSON.stringify({
    method: "get_survey_properties",
    params: [lsrcSessionKey, surveyId, surveySettings],
    id: 1
  });
  let res;
  try {
    res = await request(lsrcOptions);
  } catch (err) {
    console.log(err);
  }
  res = JSON.parse(res);
  return res.result;
};

exports.getSurveyProperties = async (surveyId, surveySettings) => {
  lsrcOptions.body = JSON.stringify({
    method: "get_survey_properties",
    params: [lsrcSessionKey, surveyId, surveySettings],
    id: 1
  });
  let res;
  try {
    res = await request(lsrcOptions);
  } catch (err) {
    console.log(err);
  }
  res = JSON.parse(res);
  return res.result;
};

router.use("/getsurveys", lsrcAuthenticate);
router.get("/getsurveys", (req, res) => {
  console.log(lsrcSessionKey);
  lsrcOptions.body = JSON.stringify({
    method: "list_surveys",
    params: [lsrcSessionKey, null],
    id: 1
  });
  request(lsrcOptions, function(error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log(body);
      body = JSON.parse(body);
      console.log(body.result);
    } else console.log("ERROR -->" + body + "" + error);
  });
  res.end();
});

router.get("/activate", async (req, res) => {
  lsrcOptions.body = JSON.stringify({
    method: "activate_survey",
    params: [lsrcSessionKey, surveyId],
    id: 1
  });
  const result = await request(lsrcOptions)
    .then(res => {
      res = JSON.parse(res);
      return res.result;
    })
    .catch(err => {
      console.log(err);
    });
  console.log(result);
  res.end();
});

module.exports = router;
