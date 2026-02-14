import { MainTemplate } from '../../templates/MainTemplate';
import { GenericHTML } from '../../components/GenericHTML';
import { Link } from 'react-router';

export function NotFound() {
  return (
    <>
      <MainTemplate>
        <GenericHTML>
          <h1>Sorry, we couldn't find that page</h1>
          <p>
            Try to go to{' '}
            <Link to='/' title='Main page'>
              Home
            </Link>{' '}
            or acess your{' '}
            <Link to='/history' title='History page'>
              History
            </Link>
          </p>
        </GenericHTML>
      </MainTemplate>
    </>
  );
}
