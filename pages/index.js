import Head from 'next/head';
import { useState } from 'react';
import HomeLayout from '../components/layouts/HomeLayout';
import Card from '../components/ui/Card';

const BASE_URL = `https://api.unsplash.com/search/photos/`;

export default function Home() {
  // ------- States -------
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);

  // ------- Functions -------
  /**
   * Fetch images from the Unsplash API and append the results to your `images` array
   */
  const fetchImages = async () => {};

  /**
   * useEffect to trigger the `fetchImages` function whenever `page` updates
   */
  // useEffect here

  // ------- Render --------
  return (
    <>
      <Head>
        <title>Infinitea</title>
        <meta name="description" content="Lotta tea pictures from Unsplash" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Home */}
      <HomeLayout>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </HomeLayout>
    </>
  );
}
