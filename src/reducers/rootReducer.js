import { combineReducers } from 'redux';
import ui from './ui.reducer';
import user from './user.reducer';

export default combineReducers({
    ui,
    user
});
