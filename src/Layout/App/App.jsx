import React from 'react'
import { ItemList } from '../../components'
import { Global } from '../../font'
import {
    PeopleEl,
    TopWrapper,
    TopText,
    AppWrapper
} from './styled.jsx'

const App = () => {
    return (
        <AppWrapper>
            <Global />
            <TopWrapper>
                <PeopleEl />
                <TopText>Choose number of <strong>people</strong></TopText>
            </TopWrapper>
            <ItemList />
        </AppWrapper>
    )
}

export { App }