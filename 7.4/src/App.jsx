
import './App.css'
import {RecoilRoot, useRecoilValue} from "recoil"
import { jobsAtom, networkAtom, notificationsAtom, messagingAtom, totalNotificationSelector } from './atoms'

function App() {
  return(
    <div>
      <RecoilRoot>
        <MainApp/>
      </RecoilRoot>
    </div>
  )
}

function MainApp(){
  const networkNotificationCount = useRecoilValue(networkAtom)
  const jobsAtomCount = useRecoilValue(jobsAtom)
  const notificationsAtomCount = useRecoilValue(notificationsAtom)
  const messagingAtomCount = useRecoilValue(messagingAtom)

  const totalCount = useRecoilValue(totalNotificationSelector)

  return (
    <>
      
      <button>Home</button>

      <button>My Network({networkNotificationCount >=100 ?"99+" : networkNotificationCount})</button>
      <button>Jobs({jobsAtomCount})</button>
      <button>Messaging({messagingAtomCount})</button>
      <button>Notifications({notificationsAtomCount})</button>

      <button>Me {totalCount}</button>
      

    </>
  )
}
export default App
