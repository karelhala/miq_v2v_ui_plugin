import React from 'react';
import { IntlProvider } from 'react-intl';
import { getDisplayName } from './helpers';
import i18n from './i18n';

const i18nProviderWrapperFactory = initialNow => WrappedComponent => {
  const wrappedName = getDisplayName(WrappedComponent);

  class I18nProviderWrapper extends React.Component {
    constructor(props) {
      super(props);
      // this.state = { i18nLoaded: i18n.loaded };
      this.state = { i18nLoaded: true };

      // todo: load i18n from the server created locale
      // if (!i18n.loaded) {
      // i18n.ready.then(() => {
      // this.setState({ i18nLoaded: true });
      // });
      // }
    }

    render() {
      if (!this.state.i18nLoaded) {
        return <span />;
      }
      return (
        <IntlProvider locale={i18n.locale} initialNow={initialNow}>
          <WrappedComponent {...this.props} />
        </IntlProvider>
      );
    }
  }
  I18nProviderWrapper.displayName = `I18nProviderWrapper(${wrappedName})`;

  return I18nProviderWrapper;
};

export { i18nProviderWrapperFactory };
