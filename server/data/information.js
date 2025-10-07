const locationData = [
  {
    id: 1,
    name: 'Cal Coast Credit Amphitheater',
    address: '5500 Campanile Dr',
    city: 'San Diego',
    state: 'CA',
    zip: '92182',
    image: 'https://www.sandiegouniontribune.com/wp-content/uploads/migration/2013/11/18/00000169-0cf1-dbbe-a16f-4ef196e40000.jpg?w=1024&h=670'
  },
  {
    id: 2,
    name: 'The Observatory North Park',
    address: '2891 University Ave',
    city: 'San Diego',
    state: 'CA',
    zip: '92104',
    image: 'https://lh3.googleusercontent.com/p/AF1QipNObim9unnoFq_QFl18rafjLmg6qGZocSBXlnrl=s1360-w1360-h1020-rw'
  },
  {
    id: 3,      
    name: 'The Rady Shell at Jacobs Park',
    address: '222 Marina Park Way',
    city: 'San Diego',
    state: 'CA',
    zip: '92101',
    image: 'https://www.archpaper.com/wp-content/uploads/2021/08/03.-The-Rady-Shell-at-Jacobs-Park-credit-San-Diego-Symphony-scaled.jpg'
  },
  {
    id: 4,
    name: 'Gallagher Square at Petco Park',
    address: '899 J St',
    city: 'San Diego',
    state: 'CA',
    zip: '92101',
    image: 'https://www.clarkconstruction.com/sites/default/files/styles/gallery_image/public/2024-11/Petco%20Park%20Gallagher%20Square%206.jpg'
  }
];

const eventData = [
  {
    id: 1,
    title: 'Reneé Rapp',
    date: '2025-10-18 20:00:00',
    time: '8:00 PM',
    image: 'https://i8.amplience.net/i/naras/Renee-Rapp-Press-Photo-Credit-Zora-Sicher',
    location_id: 1
  },
  {
    id: 2,
    title: 'The Witcher in Concert',
    date: '2025-10-24 20:00:00',
    time: '8:00 PM',
    image: 'https://thewitcher.cdn.cdpr.app/concert/gallery/d40207303fd66f8a07a887b0fccea61a_q90_1920x1280.jpeg',
    location_id: 1
  },
  {
    id: 3,
    title: 'Black Rebel Motorcycle Club',
    date: '2025-10-10 19:00:00',
    time: '7:00 PM',
    image: 'https://s1.ticketm.net/dam/a/71d/bc1c05c1-cc4f-42e3-bf36-33402ca6e71d_504861_TABLET_LANDSCAPE_LARGE_16_9.jpg',
    location_id: 2
  },
  {
    id: 4,
    title: 'Christone "Kingfish" Ingram',
    date: '2025-10-24 19:00:00',
    time: '7:00 PM',
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/85/Kingfish_by_Rory_Doyle.jpg',
    location_id: 2
  },
  {
    id: 5,  
    title: 'Haim',
    date: '2025-10-10 18:30:00',
    time: '6:30 PM',
    image: 'https://www.rollingstone.com/wp-content/uploads/2018/06/haim-sisters-in-arms-2017-rolling-stone-feature-aac09581-eda4-48c2-a9e9-e6ae0ea7fe02.jpg',
    location_id: 3
  },
  {
    id: 6,
    title: 'John Mulaney',
    date: '2025-10-20 19:00:00',
    time: '7:00 PM',
    image: 'https://people.com/thmb/Xkam2sF3lE_o-P9vQ3vTtOHEY5w=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(926x438:928x440)/John-Mulaney-GQ-Men-Of-The-Year-111424-378a0a334c374923904f70c3ad64ca0b.jpg',
    location_id: 3
  },
  {
    id: 7,
    title: 'Rilo Kiley',
    date: '2025-10-17 20:00:00',
    time: '8:00 PM',
    image: 'https://static01.nyt.com/images/2025/05/01/multimedia/30cul-rilo-kiley-05-zwml/30cul-rilo-kiley-05-zwml-videoSixteenByNine3000.jpg',
    location_id: 4
  },
  {
    id: 8,
    title: 'A Day To Remember & Yellowcard: A Maximum Fun Tour',
    date: '2025-10-25 18:15:00',
    time: '6:15 PM',
    image: 'https://i0.wp.com/setlistguy.com/wp-content/uploads/2025/06/A-DAY-TO-REMEMBER-YELLOWCARD-Maximum-Fun-Tour-2025-Setlist-Playlist-1.jpg?w=890&ssl=1',
    location_id: 4
  }
];

export { locationData, eventData };
