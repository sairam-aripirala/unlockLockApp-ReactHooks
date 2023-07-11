import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  color: #ffff;
  background-image: linear-gradient(to top, #0b0c1e, #3c2940);
`

export const Img = styled.img`
  height: 100px;
  width: 100px;
  padding: 20px;
`

export const Status = styled.p`
  font-size: 20px;
  font-family: 'Roboto';
  padding: 20px;
`

export const Button = styled.button`
  height: 45px;
  width: 100px;
  border-radius: 10px;
  border: none;
  font-size: 14px;
  background-color: #06b6d4;
  font-weight: 600;
  color: #e2e8f0;
  cursor: pointer;
  font-family: 'Roboto';
`
