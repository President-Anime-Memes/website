export default [
  {
    name: `Home`,
    route: `/`,
    key: `home`,
    icon: `home`,
  },
  {
    name: `Join`,
    route: [
      {
        name2: `Facebook`,
        route2: `/join/facebook`,
        key2: `facebook`,
      },
      {
        name2: `Discord`,
        route2: `/join/discord`,
        key2: `discord`,
      },
    ],
    key: `join`,
    icon: `plussquare`,
  },
  {
    name: `Polls`,
    route: `/poll`,
    key: `polls`,
    icon: `participant`,
  },
  {
    name: `Sauce Posting`,
    route: `/sauce`,
    key: `sauce`,
    icon: `file`,
  },
];
