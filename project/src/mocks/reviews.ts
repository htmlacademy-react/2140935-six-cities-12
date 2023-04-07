import {Review} from '../types/offer';
const AVATAR_URL = 'https://i.pravatar.cc/128';

export const reviews: Review[] = [
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
  }, {
    id: 5,
    nickname: 'Semen',
    avatar: `${AVATAR_URL}?rnd=${Math.random()}`,
    date: 'December 2012',
    rate: 2,
    text: 'This apartment was an absolute dream! The interior was stunning and beautifully furnished with all the necessary amenities. The location was also unbeatable - just a short walk away from the Eiffel Tower and other major attractions. The host was incredibly helpful and accommodating, making sure that our stay was comfortable and enjoyable. I would definitely stay here again and recommend it to anyone visiting Paris.',
  }, {
    id: 6,
    nickname: 'Bill',
    avatar: `${AVATAR_URL}?rnd=${Math.random()}`,
    date: 'January 2024',
    rate: 3,
    text: 'This apartment was a great choice for my stay in Paris. The location was excellent, with easy access to public transportation and many shops and restaurants nearby. The apartment itself was spacious and well-appointed, with plenty of room for me and my travel companions. The host was also very responsive and helpful, making sure that we had everything we needed for a comfortable stay.',
  }, {
    id: 7,
    nickname: 'Rina',
    avatar: `${AVATAR_URL}?rnd=${Math.random()}`,
    date: 'March 2019',
    rate: 4,
    text: 'I had a wonderful stay at this charming apartment in Paris. The location was perfect - in a quiet, residential neighborhood but still within walking distance of many attractions. The apartment was beautifully decorated and had all the necessary amenities for a comfortable stay. The host was also very welcoming and provided great recommendations for local restaurants and sights. I would definitely stay here again!',
  },
  {
    id: 8,
    nickname: 'Maya',
    avatar: `${AVATAR_URL}?rnd=${Math.random()}`,
    date: 'April 2018',
    rate: 5,
    text: 'This apartment was simply amazing! The location couldn\'t have been better - right in the heart of Paris with incredible views of the city. The interior was beautifully designed and well-appointed with all the necessary amenities. The host was also incredibly helpful and attentive, ensuring that our stay was comfortable and enjoyable. I would highly recommend this apartment to anyone looking for a luxurious stay in Paris.',
  }, {
    id: 9,
    nickname: 'Elf',
    avatar: `${AVATAR_URL}?rnd=${Math.random()}`,
    date: 'September 2017',
    rate: 4,
    text: 'I had a fantastic stay at this cozy apartment in Paris. The location was perfect - just a short walk away from many of the city\'s top attractions. The apartment itself was small but very well-equipped with everything I needed for a comfortable stay. The host was also very accommodating, making sure that I had everything I needed and offering great tips for exploring the city. I would definitely stay here again!',
  }
];
