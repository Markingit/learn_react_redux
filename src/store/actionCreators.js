import { CHANGE_INPIUT_VALUE, ADD_ITEM, DELETE_ITEM } from './actionTypes'
export const getInputChangeAion = (value) => ({
    type: CHANGE_INPIUT_VALUE,
    value
})

export const getAddItemAction = () => ({
    type: ADD_ITEM
})

export const getDeleteItemAction = (index) => ({
    type: DELETE_ITEM,
    index
})