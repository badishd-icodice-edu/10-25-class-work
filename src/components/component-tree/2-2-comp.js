import UserAcounts from './3-1-comp'

export default function Content(props) {
  return (
    <div>
      Content
      <UserAcounts firstName={props.firstName} />
    </div>
  )
}
