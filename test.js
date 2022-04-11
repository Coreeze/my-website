import { NotionAPI } from 'notion-client';
const main = async () => {
  const notion = new NotionAPI();

  const recordMap = await notion.getPage('fc6ce9d7a35240c0937f0075ad1db17e');
  console.log(recordMap);
};

const runMain = async () => {
  try {
    await main();
    // exit Node process without error
    process.exit(0);
  } catch (error) {
    console.log(error);
    // exit Node process while indicating 'Uncaught Fatal Exception' error
    process.exit(1);
  }
};

runMain();
