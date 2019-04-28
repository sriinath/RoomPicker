import styled from 'styled-components'
import { FontIcon } from '../../font'
const PeopleEl = styled.div`
    ${FontIcon}
    padding-right: 10px;
    font-size: 18px;
    &::before {
        content: "\f0c0";
    }
`
const TopWrapper = styled.div`
    display: flex;
    padding: 15px;
    align-items: center;
`
const TopText = styled.div`
    color: #324194;
    font-family: sans-serif;
`
const AppWrapper = styled.div`
    width: 60%;
    margin: auto;
    min-width: 270px;
`
export {
    PeopleEl,
    TopWrapper,
    TopText,
    AppWrapper
}