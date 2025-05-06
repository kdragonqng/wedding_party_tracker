import React, { Fragment } from 'react';
import SettingHook from './Setting.hook';

function Setting(): React.JSX.Element {
	const elHook = SettingHook();

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

export default Setting;
