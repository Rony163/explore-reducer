export const portalReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_PATIENT':
            const adding = {
                name: action.name,
                id: action.name + state.patients.length
            }
            const newPatients = [...state.patients, adding]
            return {
                ...state,
                patients: newPatients
            }
            break;
        case 'REMOVE_PATIENT':
            const remove = state.patients.filter(patient => patient.id !== action.id);
            return {
                ...state,
                patients: remove
            }

        default:
            return state;
            break;
    }
};

export default portalReducer;