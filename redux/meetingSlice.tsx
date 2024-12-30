import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Meeting {
  id: string;
  title: string;
  status: string;
  date: string;
  location: string;
}

interface MeetingsState {
  meetings: Meeting[];
}

const initialState: MeetingsState = {
  meetings: [
    {
      id: '1',
      title: 'Coffee Meet Austin',
      status: 'Scheduled',
      date: 'Wed, 10 Jun 2023',
      location: 'Kerbey Lane Cafe',
    },
    {
      id: '2',
      title: 'Coffee Meet Austin',
      status: 'Pending',
      date: '--',
      location: '--',
    },
  ],
};

const meetingsSlice = createSlice({
  name: 'meetings',
  initialState,
  reducers: {
    addMeeting: (state, action: PayloadAction<Meeting>) => {
      state.meetings.push(action.payload);
    },
    removeMeeting: (state, action: PayloadAction<string>) => {
      state.meetings = state.meetings.filter((meeting) => meeting.id !== action.payload);
    },
    updateMeeting: (state, action: PayloadAction<{ id: string; updates: Partial<Meeting> }>) => {
      const { id, updates } = action.payload;
      const meeting = state.meetings.find((meeting) => meeting.id === id);
      if (meeting) {
        Object.assign(meeting, updates);
      }
    },
  },
});

export const { addMeeting, removeMeeting, updateMeeting } = meetingsSlice.actions;
export default meetingsSlice.reducer;
