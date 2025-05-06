import React, { Fragment } from 'react';
import ProfileHook from './Profile.hook';

function Profile(): React.JSX.Element {
	const elHook = ProfileHook();

	// const styles = ProfileStyle();
	// const languageService = container.resolve(LanguageService);

	if (elHook) {
		return (
			<Fragment>
			</Fragment>
		);
	} else {
		return (
			<Fragment></Fragment>
		);
	}
}

export default Profile;
