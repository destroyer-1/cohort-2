
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil';
import { countAtom } from './store/atoms/count';

function App() {
  return (
    <>
    <RecoilRoot>
      <Count />
    </RecoilRoot>
    </>
  )
}
function CountRenderer() {
  const count = useRecoilValue(countAtom);
  return <div>
    {count}
  </div>
}

function Count(){
  return <div>
    <CountRenderer />
    <Buttons />
  </div>
}
function Buttons() {
  const [count , setCount] =useRecoilState(countAtom) ;

  return <div>
    <button onClick={() => {
      setCount(count+1)
    }}>Increase
    </button>
    <button onClick={() => {
      setCount(count-1)

    }}>
      Decrease
    </button>
  </div>
}

export default App
