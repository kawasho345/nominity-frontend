"use client"
import React from 'react'
import styles from "./CustomDialog.module.css";
import BooleanDialog from './booleanDialog/BooleanDialog';
import ConfirmationDialog from "./confirmationDialog/ConfirmationDialog"

const CustomDialog = (props) => {
    const {
        hasDialog,
        dialogFunction,
        message,
        isBool=false,
    } = props

    return (
        <>
            { hasDialog?
                <div className={ styles.shadow }>
                { isBool?
                    <BooleanDialog
                        message={ message }
                        dialogFunction={ (bool) => dialogFunction(bool) } 
                    />
                    :   
                    <>
                        <button className={ styles.background } onClick={ () => dialogFunction()} />
                        <ConfirmationDialog
                            message={ message }
                            dialogFunction={ () => dialogFunction() }
                        />
                    </>
                }
                </div>
            : ""
            }
        </>
            
    )
}

export default CustomDialog