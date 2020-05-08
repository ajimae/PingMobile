import { Dimensions } from 'react-native';
import { isX } from './src/utils/is-iphone-x';

// export const images = [
//   {
//     image:
//       'https://cdn.th3rdwave.coffee/articles/rkvHXu_Il/rkvHXu_Il-1100-700.jpg',
//     title: 'Le Brûloir',
//   },
//   {
//     image:
//       'https://cdn.th3rdwave.coffee/articles/rkTnGunIx/rkTnGunIx-1100-700.jpg',
//     title: 'Le Petit Brûloir',
//   },
//   {
//     image:
//       'https://cdn.th3rdwave.coffee/articles/HknxZ9awg/HknxZ9awg-1100-700.jpg',
//     title: 'Oui Mais Non',
//   },
//   {
//     image:
//       'https://cdn.th3rdwave.coffee/merchants/rJWPQ2mKx/rJWPQ2mKx-1100-700.jpg',
//     title: 'PERKO',
//   },
//   {
//     image:
//       'https://cdn.th3rdwave.coffee/merchants/rJWPQ2mKx/rJWPQ2mKx-1100-700.jpg',
//     title: 'Perko',
//   },
//   {
//     image:
//       'https://cdn.th3rdwave.coffee/articles/B1XmNBmLe/B1XmNBmLe-1100-700.jpg',
//     title: 'Café Saint-Henri | Marché Jean-Talon',
//   },
//   {
//     image:
//       'https://cdn.th3rdwave.coffee/articles/rkvHXu_Il/rkvHXu_Il-1100-700.jpg',
//     title: 'Le Brûloir',
//   },
//   {
//     image:
//       'https://cdn.th3rdwave.coffee/articles/rkTnGunIx/rkTnGunIx-1100-700.jpg',
//     title: 'Le Petit Brûloir',
//   },
//   {
//     image:
//       'https://cdn.th3rdwave.coffee/articles/HknxZ9awg/HknxZ9awg-1100-700.jpg',
//     title: 'Oui Mais Non',
//   },
//   {
//     image:
//       'https://cdn.th3rdwave.coffee/merchants/rJWPQ2mKx/rJWPQ2mKx-1100-700.jpg',
//     title: 'PERKO',
//   },
//   {
//     image:
//       'https://cdn.th3rdwave.coffee/merchants/rJWPQ2mKx/rJWPQ2mKx-1100-700.jpg',
//     title: 'Perko',
//   },
//   {
//     image:
//       'https://i.pinimg.com/originals/f9/94/a9/f994a9b723ce7fb75f2764ae4a8dff02.jpg',
//     title: 'Google.com',
//   },
//   {
//     image:
//       'https://cdn.th3rdwave.coffee/articles/B1XmNBmLe/B1XmNBmLe-1100-700.jpg',
//     title: 'Café Saint-Henri | Marché Jean-Talon',
//   },
// ];

// export const HomeScreen = (() => {
//   // const image = images[Math.floor(Math.random() * images.length - 1)];
//   // const { width, height } = Dimensions.get('screen');
//   // const viewHeight = height - (isX() ? 115 : 73);
//   const html = `
//   <div style="display:flex;justify-content:center;align-items:center;width:100%;height:100%;background-image: url('./src/assets/default.jpg');">This is not showing</div>
// `;

//   return html;
// })();

// {
  /* <div
      style="
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      position: absolute;
      top: ${viewHeight};
      margin-left: 20;
      padding-left: 10;
      padding-right: 10;
      height: 22;
      border-radius: 5;
      background-color: rgba(70, 70, 70, 0.80)";
    ></div> */
// }

// export const html = (function() {
//   const {title, image} = images[Math.floor(Math.random() * images.length)];
//   return `<div style="background:#f0f0f0;background-repeat:no-repeat;background-size:cover;background-position:center;background-image:url(${image});margin:0auto;height:100%;width:100%;font-size:12px;font-family:verdana;border-radius:5px;color:#444">
//   <div
//     id="artist"
//     style="
//       display: flex;
//       flex-direction: row;
//       justify-content: flex-start;
//       align-items: center;
//       position: absolute;
//       font-family: verdana;
//       font-size: 24px;
//       color: #fff;
//       font-weight: 400;
//       top: ${isX() ? '1580px' : '1350px'};
//       margin-left: ${20 * 2.719}px;
//       padding-left: ${10 * 2.719}px;
//       padding-right: ${10 * 2.719}px;
//       height: ${22 * 2.719}px;
//       border-radius: ${5 * 2.719}px;
//       background-color: rgba(70, 70, 70, 0.70);
//   ">
//       Photo By ${title}
//     </div>
//   </div>`;
// })();

