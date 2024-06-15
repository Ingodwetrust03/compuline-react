import styled from 'styled-components';

export const FormSection = styled.section`
    padding: 96px 0 48px;
    background: #F7F7F7;
`

export const FormWrapper = styled.div`
    max-width: 625px;
    width: 100%;
    margin: 0 auto 92px auto;
    
    @media (max-width: 767px) {
          max-width: 100%;
          padding: 0 30px;
          margin: 0 auto 70px auto;
        }
`

export const FormHeading = styled.h2`
    margin-bottom: 45px;

    @media (max-width: 575px) {
        margin-bottom: 24px;
     }
`

export const FormText = styled.p`
    padding: 0;
    font-size: 18px;
    font-family: 'Geologica Light', sans-serif;
`

export const FormBlock = styled.form`
    font-size: 18px;
    font-family: 'Geologica Light', sans-serif;
    margin-top: 45px;
`

export const FormInputBlock = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
`

export const FormLabel = styled.label`
    display: flex;
    width: fit-content;
    color: #8AA4B0;
    font-family: 'Geologica Light', sans-serif;
    font-size: 18px;
    background: #F7F7F7;
    padding: 0 12px;
    z-index: 2;
    margin-left: 12px;
`

export const FormInput = styled.input`
    border-radius: 4px;
    border: 1px solid #8AA4B0;
    outline: none;
    background: none;
    color: #8AA4B0;
    padding: 9px 24px;
    margin-top: -10px;

    &::placeholder {
      color: #8AA4B0;
     }

     &:focus-visible::placeholder {
        color: #272727;
      }

      &.error {
         border: 1px solid red;
       }
`

export const FormSubmitBlock = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    flex-wrap: nowrap;
    gap: 24px;
    margin-top: 45px;
    
    @media (max-width: 575px) {
         flex-direction: column;
     }
`

export const FormSubmitButton = styled.button`
     display: flex;
     padding: 25px 55px;
     border-radius: 53px;
     background: #0096FF;
     color: #F7F7F7;
     font-family: 'Geologica Medium', sans-serif;
     font-size: 18px;
     border: none;
     outline: none;
     white-space: nowrap;
     justify-content: center;
     transition: all .25s;

      &:hover, &:focus-visible {
         background: #0076C9;
      }

      @media (max-width: 575px) {
          width: 100%;
      }
`

export const FormSubmitBlockText = styled.p`
    color: #8AA4B0;
    font-family: 'Geologica Light', sans-serif;
    font-size: 18px;
`


export const FormMessageBlock = styled.div<{$error: boolean}>`
        color: ${({$error}) => $error ? "red" : "inherit"}; 
        
        &.success {
            top: 0;
            position: fixed;
            background: rgba(0, 0, 0, .5);
            height: 100vh;
            width: 100vw;
            left: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 5;
            
            div {
                background: #fff;
                border-radius: 10px;
                padding: 50px;
            }
        } 
`