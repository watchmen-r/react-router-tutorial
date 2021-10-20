import { Switch, Link, Route, useRouteMatch } from 'react-router-dom'
import ViewProfile from '../components/ViewProfile'
import EditProfile from '../components/EditProfile'

const Profile = () => {

  const {path, url} = useRouteMatch()
  console.log(useRouteMatch())
  
  return (
    <>
      <h1>Profile page</h1>

      <ul>
        <li>
          <Link to={`${url}/viewprofile`}>View Profile</Link>
        </li>
        <li>
          <Link to={`${url}/editprofile`}>Edit Profile</Link>
        </li>
      </ul>
      <Switch>
        <Route path={`${path}/viewprofile`} component={ViewProfile} />
        <Route path={`${path}/editprofile`} component={EditProfile} />
      </Switch>
    </>
  )
}

export default Profile