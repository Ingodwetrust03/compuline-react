import {createSlice} from '@reduxjs/toolkit'
import {FormArray} from "../models/models";


export interface FormState {
    form: FormArray,
}

const initialState: FormState = {
    form: {
        name: {value: '', error: 0},
        phone: {value: '', error: 0},
        email: {value: '', error: 0},
        message: '',
        formError: 0,
        formSuccess: 0,
    },

}


const messages = {
    empty: 'Please, fill in all necessary fields\n',
    phone: 'Please, check the phone field. Only numbers and symbols "+", "-", "(", ")" are acceptable\n',
    email: 'Please, check the email field\n',
    form: 'Please, fill in all necessary fields and check the correctness',
    success: 'Thank You for your require!'
}



export const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        getValueAction: (state, action) => {
            let err: number = 0;
            let messageText = '';

            const checkValues = (val: string, inputname: string) => {

                const ifEmpty = () => {
                    if(!val || val.length < 3) {
                        err = 1;
                        messageText = messages.empty;
                    } else {
                        err = 0;
                        messageText = '';
                    }
                }

                const phone = () => {
                    let regexp = /^[\\+]?[(]?[0-9]{3}[)]?[-\s\\.]?[0-9]{3}[-\s\\.]?[0-9]{4,6}$/im;
                    if(regexp.test(val)) {
                        err = 0;
                        messageText = '';
                    } else {
                        err = 1;
                        messageText += messages.phone;
                    }
                }

                const email = () => {
                    let regexp = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
                    if(regexp.test(val)) {
                        err = 0;
                        messageText = '';
                    } else {
                        err = 1;
                        messageText += messages.email;
                    }
                }
                ifEmpty();

                if(inputname === 'tel') {
                    phone()
                }
                if(inputname === 'mail') {
                    email()
                }

                return err;
            }

            state.form = {
                name: {
                        value: action.payload.name === 'name' ? String(action.payload.text) : state.form.name.value,
                        error: action.payload.name === 'name' ? checkValues(action.payload.text, action.payload.name) : state.form.name.error
                    },
                phone: {
                        value: action.payload.name === 'tel' ? String(action.payload.text) : state.form.phone.value,
                        error: action.payload.name === 'tel' ? checkValues(action.payload.text, action.payload.name) : state.form.phone.error
                    },
                email: {
                        value: action.payload.name === 'mail' ? String(action.payload.text) : state.form.email.value,
                        error: action.payload.name === 'mail' ? checkValues(action.payload.text, action.payload.name) : state.form.email.error
                },
                message: messageText,
                formError: err,
            };
        },

        submitAction: (state) => {
            if (state.form.name.error === 1 || state.form.phone.error === 1 || state.form.email.error === 1
                || state.form.name.value === '' || state.form.phone.value === '' || state.form.email.value === '') {
                state.form.message = messages.form;
                state.form.formError = 1;
            } else {
                state.form.message = messages.success;
                state.form.formError = 0;
                state.form.formSuccess = 1;
            }
        },

        clearFormAction: (state) => {
                state.form = {
                    name: {value: '', error: 0},
                    phone: {value: '', error: 0},
                    email: {value: '', error: 0},
                    message: '',
                    formError: 0,
                    formSuccess: 0,
                }
            },
        }
})




export const { getValueAction, submitAction, clearFormAction} = formSlice.actions

export default formSlice.reducer