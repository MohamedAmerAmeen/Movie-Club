import React from 'react';
import {Header} from '../components';
import * as Routes from '../constants/route';


export function HeaderContainer({children}){
    return(
        <Header>
            <Header.Frame>
                <Header.Logo to={Routes.Home} src="https://raw.githubusercontent.com/karlhadwen/netflix/master/src/logo.svg"/>
                <Header.ButtonLink to={Routes.SignIn}>Log In</Header.ButtonLink>
            </Header.Frame>
            {children}
        </Header>
    )
}