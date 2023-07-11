import {useState} from 'react'
import {AppContainer, Img, Status, Button} from './styledComponents'

const Unlock = () => {
  const [onClickBtnStatus, setStatus] = useState(true)

  const lockUrl = 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
  const unLockUrl = 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'

  const onChangeStatus = () => {
    setStatus(prevStatus => !prevStatus)
  }

  const renderLockView = () => (
    <AppContainer>
      <Img src={lockUrl} alt="lock" />
      <Status>Your Device is Locked</Status>
      <Button onClick={onChangeStatus}>Unlock</Button>
    </AppContainer>
  )

  const renderUnlockView = () => (
    <AppContainer>
      <Img src={unLockUrl} alt="unlock" />
      <Status>Your Device is Unlocked</Status>
      <Button onClick={onChangeStatus}>Lock</Button>
    </AppContainer>
  )

  return (
    <AppContainer>
      {onClickBtnStatus ? renderLockView() : renderUnlockView()}
    </AppContainer>
  )
}
export default Unlock
