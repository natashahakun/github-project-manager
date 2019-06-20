import { combineReducers } from 'redux';
import issues from './issues.reducer';
import repos from './repos.reducer';
import ui from './ui.reducer';
import user from './user.reducer';

export default combineReducers({
    issues,
    repos,
    ui,
    user
});
