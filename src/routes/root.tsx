import {
  type LoaderFunctionArgs,
  NavLink,
  Outlet,
  redirect,
} from 'react-router-dom';

export function loader({ request }: LoaderFunctionArgs) {
  const pathname = new URL(request.url).pathname;

  if (pathname === '/') {
    return redirect('/posts');
  }
  return null;
}

export function Root() {
  return (
    <>
      <header className="bg-white p-4 shadow">
        <nav>
          <NavLink to="/posts" className="border p-2 rounded">
            Posts
          </NavLink>
        </nav>
      </header>
      <main className="p-4">
        <Outlet />
      </main>
    </>
  );
}
