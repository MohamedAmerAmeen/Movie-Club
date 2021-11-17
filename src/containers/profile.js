import React from 'react';
import {Header, Profiles} from '../components'
import * as Routes from '../constants/route'

export function SelectProfilecontainer({user, setProfile}){
    return <>
    <Header bg={false}>
        <Header.Frame>
            <Header.Logo to={Routes.Home} src="https://raw.githubusercontent.com/karlhadwen/netflix/master/src/logo.svg" alt="NetFlix"></Header.Logo>
        </Header.Frame>
    </Header>
    <Profiles>
        <Profiles.Title>Who's watching?</Profiles.Title>
        <Profiles.List>
          <Profiles.User
            onClick={() => setProfile({ displayName: user.displayName, photoURL: user.photoURL })}
            data-testid="user-profile"
          >
            <Profiles.Picture src="https://raw.githubusercontent.com/karlhadwen/netflix/master/public/images/users/4.png" />
            <Profiles.Name>{user.displayName}</Profiles.Name>
          </Profiles.User>
        </Profiles.List>
      </Profiles>
    </>
}