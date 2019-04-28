import styled from 'styled-components'
import { FontIcon } from '../../font'

const ItemListWrapper = styled.div`
    border: 2px solid #9a9595;
    padding: 10px;
`
const AdultEl = styled.div`
    ${FontIcon}
    &::before {
        content: "\f007";
    }
`
const ChildrenEl = styled.div`
    ${FontIcon}
    &::before {
        content: "\f1ae";
    }
`
const RoomsEl = styled.div`
    ${FontIcon}
    &::before {
        content: "\f236";
    }
`

export {
    ItemListWrapper,
    AdultEl,
    ChildrenEl,
    RoomsEl
}