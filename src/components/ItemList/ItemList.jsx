import React, { useState } from 'react'
import { ItemBlock } from '../ItemBlock'
import {
    ItemListWrapper,
    RoomsEl,
    ChildrenEl,
    AdultEl
} from './styled.jsx'

const ItemList = () => {
    const [ adults, setAdults ] = useState(1)
    const [ children, setChildren ] = useState(0)
    const [ rooms, setRooms ] = useState(1)
    const operationHandler = (value, type) => {
        if(type) {
            switch(type) {
                case 'add': return value + 1
                case 'minus': return value - 1
                default: return value
            }
        }
        return 0
    }
    const adultsHandler = (operationType) => {
        if(operationType) {
            const newAdultVal = operationHandler(adults, operationType)
            if(newAdultVal !== adults) {
                const personCount = newAdultVal + children
                if(operationType == 'add') {
                    if(personCount <= 20) {
                        setAdults(newAdultVal)
                        if(personCount > rooms * 4) {
                            setRooms(rooms + 1)
                        }
                    }
                }
                else if(operationType == 'minus') {
                    if(personCount > 0 && newAdultVal > 0) {
                        setAdults(newAdultVal)
                        if(personCount === ((rooms - 1) * 4) || (rooms > newAdultVal)) {
                            setRooms(rooms - 1)
                            if(personCount > ((rooms -1) * 4)) {
                                setChildren(((rooms -1) * 4) - newAdultVal)
                            }
                        }
                    }
                }
            }
        }
    }
    const roomHandler = (operationType) => {
        if(operationType) {
            const newRoomVal = operationHandler(rooms, operationType)
            if(newRoomVal !== rooms && newRoomVal < 6 && newRoomVal > 0) {
                setRooms(newRoomVal)
                const maxRoomLimit = newRoomVal * 4
                const personCount = adults + children
                if(adults < newRoomVal) {
                    setAdults(newRoomVal)
                }
                else if(personCount > (maxRoomLimit)) {
                    if((personCount - children) === (maxRoomLimit)) {
                        setChildren(0)
                    }
                    else if((personCount - children) < (maxRoomLimit)) {
                        setChildren(maxRoomLimit - adults)
                    }
                    else if(personCount > maxRoomLimit) {
                        setAdults(maxRoomLimit)
                    }
                }
            }
        }
    }
    const childrenHandler = (operationType) => {
        if(operationType) {
            const newChildrenVal = operationHandler(children, operationType)
            if(newChildrenVal !== children) {
                const personCount = newChildrenVal + adults
                if(operationType == 'add') {
                    if(personCount <= 20) {
                        setChildren(newChildrenVal)
                        if(personCount > rooms * 4) {
                            setRooms(rooms + 1)
                            if((rooms + 1) > adults) {
                                setAdults(adults + 1)
                            }
                        }
                    }
                }
                else if(operationType == 'minus') {
                    if(personCount > 0 && newChildrenVal >= 0) {
                        setChildren(newChildrenVal)
                        if(personCount === ((rooms - 1) * 4)) {
                            setRooms(rooms - 1)
                        }
                    }
                }
            }
        }
    }
    return (
        <ItemListWrapper>
            <ItemBlock
                itemText="rooms"
                itemCount={rooms}
                ItemIconElement={RoomsEl}
                clickHandler={roomHandler}
            />
            <ItemBlock
                itemText="adults"
                itemCount={adults}
                ItemIconElement={AdultEl}
                clickHandler={adultsHandler}
            />
            <ItemBlock
                itemText="children"
                itemCount={children}
                ItemIconElement={ChildrenEl}
                clickHandler={childrenHandler}
            />
        </ItemListWrapper>
    )
}

export { ItemList }