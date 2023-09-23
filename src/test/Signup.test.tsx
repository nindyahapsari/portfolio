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

  describe('when on the first page', () => {
    beforeEach(() => {
      renderSignup()
    })

     const testCases = [
      { description: 'email input', query: /Email/i },
      { description: 'password input', query: /Password/i },
      { description: 'confirm password input', query: /Confirm Password/i },
      { description: 'submit button', query: /Submit/i },
    ];


    describe.each(testCases)('rendering %s', ({ description, query }) => {
      it('should render the `${description}`', async () => {
        const element = screen.getByText(query)
        await waitFor(() => expect(element).toBeInTheDocument())
      })
    })

    it.skip('should render the sign up form', async () => {
      const titleForTheForm = screen.getByText(/Sign up with us/i)
      await waitFor(() => expect(titleForTheForm).toBeInTheDocument())
    })
  })
  


})

