import { useParams } from 'react-router-dom';

type Params = {
  id: string;
};

export function Post() {
  const { id } = useParams<Params>();
  return <div>Post: {id}</div>;
}
