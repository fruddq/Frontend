import { Link } from 'wouter'
import { ComponentLogin } from '../components/ComponentLogin'
import { ComponentRegister } from '../components/CompontentRegister'
import { GameTitle } from '../components/GameTitle'

export const RouteRegister: React.FunctionComponent = () => {
  return (
    <div>
      <GameTitle />
      <ComponentRegister />
      <Link href="/about">To About</Link>
      <br />
      <Link href="/">To Home</Link>

    </div>
  )
}
