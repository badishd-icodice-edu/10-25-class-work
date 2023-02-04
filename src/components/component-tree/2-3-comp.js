import SomeLabel from './3-2-comp'

export default function Footer(props) {
  return (
    <div>
      Footer
      <SomeLabel firstName={props.firstName} />
    </div>
  )
}
