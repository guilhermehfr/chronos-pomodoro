import { MainTemplate } from '../../templates/MainTemplate';
import { GenericHTML } from '../../components/GenericHTML';

export function PomodoroTechnique() {
  const highlight = { color: 'var(--primary)' };
  return (
    <>
      <MainTemplate>
        <GenericHTML>
          <h1>The Pomodoro Technique &#127813;</h1>
          <p>
            The <span style={highlight}> Pomodoro Technique</span> is a time
            management method using a timer to break work into focused 25-minute
            intervals, separated by short 5-minute breaks, with longer breaks
            after four pomodoros.
          </p>
          <p>
            It is designed to boost focus, fight procrastination, and prevent
            burnout by managing attention in manageable chunks. Created by
            <span style={highlight}> Francesco Cirillo</span>, who used a
            tomato-shaped timer, it helps people work with time by creating
            urgency and ensuring regular rest.
          </p>
        </GenericHTML>
      </MainTemplate>
    </>
  );
}
