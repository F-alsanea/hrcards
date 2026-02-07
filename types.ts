
export type UserRole = 'ADMIN' | 'MANAGER' | 'STAFF';

export interface User {
  username: string;
  role: UserRole;
  displayName: string;
}

export type ThemeMode = 'LIGHT' | 'DARK' | 'DUSK';

export interface CandidateRating {
  appearance: number;
  communication: number;
  technical: number;
  commitment: number;
}

export interface Candidate {
  id: number;
  fullName: string;
  phone: string;
  age: string;
  nationality: string;
  residencyStatus: string;
  jobAppliedFor: string;
  currentlyEmployed: string;
  fullTimeAvailability: string;
  militaryStatus: string;
  socialStatus: string;
  yearsOfExperience: string;
  workedHajj: string;
  hasHealthCard: string;
  lastSalary: string;
  hasTransportation: string;
  englishLevel: string;
  willingToWorkReqs: string;
  housingInfo: string;
  willingToInterviewInJeddah: string;
  education: string;
  interviewerNotes?: string;
  ratings?: CandidateRating;
}

export enum ViewMode {
  CARD = 'CARD',
  LIST = 'LIST'
}
