import { MainTemplate } from '../../templates/MainTemplate';
import { TaskForm } from '../../components/TaskForm';

import type { TaskStateModel } from '../../models/TaskStateModel';

interface HomeProps {
  state: TaskStateModel;
  setState: React.Dispatch<React.SetStateAction<TaskStateModel>>;
}

export function Home(props: HomeProps) {
  return (
    <>
      <MainTemplate>
        <TaskForm />
      </MainTemplate>
    </>
  );
}
