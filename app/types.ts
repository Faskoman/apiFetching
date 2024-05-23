type Skill = {
  name: string;
  index: string;
  url: string;
};

export type DndData = {
  index: string;
  name: string;
  full_name: string;
  desc: string[];
  skills: Skill[];
  url: string;
};
