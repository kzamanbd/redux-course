import { createSlice } from '@reduxjs/toolkit';
// initial state
const initialState = {
	selectedProjects: [],
	searchText: ''
};

const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		filledSelectedProjects(state, action) {
			state.selectedProjects = action.payload;
		},
		updateSelectedProjects(state, action) {
			const tag = action.payload;
			if (state.selectedProjects.includes(tag)) {
				state.selectedProjects = state.selectedProjects.filter((t) => t !== tag);
			} else {
				state.selectedProjects.push(tag);
			}
		},
		projectSearchChanged(state, action) {
			state.searchText = action.payload;
		}
	}
});

export default filterSlice.reducer;
export const { filledSelectedProjects, updateSelectedProjects, projectSearchChanged } = filterSlice.actions;
