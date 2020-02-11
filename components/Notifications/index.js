import React from 'react'

import {NotificationWrapper, NotificationContent} from 'styles/notifications'

const index = (props) => {
  return (
    <>
      <NotificationWrapper>
        <NotificationContent>
          {props.children}
        </NotificationContent>
      </NotificationWrapper>
    </>
  )
}

export default index
