interface TaskCard {
	taskTitle: string
	taskDescription: string
	taskStatus: string
	taskPriority: string
	taskDueDate: string
	taskAssignees: string
	taskId: string
}

export interface TaskCardProps
	extends Omit<TaskCard, 'taskStatus' | 'taskId'> {}
