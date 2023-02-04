import SomeLabel from './3-2-comp'

export default function Header(props) {
  return (
    <div>
      Header
      <SomeLabel firstName={props.firstName} />
    </div>
  )
}
