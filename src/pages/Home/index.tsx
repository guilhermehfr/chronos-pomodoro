import { MainTemplate } from '../../templates/MainTemplate';
import { TaskForm } from '../../components/TaskForm';

export function Home() {
  return (
    <>
      <MainTemplate>
        <TaskForm />
      </MainTemplate>
    </>
  );
}
