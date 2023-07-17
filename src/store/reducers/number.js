export function numberReducer(state, action) {
    switch (action.type) {
        case 'Add2':
            return { ...state, number: state.number + 2 }
        case 'Multi7':
            return { ...state, number: state.number * 7 }
        case 'Div25':
            return { ...state, number: state.number / 25 }
        case 'Int':
            return { ...state, number: parseInt(state.number) }
        case 'AddN':
            return { ...state, number: state.number + parseInt(action.payload) }
        default:
            return state;
    }
}