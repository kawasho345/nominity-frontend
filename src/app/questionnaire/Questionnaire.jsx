import React from 'react'
import styles from "./styles/Questionnaire.module.css";
import Font from '@/components/Font/Font';
import AddSchedulesButton from './AddSchedulesButton';
import EditQuestionnaire from './EditQuestionnaire';
import { ChangeHistory, Close, RadioButtonUnchecked } from '@mui/icons-material';

const Questionnaire = (props) => {
    const { 
        userId,
        questionnaireId,
        questionnaireName,
        questionnaireOverview,
        questionnaireDates,
        membersSchedule,
    } = props;

    const data = (memberSchedule) => {
        const list = []
        for(let i=2; i<memberSchedule.length; i++){
            list.push(
                <td className={ styles.data } key={ i }>
                    <div className={ styles.mark }>
                        {memberSchedule[i] === "1"?
                            <RadioButtonUnchecked sx={{typography:{ fontSize: '3rem' }}}/>
                        :memberSchedule[i] === "2"?
                            <ChangeHistory sx={{typography:{ fontSize: '3rem' }}}/>
                        :memberSchedule[i] === "3"?
                            <Close sx={{typography:{ fontSize: '3rem' }}}/>
                        :""}
                    </div>
                </td>
            )
        }
        return <>{list}</>
    }

    return (
        <div className={ styles.frame }>
            <div className={ styles.headding }>
                <Font style="large">{ questionnaireName }</Font>
                <EditQuestionnaire 
                    userId={ userId }
                    questionnaireId={ questionnaireId }
                    questionnaireName={ questionnaireName }
                    questionnaireOverview={ questionnaireOverview }
                    questionnaireDates={ questionnaireDates }
                />
            </div>
            <div className={ styles.remarks }>
                <Font>{ questionnaireOverview }</Font>
            </div>
            <AddSchedulesButton
                userId={ userId }
                questionnaireDates={ questionnaireDates }
                membersSchedule={ membersSchedule }
                questionnaireId={ questionnaireId }
                />
            <div className={ styles.table_wrap }>
                <table className={ styles.schedules }>
                    <thead>
                        <tr>
                            <th className={ styles.first }>　</th>
                            {questionnaireDates.map((date, index) => (
                                <th className={ styles.header } key={ index }>
                                    <div className={ styles.date }>
                                        <Font style="minimum">{ date[1] }</Font>
                                    </div>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {membersSchedule.map((memberSchedule, index) => (
                            <tr key={ index }>
                                <th className={ styles.left }>
                                    <div className={ styles.name }>
                                        { memberSchedule[1] }
                                    </div>
                                </th>
                                { data(memberSchedule) }
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Questionnaire