//background-image:url(${'https://i.pinimg.com/originals/f9/94/a9/f994a9b723ce7fb75f2764ae4a8dff02.jpg'});


export const images = [
  {
    'name': 'ntp-fall-2019-1',
    'source': 'anders-jilden.png',
    'author': 'Anders Jildén',
    'link': 'https://unsplash.com/@andersjilden?utm_source=unsplash&utm_medium=referral&utm_content=credit',
    'originalUrl': 'https://unsplash.com/photos/uwbajDCODj4',
    'license': 'https://unsplash.com/license'
  },
  {
    'name': 'ntp-fall-2019-2',
    'source': 'andreas-gucklhorn.png',
    'author': 'Andreas Gücklhorn',
    'link': 'https://unsplash.com/@draufsicht?utm_source=unsplash&utm_medium=referral&utm_content=credit',
    'originalUrl': 'https://unsplash.com/photos/mawU2PoJWfU',
    'license': 'https://unsplash.com/license'
  },
  {
    'name': 'ntp-fall-2019-3',
    'source': 'andy-mai.png',
    'author': 'Andy Mai',
    'link': 'https://unsplash.com/@veroz?utm_source=unsplash&utm_medium=referral&utm_content=credit',
    'originalUrl': 'https://unsplash.com/photos/4knR_YzeUVc',
    'license': 'https://unsplash.com/license'
  },
  {
    'name': 'ntp-fall-2019-5',
    'source': 'anton-repponen.png',
    'author': 'Anton Repponen',
    'link': 'https://unsplash.com/@repponen?utm_source=unsplash&utm_medium=referral&utm_content=credit',
    'originalUrl': 'https://unsplash.com/photos/sfgH9dXcMRw',
    'license': 'https://unsplash.com/license'
  },
  {
    'name': 'ntp-fall-2019-6',
    'source': 'ben-karpinski.png',
    'author': 'Ben Karpinski',
    'link': 'http://bklandscapes.com',
    'originalUrl': 'Contributor sent the hi-res version through email',
    'license': 'used with permission'
  },
  {
    'name': 'ntp-fall-2019-8',
    'source': 'joe-gardner.png',
    'author': 'Joe Gardner',
    'link': 'https://unsplash.com/@josephgardnerphotography?utm_source=unsplash&utm_medium=referral&utm_content=credit',
    'originalUrl': 'https://unsplash.com/photos/4xv3lqnanYc',
    'license': 'used with permission'
  },
  {
    'name': 'ntp-fall-2019-10',
    'source': 'matt-palmer.png',
    'author': 'Matt Palmer',
    'link': 'https://unsplash.com/@mattpalmer?utm_source=unsplash&utm_medium=referral&utm_content=credit',
    'originalUrl': 'https://unsplash.com/photos/veMnvjmfoxw',
    'license': 'used with permission'
  },
  {
    'name': 'ntp-fall-2019-12',
    'source': 'svalbard-jerol-soibam.png',
    'author': 'Jerol Soibam',
    'link': 'https://www.instagram.com/jerol_soibam',
    'originalUrl': 'Contributor sent the hi-res version through email',
    'license': 'used with permission'
  },
  {
    'name': 'ntp-fall-2019-13',
    'source': 'will-christiansen-glacier-peak.png',
    'author': 'Will Christiansen',
    'link': 'https://www.theskyfolk.com',
    'originalUrl': 'Contributor sent the hi-res version through email',
    'license': 'used with permission'
  },
  {
    'name': 'ntp-fall-2019-14',
    'source': 'will-christiansen-ice.png',
    'author': 'Will Christiansen',
    'link': 'https://www.theskyfolk.com',
    'originalUrl': 'Contributor sent the hi-res version through email',
    'license': 'used with permission'
  }
];
