import {icons, images, COLORS, FONTS} from '../../constants';
import React, {useState, useEffect} from 'react';
import moment from 'moment';
import {Text} from 'react-native';

export const formatTimeAgo = createdAt => {
  const currentTime = Date.now();
  const diffInMilliseconds = currentTime - createdAt;
  const duration = moment.duration(diffInMilliseconds);

  if (duration.asMinutes() < 1) {
    return 'just now';
  } else if (duration.asHours() < 1) {
    const minutesAgo = Math.floor(duration.asMinutes());
    return `${minutesAgo} ${minutesAgo === 1 ? 'minute' : 'minutes'} ago`;
  } else if (duration.asDays() < 1) {
    const hoursAgo = Math.floor(duration.asHours());
    return `${hoursAgo} ${hoursAgo === 1 ? 'hour' : 'hours'} ago`;
  } else {
    return moment(createdAt).fromNow();
  }
};

export const RealTimeFormattedTime = ({createdAt}) => {
  const [formattedTime, setFormattedTime] = useState(formatTimeAgo(createdAt));

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFormattedTime(formatTimeAgo(createdAt));
    }, 60000);

    return () => clearInterval(intervalId);
  }, [createdAt]);

  return (
    <Text style={{...FONTS.body5a, color: COLORS.black}}>{formattedTime}</Text>
  );
};

