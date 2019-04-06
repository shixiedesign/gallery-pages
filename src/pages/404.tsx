import React from 'react';
import { Helmet } from 'react-helmet';
import { Heading } from 'rebass';
import Container from '../components/Container';
import Layout from '../components/Layout';
import Paragraph from '../components/Paragraph';

const NotFoundPage = () => (
  <Layout>
    <Container>
      <Helmet>
        <title>404</title>
      </Helmet>

      <Heading mt={3}>404</Heading>
      <Paragraph>Oops. Page not found.</Paragraph>
    </Container>
  </Layout>
);

export default NotFoundPage;
