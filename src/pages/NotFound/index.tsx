import { MainTemplate } from '../../templates/MainTemplate';
import { GenericHTML } from '../../components/GenericHTML';

export function NotFound() {
  return (
    <>
      <MainTemplate>
        <GenericHTML>
          <h1>Sorry, we couldn't find that page</h1>
          <p>
            Try go to <a href='#'>Home</a> or acess your <a href='#'>History</a>
          </p>
        </GenericHTML>
      </MainTemplate>
    </>
  );
}