export const sliderData = [
  {
    img: 'https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    img: 'https://images.pexels.com/photos/298864/pexels-photo-298864.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
  },
  {
    img: 'https://images.pexels.com/photos/15698292/pexels-photo-15698292/free-photo-of-close-up-of-classic-elegant-man-shoes-on-white-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
];

export const productDetails = {
  title: 'Clean handbag for your simple walk.',
  price: '200,000',
  createdAt: '2hrs ago',
  seller: {
    avatar: icons.avatar,
    username: 'username',
    verified: true,
    location: 'Federal University of Technology Minna',
  },
  description:
    "The BasicWidget 2000 is a product that's, well, basic. If you're looking for exictement, innovation, or any form of satisfaction, you might want to look elsewhere. But if you're into square, gray things with buttons that may or may not function, then the BasiciWidget 2000 could be the underwhelming choice you've been waiting for. Or not",
  productImage: [
    {
      img: 'https://res.cloudinary.com/dr0nfchqe/image/upload/v1702585949/image1_gwseon.png',
    },
    {
      img: 'https://images.pexels.com/photos/298864/pexels-photo-298864.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    },
  ],
};

export const productData = [
  {
    id: 1,
    title: 'Clean handbag for your simple walk.',
    price: '200,000',
    createdAt: '1703857212804',
    seller: {
      avatar: icons.avatar,
      username: 'username',
      verified: true,
      location: 'Federal University of Technology Minna',
    },
    category: 'Fashion',
    description:
      "The BasicWidget 2000 is a product that's, well, basic. If you're looking for exictement, innovation, or any form of satisfaction, you might want to look elsewhere. But if you're into square, gray things with buttons that may or may not function, then the BasiciWidget 2000 could be the underwhelming choice you've been waiting for. Or not",
    productImage: [
      {
        img: 'https://res.cloudinary.com/dr0nfchqe/image/upload/v1702585960/image2_x3fqmf.png',
      },
      {
        img: 'https://images.pexels.com/photos/298864/pexels-photo-298864.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
      },
      {
        img: 'https://res.cloudinary.com/dr0nfchqe/image/upload/v1702585949/image1_gwseon.png',
      },
    ],
  },
  {
    id: 2,
    title: 'Clean handbag for your simple walk.',
    price: '200,000',
    createdAt: '1703856759447',
    seller: {
      avatar: icons.avatar,
      username: 'username',
      verified: true,
      location: 'Federal University of Technology Minna',
    },
    category: 'Fashion',
    description:
      "The BasicWidget 2000 is a product that's, well, basic. If you're looking for exictement, innovation, or any form of satisfaction, you might want to look elsewhere. But if you're into square, gray things with buttons that may or may not function, then the BasiciWidget 2000 could be the underwhelming choice you've been waiting for. Or not",

    productImage: [
      {
        img: 'https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
      {
        img: 'https://res.cloudinary.com/dr0nfchqe/image/upload/v1702585949/image1_gwseon.png',
      },
      {
        img: 'https://images.pexels.com/photos/15698292/pexels-photo-15698292/free-photo-of-close-up-of-classic-elegant-man-shoes-on-white-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      },
    ],
  },
  {
    id: 3,
    title: 'Clean handbag for your simple walk.',
    price: '200,000',
    createdAt: '1703856759447',
    seller: {
      avatar: icons.avatar,
      username: 'username',
      verified: true,
      location: 'Federal University of Technology Minna',
    },
    category: 'Fashion',
    description:
      "The BasicWidget 2000 is a product that's, well, basic. If you're looking for exictement, innovation, or any form of satisfaction, you might want to look elsewhere. But if you're into square, gray things with buttons that may or may not function, then the BasiciWidget 2000 could be the underwhelming choice you've been waiting for. Or not",
    productImage: [
      {
        img: 'https://res.cloudinary.com/dr0nfchqe/image/upload/v1702585949/image1_gwseon.png',
      },
      {
        img: 'https://res.cloudinary.com/dr0nfchqe/image/upload/v1702585960/image2_x3fqmf.png',
      },
    ],
  },
];

export const searchResultData = [
  {
    id: 1,
    title: 'Bag',
    description:
      'Description about the product, Description of the product here.',
    price: '30,000',
    productImage:
      'https://res.cloudinary.com/dr0nfchqe/image/upload/v1702585960/image2_x3fqmf.png',
  },
  {
    id: 2,
    title: 'Bag',
    description:
      'Description about the product, Description of the product here.',
    price: '30,000',
    productImage:
      'https://res.cloudinary.com/dr0nfchqe/image/upload/v1702585949/image1_gwseon.png',
  },
  {
    id: 3,
    title: 'Bag',
    description:
      'Description about the product, Description of the product here.',
    price: '30,000',
    productImage:
      'https://res.cloudinary.com/dr0nfchqe/image/upload/v1702585960/image2_x3fqmf.png',
  },
  {
    id: 4,
    title: 'Bag',
    description:
      'Description about the product, Description of the product here.',
    price: '30,000',
    productImage:
      'https://images.pexels.com/photos/298864/pexels-photo-298864.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
  },
  {
    id: 5,
    title: 'Bag',
    description:
      'Description about the product, Description of the product here.',
    price: '30,000',
    productImage:
      'https://res.cloudinary.com/dr0nfchqe/image/upload/v1702585960/image2_x3fqmf.png',
  },
  {
    id: 6,
    title: 'Bag',
    description:
      'Description about the product, Description of the product here.',
    price: '30,000',
    productImage:
      'https://res.cloudinary.com/dr0nfchqe/image/upload/v1702585960/image2_x3fqmf.png',
  },
  {
    id: 7,
    title: 'Bag',
    description:
      'Description about the product, Description of the product here.',
    price: '30,000',
    productImage:
      'https://res.cloudinary.com/dr0nfchqe/image/upload/v1702585960/image2_x3fqmf.png',
  },
  {
    id: 8,
    title: 'Bag',
    description:
      'Description about the product, Description of the product here.',
    price: '30,000',
    productImage:
      'https://res.cloudinary.com/dr0nfchqe/image/upload/v1702585960/image2_x3fqmf.png',
  },
];

export const singleData = {
  id: 1,
  title: 'Clean handbag for your simple walk.',
  price: '200,000',
  createdAt: '2hrs ago',
  seller: {
    avatar: icons.avatar,
    username: 'username',
    verified: true,
    location: 'Federal University of Technology Minna',
  },
  category: 'Fashion',
  description:
    "The BasicWidget 2000 is a product that's, well, basic. If you're looking for exictement, innovation, or any form of satisfaction, you might want to look elsewhere. But if you're into square, gray things with buttons that may or may not function, then the BasiciWidget 2000 could be the underwhelming choice you've been waiting for. Or not",
  productImage: [
    {
      img: 'https://res.cloudinary.com/dr0nfchqe/image/upload/v1702585949/image1_gwseon.png',
    },
    {
      img: 'https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
    {
      img: 'https://images.pexels.com/photos/15698292/pexels-photo-15698292/free-photo-of-close-up-of-classic-elegant-man-shoes-on-white-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    },
  ],
};
