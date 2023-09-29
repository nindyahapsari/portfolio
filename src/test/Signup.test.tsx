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

  describe('when on the sign up page', () => {
    beforeEach(() => {
      renderSignup()
    })

     const testCases = [
      { description: 'email input', query: /E-mail address/i },
      { description: 'password input', query: /Password/i },
    ];


    describe.each(testCases)('when rendering sign up form', ({ description, query }) => {
      it(`should render the ${description}`, async () => {
        const element = screen.getByPlaceholderText(query)
        await waitFor(() => expect(element).toBeInTheDocument())
      })

      it('should show sign up button', async () => {
        const signUpBtn = screen.getByRole('button', { name: /Sign up/i})
        await waitFor(() => expect(signUpBtn).toBeInTheDocument())
      })

    })

    it('should render the header title', async () => {
      const titleForTheForm = screen.getByText(/Sign up with us/i)
      await waitFor(() => expect(titleForTheForm).toBeInTheDocument())
    })
    
  })
  

})

