import React from 'react';
import Head from 'next/head';
import { styled } from '../stitches.config';

const Box = styled('div', {});

const Button = styled('button', {
  backgroundColor: '$rockeatseat',
});

export default function Home() {
  return (
    <Box css={{ paddingY: '$6' }}>
      <Head>
        <title>My personal project</title>
      </Head>
      <Button> Click here </Button>
    </Box>
  );
}
