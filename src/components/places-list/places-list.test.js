import React from 'react';
import renderer from 'react-test-renderer';

import {PlacesListComponent} from "./places-list.jsx";

const TEST_OFFERS = [
  {
    id: 1,
    type: `room`,
    title: `Wood and stone place`,
    price: 80,
    rating: 4,
    location: {
      longitude: 1,
      latitude: 1,
      zoom: 1
    }
  }
];

it(`PlacesListComponent correct renders`, () => {
  const placesList = renderer
    .create(
        <PlacesListComponent rentObjects={TEST_OFFERS}/>
    ).toJSON();

  expect(placesList).toMatchSnapshot();
});
