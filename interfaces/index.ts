export interface ITool {
  id: number;
  label: string;
  path: string;
}

export interface ILink extends ITool {
  href: string;
}

export interface IProject {
  id?: number;
  imgPath: string;
  title: string;
  description: string;
  github: string;
  live: string;
  dataType?: string;
}
