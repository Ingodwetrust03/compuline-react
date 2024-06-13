import {
    FormBlock,
    FormHeading,
    FormInput,
    FormInputBlock,
    FormLabel, FormMessageBlock,
    FormSection, FormSubmitBlock, FormSubmitBlockText, FormSubmitButton,
    FormText,
    FormWrapper
} from "./Form.styled";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../store";
import {getValueAction, submitAction, clearFormAction} from "../../feature/form";
import React, {useEffect} from "react";

export const Form = () =>{
    const form = useSelector((state: RootState ) => state.form.form);

    const dispatch = useDispatch();

    const getValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        let text = e.target.value;
        let name = e.target.name;

        dispatch(getValueAction({text: text, name: name}));

    }

    const fetchJson = () => {
            try {
                fetch('/sendform', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        name: form.name.value,
                        phone: form.phone.value,
                        email: form.email.value,
                    })
                })
                    .then (response => response.json());
            } catch (error) {
                console.log(error.message)
            }

    }

    const sendForm = (e: React.SyntheticEvent) => {
        e.preventDefault();
        let inputs = Array.from(document.querySelectorAll('input'));

        inputs.filter((input) => input.getAttribute('type') !== 'submit')
            .map((el) => {
            let text = el.value;
            let name = el.getAttribute('name');

            dispatch(getValueAction({text: text, name: name}));

        })

        dispatch(submitAction());

    }

    useEffect(()=>{
        fetchJson()
    }, [])

    const hideSuccessMessage = (event: any) => {
        if(document.querySelector('.success')) {
            event.target.classList.remove('success');
            let inputs = Array.from(document.querySelectorAll('input'));
            inputs.filter((input) => input.getAttribute('type') !== 'submit').map((el) => {
                el.value = '';
            })
            dispatch(clearFormAction());
        }

    }

    return (
        <FormSection id="formSection">
            <FormWrapper>
                <FormHeading>Become a partner</FormHeading>
                <FormText>Fill out the form, and Compuline specialists will contact you to&nbsp;clarify the details and
                    conclude a&nbsp;contract.</FormText>
                <FormBlock onSubmit={sendForm}>
                    <FormInputBlock>
                        <FormLabel htmlFor="name">First and last name *</FormLabel>
                        <FormInput type="text" name="name" id="name" placeholder="John Smith" onChange={getValue} className={form.name.error === 1 ? 'error' : ''}/>
                    </FormInputBlock>
                    <FormInputBlock>
                        <FormLabel htmlFor="tel">Phone *</FormLabel>
                        <FormInput type="tel" name="tel" id="tel" placeholder="+7 (ххх) хх - хх - хх"  onChange={getValue} className={form.phone.error === 1 ? 'error' : ''}/>
                    </FormInputBlock>
                    <FormInputBlock>
                        <FormLabel htmlFor="mail">E-mail *</FormLabel>
                        <FormInput type="email" name="mail" id="mail" placeholder="your-email@email.com" onChange={getValue} className={form.email.error === 1 ? 'error' : ''}/>
                    </FormInputBlock>
                    <FormMessageBlock
                        $error={form.formError === 1}
                        className={form.formSuccess === 1 ? 'success' : ''}
                        onClick={hideSuccessMessage}>
                        <div>{form.message}</div>
                    </FormMessageBlock>
                    <FormSubmitBlock>
                        <FormSubmitButton type="submit">Submit</FormSubmitButton>
                        <FormSubmitBlockText>I&nbsp;give my&nbsp;consent for the processing of&nbsp;personal data.</FormSubmitBlockText>
                    </FormSubmitBlock>

                </FormBlock>

            </FormWrapper>

        </FormSection>

    )
}