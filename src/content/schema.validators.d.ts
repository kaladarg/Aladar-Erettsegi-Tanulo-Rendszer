// Types for the generated standalone validators (see tools/schemas.ts).
import type { ErrorObject } from 'ajv';
import type { Exam, Manifest } from './schema.types';

interface Validator<T> {
  (data: unknown): data is T;
  errors?: ErrorObject[] | null;
}

export const validateExam: Validator<Exam>;
export const validateManifest: Validator<Manifest>;
