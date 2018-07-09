import { breedAction } from '../actions/config';

const initialState = {
    pagination: {
        totalPage: 1,
        curPage: 1
    },
    breeds: [],
    breedNames: [],
    searchContent: '',
    sortBy: 'name'
};

const breedList = (state = initialState, action) => {
    switch (action.type) {
        case breedAction.GET_BREEDS:
            return {
                ...state,
                breeds: action.breeds,
                sortBy: action.sort
            };
        case breedAction.GET_BREED_BY_NAME:
            return {
                ...state,
                pagination: {
                    totalPage: 1,
                    curPage: 1
                },
                searchContent:'',
                breeds: action.breed ? [action.breed] : []
            };
        case breedAction.GET_BREED_NAMES:
            return {
                ...state,
                breedNames: action.names
            };
        case breedAction.SET_TOTAL_PAGE:
            return {
                ...state,
                pagination: {
                    totalPage: action.number,
                    curPage: 1
                }
            };
        case breedAction.SET_CUR_PAGE:
            return {
                ...state,
                pagination: {
                    ...state.pagination,
                    curPage: action.number
                }
            };
        case breedAction.SET_SORT:
            return{
                ...state,
                sortBy: action.sort,
                pagination: {
                    ...state.pagination,
                    curPage: 1
                }
            };
        case breedAction.SET_SEARCH:
            return{
                ...state,
                searchContent: action.content
            };
        case breedAction.UPDATE_BREEDS:
            return{
                ...state,
                breeds: state.breeds.map(breed => (breed._id === action.breed._id)
                ? action.breed : breed)
            };
        default:
            return state
    }
};

export default breedList;
