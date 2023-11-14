import React, { useState } from 'react'
import styles from "./styles/EditDates.module.css";
import EditText from '@/components/EditText/EditText';
import OnClick from '@/components/OnClick/OnClick';
import Font from '@/components/Font/Font';
import { FormProvider, useForm } from 'react-hook-form';
import DeleteIcon from '@mui/icons-material/Delete';

const EditDates = (props) => {
    const { 
        dates,
        setDates, 
    } = props;
    const methods = useForm();
    const onSubmit = (data) => {
        methods.reset();
        if(!dates){
            setDates([["", data.registerDate, ""]]);
            return;
        }
        setDates([...dates, ["", data.registerDate, ""]]);
    }
    const [dragIndex, setDragIndex] = useState(null);
    const dragStart = (index) => {
        setDragIndex(index);
    };
    const dragEnter = (index) => {
        if(index === dragIndex){
            return
        }
        setDates((prevState) => {
            let newDates = JSON.parse(JSON.stringify(prevState));
            const deleteElement = newDates.splice(dragIndex, 1)[0];
            newDates.splice(index, 0, deleteElement);
            return newDates;
        });
        setDragIndex(index);
    }
    const dragEnd = () => {
        setDragIndex(null);
    }
    const editDate = (e, index) => {
        const newDate = e.currentTarget.value;
        setDates((prevState) => {
            let newDates = JSON.parse(JSON.stringify(prevState));
            newDates[index][1] = newDate;
            return newDates;
        });
    }
    const deleteDate = (index) => {
        setDates((prevState) => {
            let newDates = JSON.parse(JSON.stringify(prevState));
            newDates.splice(index, 1);
            return newDates;
        });
    }

    return (
        <div className={ styles.frame }>
            <Font>日程の編集(ドラッグアンドドロップで順番変更)</Font>
            <input type="date" />
            {dates?
                <ul className={ styles.list }>
                    {dates.map((date, index) => (
                        <li
                            key={ index }
                            draggable={ true }
                            onDragStart={ () => dragStart(index) }
                            onDragEnter={ () => dragEnter(index) }
                            onDragOver={ (e) => e.preventDefault() }
                            onDragEnd={ dragEnd }
                            className={`${ styles.element } ${ index === dragIndex? styles.dragging :""  }`}
                        >
                            {date[0]?
                                <div className={ styles.has_id }>
                                    <Font>{ date[1] }</Font>
                                </div>
                            :
                                <input 
                                    type="text" 
                                    defaultValue={ date[1] } 
                                    key={ date[1] } 
                                    className={ styles.edit }
                                    onBlur={ (e) => editDate(e, index)}
                                />
                            }
                            <div className={ styles.delete }>
                                <OnClick func={ () => deleteDate(index) }>
                                    <DeleteIcon sx={{typography:{ fontSize: '2rem' }}}/>
                                </OnClick>
                            </div>
                        </li>
                    ))}
                </ul>
            :""}
            <FormProvider { ...methods }>
                <form
                    onSubmit={ methods.handleSubmit(onSubmit) } 
                    className={ styles.register_date }>
                    <div className={ styles.edit_text }>
                        <EditText
                            name="registerDate"
                            maxLength="50"
                        />
                    </div>
                    <div className={`${ styles.submit } ${ "green_button" }`}>
                        <OnClick type="submit">
                            <Font style="default_button">追加</Font>
                        </OnClick>
                    </div>
                </form>
            </FormProvider>
        </div>
    )
}

export default EditDates