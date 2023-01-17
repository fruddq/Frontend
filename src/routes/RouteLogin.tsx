import { Link } from 'wouter'
import { ComponentLogin } from '../components/ComponentLogin'
import { GameTitle } from '../components/GameTitle'

export const Login: React.FunctionComponent = () => {
  return (
    <div>
      <GameTitle />
      <ComponentLogin />
      <Link href="/about">To About</Link>
      <br />
      <Link href="/">To Home</Link>

    </div>
  )
}
