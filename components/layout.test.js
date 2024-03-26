// Import the necessary testing utilities
import React from 'react';
import { render, screen } from '@testing-library/react';
import { useSession } from 'next-auth/react';

// Import the component to be tested
import Layout from './layout'; // Adjust the path as necessary


// Mock the useSession hook
jest.mock('next-auth/react', () => ({
  useSession: jest.fn(),
}));

describe('Layout Component', () => {
  it('should render with user session', () => {
    // Mock a session object
    const session = {
      user: {
        name: 'Test User',
      },
    };

    // Mock the useSession hook to return the session object
    useSession.mockReturnValueOnce({ data: session });

    // Render the Layout component
    render(<Layout>Test Content</Layout>);

    // Check if the header is rendered with the user's name
    expect(screen.getByText(`Welcome, ${session.user.name}`)).toBeInTheDocument();

    // Check if the content is rendered
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });

  it('should render without user session', () => {
    // Mock the useSession hook to return null session
    useSession.mockReturnValueOnce({ data: null });

    // Render the Layout component
    render(<Layout>Test Content</Layout>);

    // Check if the content is rendered without the header
    expect(screen.queryByText('Welcome,')).not.toBeInTheDocument();

    // Check if the content is rendered
    expect(screen.getByText('Test Content')).toBeInTheDocument();
  });
});
export default Layout;
