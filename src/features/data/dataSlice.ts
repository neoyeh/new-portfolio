import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchData = createAsyncThunk('data/fetchData', async () => {
  const response = await fetch('https://neoyeh.github.io/neo-portfolio/dist/portfolio.json');
  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }
  return response.json();
});

type Post = {
  years: string;
  protfolio_list: {
    hidden?: boolean;
    project_name: string;
    text: string;
    image: string;
    link_live?: string;
    link_github?: string;
  }[];
};

const initialState: { projects: Post[]; loading: boolean; error: string | null } = {
  projects: [],
  loading: false,
  error: null,
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.projects = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Error fetching data';
      });
  },
});

export default dataSlice.reducer;