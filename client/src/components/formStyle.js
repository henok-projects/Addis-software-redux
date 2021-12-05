import styled from 'styled-components'

export const BoxContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: left;
  margin-top: 8px;
  margin-left:200px;
  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`

export const FormContainer = styled.form`
  width: 70%;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 2.5px rgba(15, 15, 15, 0.19);
  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`

export const Input = styled.input`
  width: 70%;
  height: 42px;
  outline: none;
  border: 1px solid rgba(200, 200, 200, 0.3);
  padding: 0px 10px;
  border-bottom: 1.4px solid transparent;
  transition: all 200ms ease-in-out;
  font-size: 15px;

  &::placeholder {
    color: rgba(0, 0, 200, 1);
  }
  &:not(:last-of-type) {
    border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);
  }
  &:focus {
    outline: none;
    border-bottom: 2px solid rgba(241, 196, 15);
  }
`
export const SubmitButton = styled.button`
  width: 20%;
  padding: 11px 12px;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  margin-bottom: 5px;
  margin-top: 15px;
  margin-left:100px;
  transition: all, 24ems ease-in-out;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    
        rgba(0, 212, 255, 1) 
  );
  &:hover {
    filter: brightness(1o8);
  }
`
export const AddButton = styled.button`
  width: 11%;
  padding: 11px 12px;
  color: #fff;
  font-size: 15px;
  font-weight: 600;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  margin-bottom: 5px;
  margin-top: 15px;
  margin-left:60px;
  transition: all, 24ems ease-in-out;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    
        rgba(0, 212, 255, 1) 
  );
  &:hover {
    filter: brightness(1o8);
  }
`


