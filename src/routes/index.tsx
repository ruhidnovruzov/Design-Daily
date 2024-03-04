import PublicProfile from '../pages/publicProfile';
import Notifications from '../pages/notifications';
import AccountSetting from '../pages/accountSetting';
import App from '../App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Router: React.FC = () => (
	<BrowserRouter>
		<Routes>
            <Route path="/" element={<App />} />
			<Route path="/public-profile" element={<PublicProfile />} />
			<Route path="/account-settings" element={<AccountSetting />} />
            <Route path="/notifications" element={<Notifications />} />
		</Routes>
	</BrowserRouter>
);

export default Router