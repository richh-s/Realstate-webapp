export interface Listing {
    id: string;
    slug: string;
    title: string;
    description: string;
    price: number;
    bedrooms: number;
    bathrooms: number;
    squareFeet: number;
    address: { street: string; city: string; state: string; zip: string; };
    features: string[];
    images: { url: string; alt: string; }[];
    agent: { name: string; phone: string; email: string; photo: string; };
    listedDate: string;
    propertyType: string;
  }
  
  export const listings: Listing[] = [{
    id: '1',
    slug: 'modern-downtown-loft',
    title: 'Modern Downtown Loft',
    description: 'Stunning loft in the heart of downtown with floor-to-ceiling windows, exposed brick, and premium finishes. This open-concept space features a gourmet kitchen with stainless steel appliances, quartz countertops, and a large island perfect for entertaining. The primary bedroom offers a spa-like ensuite bathroom and custom closet. Building amenities include 24-hour concierge, fitness center, and rooftop terrace with panoramic city views.',
    price: 750000,
    bedrooms: 2,
    bathrooms: 2,
    squareFeet: 1500,
    address: {
      street: '123 Main Street',
      city: 'Seattle',
      state: 'WA',
      zip: '98101'
    },
    features: ['Floor-to-ceiling windows', 'Exposed brick walls', 'Gourmet kitchen', 'Quartz countertops', 'Stainless steel appliances', 'Hardwood floors', 'In-unit laundry', 'Central air', 'Rooftop access'],
    images: [{
      url: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      alt: 'Modern loft living room with floor-to-ceiling windows'
    }, {
      url: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      alt: 'Contemporary kitchen with island and stainless steel appliances'
    }, {
      url: 'https://images.unsplash.com/photo-1560185007-cde436f6a4d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      alt: 'Master bedroom with city views'
    }],
    agent: {
      name: 'Sarah Johnson',
      phone: '(206) 555-1234',
      email: 'sarah@realestateexample.com',
      photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80'
    },
    listedDate: '2023-06-15',
    propertyType: 'Condo'
  }, {
    id: '2',
    slug: 'suburban-family-home',
    title: 'Spacious Suburban Family Home',
    description: 'Beautiful 4-bedroom home in a quiet suburban neighborhood. This recently renovated property features an open floor plan, updated kitchen with granite countertops, and a large backyard with mature trees. The finished basement provides additional living space perfect for a home office or recreation room. Walking distance to top-rated schools, parks, and shopping centers.',
    price: 950000,
    bedrooms: 4,
    bathrooms: 3.5,
    squareFeet: 2800,
    address: {
      street: '456 Oak Avenue',
      city: 'Bellevue',
      state: 'WA',
      zip: '98004'
    },
    features: ['Open floor plan', 'Updated kitchen', 'Granite countertops', 'Finished basement', 'Large backyard', 'Two-car garage', 'Fireplace', 'Deck', 'Energy-efficient windows'],
    images: [{
      url: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      alt: 'Exterior view of suburban family home'
    }, {
      url: 'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      alt: 'Modern kitchen with granite countertops'
    }, {
      url: 'https://images.unsplash.com/photo-1576941089067-2de3c901e126?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1278&q=80',
      alt: 'Spacious backyard with deck'
    }],
    agent: {
      name: 'Michael Chen',
      phone: '(425) 555-6789',
      email: 'michael@realestateexample.com',
      photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
    },
    listedDate: '2023-07-02',
    propertyType: 'House'
  }, {
    id: '3',
    slug: 'waterfront-luxury-estate',
    title: 'Waterfront Luxury Estate',
    description: "Exclusive waterfront property offering panoramic lake views and unparalleled luxury. This custom-built estate features soaring ceilings, walls of glass, and exquisite craftsmanship throughout. The chef's kitchen is equipped with top-of-the-line appliances and opens to a grand living area. The primary suite includes a sitting area, fireplace, and spa-inspired bathroom. Outside, find a heated infinity pool, private dock, and meticulously landscaped grounds.",
    price: 4500000,
    bedrooms: 5,
    bathrooms: 5.5,
    squareFeet: 6200,
    address: {
      street: '789 Lakeside Drive',
      city: 'Medina',
      state: 'WA',
      zip: '98039'
    },
    features: ['Waterfront property', 'Panoramic lake views', "Chef's kitchen", 'Heated infinity pool', 'Private dock', 'Wine cellar', 'Home theater', 'Smart home technology', '4-car garage'],
    images: [{
      url: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      alt: 'Luxury waterfront estate with pool'
    }, {
      url: 'https://images.unsplash.com/photo-1600607687644-a59a4320a7c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      alt: 'Gourmet kitchen with high-end appliances'
    }, {
      url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      alt: 'Backyard with infinity pool overlooking the lake'
    }],
    agent: {
      name: 'Elizabeth Taylor',
      phone: '(206) 555-9876',
      email: 'elizabeth@realestateexample.com',
      photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80'
    },
    listedDate: '2023-05-20',
    propertyType: 'Estate'
  }, {
    id: '4',
    slug: 'urban-studio-apartment',
    title: 'Urban Studio Apartment',
    description: 'Stylish studio apartment in a vibrant urban neighborhood. This efficiently designed space features modern finishes, a full kitchen with breakfast bar, and large windows providing abundant natural light. Building amenities include a fitness center, communal rooftop deck, and secure package receiving. Steps from public transportation, restaurants, and nightlife.',
    price: 350000,
    bedrooms: 0,
    bathrooms: 1,
    squareFeet: 550,
    address: {
      street: '101 Pike Street #405',
      city: 'Seattle',
      state: 'WA',
      zip: '98101'
    },
    features: ['Modern finishes', 'Full kitchen', 'Breakfast bar', 'Large windows', 'Building fitness center', 'Rooftop deck', 'Secure entry', 'Pet-friendly', 'Bike storage'],
    images: [{
      url: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      alt: 'Modern studio apartment interior'
    }, {
      url: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80',
      alt: 'Compact kitchen with breakfast bar'
    }, {
      url: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      alt: 'View from apartment window of urban landscape'
    }],
    agent: {
      name: 'James Wilson',
      phone: '(206) 555-5432',
      email: 'james@realestateexample.com',
      photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
    },
    listedDate: '2023-06-28',
    propertyType: 'Condo'
  }, {
    id: '5',
    slug: 'mountain-view-cabin',
    title: 'Mountain View Cabin',
    description: 'Charming cabin nestled in the mountains with breathtaking views. This rustic retreat features vaulted ceilings with exposed beams, a stone fireplace, and a wraparound deck perfect for enjoying the natural surroundings. The property includes 5 acres of private land with hiking trails and a small stream. Just a 30-minute drive to skiing and other mountain activities.',
    price: 625000,
    bedrooms: 3,
    bathrooms: 2,
    squareFeet: 1800,
    address: {
      street: '321 Forest Road',
      city: 'North Bend',
      state: 'WA',
      zip: '98045'
    },
    features: ['Mountain views', '5 acres of land', 'Stone fireplace', 'Vaulted ceilings', 'Wraparound deck', 'Private hiking trails', 'Stream on property', 'Wood-burning stove', 'Loft space'],
    images: [{
      url: 'https://images.unsplash.com/photo-1542718610-a1d656d1884c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      alt: 'Cabin exterior with mountain backdrop'
    }, {
      url: 'https://images.unsplash.com/photo-1464146072230-91cabc968266?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      alt: 'Rustic interior with stone fireplace'
    }, {
      url: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      alt: 'View from deck overlooking mountains'
    }],
    agent: {
      name: 'Robert Martinez',
      phone: '(425) 555-7890',
      email: 'robert@realestateexample.com',
      photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
    },
    listedDate: '2023-07-10',
    propertyType: 'Cabin'
  }, {
    id: '6',
    slug: 'historic-craftsman-bungalow',
    title: 'Historic Craftsman Bungalow',
    description: 'Beautifully restored 1920s Craftsman bungalow with original character and modern updates. This charming home features original hardwood floors, built-in cabinetry, and a classic front porch. Updates include a renovated kitchen with marble countertops, updated bathrooms, and new electrical and plumbing systems. Located in a historic district close to downtown shops and restaurants.',
    price: 875000,
    bedrooms: 3,
    bathrooms: 2,
    squareFeet: 1950,
    address: {
      street: '567 Maple Street',
      city: 'Tacoma',
      state: 'WA',
      zip: '98403'
    },
    features: ['Original hardwood floors', 'Built-in cabinetry', 'Classic front porch', 'Renovated kitchen', 'Marble countertops', 'Updated bathrooms', 'New electrical system', 'New plumbing', 'Fenced backyard'],
    images: [{
      url: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      alt: 'Exterior of craftsman bungalow with front porch'
    }, {
      url: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      alt: 'Living room with original built-ins and hardwood floors'
    }, {
      url: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1174&q=80',
      alt: 'Updated kitchen with marble countertops'
    }],
    agent: {
      name: 'Patricia Lee',
      phone: '(253) 555-3210',
      email: 'patricia@realestateexample.com',
      photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80'
    },
    listedDate: '2023-06-05',
    propertyType: 'House'
  }, {
    id: '7',
    slug: 'high-rise-penthouse',
    title: 'Luxury High-Rise Penthouse',
    description: "Spectacular penthouse apartment offering panoramic city and water views from the 32nd floor. This luxury residence features an open concept living area with floor-to-ceiling windows, a chef's kitchen with waterfall island, and a private terrace. The primary suite includes a custom walk-in closet and a spa-like bathroom with soaking tub. Building amenities include 24/7 concierge, infinity pool, and private wine storage.",
    price: 3200000,
    bedrooms: 3,
    bathrooms: 3.5,
    squareFeet: 2800,
    address: {
      street: '888 2nd Avenue #3201',
      city: 'Seattle',
      state: 'WA',
      zip: '98104'
    },
    features: ['Panoramic views', 'Private terrace', "Chef's kitchen", 'Waterfall island', 'Custom walk-in closet', 'Spa bathroom', '24/7 concierge', 'Infinity pool', 'Private wine storage'],
    images: [{
      url: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      alt: 'Penthouse living room with floor-to-ceiling windows'
    }, {
      url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      alt: 'Luxury kitchen with waterfall island'
    }, {
      url: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      alt: 'Master bathroom with soaking tub and city views'
    }],
    agent: {
      name: 'David Kim',
      phone: '(206) 555-8765',
      email: 'david@realestateexample.com',
      photo: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
    },
    listedDate: '2023-05-30',
    propertyType: 'Condo'
  }, {
    id: '8',
    slug: 'mid-century-modern-gem',
    title: 'Mid-Century Modern Gem',
    description: 'Authentic mid-century modern home designed by a renowned local architect in 1962. This architectural gem features post-and-beam construction, walls of glass, and an open floor plan that seamlessly connects to the outdoors. The property has been thoughtfully updated while preserving original details like terrazzo floors, a sunken living room, and period light fixtures. Set on a half-acre lot with mature landscaping and a courtyard pool.',
    price: 1250000,
    bedrooms: 4,
    bathrooms: 3,
    squareFeet: 2400,
    address: {
      street: '753 Evergreen Terrace',
      city: 'Mercer Island',
      state: 'WA',
      zip: '98040'
    },
    features: ['Post-and-beam construction', 'Walls of glass', 'Terrazzo floors', 'Sunken living room', 'Original light fixtures', 'Courtyard pool', 'Half-acre lot', 'Mature landscaping', 'Carport with storage'],
    images: [{
      url: 'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      alt: 'Mid-century modern home exterior'
    }, {
      url: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
      alt: 'Open living area with post-and-beam ceiling'
    }, {
      url: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      alt: 'Courtyard pool surrounded by glass walls'
    }],
    agent: {
      name: 'Olivia Thompson',
      phone: '(206) 555-1122',
      email: 'olivia@realestateexample.com',
      photo: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
    },
    listedDate: '2023-07-05',
    propertyType: 'House'
  }, {
    id: '9',
    slug: 'lakefront-cottage',
    title: 'Cozy Lakefront Cottage',
    description: 'Charming lakefront cottage with 100 feet of private shoreline. This year-round getaway features knotty pine interiors, a stone fireplace, and a screened porch overlooking the water. The property includes a private dock, fire pit, and detached garage with additional storage for water toys. Just 90 minutes from the city, this turnkey property comes fully furnished and ready to enjoy.',
    price: 895000,
    bedrooms: 2,
    bathrooms: 1,
    squareFeet: 1100,
    address: {
      street: '42 Lakeview Drive',
      city: 'Chelan',
      state: 'WA',
      zip: '98816'
    },
    features: ['100 feet of shoreline', 'Private dock', 'Stone fireplace', 'Knotty pine interiors', 'Screened porch', 'Fire pit', 'Detached garage', 'Fully furnished', 'Year-round access'],
    images: [{
      url: 'https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      alt: 'Cottage exterior with lake view'
    }, {
      url: 'https://images.unsplash.com/photo-1464146072230-91cabc968266?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      alt: 'Cozy interior with stone fireplace'
    }, {
      url: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      alt: 'Private dock extending into the lake'
    }],
    agent: {
      name: 'Thomas Garcia',
      phone: '(509) 555-9900',
      email: 'thomas@realestateexample.com',
      photo: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
    },
    listedDate: '2023-06-20',
    propertyType: 'Cottage'
  }, {
    id: '10',
    slug: 'modern-farmhouse',
    title: 'Modern Farmhouse',
    description: 'Stunning modern farmhouse on 3 acres combining rustic charm with contemporary design. This custom-built home features shiplap accent walls, exposed beams, and wide-plank hardwood floors. The gourmet kitchen includes a large island, farmhouse sink, and commercial-grade appliances. Outside, find a covered patio with outdoor kitchen, vegetable garden, and a detached workshop/studio space.',
    price: 1450000,
    bedrooms: 4,
    bathrooms: 3.5,
    squareFeet: 3200,
    address: {
      street: '1234 Country Lane',
      city: 'Woodinville',
      state: 'WA',
      zip: '98072'
    },
    features: ['3-acre property', 'Shiplap accent walls', 'Exposed beams', 'Wide-plank hardwood floors', 'Gourmet kitchen', 'Farmhouse sink', 'Covered patio', 'Outdoor kitchen', 'Detached workshop/studio'],
    images: [{
      url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      alt: 'Modern farmhouse exterior'
    }, {
      url: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      alt: 'Open concept kitchen and dining area'
    }, {
      url: 'https://images.unsplash.com/photo-1600047509807-f8261a3f7051?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      alt: 'Covered patio with outdoor kitchen'
    }],
    agent: {
      name: 'Jennifer Adams',
      phone: '(425) 555-4567',
      email: 'jennifer@realestateexample.com',
      photo: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'
    },
    listedDate: '2023-07-01',
    propertyType: 'House'
  }];
  