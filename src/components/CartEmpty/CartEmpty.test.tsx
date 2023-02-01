import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

import CartEmpty from './CartEmpty';
import { darkTheme } from '../../styles/Themes.styled';
import MainLayout from '../../layouts/MainLayout';
import Cart from '../../pages/Cart/Cart';
import FullItem from '../../pages/FullItem/FullItem';
import NotFound from '../../pages/NotFound/NotFound';
import Home from '../../pages/Home/Home';
import { store } from '../../store/store';

describe('Cart Empty Test', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <ThemeProvider theme={darkTheme}>
          <MemoryRouter>
            <Routes>
              <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="cart" element={<Cart />} />
                <Route path="item/:id" element={<FullItem />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
            <CartEmpty />
          </MemoryRouter>
        </ThemeProvider>
      </Provider>,
    );
  });

  test('renders heading', () => {
    const heading = screen.getByText(/Your cart is empty/i);
    expect(heading).toBeInTheDocument();
  });

  test('renders description', () => {
    const description = screen.getByText(/If you want to make an order,/i);
    expect(description).toBeInTheDocument();
  });

  test('checks link to the home page', () => {
    const link = screen.getByRole('link', {
      name: /go back/i,
    });
    userEvent.click(link);
    expect(screen.getByText(/all pizzas/i)).toBeInTheDocument();
  });
});
