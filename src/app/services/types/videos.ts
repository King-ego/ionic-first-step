export class Get {
  'data': DataRequest[];
}

export class DataRequest {
  'id': string;
  'title': string;
  'url': string;
  'block': boolean;
  'create_at': string;
  'update_at': string;
  'room': {
    id: string;
    name: string;
    description: string;
    create_at: string;
    update_at: string;
  };
}
