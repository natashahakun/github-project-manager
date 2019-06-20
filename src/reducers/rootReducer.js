import { combineReducers } from 'redux';
import repos from './repos.reducer';
import ui from './ui.reducer';
import user from './user.reducer';

export default combineReducers({
    repos,
    ui,
    user
});
