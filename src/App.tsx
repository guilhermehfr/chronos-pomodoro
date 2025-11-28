import { Heading } from './components/Heading';

export function App() {
  const currentDate = new Date();
  return (
    <>
      <Heading date={`${currentDate}`} studiedToday='true'>
        I am part of the App.
      </Heading>
      <h2>Secondary text.</h2>
    </>
  );
}
