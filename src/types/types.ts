  type CollectiveExternalLink = {
    link: string; 
    type: string; 
  };
  
  type Collective = {
    description: string; 
    external_links: CollectiveExternalLink[]; 
    name: string; 
    slug: string;
    tags: string[]; 
    link: string
};
  
export type Tag = {
    count: number;
    has_synonyms: boolean;
    is_moderator_only: boolean;
    is_required: boolean;
    last_activity_date?: number;
    name: string;
    synonyms?: string[];
    user_id?: number;
    collectives?: Collective[];
  };

export type Tags = {
    items: Tag[]
    has_more: boolean,
    quota_max: number,
    quota_remaining: number
}

export type DefaultParams = {
    page: string,
    pagesize: string,
    order: string,
    sort: 'popular' | 'activity' | 'name',
    site: 'stackoverflow'
}