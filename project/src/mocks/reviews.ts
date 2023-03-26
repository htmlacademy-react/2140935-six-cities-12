import {Reviews} from '../types/offer';
const AVATAR_URL = 'https://i.pravatar.cc/128';

export const reviews: Reviews = [
  {
    id: 0,
    nickname: 'Kasya',
    avatar: `${AVATAR_URL}?rnd=${Math.random()}`,
    date: 'April 2021',
    rate: 5,
    text: 'I recently stayed in an apartment in Amsterdam booked through this site and it was a fantastic experience. The apartment was clean, spacious, and had all the amenities we needed for a comfortable stay. The location was also perfect - within walking distance to many attractions and restaurants. I highly recommend this apartment and booking through this site!',
  }, {
    id: 1,
    nickname: 'Liza',
    avatar: `${AVATAR_URL}?rnd=${Math.random()}`,
    date: 'May 2022',
    rate: 4,
    text: 'I booked an apartment in Amsterdam for a weekend getaway and was not disappointed. The apartment was beautifully decorated and had everything we needed for our stay. The location was also great - in a quiet neighborhood but still close to all the action. The booking process was easy and the staff were very helpful. I would definitely book through this site again.',
  }, {
    id: 2,
    nickname: 'Andrew',
    avatar: `${AVATAR_URL}?rnd=${Math.random()}`,
    date: 'June 2019',
    rate: 3,
    text: 'I stayed in an apartment in Amsterdam booked through this site and it was a great experience. The apartment was clean and modern, and the location was ideal - close to public transportation and within walking distance to many attractions. The staff were also very helpful and responsive to any questions we had. I would definitely recommend this site for booking apartments in Amsterdam.',
  }, {
    id: 3,
    nickname: 'Bob',
    avatar: `${AVATAR_URL}?rnd=${Math.random()}`,
    date: 'July 2019',
    rate: 2,
    text: 'My family and I stayed in an apartment in Amsterdam for a week and it was the perfect home away from home. The apartment was spacious, clean, and had all the amenities we needed for our stay. The location was also great - in a quiet neighborhood but still close to everything. The booking process was easy and the staff were very helpful. I highly recommend this site for booking apartments in Amsterdam.',
  }, {
    id: 4,
    nickname: 'Dougie',
    avatar: `${AVATAR_URL}?rnd=${Math.random()}`,
    date: 'September 2023',
    rate: 1,
    text: 'I had a great experience staying in an apartment in Amsterdam booked through this site. The apartment was clean, comfortable, and had all the necessary amenities. The location was also perfect - close to many great restaurants and bars. The booking process was easy and the staff were very helpful. I would definitely book through this site again for my next trip to Amsterdam.',
  }
];
