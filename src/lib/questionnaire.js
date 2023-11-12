import { fetchRequest } from "./fetch";

const registerQuestionnaire = async(data, dates, userId, groupId) => {
    const response =  await fetchRequest({
        url: "/api/questionnaire/register",
        method: "POST",
        body: {
            userId: userId,
            groupId: groupId,
            questionnaireName: data.questionnaireName,
            questionnaireOverview: data.questionnaireOverview,
            questionnaireDates: dates,
        }
    })

    return response;
}

const getQuestionnaires = async(groupId) => {
    const questionnaires = await fetchRequest({
        url: "/api/questionnaire/" + groupId + "/getQuestionnaires",
        method: "GET",
        element: "questionnaires",
    })

    return questionnaires;
}

const deleteQuestionnaire = async(userId, questionnaireId) => {
    const response = await fetchRequest({
        url: "/api/questionnaire/" + questionnaireId + "/delete",
        method: "DELETE",
        body: { userId, },
    })

    return response;
}

const updateQuestionnaire = async(data, dates, userId, questionnaireId) => {
    const response = await fetchRequest({
        url: "/api/questionnaire/" + questionnaireId + "/put",
        method: "PUT",
        body: {
            userId,
            questionnaireName: data.questionnaireName,
            questionnaireOverview: data.questionnaireOverview,
            questionnaireDates: dates,
        }
    })

    return response;
}

const updateDateSchedules = async(data, userId, questionnaireDates, questionnaireId) => {
    const dateSchedules = questionnaireDates.map((date) => {
        return [date[0], data[date[0]]]
    })
    const response = await fetchRequest({
        url: "/api/questionnaire/" + questionnaireId + "/updateDateSchedules",
        method: "PUT",
        body: {
            userId,
            questionnaireDateSchedules: dateSchedules,
        }
    })

    return response;
}

export { 
    registerQuestionnaire, 
    getQuestionnaires, 
    deleteQuestionnaire, 
    updateQuestionnaire,
    updateDateSchedules,
}