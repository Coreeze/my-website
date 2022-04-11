import Head from 'next/head';
import styled from 'styled-components';
import { GetStaticPropsResult, NextPage } from 'next';
import { NotionAPI } from 'notion-client';

import { getPageInfo, Page, POSTS } from '@posts/notion';
import { Title, Link, Container, Grid, Card, Image, Text } from '@components';

interface BlogProps {
  pages: Page[];
}

const BlogImage = styled(Image)`
  border-radius: 5px;
`;

const Blog: NextPage<BlogProps> = ({ pages }) => {
  return (
    <Container maxWidth={1200}>
      <Head>
        <title>Blog - Cristian Lenta</title>
        <meta property="og:title" content="Blog – Cristian Lenta" />
      </Head>
      <Container mb="3rem">
        <Title>Blog</Title>
        <Text textAlign="center">
          I am passionate about exploring life. There is no clear definition of
          life, we are all born here without being asked, and we all die without
          being able to control it. Life existed before us, and will exist after
          us. Only realising this, is mindblowing. The cars, people and nature
          that you see now? It all existed before you, will continue to be there
          even after you die, but would have existed without you? Who can say...
        </Text>
        <Text textAlign="center">
          So this bears the question... What actually is life? Well, I am here
          to find out my answer. What about you?
        </Text>
      </Container>

      <Title fontSize="40px" as="h2">
        (posts incoming)
      </Title>

      {/* <Grid gridTemplateColumns={['1fr', '1fr 1fr']} gridGap={['3rem', '2rem']}>
        {pages.map(({ title, uri, date, cover }, i) => (
          <Link key={i} href={uri}>
            <Card padding={[0]} margin={[0]}>
              <Grid
                gridTemplateColumns={'1fr'}
                justifyItems={['center', 'flex-start']}
                gridGap="1rem"
              >
                {cover && (
                  <BlogImage
                    src={cover}
                    width="100%"
                    height="auto"
                    alt={title}
                  />
                )}
                <Container
                  gridGap=".5rem"
                  alignItems={['center', 'flex-start']}
                >
                  <Title
                    as="h2"
                    fontSize="1.5rem"
                    textAlign={['center', 'left']}
                    margin={0}
                  >
                    {title}
                  </Title>
                  <Text margin={0} fontWeight="initial" fontSize=".9rem">
                    {date}
                  </Text>
                </Container>
              </Grid>
            </Card>
          </Link>
        ))}
      </Grid> */}
    </Container>
  );
};

const notion = new NotionAPI();

export const getStaticProps = async (): Promise<
  GetStaticPropsResult<BlogProps>
> => {
  const pages: Page[] = [];
  await Promise.all(
    Object.keys(POSTS).map(async (key) => {
      const { uri, date } = POSTS[key as keyof typeof POSTS];
      const page = await notion.getPage(uri);
      if (page) {
        const info = getPageInfo(page);
        if (info.title !== 'Blog') {
          pages.push({
            ...info,
            date,
            uri: `/blog/${key}`,
          });
        }
      }
    }),
  );

  return {
    props: {
      pages: pages.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
      ),
    },
  };
};

export default Blog;
