export interface ITask {
  sequence: number;
  name: string;
  priority: 'Alta' | 'Media' | 'Baja';
  description: string;
}
