const menudata = [
  {
    id: 0,
    name: 'MEN',
    route: "/",
    submenu: {
      names: ["Topwear", "Bottowear", "Sports & Activewear"],
      data: [
        [{Name:"Printed T-Shirts",route:""}, {Name:"Printed T-Shirts",route:""}, {Name:"Oversized T-Shirts",route:""}],
        [{Name:"Joggers",route:""}, {Name:"Pajamas",route:""}, {Name:"Shorts",route:""}],
        [{Name:"Active T-Shirts",route:""}, {Name:"Sports Shorts",route:""}, {Name:"Sports Jogger",route:""}],
      ]
    }
  },
  {
    id: 1,
    name: 'WOMEN',
    route: "/women",
    submenu: {
      names: ["Topwear", "Bottowear", "Sports & Activewear"],
      data: [
        [{Name:"Crop Top",route:""}, {Name:"Printed T-Shirts",route:""}, {Name:"Oversized T-Shirts",route:""}],
        [{Name:"Joggers",route:""}, {Name:"Pajamas",route:""}, {Name:"Shorts",route:""}],
        [{Name:"Active T-Shirts",route:""}, {Name:"Sports Shorts",route:""}, {Name:"Sports Jogger",route:""}],
      ]
    }
  },
  {
    id: 2,
    name: 'MOBILE COVERS',
    route: "/mobilecover",
    submenu: {
      names: [],
      data: []
    }
  }
];

export default menudata;
