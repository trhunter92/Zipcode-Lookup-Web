import { render, screen } from '@testing-library/react';
import { RecentSearch } from './RecentSearch';

test('RecentSearch component renders the city name when passed a data object with the necessary properties', () => {
  render(<RecentSearch 
    data={{
      postCode: "80112",
      places: [
        {
          placeName: "Englewood",
          state: "Colorado"
        }
      ]
    }}
  />);
  const linkElement = screen.getByText(/Englewood/i);
  expect(linkElement).toBeInTheDocument();
});

test('RecentSearch component renders the state name when passed a data object with the necessary properties', () => {
  render(<RecentSearch 
    data={{
      postCode: "80112",
      places: [
        {
          placeName: "Englewood",
          state: "Colorado"
        }
      ]
    }}
  />);
  const linkElement = screen.getByText(/Colorado/i);
  expect(linkElement).toBeInTheDocument();
});

test('RecentSearch component renders the postcode name when passed a data object with the necessary properties', () => {
  render(<RecentSearch 
    data={{
      postCode: "80112",
      places: [
        {
          placeName: "Englewood",
          state: "Colorado"
        }
      ]
    }}
  />);
  const linkElement = screen.getByText(/80112/i);
  expect(linkElement).toBeInTheDocument();
});

