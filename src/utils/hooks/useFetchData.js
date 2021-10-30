/**  Custom Hook that uses SWR */
import useSWR from 'swr';

export default function useFetchData(url, shouldCall) {
  const fetcher = (...args) => fetch(...args).then(res => res.json())
  console.log('swr');
  
  const { data, error } = useSWR(shouldCall ? url : null, fetcher, {
    revalidateOnFocus: false
    // refreshInterval: 1000
  });

  return {
    data: data,
    isError: error,
    isLoading: !error && !data
  }
}