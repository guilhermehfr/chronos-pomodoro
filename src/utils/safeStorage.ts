import type { TaskStateModel } from '../models/TaskStateModel';

/**
 * Safely retrieves and parses JSON from localStorage with error handling
 */
export function safeGetItem<T>(key: string, fallback: T): T {
  try {
    const stored = localStorage.getItem(key);
    if (!stored) return fallback;
    return JSON.parse(stored) as T;
  } catch (error) {
    console.warn(`Failed to parse localStorage key "${key}":`, error);
    return fallback;
  }
}

/**
 * Safely stores JSON in localStorage with error handling
 */
export function safeSetItem<T>(key: string, value: T): boolean {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch (error) {
    console.warn(`Failed to save to localStorage key "${key}":`, error);
    return false;
  }
}

/**
 * Validates that the stored state matches the expected TaskStateModel schema
 */
function isValidTaskState(state: unknown): state is TaskStateModel {
  if (!state || typeof state !== 'object') return false;

  const s = state as Record<string, unknown>;

  return (
    Array.isArray(s.tasks) &&
    typeof s.secondsRemaining === 'number' &&
    typeof s.formattedSecondsRemaining === 'string' &&
    typeof s.currentCycle === 'number' &&
    s.config !== null &&
    typeof s.config === 'object' &&
    typeof (s.config as Record<string, unknown>).focusTime === 'number' &&
    typeof (s.config as Record<string, unknown>).restTime === 'number' &&
    typeof (s.config as Record<string, unknown>).longRestTime === 'number'
  );
}

/**
 * Safely retrieves TaskStateModel from localStorage with validation
 */
export function getTaskState(fallback: TaskStateModel): TaskStateModel {
  try {
    const stored = localStorage.getItem('state');
    if (!stored) return fallback;

    const parsed = JSON.parse(stored);

    if (!isValidTaskState(parsed)) {
      console.warn('Invalid task state in localStorage, using fallback');
      return fallback;
    }

    return parsed;
  } catch (error) {
    console.warn('Failed to parse task state from localStorage:', error);
    return fallback;
  }
}

/**
 * Safely stores TaskStateModel in localStorage
 */
export function setTaskState(state: TaskStateModel): boolean {
  return safeSetItem('state', state);
}

type Theme = 'dark' | 'light';

/**
 * Safely retrieves theme preference with validation
 */
export function getTheme(fallback: Theme = 'dark'): Theme {
  try {
    const stored = localStorage.getItem('data-theme');
    return stored === 'dark' || stored === 'light' ? stored : fallback;
  } catch (error) {
    console.warn('Failed to get theme from localStorage:', error);
    return fallback;
  }
}

/**
 * Safely stores theme preference
 */
export function setTheme(theme: Theme): boolean {
  try {
    localStorage.setItem('data-theme', theme);
    return true;
  } catch (error) {
    console.warn('Failed to save theme to localStorage:', error);
    return false;
  }
}
