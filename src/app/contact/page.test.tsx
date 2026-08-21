import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Contact from './page';

describe('contact page', () => {
  it('renders the quote request form fields', () => {
    render(<Contact />);
    expect(screen.getByPlaceholderText('Ex: Jean Dupont')).toHaveAttribute('type', 'text');
    expect(screen.getByPlaceholderText('+212 ...')).toHaveAttribute('type', 'tel');
    expect(screen.getByPlaceholderText('Ex: Casablanca')).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText('Décrivez vos besoins ou dimensions spécifiques...')
    ).toBeInTheDocument();
  });

  it('offers the product ranges in the dropdown', () => {
    render(<Contact />);
    const options = screen.getAllByRole('option').map((option) => option.textContent);
    expect(options).toEqual([
      'Matelas Premium',
      'Mousse sur mesure',
      'Salon Complet',
      'Autre Accessoire',
    ]);
  });

  it('accepts user input in the form fields', async () => {
    render(<Contact />);
    const name = screen.getByPlaceholderText('Ex: Jean Dupont');
    await userEvent.type(name, 'Jean Dupont');
    expect(name).toHaveValue('Jean Dupont');

    await userEvent.selectOptions(screen.getByRole('combobox'), 'Salon Complet');
    expect(screen.getByRole('combobox')).toHaveValue('Salon Complet');
  });

  it('does not submit the form on its own', () => {
    render(<Contact />);
    expect(screen.getByRole('button', { name: /Recevoir mon devis/ })).toHaveAttribute(
      'type',
      'button'
    );
  });
});
