export interface IUserInfo {
  avatarUrl: string;
  name: string;
  login: string;
  repositories: {
    totalCount: number;
    nodes: IRepositoryNode[];
  };
}

export interface IRepositoryNode {
  updatedAt: string;
  name: string;
  nameWithOwner: string;
  url: string;
  stars: {
    totalCount: number;
  };
  primaryLanguage: {
    name: string;
    color: string;
  };
}

export interface IPageRepo {
  name: string;
  url: string;
  description: string;
  languages: {
    totalSize: number;
    edges: [
      {
        node: {
          id: string;
          name: string;
          color: string;
        };
        size: number;
      }
    ];
  };
}
