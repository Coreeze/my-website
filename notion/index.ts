import { NotionAPI } from 'notion-client';
const notion = new NotionAPI();

// const recordMap = await notion.getPage('067dd719a912471ea9a3ac10710e7fdf')

export const getBookmarks = async () => {
  const recordMap = await notion.getPage('067dd719a912471ea9a3ac10710e7fdf');
  console.log('recordMap', recordMap);
};

// import { Client } from '@notionhq/client';

// const notion = new Client({
//   auth: 'fbf9ebfefcbe320f629dbee48c05dfa7ebbe0f06dd2f647c2e84805ed61511ebf512783020e4f12097e8dc643f7659857fda44e422a27dc4782b6e62039888a4faa556633df9449d7f4b8f19cf01',
// });

// export const getBookmarks = async () =>
//   await notion.databases.query({
//     database_id: '4c949b8043d34a389c1f0a96c739e139',
//     page_size: 10000,
//     sorts: [
//       {
//         property: 'Created',
//         direction: 'descending',
//       },
//     ],
//   });
