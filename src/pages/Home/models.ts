export interface Task {
  id: number;
  title: string;
  description: string;
  status: string;
  progress_percentage: number;
  priority: number;
  assignee: string;
  created_by: string;
  created_at: string;
  updated_at: string;
}
