

export interface ITodo {
  title: string;
  complete: boolean;
  id: number;
}
export interface ITodoProps{
    todo: ITodo;
    onDelete: (id: number) => void
}