import { useQuery } from 'react-query';
import { API_URI } from '../config';

const fetchData = async () => {
  try {
    const response = await fetch(API_URI);
    const data = await response.text();

    return data?.split('\n')?.slice(1);
  } catch (error) {
    console.error(error);
  }
};

const useData = () => useQuery('posts', fetchData);

export default useData;
