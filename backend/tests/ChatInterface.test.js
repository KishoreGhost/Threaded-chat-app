import { render, screen } from '@testing-library/react';
import ChatInterface from '../components/ChatInterface';

describe('Chat Interface Tests', () => {
  test('should render chat input field', () => {
    render(<ChatInterface />);
    expect(screen.getByPlaceholderText(/Type a message/i)).toBeInTheDocument();
  });
});
