import React from 'react'
import { render, screen, waitFor } from '@testing-library/react';
import Signup from '../Pages/Signup';
import { MemoryRouter, memoryRouter } from 'react-router-dom';
import * as AlertContext from '../Context/alertContext';

interface AlertContextProps {
  isOpen: boolean,
  type: string,
  message: string,
  onOpen: jest.Mock,
  onClose: jest.Mock,
}

describe('Signup.tsx', () => {

    const renderSignup = () => {

    jest.spyOn(AlertContext, 'useAlertContext').mockImplementation((): AlertContextProps => ({
      isOpen: false,
      type: '',
      message: '',
      onOpen: jest.fn(),
      onClose: jest.fn(),
    }))

    return (
      render(
        <MemoryRouter>
          <Signup />
        </MemoryRouter>
      )
    )
  }

  describe('when in first page', () => {
    it('should render the sign up form', async () => {

      renderSignup()


      const titleForTheForm = screen.getByText(/Sign up with us/i)

      // screen.debug(undefined, Infinity)
      await waitFor(() => expect(titleForTheForm).toBeInTheDocument())

    })
  })
  


})

