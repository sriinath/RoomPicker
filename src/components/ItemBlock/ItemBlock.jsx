import React from 'react'
import {
    LeftWrapper,
    RightWrapper,
    Item,
    IconWrapper,
    ItemCountEl,
    ItemTextEl,
    MinusElement,
    PlusElement
} from './styled.jsx'

const ItemBlock = (props) => {
    const {
        itemCount,
        itemText,
        ItemIconElement,
        clickHandler
    } = props
    return (
        <Item>
            <LeftWrapper>
                <IconWrapper>
                    {ItemIconElement ? <ItemIconElement /> : null}
                </IconWrapper>
                <ItemTextEl>{itemText || ''}</ItemTextEl>
            </LeftWrapper>
            <RightWrapper>
                <MinusElement onClick={e => clickHandler && clickHandler('minus')}/>
                <ItemCountEl>{itemCount || 0}</ItemCountEl>
                <PlusElement onClick={e => clickHandler && clickHandler('add')}/>
            </RightWrapper>
        </Item>
    )
}

export { ItemBlock }