import React, { Fragment } from 'react';
import AddEventHook from './AddEvent.hook';

function AddEvent(): React.JSX.Element {
	const elHook = AddEventHook();

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

export default AddEvent;
