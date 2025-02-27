import React, { Fragment } from 'react';
import TemplateHook from './Template.hook';

function Template(): React.JSX.Element {
	const elHook = TemplateHook();

	// const styles = ProfileStyle();
	// const languageService = container.resolve(LanguageService);
	
	if (elHook) {
		return (
			<Fragment>
			</Fragment>
		);
	}else {
		return (
			<Fragment></Fragment>
		);
	}
}

export default Template;
