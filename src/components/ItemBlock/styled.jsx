import styled from 'styled-components'
import { FontIcon } from '../../font'

const LeftWrapper = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
`
const RightWrapper = styled.div`
    width: 50%;
    text-align: right;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`
const Item = styled.div`
    padding: 20px;
    width: 100%;
    border-bottom: 1px solid #c3c3c3;
    box-sizing: border-box;
    display: flex;
    &:last-child {
        border-bottom: 0px;
    }
`
const ItemCountEl = styled.div`
    padding: 0px 20px;
    color: #324194;
    font-family: sans-serif;
`
const ItemTextEl = styled.div`
    text-transform: uppercase;
    color: #324194;
    font-family: sans-serif;
`
const IconWrapper = styled.div`
    padding-right: 10px;
    width: 20px;
`
const MinusElement = styled.div`
    ${FontIcon}
    font-size: 25px;
    cursor: pointer;
    &::before {
        content: "\f056";
    }
`
const PlusElement = styled.div`
    ${FontIcon}
    font-size: 25px;
    color: #ec376b;
    cursor: pointer;
    &::before {
        content: "\f055";
    }
`

export {
    LeftWrapper,
    RightWrapper,
    Item,
    IconWrapper,
    ItemCountEl,
    ItemTextEl,
    MinusElement,
    PlusElement
}