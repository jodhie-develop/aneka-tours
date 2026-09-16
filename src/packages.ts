export interface TourPackage {
  id: string;
  title: string;
  destination: string;
  image: string;
  duration: string;
  durationDays: number;
  seatsLeft: number;
  priceFrom: number;
  rating: number;
  departures: string[];
  highlights: string[];
}

export const packages: TourPackage[] = [
  {
    id: 'bali-4d3n',
    title: 'Bali Bliss Discovery',
    destination: 'Bali, Indonesia',
    image: 'https://images.pexels.com/photos/17716409/pexels-photo-17716409.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    duration: '4D 3N',
    durationDays: 4,
    seatsLeft: 4,
    priceFrom: 3850000,
    rating: 4.8,
    departures: ['Oct 12', 'Oct 19', 'Oct 26', 'Nov 02'],
    highlights: ['Ubud Rice Terraces', 'Tanah Lot Sunset', 'Kintamani Volcano', 'Private Beach Club'],
  },
  {
    id: 'japan-7d6n',
    title: 'Japan Golden Route',
    destination: 'Tokyo & Kyoto, Japan',
    image: 'https://images.pexels.com/photos/33368123/pexels-photo-33368123.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    duration: '7D 6N',
    durationDays: 7,
    seatsLeft: 6,
    priceFrom: 18500000,
    rating: 4.9,
    departures: ['Oct 15', 'Oct 22', 'Nov 05', 'Nov 12'],
    highlights: ['Mt. Fuji 5th Station', 'Fushimi Inari Shrine', 'Kyoto Arashiyama Bamboo', 'Shinkansen Experience'],
  },
  {
    id: 'turkey-6d5n',
    title: 'Cappadocia Wonder',
    destination: 'Istanbul & Cappadocia, Turkey',
    image: 'https://images.pexels.com/photos/27260270/pexels-photo-27260270.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    duration: '6D 5N',
    durationDays: 6,
    seatsLeft: 4,
    priceFrom: 14200000,
    rating: 4.9,
    departures: ['Oct 10', 'Oct 24', 'Nov 07', 'Nov 21'],
    highlights: ['Hot Air Balloon Ride', 'Goreme Open-Air Museum', 'Hagia Sophia', 'Bosphorus Cruise'],
  },
  {
    id: 'korea-5d4n',
    title: 'Korea Autumn Charm',
    destination: 'Seoul & Nami Island, Korea',
    image: 'https://images.pexels.com/photos/33019230/pexels-photo-33019230.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    duration: '5D 4N',
    durationDays: 5,
    seatsLeft: 8,
    priceFrom: 9500000,
    rating: 4.7,
    departures: ['Oct 18', 'Nov 01', 'Nov 15', 'Nov 29'],
    highlights: ['Gyeongbokgung Palace', 'Nami Island Day Trip', 'N Seoul Tower', 'Myeongdong Shopping'],
  },
  {
    id: 'swiss-8d7n',
    title: 'Swiss Alps Panorama',
    destination: 'Lucerne & Interlaken, Switzerland',
    image: 'https://images.pexels.com/photos/35309605/pexels-photo-35309605.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    duration: '8D 7N',
    durationDays: 8,
    seatsLeft: 5,
    priceFrom: 26500000,
    rating: 4.9,
    departures: ['Oct 14', 'Nov 04', 'Nov 18', 'Dec 02'],
    highlights: ['Mt. Titlis Cable Car', 'Lake Lucerne Cruise', 'Jungfrau Railway', 'Rhine Falls'],
  },
  {
    id: 'maldives-4d3n',
    title: 'Maldives Paradise Escape',
    destination: 'Malé, Maldives',
    image: 'https://images.pexels.com/photos/27651087/pexels-photo-27651087.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    duration: '4D 3N',
    durationDays: 4,
    seatsLeft: 3,
    priceFrom: 12500000,
    rating: 4.8,
    departures: ['Oct 11', 'Oct 25', 'Nov 08', 'Nov 22'],
    highlights: ['Overwater Villa Stay', 'Snorkeling Safari', 'Sandbank Picnic', 'Sunset Dolphin Cruise'],
  },
];

export const destinations = [
  'Bali, Indonesia',
  'Tokyo & Kyoto, Japan',
  'Istanbul & Cappadocia, Turkey',
  'Seoul & Nami Island, Korea',
  'Lucerne & Interlaken, Switzerland',
  'Malé, Maldives',
  'Bangkok & Phuket, Thailand',
  'Singapore',
  'Ho Chi Minh & Hanoi, Vietnam',
];

export const months = [
  'October 2026',
  'November 2026',
  'December 2026',
  'January 2027',
  'February 2027',
  'March 2027',
];
