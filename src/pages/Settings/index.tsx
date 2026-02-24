import { Save } from 'lucide-react';

import { showMessage } from '../../adapters/showMessage';

import { MainTemplate } from '../../templates/MainTemplate';
import { useTaskContext } from '../../contexts/TaskContext/useTaskContext';
import { TaskActionType } from '../../contexts/TaskContext/taskActions';

import { InputChronos } from '../../components/InputChronos';
import { DefaultButton } from '../../components/DefaultButton';

import styles from './styles.module.css';

export function Settings() {
  const { state, dispatch } = useTaskContext();

  const inputsConfig = [
    {
      inputIdentificator: 'focusTime',
      labelText: 'Focus:',
      placeholder: '25 min',
    },
    {
      inputIdentificator: 'restTime',
      labelText: 'Rest:',
      placeholder: '5 min',
    },
    {
      inputIdentificator: 'longRestTime',
      labelText: 'Long Rest:',
      placeholder: '15 min',
    },
  ];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const focusTime = formData.get('focusTime');
    const restTime = formData.get('restTime');
    const longRestTime = formData.get('longRestTime');

    for (const value of formData.values()) {
      if (value === '') continue;
      if (isNaN(Number(value))) {
        showMessage.warning(`Please enter a valid number.`);
        return;
      } else if (Number(value) > 60 || Number(value) < 1) {
        showMessage.warning(`Please enter a value between 1 and 60 minutes.`);
        return;
      }
    }

    dispatch({
      type: TaskActionType.UPDATE_TASK_DURATIONS,
      payload: {
        focusTime: Number(focusTime) || state.config.focusTime,
        restTime: Number(restTime) || state.config.restTime,
        longRestTime: Number(longRestTime) || state.config.longRestTime,
      },
    });

    showMessage.dismiss();
    showMessage.success('Task durations updated successfully!');
  };

  return (
    <>
      <MainTemplate>
        <div className={styles['settings-header']}>
          <h1>Settings</h1>
          <h3>Adjust your focus, rest and long rest durations</h3>
        </div>

        <form className={styles['form']} onSubmit={handleSubmit}>
          <div className={styles['form-inputs']}>
            {inputsConfig.map(input => (
              <div
                key={input.inputIdentificator}
                className={styles['form-row']}
              >
                <InputChronos
                  id={input.inputIdentificator}
                  type='number'
                  max={60}
                  min={1}
                  name={input.inputIdentificator}
                  labelText={input.labelText}
                  placeholder={input.placeholder}
                />
              </div>
            ))}
          </div>
          <div className={styles['form-row']}>
            <DefaultButton color='green' icon={<Save />} />
          </div>
        </form>
      </MainTemplate>
    </>
  );
}
