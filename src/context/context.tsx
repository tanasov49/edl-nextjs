import React, {createContext, useState, useRef, useEffect} from 'react';
interface IModalContext {
    values: any,
    errors: any,
    handleChange: (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void,
    canSubmit: boolean,
    hanldeSubmitForm: (e: React.SyntheticEvent<EventTarget>) => void,
    openPopup: () => void,
    isOpenPopup: boolean,
    rootRef: any,
    closePopup: () => void,
}
interface IValues {
    name: string,
    email: string,
    tel: string
}
interface IValid {
    validName: boolean,
    validEmail: boolean,
    validTel: boolean
}
export const ModalContext = createContext<IModalContext>({
    values: Array,
    errors: Array,
    handleChange: () => {},
    canSubmit: false,
    hanldeSubmitForm: () => {},
    openPopup: () => {},
    closePopup: () => {},
    isOpenPopup: false,
    rootRef: null,

})
export const ModalSate = ({children}: {children: React.ReactNode}) => {
    const defaulValues:IValues = {
        name: '',
        email: '',
        tel: ''
    }
    const defaultValid:IValid = {
        validName: false,
        validEmail: false,
        validTel: false,
      }
    const [values, setValues] = useState(defaulValues);
    const [errors, setErrors] = useState(defaulValues);
    const [valid, setValid] = useState(defaultValid);
    const [canSubmit, setCanSubmit] = useState(false);
    const [isOpenPopup, seIsOpenPopup] = useState(false);
    const openPopup = () => {
        seIsOpenPopup(true)
    }
    const closePopup = () => {
        seIsOpenPopup(false);
        setValues(defaulValues);
    }

useEffect(() => {
    const handleClickOutSide = (e: any) => {
        if (rootRef.current && !rootRef.current.contains(e.target)) {
          closePopup()
        } 
      }
    document.addEventListener('click', handleClickOutSide, true)
    return () => {
      document.removeEventListener('click', handleClickOutSide, false)
    }
  },[])
    const rootRef = useRef<HTMLDivElement>()
    const handleValidate = (name: string, value: string) => {
        let regesName = /^[a-zA-Z0-9]+([a-zA-Z0-9](_|-| )[a-zA-Z0-9])*[a-zA-Z0-9]+$/;
        let regesPhone = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
        let regesEmail =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let isErrors = errors;
        let {validName, validEmail, validTel} = valid
        if (name === 'name') {
            if(!value) {
                isErrors.name = 'Name is required';
                validName = false;
            } else {
                validName = regesName.test(value)
                isErrors.name = validName ? '' : 'Only text name or minimum 2 length'
            }
        }
        if (name === 'tel') {
            if(!value) {
                validTel = false;
                isErrors.tel = 'Phone is required';
            } else {
                validTel = regesPhone.test(value);
                isErrors.tel = validTel ? '' : 'Phone must be numbers and 11 length';
            }
        }
        if (name === 'email') {
            if(!value) {
                validEmail = false;
                isErrors.email = 'Email is required'
            } else {
                validEmail = regesEmail.test(value);
                isErrors.email = validEmail ? '' : 'Email must be validate'
            }
        }
        setErrors(isErrors)
        setValid({
            validName: validName,
            validTel: validTel,
            validEmail: validEmail
        })
        setCanSubmit(validName && validTel && validEmail);
    }
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        const { name, value } = e.target;
        handleValidate(name, value);
        if (name === 'tel') {
            setValues({
                ...values,
                [name]: value,
                [name]: value.replace(/\D/g, "")
            })
        }
        if (name === 'email') {
            setValues({
                ...values,
                [name]: value,
            })
        }
        if (name === 'name') {
            setValues({
                ...values,
                [name]: value,
            })
        }
    }
    const hanldeSubmitForm = (e: React.SyntheticEvent<EventTarget>) => {
        e.preventDefault();
        setValues(defaulValues);
        closePopup();
        setCanSubmit(false);
        console.log(values);
    }
    return (
        <ModalContext.Provider value={{values, errors, handleChange, canSubmit, hanldeSubmitForm, openPopup, isOpenPopup, rootRef, closePopup}}>
            {children}
        </ModalContext.Provider>
    )
}