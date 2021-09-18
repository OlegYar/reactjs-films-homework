import React from 'react'
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

const AllTheProviders = ({ store }) => ({ children }) => {
  return (
    <Provider store={store}>
      <Router>
        {children}
      </Router>
    </Provider>
  )
}

const customRender = (ui, options) => {
  const { store, ...restOptions } = options;
  return render(ui, { wrapper: AllTheProviders({ store }), ...restOptions });
}

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }
