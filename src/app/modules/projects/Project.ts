export interface Project {
    id?: string;
    name: string;
    techstack: string;
    description: string;
    startdate: Date;
    duration: number; // this is no. of days
    budget: number;
    // staffCount: number; // this is calculated field, based on the number of 'members' in the project team
    status: string; // should be one of these: 'new', 'budgeted', 'in-progress', 'completed'
  }