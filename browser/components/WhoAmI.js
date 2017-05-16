import React from 'react'
import { logout } from 'APP/app/reducers/auth'
import { connect } from 'react-redux'

//TODO: Consider deleting this.
export const WhoAmI = ({ user, logout }) => (
  <div className="whoami" style={{ paddingTop: 12 }}>
    <span className="whoami-user-name" style={{ paddingRight: 5 }}>{user && user.name}</span>
    <button className="logout" onClick={logout}>Logout</button>
  </div>
)

export default connect(
  ({ auth }) => ({ user: auth }),
  { logout },
)(WhoAmI)
